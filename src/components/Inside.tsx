import { useEffect, useRef } from 'react';

export default function Inside() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-[30px]');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    const elements = ref.current?.querySelectorAll('.fade-up');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const chapters = [
    { num: 1, icon: "🏭", title: "Understanding the Chinese Gadget Market", desc: "Why China is not one market, what's available, and the critical difference between international and Chinese domestic versions." },
    { num: 2, icon: "📖", title: "Terminology You Must Know", desc: "Brand new, open box, used, refurbished, and for-parts explained clearly — plus how to read phone grading like a pro." },
    { num: 3, icon: "🔍", title: "Due Diligence Before You Buy", desc: "IMEI checks, iCloud Activation Lock, carrier unlock status, and how to use iUnlocker.com before spending anything." },
    { num: 4, icon: "🤝", title: "Your Trusted Supplier Contacts", desc: "Direct contact details for verified suppliers in China, plus a Nigerian-based agent who handles sourcing AND payments for you." },
    { num: 5, icon: "💳", title: "How to Pay Your Supplier", desc: "Alipay explained, USDT payments, and how to pay in naira through a trusted Nigerian agent without the stress." },
    { num: 6, icon: "📋", title: "The Ordering SOP", desc: "A 6-step process from first message to goods shipped — so you never miss a step or make a costly mistake." },
    { num: 7, icon: "🚚", title: "Shipping to Nigeria", desc: "Two verified shipping companies with their exact rates: from ₦14,000 per unit to 2-day express delivery options." },
    { num: 8, icon: "📦", title: "Packaging & Presentation", desc: "How professional repackaging increases your selling price — and exactly how to be transparent with your customers." },
    { num: 9, icon: "💰", title: "Making Your First Sale", desc: "How to price for profit, where to sell (Jiji, Instagram, WhatsApp), and how to build a reputation that sends you referrals." }
  ];

  return (
    <section className="bg-dark-800 relative z-10" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-[5%] py-[100px] md:py-[100px] py-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-[60px] items-start mb-[60px]">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 mb-[14px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out">
              What's Inside
            </div>
            <h2 className="font-outfit font-extrabold text-[clamp(28px,4vw,46px)] leading-[1.1] tracking-[-0.02em] text-white mb-[20px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-100">
              9 chapters. Zero filler.
            </h2>
            <p className="text-[17px] text-text-muted leading-[1.75] max-w-[600px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-200">
              Every section is written specifically for the Nigerian and African market — not recycled advice from a YouTube video about dropshipping from Alibaba.
            </p>
          </div>
          <div className="relative shrink-0 flex flex-col items-center md:items-start fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-300 w-full md:w-auto mt-[40px] md:mt-0">
            <div className="absolute -inset-[20px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,96,10,0.1) 0%, transparent 70%)' }}></div>
            <img src="https://res.cloudinary.com/dtjj0tvac/image/upload/v1774716483/I_like_this_202603281747_pzgut2.jpg" alt="Ebook Cover" className="w-full max-w-[320px] md:w-[360px] md:max-w-none rounded-[8px] block shadow-[-8px_4px_0_#0a0a0a,-12px_8px_24px_rgba(0,0,0,0.6),0_16px_48px_rgba(0,0,0,0.4),0_0_40px_rgba(232,96,10,0.1)] relative z-10" />
            <a href="#get-guide" className="mt-[24px] inline-flex items-center justify-center gap-[10px] bg-orange-500 text-white font-outfit font-bold text-[16px] tracking-[0.02em] px-[24px] py-[16px] rounded-[4px] no-underline border-none cursor-pointer transition-all duration-200 shadow-[0_4px_20px_rgba(232,96,10,0.3)] hover:bg-orange-400 hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(232,96,10,0.4)] w-full max-w-[320px] md:w-[360px] md:max-w-none relative z-10">
              Get the Guide Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[18px] h-[18px]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] mt-[60px]">
          {chapters.map((chap, i) => (
            <div key={i} className={`bg-card border border-border-subtle rounded-[8px] p-[28px] relative overflow-hidden transition-all duration-300 hover:border-orange-500/35 hover:-translate-y-[3px] group fade-up opacity-0 translate-y-[30px] ease-out`} style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              <span className="text-[28px] mb-[16px] block">{chap.icon}</span>
              <div className="font-outfit font-extrabold text-[11px] tracking-[0.15em] text-orange-500 uppercase mb-[12px]">Chapter {chap.num}</div>
              <div className="font-outfit font-bold text-[17px] text-white mb-[10px] leading-[1.3]">{chap.title}</div>
              <div className="text-[14px] text-text-muted leading-[1.6]">{chap.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
