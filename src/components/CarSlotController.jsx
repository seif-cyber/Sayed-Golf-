import React, { useState, useEffect } from 'react';
import { Sliders, X, Copy, Check, ChevronUp, ChevronDown } from 'lucide-react';

export default function CarSlotController() {
  const [isOpen, setIsOpen] = useState(true);
  const [top, setTop] = useState(84);
  const [left, setLeft] = useState(50);
  const [widthVh, setWidthVh] = useState(55);
  const [copied, setCopied] = useState(false);

  // Apply real-time styles to car-slot-1
  useEffect(() => {
    const slot = document.getElementById('car-slot-1');
    if (slot) {
      slot.style.top = `${top}%`;
      slot.style.left = `${left}%`;
      slot.style.width = `${widthVh}vh`;
      slot.style.height = `${Math.round(widthVh * 0.35)}vh`;
    }
  }, [top, left, widthVh]);

  const copyConfig = () => {
    const text = `top: ${top}%, left: ${left}%, width: ${widthVh}vh`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 z-[9999] font-cairo select-none">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/90 text-white border border-[#ff3535]/60 shadow-2xl text-xs font-bold backdrop-blur-md hover:bg-[#ff3535] transition-all ml-auto"
        >
          <Sliders className="w-4 h-4 text-[#ff3535]" />
          <span>أدوات ضبط مكان وحجم العربية</span>
        </button>
      )}

      {/* Controller Panel */}
      {isOpen && (
        <div className="bg-[#0b0c10]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white shadow-2xl flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#ff3535]" />
              <span className="text-xs font-bold">تحكم مكان وحجم العربية (مؤقت)</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Top (Vertical) */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center text-[11px] font-semibold text-gray-300">
              <span>المكان الرأسي (Top):</span>
              <span className="text-[#ff3535] font-mono font-bold text-xs">{top}%</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTop((prev) => Math.max(10, Math.round((prev - 0.5) * 10) / 10))}
                className="w-7 h-7 flex items-center justify-center rounded bg-white/10 active:bg-white/20 text-xs font-bold"
              >
                -
              </button>
              <input
                type="range"
                min="30"
                max="100"
                step="0.5"
                value={top}
                onChange={(e) => setTop(parseFloat(e.target.value))}
                className="w-full accent-[#ff3535] cursor-pointer h-1.5 bg-white/20 rounded-lg"
              />
              <button
                onClick={() => setTop((prev) => Math.min(100, Math.round((prev + 0.5) * 10) / 10))}
                className="w-7 h-7 flex items-center justify-center rounded bg-white/10 active:bg-white/20 text-xs font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Left (Horizontal) */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center text-[11px] font-semibold text-gray-300">
              <span>المكان الأفقي (Left):</span>
              <span className="text-[#ff3535] font-mono font-bold text-xs">{left}%</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLeft((prev) => Math.max(10, Math.round((prev - 0.5) * 10) / 10))}
                className="w-7 h-7 flex items-center justify-center rounded bg-white/10 active:bg-white/20 text-xs font-bold"
              >
                -
              </button>
              <input
                type="range"
                min="10"
                max="90"
                step="0.5"
                value={left}
                onChange={(e) => setLeft(parseFloat(e.target.value))}
                className="w-full accent-[#ff3535] cursor-pointer h-1.5 bg-white/20 rounded-lg"
              />
              <button
                onClick={() => setLeft((prev) => Math.min(90, Math.round((prev + 0.5) * 10) / 10))}
                className="w-7 h-7 flex items-center justify-center rounded bg-white/10 active:bg-white/20 text-xs font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Width (Size) */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center text-[11px] font-semibold text-gray-300">
              <span>الحجم (Width):</span>
              <span className="text-[#ff3535] font-mono font-bold text-xs">{widthVh}vh</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setWidthVh((prev) => Math.max(15, prev - 1))}
                className="w-7 h-7 flex items-center justify-center rounded bg-white/10 active:bg-white/20 text-xs font-bold"
              >
                -
              </button>
              <input
                type="range"
                min="20"
                max="250"
                step="1"
                value={widthVh}
                onChange={(e) => setWidthVh(parseInt(e.target.value))}
                className="w-full accent-[#ff3535] cursor-pointer h-1.5 bg-white/20 rounded-lg"
              />
              <button
                onClick={() => setWidthVh((prev) => Math.min(250, prev + 1))}
                className="w-7 h-7 flex items-center justify-center rounded bg-white/10 active:bg-white/20 text-xs font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Output and Copy Action */}
          <div className="mt-1 pt-2 border-t border-white/10 flex items-center justify-between gap-2">
            <code className="text-[10px] font-mono bg-black/60 px-2 py-1 rounded text-emerald-400 truncate">
              {top}% | {left}% | {widthVh}vh
            </code>
            <button
              onClick={copyConfig}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ff3535] hover:bg-[#e02b2b] text-white text-[11px] font-bold transition-all shadow-md active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم النسخ!' : 'نسخ الأرقام'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
