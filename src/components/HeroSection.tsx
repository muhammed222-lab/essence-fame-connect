/* eslint-disable no-irregular-whitespace */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  showGetStarted?: boolean;
}

const HeroSection = ({ showGetStarted = true }: HeroSectionProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-essence-black overflow-hidden">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-essence-black via-essence-black/90 to-essence-orange/20"
          animate={{
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Grid texture overlay */}
      <div className="absolute inset-0 -z-10 opacity-5 bg-[url('/grid-pattern.svg')]"></div>

      <div className="container mx-auto px-6 py-20 md:py-32 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Elevate Your{" "}
                <span className="text-essence-orange">Creative Business</span>
              </h1>
              <p className="text-xl text-gray-300 mt-6 mb-8 max-w-lg">
                Essence_FameFace is a community agency that helps models and
                content creators secure brand deals and monetise your contents,
                Our team of experts helps secure brand deals for content
                creators and models who have the creative minds and skill to
                create quality ads videos for brands. Be part of the community
                and monetise your contents.
              </p>
              <img
                src="/handfull.png"
                alt="handfull"
                width={300}
                height={200}
                className="m-auto"
              />
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {[
                "Guaranteed payment protection",
                "Direct access to premium brands",
                "Transparent contract terms",
                "Dedicated creator support",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-essence-orange flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            {showGetStarted && (
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/home" className="flex-1">
                  <Button
                    size="lg"
                    className="w-full bg-essence-orange hover:bg-essence-orange/90 text-white text-lg px-8 py-6 rounded-lg transition-all hover:scale-[1.02]"
                  >
                    Start Earning <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/registration" className="flex-1">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-gray-600 hover:border-essence-cream text-black hover:text-black text-lg px-8 py-6 rounded-lg transition-all hover:scale-[1.02]"
                  >
                    Explore Benefits
                  </Button>
                </Link>
              </motion.div>
            )}

            {/* Trust Indicators */}
            <motion.div
              className="pt-8 flex items-center flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((item) => (
                    <img
                      key={item}
                      src={`/creator-${item}.jpg`}
                      className="w-10 h-10 rounded-full border-2 border-essence-black"
                      alt="Creator"
                    />
                  ))}
                </div>
                <span className="ml-3 text-gray-400 text-sm">
                  Trusted by 1,023+ creators
                </span>
              </div>
            </motion.div>
          </div>

          {/* Logo Display */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md">
              <motion.div
                className="aspect-square rounded-2xl bg-gradient-to-br from-essence-orange/10 to-essence-cream/5 border border-essence-orange/20 backdrop-blur-sm p-8 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(239, 68, 68, 0)",
                    "0 0 20px rgba(239, 68, 68, 0.1)",
                    "0 0 0 rgba(239, 68, 68, 0)",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <motion.img
                  src="/favicon.png"
                  alt="Essence FameFace Logo"
                  className="w-64 h-64 object-contain"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-essence-orange/10 border border-essence-orange/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-essence-cream/10 border border-essence-cream/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
