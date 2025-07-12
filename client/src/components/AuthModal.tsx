import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  const { login, signup, isLoading } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === "signup") {
      if (!formData.fullName.trim()) {
        toast({
          title: "Full Name Required",
          description: "Please enter your full name",
          variant: "destructive"
        });
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Passwords Don't Match",
          description: "Please make sure your passwords match",
          variant: "destructive"
        });
        return;
      }
      
      if (!acceptTerms) {
        toast({
          title: "Terms Required",
          description: "Please accept the terms of service",
          variant: "destructive"
        });
        return;
      }
      
      const result = await signup(formData.fullName, formData.email, formData.password);
      if (result.success) {
        toast({
          title: "Welcome to Amalia Haven! 👑",
          description: "Your account has been created successfully"
        });
        onClose();
      } else {
        toast({
          title: "Signup Failed",
          description: result.error || "Please try again",
          variant: "destructive"
        });
      }
    } else {
      const result = await login(formData.email, formData.password);
      if (result.success) {
        toast({
          title: "Welcome back! 👑",
          description: "You've been logged in successfully"
        });
        onClose();
      } else {
        toast({
          title: "Login Failed",
          description: result.error || "Please check your credentials",
          variant: "destructive"
        });
      }
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setRememberMe(false);
    setAcceptTerms(false);
  };

  const switchMode = (newMode: "login" | "signup") => {
    setMode(newMode);
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-md mx-4 overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-deep-plum mb-2">
              {mode === "login" ? "Welcome Back" : "Join Amalia Haven"}
            </h2>
            <p className="text-gray-600">
              {mode === "login" 
                ? "Sign in to your account" 
                : "Create your account and start shopping"
              }
            </p>
          </div>

          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => switchMode("login")}
              className={`flex-1 pb-3 text-center font-medium transition-colors ${
                mode === "login"
                  ? "text-dusty-rose border-b-2 border-dusty-rose"
                  : "text-gray-500 hover:text-dusty-rose"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => switchMode("signup")}
              className={`flex-1 pb-3 text-center font-medium transition-colors ${
                mode === "signup"
                  ? "text-dusty-rose border-b-2 border-dusty-rose"
                  : "text-gray-500 hover:text-dusty-rose"
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <Label htmlFor="fullName" className="block text-sm font-medium text-deep-plum mb-2">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dusty-rose/30"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-deep-plum mb-2">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dusty-rose/30"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-deep-plum mb-2">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dusty-rose/30"
                placeholder="Enter your password"
                required
              />
            </div>

            {mode === "signup" && (
              <div>
                <Label htmlFor="confirmPassword" className="block text-sm font-medium text-deep-plum mb-2">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dusty-rose/30"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {mode === "login" && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-sm text-dusty-rose hover:text-deep-plum">
                  Forgot password?
                </button>
              </div>
            )}

            {mode === "signup" && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mr-2"
                  required
                />
                <span className="text-sm text-gray-600">
                  I agree to the{" "}
                  <button type="button" className="text-dusty-rose hover:text-deep-plum">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button type="button" className="text-dusty-rose hover:text-deep-plum">
                    Privacy Policy
                  </button>
                </span>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-dusty-rose text-white py-3 rounded-lg font-semibold hover:bg-dusty-rose/80 transition-colors disabled:opacity-50"
            >
              {isLoading 
                ? (mode === "login" ? "Signing In..." : "Creating Account...") 
                : (mode === "login" ? "Sign In" : "Create Account")
              }
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">Or continue with</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-deep-plum"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
