import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-plum dark:text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white">Get in Touch</CardTitle>
                  <CardDescription>
                    Ready to help you find the perfect outfit or answer any questions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-dusty-rose" />
                    <div>
                      <p className="font-medium text-deep-plum dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">support@amaliahaven.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-dusty-rose" />
                    <div>
                      <p className="font-medium text-deep-plum dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300">+254 700 123 456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-dusty-rose" />
                    <div>
                      <p className="font-medium text-deep-plum dark:text-white">Address</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Westlands, Nairobi<br />
                        Kenya
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-dusty-rose" />
                    <div>
                      <p className="font-medium text-deep-plum dark:text-white">Customer Service Hours</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white">Follow Us</CardTitle>
                  <CardDescription>
                    Stay connected for the latest fashion trends and updates.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="border-dusty-rose/30">
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm" className="border-dusty-rose/30">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="border-dusty-rose/30">
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-dusty-rose/20">
              <CardHeader>
                <CardTitle className="text-deep-plum dark:text-white">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-deep-plum dark:text-white mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="border-dusty-rose/30 focus:border-dusty-rose"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-deep-plum dark:text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="border-dusty-rose/30 focus:border-dusty-rose"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-deep-plum dark:text-white mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={6}
                      className="border-dusty-rose/30 focus:border-dusty-rose"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-dusty-rose to-soft-mauve hover:from-dusty-rose/90 hover:to-soft-mauve/90"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}