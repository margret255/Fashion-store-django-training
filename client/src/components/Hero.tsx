import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-dusty-rose/20 to-soft-mauve/20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-lg text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Discover Your{" "}
            <span className="text-pink-300 drop-shadow-lg">Perfect</span>{" "}
            Style
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white/90 drop-shadow-sm">
            Curated fashion and beauty essentials for the modern woman. From everyday elegance to statement pieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link
              href="/products"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Shop New Arrivals
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-white hover:text-deep-plum transition-colors text-center shadow-lg"
            >
              Explore Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
