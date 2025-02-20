import React from 'react';
import { ArrowLeft, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

function Order() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <div className="flex justify-between h-12 items-center">
            <Link to="/" className="flex items-center">
              <Globe className="h-5 w-5" />
            </Link>
            <div className="flex items-center space-x-8 text-sm">
              <Link to="/" className="text-white/90 hover:text-white transition-colors flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Order Form */}
      <div className="pt-24 pb-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-8">Order Modo</h1>
          
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Your Selection</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Modo Device</span>
                    <span>---</span>
                  </div>
                  <div className="flex justify-between items-center text-white/60">
                    <span>Modo+</span>
                    <span>---</span>
                  </div>
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <div className="flex justify-between items-center font-semibold">
                      <span>Total</span>
                      <span>---</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Card Number</label>
                    <input disabled
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Expiry Date</label>
                      <input disabled
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">CVV</label>
                      <input disabled
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  <button 
                    disabled
                    type="submit" 
                    className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-blue-600 transition-colors"
                  >
                    Complete Purchase
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;