import { useEffect, useState } from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-[5%] pt-[120px] pb-[80px] overflow-hidden">
      {/* Big diagonal background accent */}
      <div className="absolute -top-[10%] -right-[15%] w-[70vw] h-[130%] pointer-events-none" 
           style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(232,96,10,0.10) 0%, transparent 65%), radial-gradient(ellipse at 80% 80%, rgba(232,96,10,0.06) 0%, transparent 60%)' }}>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center max-w-[1200px] mx-auto relative z-10">
        <div className="hero-content">
          <div className="inline-flex items-center gap-[8px] bg-orange-500/12 border border-orange-500/30 text-orange-500 text-[12px] font-medium tracking-[0.1em] uppercase px-[14px] py-[7px] rounded-[2px] mb-[28px]">
            <span className="w-[6px] h-[6px] bg-orange-500 rounded-full inline-block animate-[pulse-dot_2s_infinite]"></span>
            New Guide for Nigerian Importers
          </div>
          <h1 className="font-outfit font-extrabold text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.02em] text-white mb-[16px]">
            Stop Losing Capital to Scammers.<br/>Build a <em className="not-italic text-orange-500 relative after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:right-0 after:h-[3px] after:bg-orange-500 after:opacity-40 after:rounded-[2px]">Profitable</em> Gadget Empire.
          </h1>
          <p className="text-[18px] text-text-muted font-light mb-[36px] max-w-[480px] leading-[1.65]">
            The complete, no-fluff playbook for Nigerians and Africans who want to build a real business importing phones, laptops, and MacBooks from China.
          </p>
          <ul className="list-none mb-[44px] flex flex-col gap-[12px]">
            {[
              "Verified supplier contacts — phones, laptops & MacBooks",
              "How to check every iPhone before you spend a kobo",
              "Exact shipping rates & trusted delivery partners",
              "Payment using Alipay, USDT, or a trusted Nigerian agent",
              "Step-by-step SOP from order to first sale"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-[12px] text-[15px] text-[#ccc]">
                <span className="flex items-center justify-center min-w-[22px] h-[22px] bg-orange-500/15 border border-orange-500/40 text-orange-500 text-[12px] font-bold rounded-[3px] mt-[2px]">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-[14px] items-start">
            <a href="#get-guide" className="inline-flex items-center gap-[10px] bg-orange-500 text-white font-outfit font-bold text-[16px] tracking-[0.02em] px-[32px] py-[16px] rounded-[4px] no-underline border-none cursor-pointer transition-all duration-200 shadow-[0_4px_24px_rgba(232,96,10,0.35)] hover:bg-orange-400 hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(232,96,10,0.45)]">
              Get the Guide Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[18px] h-[18px]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <div className="text-[13px] text-text-muted flex items-center gap-[6px]">
              🔒 Instant access &nbsp;·&nbsp; <strong className="text-[#aaa]">9 chapters</strong> of actionable content
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center md:order-last order-first">
          <div className="relative w-[240px] md:w-[320px] animate-[float_5s_ease-in-out_infinite]">
            <div className="absolute -inset-[30px] rounded-full pointer-events-none animate-[glowPulse_4s_ease-in-out_infinite]" style={{ background: 'radial-gradient(circle, rgba(232,96,10,0.08) 0%, transparent 70%)' }}></div>
            <div className="w-[220px] md:w-[280px] mx-auto bg-gradient-to-br from-[#1e1e1e] to-[#111] rounded-[6px_16px_16px_6px] overflow-hidden relative aspect-[2/3] md:aspect-[3/4] flex flex-col px-[20px] py-[24px] md:px-[28px] md:py-[32px] justify-between shadow-[-8px_0_0_#0a0a0a,-12px_4px_20px_rgba(0,0,0,0.6),0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]">
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 20%, rgba(232,96,10,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(232,96,10,0.08) 0%, transparent 50%)' }}></div>
              <div className="absolute -left-[8px] top-0 bottom-0 w-[8px] bg-gradient-to-b from-[#222] to-[#111] rounded-[6px_0_0_6px]"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-orange-500 text-white text-[8px] md:text-[9px] font-bold tracking-[0.15em] uppercase px-[8px] md:px-[10px] py-[4px] rounded-[2px] mb-[12px] md:mb-[16px]">Ebook Guide</div>
                <div className="font-outfit font-extrabold text-[18px] md:text-[22px] leading-[1.15] text-white mb-[6px] md:mb-[8px]">From <span className="text-orange-500">Shenzhen</span><br/>to Your Shelf</div>
                <div className="text-[10px] md:text-[11px] text-[#888] leading-[1.4] md:leading-[1.5] italic">The Nigerian & African Guide to<br/>Importing Gadgets from China</div>
              </div>
              
              <div className="relative z-10 flex flex-col gap-[6px] md:gap-[8px]">
                {["iPhones, Laptops & MacBooks", "Supplier Contacts Included", "Shipping Rates & Agents", "Alipay & Payment Guide", "Due Diligence Checklists"].map((chap, i) => (
                  <div key={i} className="flex items-center gap-[6px] md:gap-[8px] text-[9px] md:text-[10px] text-[#666] before:content-[''] before:w-[12px] md:before:w-[16px] before:h-[1px] before:bg-orange-500 before:opacity-50 before:shrink-0">
                    {chap}
                  </div>
                ))}
              </div>
              
              <div className="relative z-10 border-t border-white/10 pt-[10px] md:pt-[14px]">
                <div className="text-[10px] md:text-[11px] text-orange-500 font-semibold tracking-[0.05em]">🇳🇬 Built for Nigerian Importers</div>
              </div>
            </div>
            <div className="absolute -right-[20px] top-[30px] bg-orange-500 text-white font-outfit font-extrabold text-[11px] tracking-[0.05em] uppercase px-[14px] py-[10px] rounded-[4px] shadow-[0_8px_24px_rgba(232,96,10,0.4)] animate-[float_5s_ease-in-out_infinite] [animation-delay:-2s] leading-[1.3] text-center">
              9<br/>Chapters
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
