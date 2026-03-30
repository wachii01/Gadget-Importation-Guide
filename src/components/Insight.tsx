import { useEffect, useRef } from 'react';

export default function Insight() {
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
    <section className="bg-dark-900 relative z-10" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-[5%] py-[100px] md:py-[100px] py-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 mb-[14px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out">
              The Truth About China
            </div>
            <h2 className="font-outfit font-extrabold text-[clamp(28px,4vw,46px)] leading-[1.1] tracking-[-0.02em] text-white mb-[20px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-100">
              The iPhone in your<br/>pocket was made<br/>in China.
            </h2>
            <p className="text-[17px] text-text-muted leading-[1.75] max-w-[600px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-200">
              Most Nigerians avoid Chinese gadgets because they think "China" means "fake." But Apple, Samsung, Dell, HP, and nearly every major electronics brand in the world manufactures in China. The question was never whether China makes good products. The question is whether you know how to buy the right ones.
            </p>
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-[8px] px-[32px] py-[28px] mt-[24px] text-[17px] italic text-[#ccc] leading-[1.65] relative fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-300 before:content-['\201C'] before:font-outfit before:text-[64px] before:text-orange-500 before:opacity-30 before:absolute before:top-[4px] before:left-[18px] before:leading-none">
              This guide exists so that you stop losing money from buying the wrong stock — and start profiting from buying the right stock, from the right people, at the right price.
            </div>
          </div>
          <div>
            <div className="relative bg-card border border-border-subtle rounded-[8px] p-[36px] overflow-hidden fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-400 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-orange-500">
              <div className="font-outfit font-extrabold text-[72px] text-orange-500 leading-none mb-[8px]">80%</div>
              <div className="text-[15px] text-text-muted">of the world's smartphones are assembled in China — including iPhones, Samsung Galaxy, and every major brand you resell in Nigeria.</div>
            </div>
            <div className="h-[20px]"></div>
            <div className="relative bg-card border border-border-subtle rounded-[8px] p-[36px] overflow-hidden fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-orange-500">
              <div className="font-outfit font-extrabold text-[72px] text-orange-500 leading-none mb-[8px]">₦0</div>
              <div className="text-[15px] text-text-muted">is what you should lose on a bad order once you know how to check IMEI status, iCloud lock, and carrier unlock before paying a single naira.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
