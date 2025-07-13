import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Sparkles, Globe, Award, Target } from "lucide-react";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-plum dark:text-white mb-4">
              Our Story
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Founded with a passion for empowering women through fashion, Amalia Haven is more than a store—it's a celebration of feminine strength, beauty, and individuality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-dusty-rose/20">
              <CardHeader>
                <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  The Beginning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Amalia Haven was born from a simple yet powerful vision: to create a space where every woman can find pieces that make her feel confident, beautiful, and authentically herself. Founded in 2023 in the heart of Nairobi, our journey began with a small collection of carefully curated fashion pieces.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Named after "Amalia," meaning "work of God," our brand represents the belief that every woman is a masterpiece, deserving of fashion that celebrates her unique beauty and strength.
                </p>
              </CardContent>
            </Card>

            <Card className="border-dusty-rose/20">
              <CardHeader>
                <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  We believe that fashion should be accessible, inclusive, and empowering. Our mission is to provide high-quality, stylish pieces that help women express their individuality while building confidence from the inside out.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Every item in our collection is selected with care, considering not just style and quality, but also the impact on the women who wear them and the communities that create them.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-dusty-rose/20 mb-16">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white text-center">Meet Our Founder</CardTitle>
              <CardDescription className="text-center">
                The vision behind Amalia Haven
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-deep-plum dark:text-white">Wangui Margaret</h3>
                    <p className="text-dusty-rose font-medium">Founder & Creative Director</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    "Growing up in as a kid, I watched my mother and sisters struggle to find affordable, quality fashion that truly represented who they were. I realized there was a gap in the market for fashion that was both stylish and accessible to the everyday Kenyan woman."
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    "After studying fashion merchandising and working in retail for several years, I decided to create Amalia Haven—a brand that would celebrate African women's beauty while providing them with fashion-forward pieces that fit their lifestyles and budgets."
                  </p>
                </div>
                <div className="bg-gradient-to-br from-dusty-rose/20 to-soft-mauve/20 rounded-lg p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-dusty-rose to-soft-mauve rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                    "Every woman deserves to feel beautiful, confident, and valued. That's what drives me every single day."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-dusty-rose/20 text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-dusty-rose mx-auto mb-4" />
                <CardTitle className="text-deep-plum dark:text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  To become East Africa's leading fashion destination, empowering women through style while building sustainable communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-dusty-rose/20 text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-soft-mauve mx-auto mb-4" />
                <CardTitle className="text-deep-plum dark:text-white">Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Supporting local artisans and suppliers while providing employment opportunities within our communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-dusty-rose/20 text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-blush-pink mx-auto mb-4" />
                <CardTitle className="text-deep-plum dark:text-white">Our Promise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Quality, authenticity, and exceptional customer service in every interaction and every purchase.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-dusty-rose/20 mb-16">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white text-center">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-dusty-rose/20 text-dusty-rose border-dusty-rose/30">01</Badge>
                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white">Empowerment</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        We believe fashion should empower women to express their authentic selves with confidence.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-soft-mauve/20 text-soft-mauve border-soft-mauve/30">02</Badge>
                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white">Quality</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Every piece is carefully selected for its craftsmanship, durability, and timeless appeal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-blush-pink/20 text-blush-pink border-blush-pink/30">03</Badge>
                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white">Inclusivity</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Fashion for every body, every style, and every budget—celebrating diversity in all forms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-gold/20 text-gold border-gold/30">04</Badge>
                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white">Community</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Building connections and supporting local communities through ethical business practices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-dusty-rose/20 text-dusty-rose border-dusty-rose/30">05</Badge>
                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white">Innovation</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Constantly evolving to meet our customers' needs while staying ahead of fashion trends.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-soft-mauve/20 text-soft-mauve border-soft-mauve/30">06</Badge>
                    <div>
                      <h3 className="font-semibold text-deep-plum dark:text-white">Authenticity</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Staying true to our African roots while embracing global fashion influences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 text-center">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-deep-plum dark:text-white mb-4">
                Thank You for Being Part of Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                Every purchase, every review, and every recommendation helps us grow and continue our mission of empowering women through fashion. We're grateful to have you on this journey with us.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Badge variant="outline" className="border-dusty-rose/30 text-dusty-rose px-4 py-2">
                  10,000+ Happy Customers
                </Badge>
                <Badge variant="outline" className="border-soft-mauve/30 text-soft-mauve px-4 py-2">
                  500+ Products Curated
                </Badge>
                <Badge variant="outline" className="border-blush-pink/30 text-blush-pink px-4 py-2">
                  2 Years of Excellence
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}