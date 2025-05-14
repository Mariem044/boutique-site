
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-[40vh] md:h-[50vh] bg-gradient-to-r from-streetwear-dark-charcoal via-streetwear-charcoal to-streetwear-dark-purple flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Our Story</h1>
                <p className="text-lg md:text-xl text-streetwear-light-gray mx-auto max-w-2xl">
                  Pushing the boundaries of streetwear culture since 2015
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  STREETWEAR was born from a passion for urban culture and authentic self-expression. 
                  We believe fashion is more than just clothing – it's a statement, an identity, 
                  and a way to connect with like-minded individuals around the world.
                </p>
                <p className="text-muted-foreground">
                  Our mission is to create premium streetwear that empowers individuals to express 
                  their unique style while supporting sustainable practices and ethical production. 
                  Every piece we design tells a story and represents our commitment to quality, 
                  creativity, and cultural authenticity.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-lg overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Streetwear fashion design team" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-streetwear-charcoal text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Values</h2>
              <p className="text-streetwear-light-gray mx-auto max-w-2xl">
                The principles that guide every decision we make, from design to delivery
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-streetwear-dark-charcoal p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-streetwear-purple rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Authenticity</h3>
                <p className="text-streetwear-light-gray text-center">
                  We stay true to street culture roots while pushing boundaries with innovative designs and collaborations.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-streetwear-dark-charcoal p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-streetwear-purple rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Sustainability</h3>
                <p className="text-streetwear-light-gray text-center">
                  We're committed to ethical production and sustainable practices throughout our supply chain.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-streetwear-dark-charcoal p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-streetwear-purple rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Community</h3>
                <p className="text-streetwear-light-gray text-center">
                  We celebrate diversity and build a global community united by a passion for streetwear culture.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Meet The Team</h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                The creative minds behind STREETWEAR
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Chen",
                  role: "Founder & Creative Director",
                  image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=500",
                },
                {
                  name: "Jordan Taylor",
                  role: "Head of Design",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500",
                },
                {
                  name: "Morgan Rivera",
                  role: "Marketing Director",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500",
                },
                {
                  name: "Sam Wilson",
                  role: "Production Manager",
                  image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=500",
                }
              ].map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary rounded-lg overflow-hidden shadow-lg"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-72 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-streetwear-dark-purple to-streetwear-dark-charcoal text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Journey</h2>
              <p className="text-streetwear-light-gray mx-auto max-w-2xl">
                From humble beginnings to a global streetwear brand
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-streetwear-purple"></div>
              
              {[
                {
                  year: "2015",
                  title: "Where It All Started",
                  description: "STREETWEAR launched with a small collection of graphic tees and hoodies, designed in a tiny apartment in Brooklyn."
                },
                {
                  year: "2017",
                  title: "First Flagship Store",
                  description: "Opened our first physical location in downtown Los Angeles, becoming a hub for local streetwear enthusiasts."
                },
                {
                  year: "2019",
                  title: "International Expansion",
                  description: "Launched our online store and began shipping to customers worldwide, growing our community across continents."
                },
                {
                  year: "2022",
                  title: "Sustainability Initiative",
                  description: "Committed to using sustainable materials in all our products and implemented ethical manufacturing practices."
                },
                {
                  year: "2025",
                  title: "Looking Forward",
                  description: "Continuing to push boundaries with innovative designs while staying true to our core values and community."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-12' : 'md:mr-auto md:ml-[50%] md:pl-12'} md:w-[45%] p-6 bg-streetwear-dark-charcoal rounded-lg shadow-lg`}
                >
                  <div className="absolute top-6 w-4 h-4 rounded-full bg-streetwear-purple hidden md:block"
                    style={{ [index % 2 === 0 ? 'right' : 'left']: '-8px' }}
                  ></div>
                  <span className="inline-block px-3 py-1 bg-streetwear-purple text-white rounded-full text-sm font-bold mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-streetwear-light-gray">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
