import { ArrowDown, ArrowRight, ChevronRight, Heart, Play, Plus, Star } from "lucide-react";
import { toast } from "sonner";
import { Product, products, categories } from "../lib/mockServices";
import { ProductCard, SectionHeading, SiteChrome, StoreProps } from "./StorePages";

export default function Home(props: StoreProps) {
  return <SiteChrome {...props}>
    <section className="hero">
      <div className="hero-image"><img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=2200&q=88" alt="Man wearing a dark jacket in an editorial setting" /></div>
      <div className="hero-shade" />
      <button className="hero-arrow hero-arrow-left" aria-label="Previous campaign" onClick={() => toast("Previous campaign coming soon")}><ChevronRight size={19} /></button><button className="hero-arrow hero-arrow-right" aria-label="Next campaign" onClick={() => toast("Next campaign coming soon")}><ChevronRight size={19} /></button>
      <div className="hero-content"><p className="hero-brand-title">AVIRO</p><h1>DEFINE <em>YOUR STYLE.</em></h1><p className="hero-subline">Premium quality. Timeless design.</p><div className="hero-actions"><button className="button button-light" onClick={() => props.setLocation("/shop")}>SHOP NOW <ArrowRight size={16} /></button></div></div>
      <div className="hero-bottom"><span className="hero-dots"><i className="active" /><i /><i /><i /></span><span className="hero-index">01 / 04</span></div>
    </section>
    <div className="ticker"><div>BUILT FOR THE EVERYDAY <span>✳</span> DESIGNED TO MOVE <span>✳</span> MADE TO LAST <span>✳</span> BUILT FOR THE EVERYDAY <span>✳</span> DESIGNED TO MOVE <span>✳</span></div></div>
    <section className="home-intro section-pad"><div className="intro-kicker"><span className="line" /><p className="eyebrow">THE AVIRO UNIFORM</p></div><div className="intro-layout"><h2>THE PIECES<br />YOU <em>LIVE IN.</em></h2><div><p className="large-copy">A considered wardrobe for the pace of modern life. Clean silhouettes, honest materials and a quiet confidence that’s entirely your own.</p><button className="text-link" onClick={() => props.setLocation("/about")}>OUR APPROACH <ArrowRight size={16} /></button></div></div></section>
    <section className="category-section section-pad"><SectionHeading eyebrow="SHOP BY CATEGORY" title="START WITH THE ESSENTIALS" action="VIEW ALL" onAction={() => props.setLocation("/shop")} /><div className="category-grid">{categories.map((cat, i) => <button className={`category-card category-${i + 1}`} key={cat.name} onClick={() => props.setLocation(`/shop?category=${cat.slug}`)}><img src={cat.image} alt={`${cat.name} men's clothing`} /><span className="category-shade" /><div><span className="category-number">0{i + 1}</span><h3>{cat.name}</h3></div><ChevronRight className="category-arrow" size={19} /></button>)}</div></section>
    <section className="new-arrivals-section section-pad"><SectionHeading eyebrow="THE LATEST DROP" title="NEW ARRIVALS" action="SHOP ALL" onAction={() => props.setLocation("/new-arrivals")} /><div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} wishlist={props.wishlist} toggleWishlist={props.toggleWishlist} addToCart={props.addToCart} setLocation={props.setLocation} />)}</div></section>
    <section className="editorial-feature section-pad"><div className="editorial-image"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=88" alt="Man in a structured neutral outfit" /><button className="play-button" onClick={() => toast("Campaign film coming soon")}><Play size={18} fill="currentColor" /> WATCH FILM</button></div><div className="editorial-copy"><p className="eyebrow">THE NEW STANDARD</p><h2>NOT MADE<br />TO <em>BLEND IN.</em></h2><p>We believe personal style lives in the details. The way a sleeve falls. The weight of a layer. The pieces that become yours the longer you wear them.</p><button className="text-link" onClick={() => props.setLocation("/about")}>DISCOVER AVIRO <ArrowRight size={16} /></button></div></section>
    <Reviews />
    <section className="quote-section"><div className="quote-mark">“</div><blockquote>THE BEST STYLE<br />IS THE ONE THAT<br /><em>FEELS LIKE YOU.</em></blockquote><div className="quote-line" /></section>
    <section className="newsletter-banner"><div><p className="eyebrow">STAY IN THE LOOP</p><h2>THE AVIRO EDIT.</h2><p>New drops, studio notes and stories from the people who wear it.</p></div><div className="newsletter-input"><input placeholder="Your email address" type="email" /><button onClick={() => toast.success("You’re on the list", { description: "Welcome to The AVIRO Edit." })}><ArrowRight size={18} /></button></div></section>
  </SiteChrome>;
}


function Reviews() {
  const reviews = [["THE FIT IS EXACTLY RIGHT.", "The kind of pieces that make getting dressed feel effortless. The heavyweight tee has become my daily uniform.", "MARCUS T. / NEW YORK"], ["QUALITY YOU CAN FEEL.", "Everything feels considered, from the fabric weight to the packaging. AVIRO is now the first place I look.", "JONAH R. / LONDON"], ["QUIETLY DIFFERENT.", "Minimal without being basic. The cargo pants fit perfectly and get better every time I wear them.", "DANIEL K. / LOS ANGELES"]];
  return <section className="reviews-section section-pad"><SectionHeading eyebrow="FROM THE COMMUNITY" title="WORN WITH INTENTION" action="READ ALL REVIEWS" onAction={() => toast("All reviews coming soon")} /><div className="reviews-grid">{reviews.map(([title, body, author]) => <article className="review-card" key={author}><div className="review-stars">★★★★★</div><h3>{title}</h3><p>“{body}”</p><span>{author}</span></article>)}</div></section>;
}
