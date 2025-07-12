import { X, Plus, Minus } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-deep-plum">Shopping Cart</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-deep-plum"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Link href="/products">
                <Button 
                  onClick={onClose}
                  className="bg-dusty-rose text-white hover:bg-dusty-rose/80"
                >
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-deep-plum">{item.product.name}</h4>
                    {item.size && (
                      <p className="text-gray-600 text-sm">Size: {item.size}</p>
                    )}
                    {item.color && (
                      <p className="text-gray-600 text-sm">Color: {item.color}</p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-semibold text-deep-plum">
                        ${(parseFloat(item.product.salePrice || item.product.price) * item.quantity).toFixed(2)}
                      </span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size, item.color)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size, item.color)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-deep-plum">Total:</span>
              <span className="text-xl font-bold text-deep-plum">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            <Button className="w-full bg-blush-pink text-white py-3 rounded-full font-semibold hover:bg-blush-pink/80 transition-colors mb-3">
              Proceed to Checkout
            </Button>
            <Link href="/cart">
              <Button 
                variant="outline"
                onClick={onClose}
                className="w-full border-2 border-dusty-rose text-dusty-rose py-3 rounded-full font-semibold hover:bg-dusty-rose hover:text-white transition-colors"
              >
                View Cart
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
