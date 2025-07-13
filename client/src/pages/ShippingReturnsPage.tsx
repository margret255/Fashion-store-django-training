import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Truck, Package, RotateCcw, Clock, MapPin, Shield } from "lucide-react";

export default function ShippingReturnsPage() {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      price: "KES 300",
      time: "3-5 business days",
      description: "Free shipping on orders over KES 3,000"
    },
    {
      name: "Express Shipping",
      price: "KES 600",
      time: "1-2 business days",
      description: "Fast delivery within Nairobi"
    },
    {
      name: "Same Day Delivery",
      price: "KES 1,000",
      time: "Same day",
      description: "Available within Nairobi CBD only"
    }
  ];

  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-plum dark:text-white mb-4">
              Shipping & Returns
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about delivery and returns for your peace of mind.
            </p>
          </div>

          <Tabs defaultValue="shipping" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="shipping">Shipping Info</TabsTrigger>
              <TabsTrigger value="returns">Returns & Exchanges</TabsTrigger>
            </TabsList>

            <TabsContent value="shipping" className="space-y-8">
              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    Shipping Options
                  </CardTitle>
                  <CardDescription>
                    Choose the delivery option that works best for you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {shippingOptions.map((option, index) => (
                      <div key={index} className="border border-dusty-rose/20 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-deep-plum dark:text-white">{option.name}</h3>
                          <Badge variant="outline" className="border-dusty-rose/30">
                            {option.price}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-dusty-rose" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{option.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{option.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Delivery Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Nairobi & Surrounding Areas</h3>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Same day delivery available</li>
                        <li>• Express shipping (1-2 days)</li>
                        <li>• Standard shipping (3-5 days)</li>
                        <li>• Free shipping on orders over KES 3,000</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Other Kenyan Cities</h3>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Mombasa, Kisumu, Nakuru, Eldoret</li>
                        <li>• Standard shipping (3-7 days)</li>
                        <li>• Express shipping (2-3 days)</li>
                        <li>• Additional charges may apply</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Order Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-dusty-rose rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <p className="font-medium text-deep-plum dark:text-white">Order Confirmation</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          You'll receive an email confirmation immediately after placing your order.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-dusty-rose rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <p className="font-medium text-deep-plum dark:text-white">Processing Time</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Orders are processed within 1-2 business days (Monday-Friday).
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-dusty-rose rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div>
                        <p className="font-medium text-deep-plum dark:text-white">Shipping Notification</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          You'll receive tracking information once your order ships.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="returns" className="space-y-8">
              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                    <RotateCcw className="w-5 h-5" />
                    Return Policy
                  </CardTitle>
                  <CardDescription>
                    We want you to love your purchase. If you're not completely satisfied, we're here to help.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-dusty-rose/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-deep-plum dark:text-white mb-2">14-Day Return Window</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        You have 14 days from the date of delivery to return your items for a full refund or exchange.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Return Conditions</h3>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Items must be unused and in original condition</li>
                        <li>• All original tags must be attached</li>
                        <li>• Items must be returned in original packaging</li>
                        <li>• Proof of purchase required</li>
                        <li>• Sale items are final sale (no returns)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Non-Returnable Items</h3>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Intimate apparel and swimwear</li>
                        <li>• Personalized or customized items</li>
                        <li>• Beauty products that have been opened</li>
                        <li>• Items damaged by normal wear</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white">How to Return</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-soft-mauve rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <p className="font-medium text-deep-plum dark:text-white">Contact Us</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Email support@amaliahaven.com or call +254 700 123 456 to initiate a return.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-soft-mauve rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <p className="font-medium text-deep-plum dark:text-white">Get Return Authorization</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          We'll provide you with a return authorization number and instructions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-soft-mauve rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div>
                        <p className="font-medium text-deep-plum dark:text-white">Package & Ship</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Package your items securely and ship to our return address.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-soft-mauve rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                      <div>
                        <p className="font-medium text-deep-plum dark:text-white">Refund Processing</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Refunds are processed within 3-5 business days after we receive your return.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Return Address & Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Return Address</h3>
                      <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <p>Amalia Haven Returns</p>
                        <p>PO Box 12345</p>
                        <p>Westlands, Nairobi</p>
                        <p>Kenya</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Return Shipping</h3>
                      <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                        <p>• Customer is responsible for return shipping costs</p>
                        <p>• We recommend using a trackable shipping method</p>
                        <p>• Amalia Haven is not responsible for lost returns</p>
                        <p>• Defective items: We cover return shipping</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}