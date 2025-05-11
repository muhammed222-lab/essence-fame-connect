import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  showGetStarted?: boolean;
}

const HeroSection = ({ showGetStarted = true }: HeroSectionProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden landing-gradient">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-essence-black -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-15"
          animate={{
            background: [
              "radial-gradient(circle at 30% 50%, rgba(239, 68, 68, 0.6), transparent 70%)",
              "radial-gradient(circle at 70% 50%, rgba(255, 193, 7, 0.6), transparent 70%)",
              "radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.6), transparent 70%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Enhanced logo animation container */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-md mx-auto">
              <motion.div
                className="blob-shape bg-essence-orange/90 w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto rounded-full overflow-hidden flex items-center justify-center shadow-2xl shadow-essence-orange/30"
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70%/60% 30% 70% 40%",
                    "50% 50% 30% 70%/55% 45% 55% 45%",
                    "40% 60% 70% 30%/40% 50% 50% 60%",
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                  animate={{
                    scale: [0.98, 1.02, 0.98],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <motion.img
                    src="/favicon.png"
                    alt="Essence FameFace Logo"
                    className="w-32 h-32 mb-4 drop-shadow-lg"
                  />
                  <motion.p className="text-white font-medium px-4 text-sm md:text-base">
                    Essence FameFace connects creators with premium brands. Our
                    experts help you monetize content and secure deals that
                    elevate your career.
                  </motion.p>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent" />
              </motion.div>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-essence-cream/80"
                  style={{
                    width: Math.random() * 10 + 5 + "px",
                    height: Math.random() * 10 + 5 + "px",
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, (Math.random() - 0.5) * 50],
                    x: [0, (Math.random() - 0.5) * 30],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-essence-cream">Monetize</span> Your <br />
              <span className="text-essence-orange">Creative Talent</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="block">
                Join the{" "}
                <span className="font-semibold text-essence-cream">
                  5,000+ creators
                </span>{" "}
                already earning with brand partnerships
              </span>
              <span className="block text-lg">
                We match you with premium brands looking for your exact creative
                skills
              </span>
            </motion.p>

            {showGetStarted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/home" className="flex-1">
                  <Button
                    size="lg"
                    className="w-full bg-essence-orange hover:bg-essence-orange/90 text-white text-lg px-8 py-6 rounded-full transition-all hover:scale-[1.02] shadow-lg hover:shadow-essence-orange/30"
                  >
                    Start Earning Today →
                  </Button>
                </Link>
                <Link to="/registration" className="flex-1">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-essence-cream hover:text-white hover:bg-essence-cream/10 text-lg px-8 py-6 rounded-full transition-all hover:scale-[1.02]"
                  >
                    Join Our Community
                  </Button>
                </Link>
              </motion.div>
            )}

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <motion.img
                      key={item}
                      src={`/creator-${item}.jpg`}
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt="Creator"
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  ))}
                </div>
                <span className="ml-3 text-gray-300 text-sm">
                  Trusted by top creators
                </span>
              </div>

              <div className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 mr-2 text-essence-orange"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Premium brand deals</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
