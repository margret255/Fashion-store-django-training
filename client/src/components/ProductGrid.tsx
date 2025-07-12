import { useState } from "react";
import { Product } from "@shared/schema";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
}

export default function ProductGrid({ products, title, subtitle, showFilters = false }: ProductGridProps) {
  const [filter, setFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const filters = [
    { key: "all", label: "All" },
    { key: "new", label: "New In" },
    { key: "trending", label: "Trending" },
    { key: "sale", label: "Sale" }
  ];

  const sortOptions = [
    { key: "featured", label: "Featured" },
    { key: "price-low", label: "Price: Low to High" },
    { key: "price-high", label: "Price: High to Low" },
    { key: "newest", label: "Newest" }
  ];

  const filteredProducts = products.filter(product => {
    if (filter === "all") return true;
    return product.tags?.includes(filter);
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseFloat(a.salePrice || a.price) - parseFloat(b.salePrice || b.price);
      case "price-high":
        return parseFloat(b.salePrice || b.price) - parseFloat(a.salePrice || a.price);
      case "newest":
        return b.id - a.id;
      default:
        return a.featured ? -1 : 1;
    }
  });

  return (
    <section className="py-16 bg-warm-ivory">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12">
          <div className="mb-6 lg:mb-0">
            {title && (
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-plum mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-600 text-base md:text-lg">{subtitle}</p>
            )}
          </div>
          
          {showFilters && (
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-2 sm:pb-0">
                {filters.map((filterOption) => (
                  <Button
                    key={filterOption.key}
                    variant={filter === filterOption.key ? "default" : "outline"}
                    onClick={() => setFilter(filterOption.key)}
                    className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-colors whitespace-nowrap ${
                      filter === filterOption.key
                        ? "bg-soft-mauve text-white hover:bg-soft-mauve/80"
                        : "text-deep-plum hover:text-dusty-rose"
                    }`}
                  >
                    {filterOption.label}
                  </Button>
                ))}
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-dusty-rose/20 rounded-full focus:outline-none focus:ring-2 focus:ring-dusty-rose/30 w-full sm:w-auto"
              >
                {sortOptions.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
