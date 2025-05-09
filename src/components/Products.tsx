import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, Code, Database } from 'lucide-react';
import LinuxImage from '../assets/linux mint.png';
import KaliImage from '../assets/kali linux.png';
import UbuntuImage from '../assets/ubuntu.png';
import AndriodImage from '../assets/android.png';




const products = [
  {
    id: 1,
    name: "Linux (128GB)" ,
    description: "Perfect For: Developers, tech enthusiasts, and those who want a reliable, all-in-one on the go. ",
    price: "₹1799/-",
    image: LinuxImage,
    features: [" Developer-Friendly", "Lightweight & User-Friendly", "Docker & Git Ready", "Truly Portable"],
    icon: Code
  },
  {
    id: 2,
    name: "Ubuntu (128GB)",
    description: "Perfect For: Professionals passionate about coding, data privacy, and enterprise-level security.",
    price: "1799/-",
    image: UbuntuImage,
    features: ["Enterprise-Grade Security", "Seamless Remote Work", "Privacy-Focused", "Boot & Go Security"],
    icon: Shield
  },
  {
    id: 3,
    name: "Kali Linux (128GB)",
    description: "Perfect For: Ethical hackers, cybersecurity professionals, and data analysts.",
    price: "1799/-",
    image: KaliImage,
    features: ["All-in-One Security Toolkit:", "Powerful Data Analytics", "Network Testing On-the-Go", "Portable Pentesting"],
    icon: Database
  },
  {
    id: 4,
    name: "Andriod (128GB)",
    description: "Perfect For: Android developers, testers, performance enthusiasts, mobile gamers and UX/UI designers",
    price: "1799/-",
    image:AndriodImage,
    features: ["On-the-Go Android Devs", "Performance Boosted", "Smart Resource Management", "Lightning-Fast Boot"],
    icon: Zap
  }
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const Icon = product.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Icon className="absolute bottom-4 right-4 w-8 h-8 text-white" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
        <div className="space-y-2 mb-6">
          {product.features.map((feature, i) => (
            <div key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
              {feature}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{product.price}</span>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Next - Gen USB Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our range of powerful software bundles, each carefully curated to meet your specific needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;