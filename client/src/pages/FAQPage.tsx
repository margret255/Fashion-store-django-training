import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 3-5 business days within Nairobi and 3-7 days for other Kenyan cities. Express shipping is available for faster delivery (1-2 days in Nairobi, 2-3 days elsewhere)."
        },
        {
          question: "Do you offer free shipping?",
          answer: "Yes! We offer free standard shipping on all orders over KES 3,000 within Kenya. For orders under KES 3,000, standard shipping costs KES 300."
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently, we only ship within Kenya. We're working on expanding our international shipping options and will update customers when available."
        },
        {
          question: "Can I track my order?",
          answer: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can also track your order on our website using your order number or email address."
        }
      ]
    },
    {
      category: "Orders & Payment",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept M-Pesa, credit cards (Visa, Mastercard), debit cards, and bank transfers. All payments are processed securely through our encrypted payment system."
        },
        {
          question: "Can I cancel my order?",
          answer: "You can cancel your order within 2 hours of placing it if it hasn't been processed yet. After that, you'll need to wait for delivery and return the items following our return policy."
        },
        {
          question: "Why was my payment declined?",
          answer: "Payment declines can happen for various reasons: insufficient funds, expired card, incorrect details, or bank security measures. Please check your payment information and try again, or contact your bank."
        },
        {
          question: "Do you offer installment payments?",
          answer: "Currently, we only accept full payment at checkout. However, we're exploring partnerships with payment providers to offer installment options in the future."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "How do I return an item?",
          answer: "Contact our customer service team within 14 days of delivery. We'll provide you with a return authorization number and instructions. Items must be unused, with original tags attached."
        },
        {
          question: "What if I received a damaged item?",
          answer: "We're sorry to hear that! Please contact us immediately with photos of the damaged item. We'll arrange for a replacement or full refund, and we'll cover all return shipping costs."
        },
        {
          question: "Can I exchange an item for a different size?",
          answer: "Yes! You can exchange items for a different size within 14 days of delivery. The item must be unused with original tags. Contact our customer service to arrange the exchange."
        },
        {
          question: "How long do refunds take?",
          answer: "Refunds are processed within 3-5 business days after we receive and inspect your returned items. The refund will be credited to your original payment method."
        }
      ]
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          question: "How do I know what size to order?",
          answer: "Check our detailed size guide for each product category. We provide measurements in inches and international size conversions. When between sizes, we recommend sizing up for a more comfortable fit."
        },
        {
          question: "Are your products authentic?",
          answer: "Yes, all our products are carefully curated and sourced from trusted suppliers. We stand behind the quality and authenticity of every item we sell."
        },
        {
          question: "Do you restock sold-out items?",
          answer: "We regularly restock popular items, but availability depends on our suppliers. Sign up for restock notifications on product pages to be notified when items become available again."
        },
        {
          question: "Can I see product reviews?",
          answer: "Customer reviews are available on each product page. We encourage customers to leave honest reviews to help others make informed decisions."
        }
      ]
    },
    {
      category: "Account & Website",
      questions: [
        {
          question: "Do I need an account to shop?",
          answer: "No, you can shop as a guest. However, creating an account allows you to track orders, save favorite items, and enjoy faster checkout for future purchases."
        },
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we use industry-standard encryption to protect your personal and payment information. We never share your data with third parties without your consent."
        },
        {
          question: "How do I unsubscribe from emails?",
          answer: "You can unsubscribe from marketing emails by clicking the 'Unsubscribe' link at the bottom of any email, or by updating your preferences in your account settings."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-plum dark:text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find quick answers to common questions about shopping with Amalia Haven.
            </p>
          </div>

          <Card className="border-dusty-rose/20 mb-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search FAQs
              </CardTitle>
              <CardDescription>
                Type keywords to find specific answers quickly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                type="text"
                placeholder="Search questions and answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-dusty-rose/30 focus:border-dusty-rose"
              />
            </CardContent>
          </Card>

          <div className="space-y-8">
            {filteredFaqs.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-dusty-rose/20">
                <CardHeader>
                  <CardTitle className="text-deep-plum dark:text-white flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    {category.category}
                    <Badge variant="outline" className="ml-2 border-dusty-rose/30">
                      {category.questions.length} questions
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left text-deep-plum dark:text-white hover:text-dusty-rose">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFaqs.length === 0 && searchTerm && (
            <Card className="border-dusty-rose/20">
              <CardContent className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-deep-plum dark:text-white mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We couldn't find any questions matching "{searchTerm}". Try different keywords or browse our categories above.
                </p>
              </CardContent>
            </Card>
          )}

          <Card className="border-dusty-rose/20 mt-8">
            <CardHeader>
              <CardTitle className="text-deep-plum dark:text-white">Still need help?</CardTitle>
              <CardDescription>
                Can't find the answer you're looking for? Our customer service team is here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-dusty-rose/10 rounded-lg">
                  <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Email Support</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Get detailed help via email
                  </p>
                  <p className="text-dusty-rose font-medium">support@amaliahaven.com</p>
                </div>
                <div className="text-center p-4 bg-soft-mauve/10 rounded-lg">
                  <h3 className="font-semibold text-deep-plum dark:text-white mb-2">Phone Support</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Speak with our team directly
                  </p>
                  <p className="text-soft-mauve font-medium">+254 700 123 456</p>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
                <p>Customer service hours: Monday-Friday 9AM-6PM, Saturday 10AM-4PM</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}