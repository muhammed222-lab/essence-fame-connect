import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Star,
  Zap,
  Users,
  BarChart2,
  DollarSign,
  User,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <HeroSection />

      {/* Stats Bar */}
      <motion.section
        className="py-8 bg-essence-orange text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "5,000+", label: "Creators", icon: Users },
              { value: "$50K+", label: "Paid Out", icon: DollarSign },
              { value: "4.9/5", label: "Rating", icon: Star },
              { value: "200+", label: "Brands", icon: Zap },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 mb-2" />
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works - Enhanced */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')]"></div>
        </div>

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-essence-black mb-4 text-center">
              <span className="bg-gradient-to-r from-essence-orange to-essence-cream bg-clip-text text-transparent">
                How It Works
              </span>
            </h1>
            <div className="h-1 w-24 bg-essence-orange mx-auto mb-12"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Create Your Profile",
                description:
                  "Showcase your talents with our dynamic profile builder that highlights your best work.",
                icon: <User className="w-6 h-6" />,
              },
              {
                title: "Get Discovered",
                description:
                  "Our algorithm matches you with brands based on your content style and audience.",
                icon: <BarChart2 className="w-6 h-6" />,
              },
              {
                title: "Grow Your Income",
                description:
                  "Negotiate deals with our built-in rate calculator and contract tools.",
                icon: <DollarSign className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-essence-orange to-essence-cream"></div>
                <div className="w-14 h-14 bg-essence-orange/10 rounded-xl flex items-center justify-center mb-6 text-essence-orange group-hover:bg-essence-orange group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-essence-black">
                  {item.title}
                </h3>
                <p className="text-essence-gray mb-6">{item.description}</p>
                <div className="flex items-center text-essence-orange font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section with Enhanced CTA */}
      <VideoSection
        title="See Us in Action"
        description="Discover how top creators are building profitable brand relationships through our platform."
        ctaText="Join Now"
      />

      {/* Why Choose Us - Enhanced */}
      <section className="py-16 bg-gradient-to-b from-essence-black to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Creators <span className="text-essence-orange">Love</span> Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another platform - we're your growth partner.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Curated Opportunities",
                description:
                  "Only quality brands that value creator partnerships",
                icon: <Check className="w-6 h-6" />,
              },
              {
                title: "Fair Compensation",
                description: "Transparent pricing and payment protection",
                icon: <DollarSign className="w-6 h-6" />,
              },
              {
                title: "Growth Resources",
                description: "Exclusive workshops and analytics tools",
                icon: <BarChart2 className="w-6 h-6" />,
              },
              {
                title: "Community Network",
                description: "Connect with top creators in your niche",
                icon: <Users className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-essence-orange/50 transition-colors relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-essence-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-essence-orange/10 rounded-xl flex items-center justify-center mb-6 text-essence-orange">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-essence-black">
            Success <span className="text-essence-orange">Stories</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "EssenceFameFace helped me 5x my brand deal income in just 6 months!",
                name: "Sarah K.",
                role: "Lifestyle Creator",
                rating: 5,
              },
              {
                quote:
                  "The quality of brands on this platform is unmatched. No more lowball offers!",
                name: "Marcus T.",
                role: "Photographer",
                rating: 5,
              },
              {
                quote:
                  "Finally a platform that understands creator needs. The contracts are fair and transparent.",
                name: "Jamila W.",
                role: "Beauty Influencer",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "fill-essence-orange text-essence-orange"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg italic mb-6 text-essence-gray">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
