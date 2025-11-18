import { motion } from "framer-motion";
import { Flame, ShieldCheck, Recycle } from "lucide-react";

const items = [
  {
    icon: Flame,
    title: "Heat Without the Hype",
    desc: "Timeless essentials with a modern edge. Limited runs, no compromises.",
  },
  {
    icon: ShieldCheck,
    title: "Built Better",
    desc: "Premium materials, double-stitched seams, and fits dialed to perfection.",
  },
  {
    icon: Recycle,
    title: "Conscious Craft",
    desc: "Small-batch production and responsible sourcing. Better for you and the planet.",
  },
];

export default function Features() {
  return (
    <section id="values" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_10%,rgba(255,255,255,0.06),transparent),radial-gradient(700px_300px_at_90%_90%,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
