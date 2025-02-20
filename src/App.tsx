import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import Order from './pages/Order';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <div className="flex justify-between h-12 items-center">
            <div className="flex items-center">
              <Globe className="h-5 w-5" />
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#overview" className="text-white/90 hover:text-white transition-colors">Overview</a>
              <a href="#features" className="text-white/90 hover:text-white transition-colors">Features</a>
              <a href="#tech-specs" className="text-white/90 hover:text-white transition-colors">Tech Specs</a>
              <Link to="/order" className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors">
                Buy
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" id="overview">
        <div className="absolute inset-0">
        <img 
            src="/images/hero_screen2.png"
            alt="Product Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>
        </div>
        <div className="relative text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            Modo
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/90 font-medium">
            The future of healthier routines
          </p>
          <p className="mt-4 text-3xl md:text-4xl text-white/90">
          
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <Link to="/order" className="bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors flex items-center text-sm">
              Join the waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-32 bg-white text-black" id="features">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?auto=format&fit=crop&q=80&w=1024"
                alt="AI Processing"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-semibold tracking-tight">
                Intelligent.
                <br />
                Beyond imagination.
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Powered by our most advanced neural engine ever. TechVision Pro learns from your interactions, adapts to your preferences, and delivers personalized experiences that feel magical.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-semibold tracking-tight">
                Extraordinary
                <br />
                performance.
              </h2>
              <p className="mt-6 text-white/80 text-lg leading-relaxed">
                With the most powerful processing capabilities ever in a consumer device, TechVision Pro handles complex tasks with unprecedented speed and efficiency.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1024"
                alt="Performance"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-32 bg-white text-black" id="tech-specs">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-semibold text-center mb-16">Tech Specs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Processing",
                value: "Neural engine with 16-core architecture"
              },
              {
                title: "Memory",
                value: "32GB unified memory"
              },
              {
                title: "Battery Life",
                value: "Up to 12 hours"
              },
              {
                title: "Display",
                value: "Retina XDR display with ProMotion"
              },
              {
                title: "Security",
                value: "Advanced encryption chip"
              },
              {
                title: "Connectivity",
                value: "Wi-Fi 6E and Bluetooth 5.3"
              }
            ].map((spec, index) => (
              <div key={index} className="border-t border-gray-200 py-8">
                <h3 className="text-sm text-gray-600">{spec.title}</h3>
                <p className="mt-2 text-lg font-medium">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Empowering healthy routines with innovative designs
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Modo is the first of its kind to blend smart technology and aesthetics for truely powerful routine management
          </p>
          <Link to="/order" className="mt-12 inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors text-sm">
           Join the waitlist
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/95 border-t border-white/10">
        <div className="max-w-[980px] mx-auto py-8 px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Globe className="h-5 w-5" />
              <span className="ml-2 text-sm text-white/90">Modo</span>
            </div>
            <p className="text-sm text-white/60">
              © 2025 Modo Health. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default App;