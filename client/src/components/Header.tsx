import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";

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
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-dusty-rose/10">
      <div className="container mx-auto px-4">


        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-deep-plum">
              <span className="text-dusty-rose">Amalia</span> Haven
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    location.startsWith(item.href)
                      ? "text-dusty-rose"
                      : "text-deep-plum hover:text-dusty-rose"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 border border-dusty-rose/20 rounded-full focus:outline-none focus:ring-2 focus:ring-dusty-rose/30"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-dusty-rose/50" />
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onAuthOpen}
                className="p-2 text-deep-plum hover:text-dusty-rose transition-colors"
              >
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 text-deep-plum hover:text-dusty-rose transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button
                onClick={onCartOpen}
                className="p-2 text-deep-plum hover:text-dusty-rose transition-colors relative"
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
                className="lg:hidden p-2 text-deep-plum hover:text-dusty-rose transition-colors"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-dusty-rose/10 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-deep-plum hover:text-dusty-rose font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <form onSubmit={handleSearch} className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-dusty-rose/20 rounded-full focus:outline-none focus:ring-2 focus:ring-dusty-rose/30"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-dusty-rose/50" />
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
