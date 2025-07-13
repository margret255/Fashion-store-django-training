import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileText, Shield, CreditCard, Package, AlertTriangle } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-plum dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Please read these terms carefully before using our website or making a purchase.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last updated: January 2025
            </p>
          </div>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <Scale className="w-5 h-5" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                By accessing and using the Amalia Haven website ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service. These Terms apply to all visitors, users, and customers of the Service.
              </p>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Use of Our Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Permitted Use</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  You may use our Service for lawful purposes only. You agree not to use the Service:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>• In any way that violates applicable laws or regulations</li>
                  <li>• To transmit harmful, threatening, or offensive content</li>
                  <li>• To impersonate others or provide false information</li>
                  <li>• To interfere with or disrupt the Service</li>
                  <li>• To attempt unauthorized access to our systems</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Account Responsibilities</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  If you create an account with us, you are responsible for:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>• Maintaining the confidentiality of your account information</li>
                  <li>• All activities that occur under your account</li>
                  <li>• Notifying us immediately of any unauthorized use</li>
                  <li>• Providing accurate and complete information</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Purchase Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Order Acceptance</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All orders are subject to acceptance by Amalia Haven. We reserve the right to refuse or cancel any order at any time for any reason, including but not limited to product availability, errors in product information, or suspected fraudulent activity.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Pricing and Payment</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>• All prices are in Kenyan Shillings (KES) and include applicable taxes</li>
                  <li>• Prices are subject to change without notice</li>
                  <li>• Payment must be made in full before order processing</li>
                  <li>• We accept M-Pesa, credit cards, and bank transfers</li>
                  <li>• Failed payments may result in order cancellation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-3">Product Information</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions or other content is error-free, complete, or current. Colors may vary due to monitor settings and lighting conditions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <Package className="w-5 h-5" />
                Shipping and Delivery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Delivery Terms</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>• Delivery times are estimates and not guaranteed</li>
                  <li>• Title and risk of loss pass to you upon delivery</li>
                  <li>• You are responsible for providing accurate delivery information</li>
                  <li>• Additional charges may apply for remote locations</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Failed Deliveries</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  If delivery fails due to incorrect address information or unavailability at the delivery location, additional shipping charges may apply for redelivery attempts.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Returns and Refunds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Return Policy</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>• Returns must be initiated within 14 days of delivery</li>
                  <li>• Items must be in original condition with tags attached</li>
                  <li>• Return authorization is required before sending items back</li>
                  <li>• Customer is responsible for return shipping costs</li>
                  <li>• Sale items are final sale and cannot be returned</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Refund Processing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Refunds will be processed within 3-5 business days after we receive and inspect your returned items. Refunds will be issued to your original payment method.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Our Rights</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Amalia Haven and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Restrictions</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  You may not:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                  <li>• Reproduce, distribute, or create derivative works</li>
                  <li>• Use our trademarks or logos without permission</li>
                  <li>• Copy or adapt our website design or content</li>
                  <li>• Reverse engineer or attempt to extract source code</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Disclaimers and Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Service Disclaimer</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, timely, secure, or error-free.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Limitation of Liability</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  In no event shall Amalia Haven, its directors, employees, partners, or suppliers be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or use, arising out of your use of the Service.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Maximum Liability</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our total liability to you for any claim arising out of these Terms shall not exceed the amount you paid for the specific product or service that gave rise to the claim.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                These Terms shall be governed and construed in accordance with the laws of Kenya. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts of Kenya.
              </p>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice before any new terms take effect. Your continued use of the Service after changes become effective constitutes acceptance of the new Terms.
              </p>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="border-dusty-rose/20">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
                    <h4 className="font-medium text-deep-plum dark:text-white mb-2">Legal Department</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Email:</strong> legal@amaliahaven.com<br/>
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