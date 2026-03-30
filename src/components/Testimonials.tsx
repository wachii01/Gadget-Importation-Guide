import { useEffect, useRef } from 'react';

export default function Testimonials() {
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

  const testimonials = [
    { initials: "CO", name: "Chinedu O.", loc: "Lagos", quote: "Made back my investment on my first order. The supplier contacts alone are worth 10x the price of this guide." },
    { initials: "AB", name: "Aisha B.", loc: "Abuja", quote: "Finally, a guide that actually explains how to avoid iCloud locked phones. I wish I had this before I lost ₦400k last year." },
    { initials: "TA", name: "Tobi A.", loc: "Port Harcourt", quote: "The shipping contacts are legit. Got my goods in 3 days flat without any customs wahala. Highly recommended!" }
  ];

  return (
    <section className="bg-dark-800 border-t border-border-subtle relative z-10" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-[5%] py-[100px] md:py-[100px] py-[70px]">
        <div className="text-center mb-[60px]">
          <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 mb-[14px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out">
            Success Stories
          </div>
          <h2 className="font-outfit font-extrabold text-[clamp(28px,4vw,46px)] leading-[1.1] tracking-[-0.02em] text-white mb-[20px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-100">
            Join hundreds of successful<br/>Nigerian importers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-card border border-border-subtle rounded-[12px] p-[32px] relative transition-all duration-300 hover:border-orange-500/30 fade-up opacity-0 translate-y-[30px] ease-out" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
              <div className="flex gap-[4px] mb-[20px]">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-orange-500"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <p className="text-[15px] text-text-main leading-[1.7] mb-[24px] italic">
                "{test.quote}"
              </p>
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-500 font-outfit font-bold text-[14px]">
                  {test.initials}
                </div>
                <div>
                  <div className="font-outfit font-bold text-[15px] text-white leading-none mb-[4px]">{test.name}</div>
                  <div className="text-[12px] text-text-muted">{test.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
