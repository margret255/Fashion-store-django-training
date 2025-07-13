import { useState } from "react";
import { Heart } from "lucide-react";
import { Product } from "@shared/schema";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatPrice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "new":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "sale":
        return "bg-gradient-to-r from-orange-400 to-red-500";
      case "trending":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "limited":
        return "bg-gradient-to-r from-yellow-400 to-orange-500";
      default:
        return "bg-gradient-to-r from-purple-400 to-pink-400";
    }
  };

  const displayPrice = product.salePrice ? product.salePrice : product.price;
  const originalPrice = product.salePrice ? product.price : null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {product.tags && product.tags.length > 0 && (
          <div className="absolute top-4 left-4">
            <span className={`${getTagColor(product.tags[0])} text-white px-3 py-1 rounded-full text-sm font-medium capitalize`}>
              {product.tags[0]}
            </span>
          </div>
        )}
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full shadow-md transition-colors ${
              isLiked ? "bg-blush-pink text-white" : "bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-deep-plum dark:text-white mb-2">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-deep-plum dark:text-white">
              {formatPrice(displayPrice)}
            </span>
            {originalPrice && (
              <span className="text-gray-400 dark:text-gray-500 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          
          <Button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
