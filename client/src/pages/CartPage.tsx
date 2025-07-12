import { Link } from "wouter";
import { Plus, Minus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-16 w-16 text-dusty-rose mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-deep-plum mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
            </p>
            <Link href="/products">
              <Button className="bg-dusty-rose text-white hover:bg-dusty-rose/80">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-deep-plum">Shopping Cart</h1>
            <Button
              variant="outline"
              onClick={clearCart}
              className="text-gray-600 hover:text-red-600"
            >
              Clear Cart
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-deep-plum">Items ({cartItems.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex items-center space-x-4 border-b border-gray-100 pb-6">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-deep-plum">{item.product.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">{item.product.description}</p>
                          {item.size && (
                            <p className="text-sm text-gray-500">Size: {item.size}</p>
                          )}
                          {item.color && (
                            <p className="text-sm text-gray-500">Color: {item.color}</p>
                          )}
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size, item.color)}
                                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="font-medium text-lg">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size, item.color)}
                                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-deep-plum text-lg">
                                ${(parseFloat(item.product.salePrice || item.product.price) * item.quantity).toFixed(2)}
                              </p>
                              {item.product.salePrice && (
                                <p className="text-sm text-gray-400 line-through">
                                  ${(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-deep-plum">Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">
                        {getCartTotal() >= 75 ? "Free" : "$9.99"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-semibold">
                        ${(getCartTotal() * 0.08).toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-xl font-bold text-deep-plum">
                        <span>Total</span>
                        <span>
                          ${(getCartTotal() + (getCartTotal() >= 75 ? 0 : 9.99) + (getCartTotal() * 0.08)).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    
                    {getCartTotal() < 75 && (
                      <div className="bg-dusty-rose/10 p-3 rounded-lg">
                        <p className="text-sm text-dusty-rose">
                          Add ${(75 - getCartTotal()).toFixed(2)} more for free shipping! 🚚
                        </p>
                      </div>
                    )}

                    <Button className="w-full bg-blush-pink text-white hover:bg-blush-pink/80 py-3">
                      Proceed to Checkout
                    </Button>
                    
                    <Link href="/products">
                      <Button variant="outline" className="w-full border-dusty-rose text-dusty-rose hover:bg-dusty-rose hover:text-white">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
