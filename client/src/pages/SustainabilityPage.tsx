import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Recycle, 
  TreePine, 
  Droplets, 
  Package, 
  Users, 
  Shield, 
  Heart 
} from "lucide-react";

export default function SustainabilityPage() {
  const initiatives = [
    {
      icon: <Package className="w-8 h-8 text-green-600" />,
      title: "Eco-Friendly Packaging",
      description: "100% biodegradable and recyclable packaging materials",
      details: [
        "Compostable mailers made from plant-based materials",
        "Recycled paper inserts and tissue paper",
        "Minimal packaging design to reduce waste",
        "Reusable packaging when possible"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Ethical Sourcing",
      description: "Supporting fair trade and ethical manufacturing practices",
      details: [
        "Direct partnerships with local artisans",
        "Fair wages and working conditions",
        "Regular supplier audits and assessments",
        "Supporting women-owned businesses"
      ]
    },
    {
      icon: <Recycle className="w-8 h-8 text-purple-600" />,
      title: "Circular Fashion",
      description: "Reducing waste through recycling and upcycling programs",
      details: [
        "Clothing donation drives for local charities",
        "Repair and alteration services",
        "Upcycling workshops for customers",
        "Take-back program for old garments"
      ]
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: "Water Conservation",
      description: "Minimizing water usage in production processes",
      details: [
        "Partnering with suppliers who use water-efficient processes",
        "Supporting organic cotton and eco-friendly materials",
        "Reducing water waste in garment care instructions",
        "Promoting air-drying over machine drying"
      ]
    }
  ];

  const certifications = [
    {
      name: "Fair Trade Certified",
      description: "Ensuring fair wages and safe working conditions",
      status: "Certified"
    },
    {
      name: "Organic Cotton",
      description: "Promoting sustainable farming practices",
      status: "Partner"
    },
    {
      name: "Carbon Neutral Shipping",
      description: "Offsetting delivery emissions",
      status: "In Progress"
    },
    {
      name: "Sustainable Materials",
      description: "Using eco-friendly fabrics and materials",
      status: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-plum dark:text-white mb-4">
              Our Commitment to Sustainability
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At Amalia Haven, we believe that beautiful fashion shouldn't come at the expense of our planet. 
              We're committed to creating a more sustainable future through responsible practices and conscious choices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-green-200 text-center">
              <CardContent className="pt-6">
                <TreePine className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">1000+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Trees planted through our reforestation partnership</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 text-center">
              <CardContent className="pt-6">
                <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">50%</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Reduction in water usage through efficient processes</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 text-center">
              <CardContent className="pt-6">
                <Recycle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">95%</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Of packaging materials are recyclable or biodegradable</p>
              </CardContent>
            </Card>
            <Card className="border-orange-200 text-center">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">200+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Local artisans supported through fair trade partnerships</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white flex items-center gap-3">
                    {initiative.icon}
                    {initiative.title}
                  </CardTitle>
                  <CardDescription>
                    {initiative.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {initiative.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-dusty-rose/20 mb-16">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white text-center">
                Our Certifications & Partnerships
              </CardTitle>
              <CardDescription className="text-center">
                Working with certified partners to ensure sustainable practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white">{cert.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{cert.description}</p>
                    </div>
                    <Badge 
                      variant={cert.status === 'Certified' ? 'default' : 'outline'}
                      className={cert.status === 'Certified' ? 'bg-green-100 text-green-800 border-green-300' : ''}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-16">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Our 2025 Sustainability Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">Q1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-plum dark:text-white">Carbon Neutral Shipping</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Achieve carbon-neutral delivery for all orders through renewable energy partnerships
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">Q2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-plum dark:text-white">Sustainable Materials</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Source 75% of our products from sustainable and eco-friendly materials
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">Q3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-plum dark:text-white">Zero Waste Packaging</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Eliminate all single-use plastics from our packaging and shipping materials
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-sm">Q4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-plum dark:text-white">Community Impact</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Support 500+ local artisans and create 100 new jobs in our supply chain
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-16">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <Shield className="w-5 h-5" />
                How You Can Help
              </CardTitle>
              <CardDescription>
                Join us in making fashion more sustainable
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-deep-plum dark:text-white">Care for Your Clothes</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Wash in cold water to save energy</li>
                    <li>• Air dry instead of using a dryer</li>
                    <li>• Follow care instructions to extend garment life</li>
                    <li>• Store clothes properly to prevent damage</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-deep-plum dark:text-white">Sustainable Shopping</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Choose quality over quantity</li>
                    <li>• Consider timeless pieces over fast fashion</li>
                    <li>• Participate in our clothing donation drives</li>
                    <li>• Share clothes with friends and family</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 text-center">
            <CardContent className="py-12">
              <Leaf className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-deep-plum dark:text-white mb-4">
                Together, We Can Make a Difference
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                Sustainability is a journey, not a destination. We're committed to continuous improvement and transparency in our practices. Thank you for joining us in creating a more sustainable future for fashion.
              </p>
              <div className="flex justify-center">
                <Badge variant="outline" className="border-green-300 text-green-700 px-6 py-2">
                  Learn More About Our Impact
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}