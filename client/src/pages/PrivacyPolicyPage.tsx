import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, User, Database, Globe } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-plum dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last updated: January 2025
            </p>
          </div>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Our Commitment to Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                At Amalia Haven, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines the types of information we collect, how we use it, and your rights regarding your personal data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <User className="w-5 h-5" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Personal Information</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  We collect personal information that you provide to us when you:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>• Create an account on our website</li>
                  <li>• Make a purchase or place an order</li>
                  <li>• Subscribe to our newsletter</li>
                  <li>• Contact our customer service</li>
                  <li>• Participate in surveys or promotions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Information Collected</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-deep-plum dark:text-white mb-2">Account Information</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Full name</li>
                      <li>• Email address</li>
                      <li>• Phone number</li>
                      <li>• Password (encrypted)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-deep-plum dark:text-white mb-2">Order Information</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Billing address</li>
                      <li>• Shipping address</li>
                      <li>• Payment information</li>
                      <li>• Order history</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Automatically Collected Information</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>• IP address and location data</li>
                  <li>• Browser type and version</li>
                  <li>• Device information</li>
                  <li>• Website usage patterns</li>
                  <li>• Cookies and tracking data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <Eye className="w-5 h-5" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Primary Uses</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                    <li>• Process and fulfill your orders</li>
                    <li>• Provide customer service and support</li>
                    <li>• Send order confirmations and updates</li>
                    <li>• Manage your account and preferences</li>
                    <li>• Prevent fraud and enhance security</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Marketing and Communications</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                    <li>• Send promotional emails and newsletters (with your consent)</li>
                    <li>• Personalize your shopping experience</li>
                    <li>• Recommend products based on your preferences</li>
                    <li>• Notify you about sales and special offers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Analytics and Improvement</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                    <li>• Analyze website usage and performance</li>
                    <li>• Improve our products and services</li>
                    <li>• Conduct market research and surveys</li>
                    <li>• Develop new features and offerings</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <Database className="w-5 h-5" />
                Data Storage and Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Security Measures</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                    <li>• SSL encryption for all data transmission</li>
                    <li>• Secure payment processing through certified providers</li>
                    <li>• Regular security audits and monitoring</li>
                    <li>• Access controls and employee training</li>
                    <li>• Data backup and recovery procedures</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Data Retention</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Account information is kept for the duration of your account, and order information is retained for 7 years for accounting and legal purposes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  We work with trusted third-party service providers to enhance your shopping experience:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-deep-plum dark:text-white mb-2">Payment Processing</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Stripe (credit card processing)</li>
                      <li>• M-Pesa (mobile payments)</li>
                      <li>• PayPal (online payments)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-deep-plum dark:text-white mb-2">Analytics & Marketing</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Google Analytics</li>
                      <li>• Facebook Pixel</li>
                      <li>• Mailchimp (email marketing)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  These third parties have their own privacy policies and are responsible for their own data practices. We do not sell or rent your personal information to third parties.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Your Rights</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Under Kenyan data protection laws, you have the right to:
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate or incomplete information</li>
                    <li>• Delete your personal information</li>
                    <li>• Object to processing of your information</li>
                    <li>• Withdraw consent for marketing communications</li>
                    <li>• Request data portability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-deep-plum dark:text-white mb-2">How to Exercise Your Rights</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    To exercise any of these rights, please contact us at:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Email:</strong> privacy@amaliahaven.com<br/>
                      <strong>Phone:</strong> +254 700 123 456<br/>
                      <strong>Address:</strong> Privacy Officer, Amalia Haven, Westlands, Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-deep-plum dark:text-white mb-2">Essential Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Required for the website to function properly, including shopping cart functionality and user authentication.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-deep-plum dark:text-white mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Help us understand how visitors interact with our website to improve user experience.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  You can manage your cookie preferences through your browser settings or by contacting us directly.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
              </p>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and sending you an email notification. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-deep-plum dark:text-white mb-2">General Inquiries</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Email:</strong> support@amaliahaven.com<br/>
                      <strong>Phone:</strong> +254 700 123 456
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-deep-plum dark:text-white mb-2">Privacy Officer</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Email:</strong> privacy@amaliahaven.com<br/>
                      <strong>Address:</strong> Westlands, Nairobi, Kenya
                    </p>
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