import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import { products } from "@/data/products";

export default function HomePage() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      <Hero />
      <CategoryGrid />
      <ProductGrid 
        products={featuredProducts}
        title="Featured Products"
        subtitle="Handpicked favorites from our latest collection"
        showFilters={true}
      />
      <Newsletter />
    </div>
  );
}
