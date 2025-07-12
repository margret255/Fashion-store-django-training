import { Link } from "wouter";
import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-plum mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Discover curated collections for every aspect of your style
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group cursor-pointer"
            >
              <div
                className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]"
                style={{
                  backgroundImage: `url('${category.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-deep-plum/60 to-transparent group-hover:from-deep-plum/80 transition-all duration-300" />
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white">
                  <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-2">{category.name}</h3>
                  <p className="text-xs md:text-sm text-white/80 hidden sm:block">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
