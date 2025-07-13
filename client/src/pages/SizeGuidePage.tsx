import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Ruler, Info } from "lucide-react";

export default function SizeGuidePage() {
  const clothingSizes = [
    { size: "XS", bust: "32", waist: "24", hips: "34", uk: "6", eu: "34" },
    { size: "S", bust: "34", waist: "26", hips: "36", uk: "8", eu: "36" },
    { size: "M", bust: "36", waist: "28", hips: "38", uk: "10", eu: "38" },
    { size: "L", bust: "38", waist: "30", hips: "40", uk: "12", eu: "40" },
    { size: "XL", bust: "40", waist: "32", hips: "42", uk: "14", eu: "42" },
    { size: "XXL", bust: "42", waist: "34", hips: "44", uk: "16", eu: "44" },
  ];

  const shoeSizes = [
    { us: "5", uk: "2.5", eu: "35", cm: "22" },
    { us: "6", uk: "3.5", eu: "36", cm: "22.5" },
    { us: "7", uk: "4.5", eu: "37", cm: "23.5" },
    { us: "8", uk: "5.5", eu: "38", cm: "24.5" },
    { us: "9", uk: "6.5", eu: "39", cm: "25" },
    { us: "10", uk: "7.5", eu: "40", cm: "26" },
    { us: "11", uk: "8.5", eu: "41", cm: "27" },
  ];

  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-plum dark:text-white mb-4">
              Size Guide
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find your perfect fit with our comprehensive size charts and measurement guide.
            </p>
          </div>

          <Tabs defaultValue="clothing" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="clothing">Clothing</TabsTrigger>
              <TabsTrigger value="shoes">Shoes</TabsTrigger>
              <TabsTrigger value="guide">Measuring Guide</TabsTrigger>
            </TabsList>

            <TabsContent value="clothing" className="space-y-8">
              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                    <Ruler className="w-5 h-5" />
                    Women's Clothing Size Chart
                  </CardTitle>
                  <CardDescription>
                    All measurements are in inches. For the best fit, measure yourself and compare to our size chart.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-dusty-rose/20">
                          <th className="text-left p-3 text-deep-plum dark:text-white">Size</th>
                          <th className="text-left p-3 text-deep-plum dark:text-white">Bust</th>
                          <th className="text-left p-3 text-deep-plum dark:text-white">Waist</th>
                          <th className="text-left p-3 text-deep-plum dark:text-white">Hips</th>
                          <th className="text-left p-3 text-deep-plum dark:text-white">UK</th>
                          <th className="text-left p-3 text-deep-plum dark:text-white">EU</th>
                        </tr>
                      </thead>
                      <tbody>
                        {clothingSizes.map((size, index) => (
                          <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                            <td className="p-3">
                              <Badge variant="outline" className="border-dusty-rose/30">
                                {size.size}
                              </Badge>
                            </td>
                            <td className="p-3 text-gray-700 dark:text-gray-300">{size.bust}"</td>
                            <td className="p-3 text-gray-700 dark:text-gray-300">{size.waist}"</td>
                            <td className="p-3 text-gray-700 dark:text-gray-300">{size.hips}"</td>
                            <td className="p-3 text-gray-700 dark:text-gray-300">{size.uk}</td>
                            <td className="p-3 text-gray-700 dark:text-gray-300">{size.eu}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white">Fit Descriptions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-dusty-rose/10 rounded-lg">
                      <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Slim Fit</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Close-fitting through the body with minimal ease. Perfect for a streamlined silhouette.
                      </p>
                    </div>
                    <div className="p-4 bg-soft-mauve/10 rounded-lg">
                      <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Regular Fit</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Comfortable fit with moderate ease. Our most popular fit for everyday wear.
                      </p>
                    </div>
                    <div className="p-4 bg-blush-pink/10 rounded-lg">
                      <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Relaxed Fit</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Loose and comfortable with generous ease. Great for layering and casual wear.
                      </p>
                    </div>
                    <div className="p-4 bg-gold/10 rounded-lg">
                      <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Oversized</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Deliberately loose and roomy. Perfect for creating a modern, effortless look.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shoes" className="space-y-8">
              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                    <Ruler className="w-5 h-5" />
                    Women's Shoe Size Chart
                  </CardTitle>
                  <CardDescription>
                    International size conversions and foot length measurements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-dusty-rose/20">
                          <th className="text-left p-3 text-deep-plum dark:text-white">US</th>
                          <th className="text-left p-3 text-deep-plum dark:text-white">UK</th>
                          <th className="text-left p-3 text-deep-plum dark:text-white">EU</th>
                          <th className="text-left p-3 text-deep-plum dark:text-white">Foot Length (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {shoeSizes.map((size, index) => (
                          <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                            <td className="p-3">
                              <Badge variant="outline" className="border-dusty-rose/30">
                                {size.us}
                              </Badge>
                            </td>
                            <td className="p-3 text-gray-700 dark:text-gray-300">{size.uk}</td>
                            <td className="p-3 text-gray-700 dark:text-gray-300">{size.eu}</td>
                            <td className="p-3 text-gray-700 dark:text-gray-300">{size.cm}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guide" className="space-y-8">
              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    How to Measure Yourself
                  </CardTitle>
                  <CardDescription>
                    Follow these simple steps to get accurate measurements for the perfect fit.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-deep-plum dark:text-white">For Clothing</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-dusty-rose rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                          <div>
                            <p className="font-medium text-deep-plum dark:text-white">Bust</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Measure around the fullest part of your chest, keeping the tape level.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-dusty-rose rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                          <div>
                            <p className="font-medium text-deep-plum dark:text-white">Waist</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Measure around your natural waistline, the narrowest part of your torso.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-dusty-rose rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                          <div>
                            <p className="font-medium text-deep-plum dark:text-white">Hips</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Measure around the fullest part of your hips, about 7-9 inches below your waist.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-deep-plum dark:text-white">For Shoes</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-soft-mauve rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                          <div>
                            <p className="font-medium text-deep-plum dark:text-white">Trace Your Foot</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Place your foot on paper and trace around it with a pen.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-soft-mauve rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                          <div>
                            <p className="font-medium text-deep-plum dark:text-white">Measure Length</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Measure from heel to longest toe and compare to our size chart.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-soft-mauve rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                          <div>
                            <p className="font-medium text-deep-plum dark:text-white">Best Time to Measure</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Measure in the evening when your feet are at their largest.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-dusty-rose/10 rounded-lg">
                    <h4 className="font-semibold text-deep-plum dark:text-white mb-2">💡 Pro Tips</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Use a flexible measuring tape for most accurate results</li>
                      <li>• Measure over form-fitting undergarments</li>
                      <li>• Ask a friend to help you measure for better accuracy</li>
                      <li>• When between sizes, size up for a more comfortable fit</li>
                    </ul>
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