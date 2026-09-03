import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import { storagePut } from "./storage";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  admin: router({
    uploadImage: adminProcedure.input(z.object({ fileName: z.string().min(1).max(180), contentType: z.string().regex(/^image\/(jpeg|png|webp|avif|gif)$/), base64: z.string().min(20) })).mutation(async ({ input, ctx }) => {
      const data = Buffer.from(input.base64.replace(/^data:[^;]+;base64,/, ""), "base64");
      if (data.byteLength > 8 * 1024 * 1024) throw new Error("Image must be 8MB or smaller");
      return storagePut(`aviro/admin/${ctx.user.id}/${input.fileName}`, data, input.contentType);
    }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
