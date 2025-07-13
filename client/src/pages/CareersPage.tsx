import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Zap, 
  Award,
  Coffee,
  Wifi,
  Car
} from "lucide-react";

export default function CareersPage() {
  const openPositions = [
    {
      title: "Fashion Merchandiser",
      department: "Product",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Join our product team to curate and manage our fashion collections, working closely with suppliers and analyzing market trends.",
      requirements: [
        "Bachelor's degree in Fashion Merchandising or related field",
        "2+ years experience in fashion retail",
        "Strong analytical and trend forecasting skills",
        "Knowledge of Kenyan fashion market"
      ]
    },
    {
      title: "Customer Experience Specialist",
      department: "Customer Service",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Provide exceptional customer service across all channels, helping customers find their perfect style and resolving any concerns.",
      requirements: [
        "Excellent communication skills in English and Swahili",
        "Experience in customer service or retail",
        "Patient and empathetic personality",
        "Ability to work in a fast-paced environment"
      ]
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote/Nairobi",
      type: "Full-time",
      description: "Develop and execute social media strategies to grow our brand presence and engage with our community of fashion-forward women.",
      requirements: [
        "Bachelor's degree in Marketing or Communications",
        "3+ years of social media management experience",
        "Strong understanding of Instagram, TikTok, and Facebook",
        "Creative content creation skills"
      ]
    },
    {
      title: "Warehouse Associate",
      department: "Operations",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Support our fulfillment operations by managing inventory, picking and packing orders, and ensuring quality control.",
      requirements: [
        "High school diploma or equivalent",
        "Previous warehouse experience preferred",
        "Attention to detail and accuracy",
        "Ability to lift packages up to 25kg"
      ]
    },
    {
      title: "Part-time Sales Associate",
      department: "Retail",
      location: "Nairobi, Kenya",
      type: "Part-time",
      description: "Support our retail operations during peak seasons and events, helping customers and managing store inventory.",
      requirements: [
        "Previous retail experience",
        "Flexible schedule including weekends",
        "Passion for fashion and customer service",
        "Bilingual (English/Swahili) preferred"
      ]
    },
    {
      title: "Junior Graphic Designer",
      department: "Creative",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Create visual content for our website, social media, and marketing materials that reflects our brand aesthetic.",
      requirements: [
        "Diploma in Graphic Design or related field",
        "Proficiency in Adobe Creative Suite",
        "Portfolio showcasing fashion or lifestyle design",
        "Understanding of brand identity and visual storytelling"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Coffee className="w-6 h-6 text-brown-500" />,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options"
    },
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      title: "Professional Development",
      description: "Training opportunities and career advancement"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Team Culture",
      description: "Collaborative and inclusive work environment"
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: "Employee Discounts",
      description: "Generous discounts on all Amalia Haven products"
    },
    {
      icon: <Car className="w-6 h-6 text-green-500" />,
      title: "Transportation",
      description: "Transport allowance for Nairobi-based employees"
    }
  ];

  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-plum dark:text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Be part of a company that's revolutionizing fashion for African women. We're looking for passionate individuals who share our vision of empowering women through style.
            </p>
          </div>

          <Card className="border-dusty-rose/20 mb-16">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white text-center">Why Work at Amalia Haven?</CardTitle>
              <CardDescription className="text-center">
                We believe that great people create great fashion experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="font-semibold text-deep-plum dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-plum dark:text-white text-center mb-8">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="border-dusty-rose/20">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-deep-plum dark:text-white">{position.title}</CardTitle>
                      <Badge variant="outline" className="border-dusty-rose/30">
                        {position.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{position.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-deep-plum dark:text-white mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>• {req}</li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-dusty-rose to-soft-mauve hover:from-dusty-rose/90 hover:to-soft-mauve/90">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-dusty-rose/20 mb-16">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Our Culture</CardTitle>
              <CardDescription>
                What makes Amalia Haven a great place to work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-deep-plum dark:text-white">Empowerment & Growth</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We believe in empowering our team members to take ownership of their work and grow within the company. Every voice matters, and we encourage innovation and creative thinking.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Regular performance reviews and feedback</li>
                    <li>• Mentorship programs and skill development</li>
                    <li>• Leadership opportunities across all levels</li>
                    <li>• Support for continued education and training</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-deep-plum dark:text-white">Diversity & Inclusion</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our strength comes from our diversity. We're committed to creating an inclusive environment where everyone can thrive, regardless of their background or identity.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Equal opportunity employer</li>
                    <li>• Inclusive hiring practices</li>
                    <li>• Cultural celebration and awareness</li>
                    <li>• Safe and respectful workplace</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Application Process</CardTitle>
              <CardDescription>
                How to join the Amalia Haven team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-dusty-rose rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">
                      1
                    </div>
                    <h3 className="font-semibold text-deep-plum dark:text-white mb-1">Apply</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Submit your application and CV through our careers portal
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-soft-mauve rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">
                      2
                    </div>
                    <h3 className="font-semibold text-deep-plum dark:text-white mb-1">Review</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Our HR team will review your application within 5 business days
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blush-pink rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">
                      3
                    </div>
                    <h3 className="font-semibold text-deep-plum dark:text-white mb-1">Interview</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Selected candidates will be invited for an interview
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">
                      4
                    </div>
                    <h3 className="font-semibold text-deep-plum dark:text-white mb-1">Welcome</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Join our team and start your journey with us
                    </p>
                  </div>
                </div>

                <div className="bg-dusty-rose/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Ready to Apply?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Send your CV and cover letter to our HR team. We look forward to hearing from you!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <Button className="bg-gradient-to-r from-dusty-rose to-soft-mauve hover:from-dusty-rose/90 hover:to-soft-mauve/90">
                      careers@amaliahaven.com
                    </Button>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <p>HR Department</p>
                      <p>+254 700 123 456</p>
                    </div>
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