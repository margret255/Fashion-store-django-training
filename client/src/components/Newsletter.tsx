import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Mock newsletter signup
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to the family! 👑",
        description: "You've successfully subscribed to our newsletter",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-16 bg-dusty-rose dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl mb-8 text-white/90">
            Get exclusive access to new collections, sales, and style tips delivered to your inbox
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-full text-deep-plum placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 border-0"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-white text-dusty-rose px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-sm mt-4 text-white/70">
            Join 50,000+ fashion lovers. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
