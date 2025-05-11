import React from "react";

interface VideoSectionProps {
  title: string;
  description: string;
  videoUrl?: string;
  placeholder?: boolean;
  ctaText?: string;
}

const VideoSection = ({
  title,
  description,
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
  placeholder = true,
}: VideoSectionProps) => {
  return (
    <section className="py-16 bg-essence-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-essence-black mb-6 text-center">
          {title}
        </h2>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg text-essence-gray text-center">{description}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="video-container shadow-lg">
            {placeholder ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-essence-black/10">
                <div className="w-20 h-20 rounded-full bg-essence-orange/90 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <p className="mt-4 text-essence-black font-medium">
                  Video Preview
                </p>
              </div>
            ) : (
              <iframe
                src={videoUrl}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
