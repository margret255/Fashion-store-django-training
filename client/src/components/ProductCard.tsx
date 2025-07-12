import { useState } from "react";
import { Heart } from "lucide-react";
import { Product } from "@shared/schema";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";

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
        return "bg-blush-pink";
      case "sale":
        return "bg-gold";
      case "trending":
        return "bg-blush-pink";
      case "limited":
        return "bg-gold";
      default:
        return "bg-soft-mauve";
    }
  };

  const displayPrice = product.salePrice ? parseFloat(product.salePrice) : parseFloat(product.price);
  const originalPrice = product.salePrice ? parseFloat(product.price) : null;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 group overflow-hidden">
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
              isLiked ? "bg-blush-pink text-white" : "bg-white hover:bg-gray-50"
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-deep-plum mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-deep-plum">
              ${displayPrice.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-gray-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button
            onClick={handleAddToCart}
            className="bg-dusty-rose text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-dusty-rose/80 transition-colors"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
