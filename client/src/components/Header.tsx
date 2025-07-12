import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, User, Heart, ShoppingBag, Menu, X, Sun, Moon } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/components/ThemeProvider";

interface HeaderProps {
  onCartOpen: () => void;
  onAuthOpen: () => void;
}

export default function Header({ onCartOpen, onAuthOpen }: HeaderProps) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getCartItemCount } = useCart();
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: "Clothes", href: "/products/clothes" },
    { name: "Shoes", href: "/products/shoes" },
    { name: "Bags", href: "/products/bags" },
    { name: "Hair", href: "/products/hair" },
    { name: "Beauty", href: "/products/beauty" },
    { name: "Sale", href: "/products/sale" }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-dusty-rose/10 dark:border-gray-700">
      <div className="container mx-auto px-4">


        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center flex-1 mr-4">
            <Link href="/" className="text-xl md:text-2xl font-bold text-deep-plum dark:text-white whitespace-nowrap">
              <span className="text-dusty-rose">Amalia</span> Haven
            </Link>
            <div className="hidden lg:flex items-center space-x-6 ml-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors whitespace-nowrap ${
                    location.startsWith(item.href)
                      ? "text-dusty-rose"
                      : "text-deep-plum dark:text-white hover:text-dusty-rose"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search Bar */}
            <div className="hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 lg:w-64 pl-10 pr-4 py-2 border border-dusty-rose/20 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-dusty-rose/30 bg-white dark:bg-gray-800 text-deep-plum dark:text-white"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-dusty-rose/50" />
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 text-deep-plum dark:text-white hover:text-dusty-rose transition-colors"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
              <button
                onClick={onAuthOpen}
                className="p-2 text-deep-plum dark:text-white hover:text-dusty-rose transition-colors"
              >
                <User className="h-5 w-5" />
              </button>
              <button className="hidden sm:block p-2 text-deep-plum dark:text-white hover:text-dusty-rose transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button
                onClick={onCartOpen}
                className="p-2 text-deep-plum dark:text-white hover:text-dusty-rose transition-colors relative"
              >
                <ShoppingBag className="h-5 w-5" />
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blush-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartItemCount()}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-deep-plum dark:text-white hover:text-dusty-rose transition-colors"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-dusty-rose/10 dark:border-gray-700 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-deep-plum dark:text-white hover:text-dusty-rose font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="md:hidden">
                <form onSubmit={handleSearch} className="relative mt-4">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-dusty-rose/20 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-dusty-rose/30 bg-white dark:bg-gray-800 text-deep-plum dark:text-white"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-dusty-rose/50" />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
