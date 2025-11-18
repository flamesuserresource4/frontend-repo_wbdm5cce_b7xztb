import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Mono Script Hoodie",
    price: "$84",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Core Heavy Tee",
    price: "$42",
    image:
      "https://images.unsplash.com/photo-1542060748-de3d9c8629f6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Field Puffer Jacket",
    price: "$168",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Drop</h2>
          <a href="#" className="text-white/70 hover:text-white text-sm">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">{p.title}</h3>
                  <p className="text-white/70 text-sm">{p.price}</p>
                </div>
                <button className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:scale-[1.02] active:scale-95 transition-transform">
                  Add
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
