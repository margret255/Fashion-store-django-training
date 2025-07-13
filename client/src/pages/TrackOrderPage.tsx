import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Package, Truck, CheckCircle, MapPin, Clock, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function TrackOrderPage() {
  const [trackingInput, setTrackingInput] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);
  const { toast } = useToast();

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingInput.trim()) {
      toast({
        title: "Please enter tracking information",
        description: "Enter your order number or email address to track your order.",
        variant: "destructive"
      });
      return;
    }

    // Simulate tracking result
    const mockTrackingData = {
      orderNumber: "AH-2024-001234",
      status: "In Transit",
      estimatedDelivery: "January 15, 2025",
      items: [
        { name: "Elegant Midi Dress", quantity: 1, price: "KES 2,500" },
        { name: "Leather Handbag", quantity: 1, price: "KES 1,800" }
      ],
      timeline: [
        {
          status: "Order Placed",
          date: "January 10, 2025, 2:30 PM",
          description: "Your order has been confirmed and is being prepared.",
          completed: true
        },
        {
          status: "Processing",
          date: "January 11, 2025, 10:00 AM",
          description: "Your items are being packed and prepared for shipment.",
          completed: true
        },
        {
          status: "Shipped",
          date: "January 12, 2025, 4:45 PM",
          description: "Your package has been shipped via Express Delivery.",
          completed: true
        },
        {
          status: "In Transit",
          date: "January 13, 2025, 8:30 AM",
          description: "Your package is on its way to your delivery address.",
          completed: true
        },
        {
          status: "Out for Delivery",
          date: "Pending",
          description: "Your package is out for delivery.",
          completed: false
        },
        {
          status: "Delivered",
          date: "Pending",
          description: "Your package has been delivered.",
          completed: false
        }
      ]
    };

    setTrackingResult(mockTrackingData);
    toast({
      title: "Order found!",
      description: "Here's your order tracking information."
    });
  };

  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-plum dark:text-white mb-4">
              Track Your Order
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Enter your order number or email address to see your delivery status.
            </p>
          </div>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <Search className="w-5 h-5" />
                Order Tracking
              </CardTitle>
              <CardDescription>
                You can track your order using either your order number or the email address used at checkout.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTrackOrder} className="space-y-4">
                <div>
                  <label htmlFor="tracking" className="block text-sm font-medium text-deep-plum dark:text-white mb-2">
                    Order Number or Email Address
                  </label>
                  <Input
                    id="tracking"
                    type="text"
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                    placeholder="Enter order number (e.g., AH-2024-001234) or email address"
                    className="border-dusty-rose/30 focus:border-dusty-rose"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-dusty-rose to-soft-mauve hover:from-dusty-rose/90 hover:to-soft-mauve/90"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Track Order
                </Button>
              </form>
            </CardContent>
          </Card>

          {trackingResult && (
            <div className="space-y-6">
              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white">Order Details</CardTitle>
                  <CardDescription>
                    Order #{trackingResult.orderNumber}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-dusty-rose/10 rounded-lg">
                      <Package className="w-8 h-8 text-dusty-rose mx-auto mb-2" />
                      <p className="font-medium text-deep-plum dark:text-white">Status</p>
                      <Badge variant="outline" className="mt-1 border-dusty-rose/30">
                        {trackingResult.status}
                      </Badge>
                    </div>
                    <div className="text-center p-4 bg-soft-mauve/10 rounded-lg">
                      <Truck className="w-8 h-8 text-soft-mauve mx-auto mb-2" />
                      <p className="font-medium text-deep-plum dark:text-white">Estimated Delivery</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{trackingResult.estimatedDelivery}</p>
                    </div>
                    <div className="text-center p-4 bg-blush-pink/10 rounded-lg">
                      <CheckCircle className="w-8 h-8 text-blush-pink mx-auto mb-2" />
                      <p className="font-medium text-deep-plum dark:text-white">Items</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{trackingResult.items.length} items</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Items in this order:</h3>
                    <div className="space-y-2">
                      {trackingResult.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div>
                            <p className="font-medium text-deep-plum dark:text-white">{item.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-medium text-deep-plum dark:text-white">{item.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white">Tracking Timeline</CardTitle>
                  <CardDescription>
                    Follow your order's journey from our warehouse to your door.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingResult.timeline.map((event, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          event.completed 
                            ? 'bg-dusty-rose text-white' 
                            : 'bg-gray-300 dark:bg-gray-600 text-gray-500'
                        }`}>
                          {event.completed ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <Clock className="w-5 h-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className={`font-medium ${
                              event.completed 
                                ? 'text-deep-plum dark:text-white' 
                                : 'text-gray-500 dark:text-gray-400'
                            }`}>
                              {event.status}
                            </h4>
                            {event.date !== "Pending" && (
                              <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
                            )}
                          </div>
                          <p className={`text-sm ${
                            event.completed 
                              ? 'text-gray-600 dark:text-gray-300' 
                              : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {event.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <Card className="border-dusty-rose/20 mt-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Finding Your Order Number</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Check your email confirmation</li>
                    <li>• Look for order receipts in your inbox</li>
                    <li>• Order numbers start with "AH-"</li>
                    <li>• You can also use your checkout email</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Contact Support</h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+254 700 123 456</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>support@amaliahaven.com</span>
                    </div>
                    <p className="text-xs">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}