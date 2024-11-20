"use client"

import { useState, useEffect } from 'react';
import { Download, Github, Snowflake, Terminal, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CodingInStyle from '../../public/codinginstyle.gif';
import DebuggingInStyle from '../../public/dan-shiffman-coding.gif';

type SnowflakeStyle = {
  left: string;
  animationDelay: string;
  animationDuration: string;
};


export default function PolarLanding() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [floatingHeight, setFloatingHeight] = useState(0);
  const [hoverText, setHoverText] = useState("Install Now!");
  const [snowflakes, setSnowflakes] = useState<SnowflakeStyle[]>([]);

  const currentYear = new Date().getFullYear();
  
  const hoverPhrases = [
    "Cool choice! 🧊",
    "Ice to meet you! ❄️",
    "Waddle you waiting for? 🐧",
    "Snow much better! ⛄",
    "CODE-l weather we're having! 🌨️"
  ];

  useEffect(() => {
    const generateSnowflakes = () => {
      return Array.from({ length: 50 }).map(() => ({
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 2}s`,
      }));
    };

    setSnowflakes(generateSnowflakes());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-100 overflow-hidden">
      {/* Snow effect */}
      <div className="fixed inset-0 pointer-events-none">
        {snowflakes.map((style, i) => (
          <div
            key={i}
            className="absolute animate-fall"
            style={{
              ...style,
              top: `-20px`,
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
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Link
              href="https://marketplace.visualstudio.com/items?itemName=HatemSoliman.polar-paradise"
              target="_blank"
              className="bg-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all transform hover:scale-105 text-lg font-bold"
              onMouseEnter={() => setHoverText(hoverPhrases[Math.floor(Math.random() * hoverPhrases.length)])}
            >
              <Download className="w-6 h-6" />
              Waddle Install
            </Link>
            <Link 
              href="https://github.com/CodeNKoffee/polar-paradise-vscode-theme"
              target="_blank"
              className="bg-gray-800 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-900 transition-all transform hover:scale-105 text-lg font-bold"
            >
              <Github className="w-6 h-6" />
              Star on GitHub
            </Link>
          </div>

          {/* Trailer Promo */}
          <section>
            <div className="kontainer">
              <div className="row">
                <h2>Promo Launch Trailer</h2>
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/x1vbV76fbok?si=lwrmcTsmJ3DRTIey" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                />
              </div>
            </div>
          </section>

          {/* Fun GIF Section */}
          <section>
            <div className="kontainer">
              <div className="row grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="relative group">
                  <Image 
                    src={CodingInStyle}
                    alt="Coding Penguin"
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover rounded-2xl shadow-lg transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-lg">When the code compiles on first try 🎉</p>
                  </div>
                </div>
                <div className="relative group">
                  <Image 
                    src={DebuggingInStyle}
                    alt="Debug Dance"
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover rounded-2xl shadow-lg transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-lg">Me debugging with style 🕺</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Features List */}
          <section>
            <div className="kontainer">
              <div className="row bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-16 transform hover:scale-105 transition-transform flex flex-col">
                <h2 className="text-3xl font-bold text-blue-900 mt-8 mb-6">Why It&apos;s Ice Cold! 🧊</h2>
                <ul className="text-left text-lg text-blue-700 space-y-4 mb-8">
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
            </div>
          </section>

          {/* Creator Section */}
          <section>
            <div className="kontainer">
              <div className="text-center">
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
            </div>
          </section>

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
            <p className="mt-16 text-sm">
              <span className="text-xs italic">*For real:</span>
              <br/>
              Copyright &copy; {currentYear} Hatem Soliman and the Polar Paradise documentation authors.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}