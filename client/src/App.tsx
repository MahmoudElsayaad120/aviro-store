import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "./_core/hooks/useAuth";
import { startLogin } from "./const";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { getProductBySlug, Product, products } from "./lib/mockServices";
import { useEffect, useMemo, useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import { toast } from "sonner";
import Home from "./pages/Home";
import { AccountPage, AboutPage, AdminPage, CartPage, CheckoutPage, ContactPage, LoginPage, ProductPage, ShopPage, WishlistPage } from "./pages/StorePages";
import { AdminProductsPage } from "./pages/AdminProductsPage";
import { AdminOrdersPage } from "./pages/AdminOrdersPage";

type CartItem = { product: Product; size: string; color: string; quantity: number };

export function AppShell() {
  const [location, setLocation] = useLocation();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const toggleWishlist = (product: Product) => {
    setWishlist((current) => {
      const exists = current.includes(product.id);
      toast(exists ? "Removed from wishlist" : "Saved to wishlist", { description: product.name });
      return exists ? current.filter((id) => id !== product.id) : [...current, product.id];
    });
  };
  const addToCart = (product: Product, size = product.sizes[1] || product.sizes[0], color = product.colors[0], quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id && item.size === size && item.color === color);
      if (existing) return current.map((item) => item === existing ? { ...item, quantity: item.quantity + quantity } : item);
      return [...current, { product, size, color, quantity }];
    });
    toast.success("Added to bag", { description: `${product.name} · ${size} · ${color}` });
  };
  const updateQuantity = (index: number, quantity: number) => {
    if (quantity < 1) return setCart((current) => current.filter((_, i) => i !== index));
    setCart((current) => current.map((item, i) => i === index ? { ...item, quantity } : item));
  };
  const removeFromCart = (index: number) => setCart((current) => current.filter((_, i) => i !== index));

  const shared = { cart, wishlist, cartCount, addToCart, toggleWishlist, updateQuantity, removeFromCart, setLocation, searchOpen, setSearchOpen, search, setSearch };

  return (
    <>
      <Switch>
        <Route path="/admin/products"><AdminGate><AdminProductsPage setLocation={setLocation} /></AdminGate></Route>
        <Route path="/admin/orders"><AdminGate><AdminOrdersPage setLocation={setLocation} /></AdminGate></Route>
        <Route path="/admin"><AdminGate><AdminPage setLocation={setLocation} /></AdminGate></Route>
        <Route path="/product/:slug">{({ slug }) => <ProductPage {...shared} product={getProductBySlug(slug) || products[0]} />}</Route>
        <Route path="/shop"><ShopPage {...shared} /></Route>
        <Route path="/new-arrivals"><ShopPage {...shared} newArrivals /></Route>
        <Route path="/collections"><ShopPage {...shared} /></Route>
        <Route path="/cart"><CartPage {...shared} /></Route>
        <Route path="/wishlist"><WishlistPage {...shared} /></Route>
        <Route path="/checkout"><CheckoutPage {...shared} setCart={setCart} /></Route>
        <Route path="/account"><AccountPage {...shared} /></Route>
        <Route path="/login"><LoginPage {...shared} /></Route>
        <Route path="/about"><AboutPage {...shared} /></Route>
        <Route path="/contact"><ContactPage {...shared} /></Route>
        <Route path="/"><Home {...shared} /></Route>
      </Switch>
      <Toaster position="bottom-right" theme="dark" />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <AppShell />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}


function AdminGate({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="admin-access-state"><span className="loading-bar" /><p>CHECKING ADMIN ACCESS</p></div>;
  if (!user) return <div className="admin-access-state"><p className="eyebrow">AVIRO / STUDIO</p><h1>ADMIN ACCESS</h1><p>Sign in with your approved AVIRO account to continue.</p><button className="button button-light" onClick={() => startLogin()}>SIGN IN <span aria-hidden="true">→</span></button></div>;
  if (user.role !== "admin") return <div className="admin-access-state"><p className="eyebrow">ACCESS RESTRICTED</p><h1>ADMIN ONLY.</h1><p>The account {user.email || "currently signed in"} does not have admin permissions.</p></div>;
  return <>{children}</>;
}
