import { useEffect, useRef } from 'react';

export default function Bonus() {
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
    <section className="bg-dark-900 border-t border-border-subtle relative overflow-hidden z-10" ref={ref}>
      <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,96,10,0.06) 0%, transparent 65%)' }}></div>
      <div className="max-w-[1100px] mx-auto px-[5%] py-[100px] md:py-[100px] py-[70px] relative z-10">
        <div className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-[10px] bg-[#FFC800]/10 border border-[#FFC800]/30 text-[#FFC800] text-[12px] font-bold tracking-[0.14em] uppercase px-[18px] py-[8px] rounded-[2px] mb-[24px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out">
            <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-[#FFC800]"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Exclusive Bonus
          </div>
          <h2 className="font-outfit font-extrabold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-white mb-[14px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-100">
            Get <em className="not-italic text-[#FFC800]">₦50,000 worth</em> of training.<br/>For free.
          </h2>
          <p className="text-[17px] text-text-muted max-w-[580px] mx-auto leading-[1.7] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-200">
            The first 20 people to get the guide unlock a complete China Mini Importation Masterclass for free.
          </p>
        </div>

        <div className="bg-card border border-[#FFC800]/20 rounded-[12px] overflow-hidden relative fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-300 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[4px] before:bg-gradient-to-r before:from-[#FFC800] before:to-[#FF8C00]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-[48px] border-b md:border-b-0 md:border-r border-border-subtle">
              <div className="inline-block bg-[#FFC800]/10 border border-[#FFC800]/30 text-[#FFC800] text-[11px] font-bold tracking-[0.12em] uppercase px-[12px] py-[5px] rounded-[2px] mb-[20px]">🎁 Free Bonus</div>
              <div className="font-outfit font-extrabold text-[24px] text-white leading-[1.25] mb-[12px]">China Mini Importation Masterclass</div>
              <div className="flex gap-[8px] mb-[20px] flex-wrap">
                {['1688', 'Pinduoduo', 'WeChat', 'Pre-order Business'].map((tag, i) => (
                  <span key={i} className="bg-white/5 border border-border-subtle text-[#aaa] text-[12px] font-medium px-[12px] py-[5px] rounded-[20px]">{tag}</span>
                ))}
              </div>
              <p className="text-[14px] text-text-muted leading-[1.65]">A step-by-step video masterclass that teaches you how to shop directly from China's most powerful wholesale platforms — without an agent, without getting scammed, and without speaking Mandarin.</p>
              <div className="flex items-center gap-[10px] mt-[24px] pt-[24px] border-t border-border-subtle">
                <div>
                  <div className="text-[13px] text-text-muted">Retail value</div>
                  <div className="font-outfit font-extrabold text-[26px] text-[#555] line-through">₦50,000</div>
                </div>
                <div className="text-[22px] text-border-subtle px-[10px]">→</div>
                <div>
                  <div className="text-[13px] text-text-muted">Your price</div>
                  <div className="font-outfit font-extrabold text-[26px] text-[#FFC800]">FREE</div>
                </div>
              </div>
            </div>
            <div className="p-[48px]">
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-text-muted mb-[20px]">What you'll learn inside</div>
              <ul className="list-none flex flex-col gap-[12px]">
                {[
                  "How to import successfully to your doorstep without being scammed",
                  "How to shop from 1688 — China's cheapest wholesale platform",
                  "How to shop from Pinduoduo for even lower prices",
                  "How to use Pinduoduo without a WeChat account",
                  "How to shop yourself without relying on any agent",
                  "How to start and run a profitable pre-order business",
                  "How to calculate shipping fees and total landing cost",
                  "How to avoid getting blocked on WeChat and many more"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-[12px] text-[14px] text-[#ccc] leading-[1.5]">
                    <span className="min-w-[20px] h-[20px] bg-[#FFC800]/10 border border-[#FFC800]/35 text-[#FFC800] text-[11px] font-bold rounded-[3px] flex items-center justify-center shrink-0 mt-[1px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-[40px] bg-[#FFC800]/5 border border-[#FFC800]/20 rounded-[8px] p-[24px] text-center">
                <div className="text-[14px] font-semibold tracking-[0.05em] uppercase text-[#FFC800] mb-[14px]">⚡ Limited Availability</div>
                <div className="h-[6px] bg-white/5 rounded-[3px] my-[10px] overflow-hidden">
                  <div className="h-full w-[75%] bg-gradient-to-r from-[#FFC800] to-[#FF8C00] rounded-[3px] animate-[fillPulse_3s_ease-in-out_infinite]"></div>
                </div>
                <div className="text-[15px] text-white mt-[14px]">Only <strong className="text-[#FFC800]">5 spots remaining</strong> out of 20</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
