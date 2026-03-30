import { useEffect, useRef } from 'react';

export default function CTA() {
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

  return (
    <section id="get-guide" className="bg-dark-800 border-t border-border-subtle text-center relative z-10" ref={ref}>
      <div className="max-w-[680px] mx-auto px-[5%] py-[100px]">
        <div className="inline-block bg-orange-500/12 border border-orange-500/30 text-orange-500 text-[12px] font-semibold tracking-[0.12em] uppercase px-[16px] py-[7px] rounded-[2px] mb-[28px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out">
          Get the Guide
        </div>
        <h2 className="font-outfit font-extrabold text-[clamp(30px,5vw,52px)] leading-[1.1] tracking-[-0.02em] text-white mb-[20px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-100">
          Stop guessing.<br/>Start <em className="not-italic text-orange-500">importing</em>.
        </h2>
        <p className="text-[17px] text-text-muted leading-[1.7] mb-[44px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-200">
          Everything you need to buy gadgets from China confidently, ship to Nigeria safely, and sell profitably — all in one guide.
        </p>

        <div className="bg-card border border-orange-500/25 rounded-[10px] p-[40px] mb-[24px] relative overflow-hidden fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-300 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-orange-500 before:to-orange-400">
          
          <div className="mb-[24px] border-b border-border-subtle pb-[24px]">
            <div className="flex justify-between items-center py-[8px] text-[14px] md:text-[15px]">
              <span className="text-text-muted">The Ebook Guide</span>
              <span className="text-white font-medium">₦45,000 value</span>
            </div>
            <div className="flex justify-between items-center py-[8px] text-[14px] md:text-[15px]">
              <span className="text-text-muted">3 Verified Supplier Contacts</span>
              <span className="text-white font-medium">₦150,000 value</span>
            </div>
            <div className="flex justify-between items-center py-[8px] text-[14px] md:text-[15px]">
              <span className="text-text-muted">2 Shipping Partner Contacts & Rates</span>
              <span className="text-white font-medium">₦25,000 value</span>
            </div>
            <div className="flex justify-between items-center py-[8px] text-[14px] md:text-[15px]">
              <span className="text-text-muted">Complete Due Diligence Checklist</span>
              <span className="text-white font-medium">₦10,000 value</span>
            </div>
            <div className="flex justify-between items-center py-[8px] text-[14px] md:text-[15px]">
              <span className="text-[#FFC800] font-bold">Bonus: China Mini Importation Masterclass</span>
              <span className="text-[#FFC800] font-bold">₦50,000 value</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-[16px]">
            <span className="text-[16px] md:text-[18px] text-text-muted">Total Value:</span>
            <span className="text-[20px] md:text-[24px] text-[#555] line-through font-outfit font-bold">₦280,000</span>
          </div>

          <div className="mb-[32px]">
            <div className="text-[13px] text-orange-500 font-bold tracking-[0.05em] uppercase mb-[6px]">Your Price Today</div>
            <div className="font-outfit font-extrabold text-[52px] text-white leading-none">
              <span className="text-[24px] text-text-muted">₦</span>17,500
            </div>
          </div>

          <a href="https://nestuge.com/checkout?items=%5B%7B%22id%22%3A%22pr_mndftxv6orpng7ncabl2imzgvmqaq%22%2C%22type%22%3A%22registration%22%2C%22plan%22%3A%22pl_mndfu1qxt30deixx4to36e4wnvzpt%22%2C%22count%22%3A1%2C%22affiliate%22%3Anull%7D%5D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-[12px] bg-orange-500 text-white font-outfit font-bold text-[16px] md:text-[18px] tracking-[0.02em] px-[24px] md:px-[44px] py-[20px] rounded-[5px] no-underline border-none cursor-pointer transition-all duration-200 shadow-[0_6px_32px_rgba(232,96,10,0.4)] w-full hover:bg-orange-400 hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(232,96,10,0.5)]">
            Get the Guide + Bonus Now — ₦17,500
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[20px] h-[20px]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div className="text-[13px] text-text-muted flex items-center justify-center gap-[6px] mt-[16px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-400">
          🔒 Secure payment &nbsp;·&nbsp; Instant delivery to your inbox
        </div>
      </div>
    </section>
  );
}
