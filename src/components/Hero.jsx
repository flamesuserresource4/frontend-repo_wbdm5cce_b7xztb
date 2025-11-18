import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background gradient and noise */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(168,85,247,0.25),transparent),radial-gradient(800px_400px_at_10%_20%,rgba(59,130,246,0.25),transparent)]" />
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\' viewBox=\'0 0 200 200\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'1\'/></svg>')"}} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center py-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs tracking-widest text-white/80 backdrop-blur-sm"
          >
            JOZODESIGNS • STREETWEAR LABEL
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-5xl md:text-7xl font-black leading-[1.05] text-white"
          >
            Crafted for the bold. Built for the streets.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-white/80 max-w-xl"
          >
            Minimal silhouettes, premium fabrics, and a relentless focus on detail. Express your edge with pieces that move with you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#collection" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-semibold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-transform">
              Shop the Drop
            </a>
            <a href="#values" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 font-semibold tracking-wide hover:bg-white/10 transition-colors">
              Our Vision
            </a>
          </motion.div>
        </div>

        {/* Visual side */}
        <div className="relative h-[60vh] md:h-auto md:min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 backdrop-blur-md"
          />
          <motion.img
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            src="https://images.unsplash.com/photo-1603251579431-8041402bdeda?q=80&w=1200&auto=format&fit=crop"
            alt="Streetwear model"
            className="absolute -bottom-8 right-1/2 md:right-0 md:left-auto md:bottom-0 w-[520px] max-w-none rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
