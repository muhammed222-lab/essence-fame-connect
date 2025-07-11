/* eslint-disable no-irregular-whitespace */
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface HeroSectionProps {
  showGetStarted?: boolean;
}

const clients = [
  { id: "BB19", name: "Alo Agelica Eyinade" },
  { id: "BC11", name: "Udechukwu Ihuoma" },
];

const HeroSection = ({ showGetStarted = true }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // State to track video status for custom controls
  const [isPlaying, setIsPlaying] = useState(true); // Video starts playing
  const [isMuted, setIsMuted] = useState(true); // Video starts muted for autoplay

  // Move openRows state here
  const [openRows, setOpenRows] = useState<boolean[]>(() =>
    clients.map(() => false)
  );

  // Function to toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Function to toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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
                {/* --- I've restored this button which was missing in your last paste --- */}
                <Link
                  to="https://chat.whatsapp.com/EuO5cUepgUELgR9xRHvWvc"
                  className="flex-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full bg-essence-orange hover:bg-essence-orange/90 text-white text-lg px-8 py-6 rounded-lg transition-all hover:scale-[1.02]"
                  >
                    Join Community <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/Contents" className="flex-1">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-gray-600 hover:border-essence-cream text-black hover:text-black text-lg px-8 py-6 rounded-lg transition-all hover:scale-[1.02]"
                  >
                    View Content
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

          {/* --- VIDEO SECTION UPDATED --- */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Increased max-width from md to xl for a larger video */}
            <div className="relative w-full max-w-xl">
              <motion.div
                className="group relative aspect-[9/16] w-full rounded-2xl bg-gradient-to-br from-essence-orange/10 to-essence-cream/5 border border-essence-orange/20 backdrop-blur-sm overflow-hidden"
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
                <motion.video
                  ref={videoRef}
                  src="/EssenceFameFace.mp4"
                  autoPlay
                  loop
                  muted // Start muted to allow autoplay
                  playsInline
                  className="w-full h-full object-fit"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Custom Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={togglePlayPause}
                      className="text-white hover:text-essence-orange transition-colors p-2 rounded-full bg-black/30 hover:bg-black/50"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-essence-orange transition-colors p-2 rounded-full bg-black/30 hover:bg-black/50"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements will now float around the larger video */}
              <motion.div /* ...omitted for brevity, no changes here... */ />
              <motion.div /* ...omitted for brevity, no changes here... */ />
              {/* Contact Admin Button */}
              <a
                href="https://wa.me/2347061756474"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-center"
              >
                <Button
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-lg shadow-lg transition-all hover:scale-105"
                  style={{
                    boxShadow: "0 0 16px 2px #25D366, 0 0 32px 4px #25D36655",
                  }}
                >
                  Contact the Admin to Register
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
        <h1 className="text-2xl font-bold mt-8 text-white">Clients</h1>
        {/* Chat-style Client List */}
        <motion.div
          className="mt-8 bg-white/5 rounded-xl p-4 shadow-lg space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {clients.map((client, idx) => (
            <div
              key={client.id}
              className="bg-essence-black/70 hover:bg-essence-orange/20 transition rounded-lg px-4 py-3"
            >
              <button
                type="button"
                className="font-semibold text-essence-orange focus:outline-none"
                onClick={() =>
                  setOpenRows((prev) =>
                    prev.map((v, i) => (i === idx ? !v : v))
                  )
                }
              >
                ID NO: {client.id}
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openRows[idx] ? "auto" : 0,
                  opacity: openRows[idx] ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                {openRows[idx] && (
                  <div className="text-gray-200 text-sm mt-1">
                    ({client.name})
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
