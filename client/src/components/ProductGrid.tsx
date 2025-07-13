import { useState } from "react";
import { Product } from "@shared/schema";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { subcategories } from "@/data/subcategories";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  category?: string;
}

export default function ProductGrid({ products, title, subtitle, showFilters = false, category }: ProductGridProps) {
  const [filter, setFilter] = useState<string>("all");
  const [subcategoryFilter, setSubcategoryFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const filters = [
    { key: "all", label: "All" },
    { key: "new", label: "New In" },
    { key: "trending", label: "Trending" },
    { key: "sale", label: "Sale" }
  ];

  const getSubcategoryFilters = () => {
    if (category && subcategories[category as keyof typeof subcategories]) {
      return subcategories[category as keyof typeof subcategories];
    }
    return [{ key: "all", label: "All" }];
  };

  const sortOptions = [
    { key: "featured", label: "Featured" },
    { key: "price-low", label: "Price: Low to High" },
    { key: "price-high", label: "Price: High to Low" },
    { key: "newest", label: "Newest" }
  ];

  const filteredProducts = products.filter(product => {
    // Filter by tags
    if (filter !== "all" && !product.tags?.includes(filter)) return false;
    
    // Filter by subcategory
    if (subcategoryFilter !== "all" && product.subcategory !== subcategoryFilter) return false;
    
    return true;
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
    <section className="py-16 bg-warm-ivory dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12">
          <div className="mb-6 lg:mb-0">
            {title && (
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-plum dark:text-white mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">{subtitle}</p>
            )}
          </div>
          
          {showFilters && (
            <div className="flex flex-col gap-4 w-full lg:w-auto">
              {/* Subcategory Filters */}
              {category && (
                <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-2 sm:pb-0">
                  {getSubcategoryFilters().map((subcategoryOption) => (
                    <Button
                      key={subcategoryOption.key}
                      variant={subcategoryFilter === subcategoryOption.key ? "default" : "outline"}
                      onClick={() => setSubcategoryFilter(subcategoryOption.key)}
                      className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                        subcategoryFilter === subcategoryOption.key
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105"
                          : "text-deep-plum dark:text-white hover:text-purple-500 border border-purple-300 hover:border-purple-500"
                      }`}
                    >
                      {subcategoryOption.label}
                    </Button>
                  ))}
                </div>
              )}
              
              {/* Tag Filters */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-2 sm:pb-0">
                  {filters.map((filterOption) => (
                    <Button
                      key={filterOption.key}
                      variant={filter === filterOption.key ? "default" : "outline"}
                      onClick={() => setFilter(filterOption.key)}
                      className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                        filter === filterOption.key
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105"
                          : "text-deep-plum dark:text-white hover:text-purple-500 border border-purple-300 hover:border-purple-500"
                      }`}
                    >
                      {filterOption.label}
                    </Button>
                  ))}
                </div>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-dusty-rose/20 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-dusty-rose/30 w-full sm:w-auto bg-white dark:bg-gray-700 text-deep-plum dark:text-white"
                >
                  {sortOptions.map((option) => (
                    <option key={option.key} value={option.key}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
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
