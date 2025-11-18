import { Menu, ShoppingBag, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
            <Menu className="w-5 h-5 text-white" />
          </button>
          <span className="text-white tracking-widest font-semibold text-sm">EST. 2025</span>
        </div>

        <div className="text-white font-extrabold tracking-[0.35em] text-sm sm:text-base select-none">
          JOZODESIGNS
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
            <Search className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
            <ShoppingBag className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
