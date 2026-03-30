import { useEffect, useRef } from 'react';

export default function Suppliers() {
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
    <section className="bg-dark-800 border-t border-border-subtle relative z-10" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-[5%] py-[100px] md:py-[100px] py-[70px]">
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 mb-[14px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out">
          Inside the Guide
        </div>
        <h2 className="font-outfit font-extrabold text-[clamp(28px,4vw,46px)] leading-[1.1] tracking-[-0.02em] text-white mb-[20px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-100">
          Real supplier contacts,<br/>not generic Alibaba advice
        </h2>
        <p className="text-[17px] text-text-muted leading-[1.75] max-w-[600px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-200">
          The guide includes direct contact details for three verified suppliers — two in China and one Nigerian agent — who sell phones, laptops, and MacBooks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[50px]">
          <div className="bg-card border border-border-subtle rounded-[8px] p-[28px] text-center transition-all duration-300 hover:border-orange-500/30 hover:-translate-y-[3px] fade-up opacity-0 translate-y-[30px] ease-out delay-0">
            <div className="w-[60px] h-[60px] rounded-full bg-orange-500/12 border-2 border-orange-500/30 flex items-center justify-center mx-auto mb-[16px] overflow-hidden p-[12px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-full h-full rounded-[4px] object-cover">
                <rect width="900" height="600" fill="#ee1c25"/>
                <path fill="#ff0" d="M150 250l-30-90-30 90 75-55h-90l75 55zm150-100l-10-30-10 30 25-20h-30l25 20zm50 75l-10-30-10 30 25-20h-30l25 20zm0 75l-10-30-10 30 25-20h-30l25 20zm-50 75l-10-30-10 30 25-20h-30l25 20z"/>
              </svg>
            </div>
            <div className="font-outfit font-bold text-[17px] text-white mb-[6px]">Supplier 1</div>
            <div className="text-[12px] text-orange-500 font-medium mb-[12px] tracking-[0.05em] uppercase">Shenzhen, China</div>
            <div className="text-[13px] text-text-muted leading-[1.6]">China-based supplier for phones and laptops. Reachable on WeChat. Full contact details inside the guide.</div>
          </div>
          
          <div className="bg-card border border-border-subtle rounded-[8px] p-[28px] text-center transition-all duration-300 hover:border-orange-500/30 hover:-translate-y-[3px] fade-up opacity-0 translate-y-[30px] ease-out delay-100">
            <div className="w-[60px] h-[60px] rounded-full bg-orange-500/12 border-2 border-orange-500/30 flex items-center justify-center mx-auto mb-[16px] overflow-hidden p-[12px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-full h-full rounded-[4px] object-cover">
                <rect width="900" height="600" fill="#ee1c25"/>
                <path fill="#ff0" d="M150 250l-30-90-30 90 75-55h-90l75 55zm150-100l-10-30-10 30 25-20h-30l25 20zm50 75l-10-30-10 30 25-20h-30l25 20zm0 75l-10-30-10 30 25-20h-30l25 20zm-50 75l-10-30-10 30 25-20h-30l25 20z"/>
              </svg>
            </div>
            <div className="font-outfit font-bold text-[17px] text-white mb-[6px]">Supplier 2</div>
            <div className="text-[12px] text-orange-500 font-medium mb-[12px] tracking-[0.05em] uppercase">Shenzhen, China</div>
            <div className="text-[13px] text-text-muted leading-[1.6]">China-based supplier for phones and laptops. Reachable on WeChat. Full contact details inside the guide.</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/5 to-card border border-orange-500/40 rounded-[8px] p-[28px] text-center relative transition-all duration-300 hover:-translate-y-[3px] fade-up opacity-0 translate-y-[30px] ease-out delay-200">
            <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold tracking-[0.1em] uppercase px-[14px] py-[4px] rounded-[20px] whitespace-nowrap">⭐ Best for Beginners</div>
            <div className="w-[60px] h-[60px] rounded-full bg-orange-500/12 border-2 border-orange-500/30 flex items-center justify-center mx-auto mb-[16px] overflow-hidden p-[12px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-full h-full rounded-[4px] object-cover">
                <rect width="900" height="600" fill="#008751"/>
                <rect x="300" width="300" height="600" fill="#ffffff"/>
              </svg>
            </div>
            <div className="font-outfit font-bold text-[17px] text-white mb-[6px]">Supplier 3 (Agent)</div>
            <div className="text-[12px] text-orange-500 font-medium mb-[12px] tracking-[0.05em] uppercase">Nigeria · China Network</div>
            <div className="text-[13px] text-text-muted leading-[1.6]">Nigerian agent with deep supplier relationships in China. Handles sourcing, negotiation, AND payment in naira. Ideal if this is your first order.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
