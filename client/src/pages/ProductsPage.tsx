import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Product } from "@shared/schema";

export default function ProductsPage() {
  const [location] = useLocation();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [pageTitle, setPageTitle] = useState("All Products");
  const [pageSubtitle, setPageSubtitle] = useState("Discover our complete collection");

  useEffect(() => {
    const pathParts = location.split("/");
    const categorySlug = pathParts[2];
    const searchParams = new URLSearchParams(location.split("?")[1] || "");
    const searchQuery = searchParams.get("search");

    if (searchQuery) {
      const searchResults = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(searchResults);
      setPageTitle(`Search Results for "${searchQuery}"`);
      setPageSubtitle(`Found ${searchResults.length} products`);
    } else if (categorySlug && categorySlug !== "products") {
      const category = categories.find(cat => cat.slug === categorySlug);
      if (category) {
        const categoryProducts = products.filter(product => product.category === categorySlug);
        setFilteredProducts(categoryProducts);
        setPageTitle(category.name);
        setPageSubtitle(category.description || "Explore our collection");
      } else if (categorySlug === "sale") {
        const saleProducts = products.filter(product => product.salePrice);
        setFilteredProducts(saleProducts);
        setPageTitle("Sale Items");
        setPageSubtitle("Limited time offers you don't want to miss");
      } else {
        setFilteredProducts(products);
        setPageTitle("All Products");
        setPageSubtitle("Discover our complete collection");
      }
    } else {
      setFilteredProducts(products);
      setPageTitle("All Products");
      setPageSubtitle("Discover our complete collection");
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <ProductGrid 
        products={filteredProducts}
        title={pageTitle}
        subtitle={pageSubtitle}
        showFilters={true}
      />
    </div>
  );
}
