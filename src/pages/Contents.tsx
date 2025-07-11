import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

// --- Data for our videos ---
// This makes it easy to add more videos in the future.
// If a video fails, check the filename (case-sensitive) and consider re-encoding it.
const videoData = [
  {
    id: 1,
    src: "/ADVERTS3.mp4", // Check this filename carefully in your /public folder
    title: "Creative Brand Showcase",
    description:
      "Highlighting dynamic product integration with lifestyle content.",
  },
  {
    id: 2,
    src: "/ADVERTS2.mp4",
    title: "Client Review and testimony",
    description:
      "A fast-paced advertorial capturing the essence of modern street style.",
  },
  {
    id: 3,
    src: "/EssenceFameFace.mp4",
    title: "Our Agency's Mission",
    description: "Discover the vision and community behind Essence FameFace.",
  },
  {
    id: 4,
    src: "/essencefameface3.mp4",
    title: "Additional Insights",
    description: "More details about our agency's approach.",
  },
  {
    id: 5,
    src: "/essencefameface4.mp4",
    title: "Additional Insights",
    description: "More details about our agency's approach.",
  },
  {
    id: 6,
    src: "/essencefameface5.mp4",
    title: "Additional Insights",
    description: "More details about our agency's approach.",
  },
  {
    id: 7,
    src: "/essencefameface6.mp4",
    title: "Additional Insights",
    description: "More details about our agency's approach.",
  },
  {
    id: 8,
    src: "/essencefameface7.mp4",
    title: "Additional Insights",
    description: "More details about our agency's approach.",
  },
];

const Contents = () => {
  // State to track which video is currently featured
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const selectedVideo = videoData[selectedVideoIndex];

  // Refs and state for the video player controls
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // --- Control Functions ---
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  // Handler to change the featured video
  const handleSelectVideo = (index: number) => {
    setSelectedVideoIndex(index);
    // When a new video is selected, we want it to autoplay and be muted by default
    setIsPlaying(true);
    setIsMuted(true);
  };

  // --- NEW: Error handling function ---
  // This will log any video loading errors to the console for easy debugging.
  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    console.error("Video loading error:", e.currentTarget.error);
    console.error("Failed to load video src:", e.currentTarget.src);
    // You could also set a state here to display an error message in the UI
  };

  return (
    <div className="bg-essence-black text-white min-h-screen p-4 sm:p-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Creator <span className="text-essence-orange">Showcase</span>
          </h1>
          <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Explore a selection of high-quality ad videos created by our
            talented community of models and creators.
          </p>
        </motion.div>

        {/* --- Main Featured Video Player --- */}
        <div className="mb-12">
          <div className="group relative aspect-video w-full max-w-4xl mx-auto rounded-2xl bg-black overflow-hidden shadow-2xl shadow-essence-orange/10">
            <AnimatePresence mode="wait">
              <motion.video
                key={selectedVideo.id} // This is CRUCIAL for AnimatePresence to work
                ref={videoRef}
                src={selectedVideo.src}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-fit"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={handleVideoError} // Added error handler
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Custom Video Controls */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={togglePlayPause}
                className="text-white hover:text-essence-orange transition-colors p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10" />
                ) : (
                  <Play className="w-10 h-10" />
                )}
              </button>
            </div>
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={toggleMute}
                className="text-white hover:text-essence-orange transition-colors p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm"
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
          <motion.div
            key={selectedVideo.id + "-info"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-6"
          >
            <h2 className="text-2xl font-bold text-essence-orange">
              {selectedVideo.title}
            </h2>
            <p className="text-gray-400 mt-1">{selectedVideo.description}</p>
          </motion.div>
        </div>

        {/* --- Video Playlist / Thumbnails --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleSelectVideo(index)}
              className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                selectedVideoIndex === index
                  ? "ring-2 ring-essence-orange shadow-lg shadow-essence-orange/20"
                  : "ring-1 ring-gray-700 hover:ring-essence-orange/50"
              }`}
            >
              <div className="relative aspect-video bg-black">
                <video
                  src={video.src}
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onLoadedData={(e) => e.currentTarget.pause()}
                  onError={handleVideoError} // Added error handler
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="font-bold text-white">{video.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contents;
