import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, Code, Database, Cloud, Lock, Cpu, Gift } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Plug & Play Access",
    description: "Instant access to software from USB without installations."
  },
  {
    icon: Gift,
    title: "Progress in Your Pocket",
    description: "Student-friendly feature that saves progress on the USB : resume anytime, anywhere."
  },
  {
    icon: Zap,
    title: "Interactive Demos",
    description: "Experience web app previews before purchasing"
  },
  {
    icon: Cloud,
    title: "Cross-Device Compatibility",
    description: "USB software runs seamlessly on all major OS platforms."
  },
  {
    icon: Lock,
    title: "Robust Data Security",
    description: "End-to-end encryption ensuring safe data transfers."
  },
  {
    icon: Code,
    title: " Modular Software Bundles",
    description: "Choose from customized bundles tailored to your needs."
  },
  {
    icon: Database,
    title: "Rapid Performance",
    description: "Optimized software designed for fast execution."
  },
  {
    icon: Cpu,
    title: "Resource Efficient",
    description: "Optimized resource usage for better performance"
  },
  
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose ADDICTA?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience the perfect blend of security, performance, and convenience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const [featureRef, featureInView] = useInView({
              triggerOnce: true,
              threshold: 0.1
            });

            return (
              <motion.div
                key={index}
                ref={featureRef}
                initial={{ opacity: 0, y: 20 }}
                animate={featureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;