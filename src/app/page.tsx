"use client"

import { useState, useEffect } from 'react';
import { Download, Github, Snowflake, Terminal, Heart } from 'lucide-react';
import Image from 'next/image';

export default function PolarLanding() {
  const [floatingHeight, setFloatingHeight] = useState(0);
  const [hoverText, setHoverText] = useState("Install Now!");
  
  const hoverPhrases = [
    "Cool choice! 🧊",
    "Ice to meet you! ❄️",
    "Waddle you waiting for? 🐧",
    "Snow much better! ⛄",
    "CODE-l weather we're having! 🌨️"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingHeight(prev => (prev === 0 ? -10 : 0));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-100 overflow-hidden">
      {/* Snow effect */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          >
            <Snowflake className="text-white w-3 h-3" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center relative mb-24">
          {/* Bouncing Terminal Icon */}
          <div 
            className="transition-transform duration-1000 ease-in-out relative"
            style={{ transform: `translateY(${floatingHeight}px)` }}
          >
            <Terminal className="w-24 h-24 mx-auto text-blue-600 mb-6" />
            <div className="absolute -top-4 -right-4 animate-bounce">
              <div className="bg-white rounded-full p-2 shadow-lg">
                🐧
              </div>
            </div>
          </div>

          <h1 className="text-6xl font-bold text-blue-900 mb-4 animate-pulse">
            Polar Paradise Theme
          </h1>
          
          <p className="text-2xl text-blue-700 mb-8 font-semibold">
            The IDE theme that&apos;s cooler than a penguin&apos;s 🍑
          </p>

          {/* Fun rotating subtitle */}
          <div className="h-8 mb-8">
            <p className="text-lg text-blue-600 animate-bounce">
              {hoverText}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <button 
              className="bg-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all transform hover:scale-105 text-lg font-bold"
              onMouseEnter={() => setHoverText(hoverPhrases[Math.floor(Math.random() * hoverPhrases.length)])}
            >
              <Download className="w-6 h-6" />
              Waddle Install
            </button>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-900 transition-all transform hover:scale-105 text-lg font-bold">
              <Github className="w-6 h-6" />
              Star on GitHub
            </button>
          </div>

          {/* Fun GIF Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative group">
              <Image 
                src="/api/placeholder/400/300" 
                alt="Coding Penguin"
                width={400}
                height={300}
                className="w-full rounded-2xl shadow-lg transform transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-lg">When the code compiles on first try 🎉</p>
              </div>
            </div>
            <div className="relative group">
              <Image 
                src="/api/placeholder/400/300" 
                alt="Debug Dance"
                width={400}
                height={300}
                className="w-full rounded-2xl shadow-lg transform transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-lg">Me debugging with style 🕺</p>
              </div>
            </div>
          </div>

          {/* Fun Features List */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-16 transform hover:scale-105 transition-transform">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Why It&apos;s Ice Cold! 🧊</h2>
            <ul className="text-left text-lg text-blue-700 space-y-4">
              <li className="flex items-center gap-2">
                <span className="text-2xl">🎨</span> Colors so cool, your CPU temp drops 5 degrees
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">👀</span> Easy on the eyes (tested by actual snowmen)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🧠</span> Makes your code 200% cooler (scientific fact*)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🐟</span> Free virtual fish with every install!
              </li>
              <li className="text-sm italic text-blue-500">
                * Results may vary based on your penguin&apos;s coding experience
              </li>
            </ul>
          </div>

          {/* Creator Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
              <p className="text-blue-900 flex items-center justify-center gap-2">
                Crafted with <Heart className="w-5 h-5 text-red-500 animate-pulse" /> by
                <span className="font-bold">Hatem Soliman</span>
              </p>
              <p className="text-blue-700 text-sm mt-2">
                (A developer who really needs to chill)
              </p>
            </div>
          </div>

          {/* Footer Fun */}
          <footer className="text-center text-blue-700">
            <p className="text-lg mb-4">
              No penguins were harmed in the making of this theme 
              <br/>
              (They were too busy reviewing pull requests) 🐧
            </p>
            <p className="text-sm animate-pulse">
              Copyright © 2024 Arctic Code Labs*
              <br/>
              <span className="text-xs italic">*Not a real lab, just a very cold room</span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}