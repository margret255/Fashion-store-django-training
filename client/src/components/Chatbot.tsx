import { useState } from "react";
import { MessageCircle, X, Send, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey Queen 👑! Need help finding the perfect outfit or glowing skin products?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickReplies = [
    "Browse Clothes",
    "Show Haircare",
    "Track My Order",
    "Size Guide"
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Mock bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(message),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("clothes") || lowerMessage.includes("clothing")) {
      return "I'd love to help you find the perfect outfit! Check out our latest collection of dresses, tops, and more. What style are you looking for?";
    }
    
    if (lowerMessage.includes("hair") || lowerMessage.includes("haircare")) {
      return "Our haircare collection includes everything from nourishing shampoos to professional styling tools. What's your hair type?";
    }
    
    if (lowerMessage.includes("track") || lowerMessage.includes("order")) {
      return "To track your order, please provide your order number or email address. You can also check your order status in your account dashboard.";
    }
    
    if (lowerMessage.includes("size") || lowerMessage.includes("sizing")) {
      return "Our size guide helps you find the perfect fit! Each product page has detailed measurements. Would you like me to help you with a specific item?";
    }
    
    return "I'm here to help! You can ask me about our products, sizing, orders, or anything else. What would you like to know?";
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col mb-4">
          {/* Header */}
          <div className="bg-dusty-rose text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Crown className="h-4 w-4 text-dusty-rose" />
                </div>
                <div>
                  <h4 className="font-semibold">Amalia Assistant</h4>
                  <p className="text-xs text-white/80">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/80"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "items-start space-x-2"}`}
                >
                  {message.sender === "bot" && (
                    <div className="w-6 h-6 bg-dusty-rose rounded-full flex items-center justify-center">
                      <Crown className="h-3 w-3 text-white" />
                    </div>
                  )}
                  <div
                    className={`rounded-xl p-3 max-w-xs ${
                      message.sender === "user"
                        ? "bg-dusty-rose text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="flex flex-col space-y-2">
                  {quickReplies.map((reply) => (
                    <Button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="bg-dusty-rose text-white px-4 py-2 rounded-full text-sm hover:bg-dusty-rose/80 transition-colors"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-dusty-rose/30"
              />
              <Button
                onClick={() => handleSendMessage(inputMessage)}
                className="bg-dusty-rose text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-dusty-rose/80 transition-colors"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-dusty-rose text-white w-14 h-14 rounded-full shadow-lg hover:bg-dusty-rose/80 transition-colors flex items-center justify-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
}
