import { useEffect, useRef } from 'react';

export default function ForWho() {
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

  const items = [
    { icon: "🚀", title: "You want to start a gadget business", desc: "You have been thinking about importing phones but don't know where to start, who to trust, or how to avoid being scammed." },
    { icon: "💸", title: "You've lost money on bad stock before", desc: "You bought phones that turned out to be iCloud locked, carrier locked, or Chinese domestic versions that don't work in Nigeria." },
    { icon: "🤔", title: "You don't know how to pay suppliers", desc: "The Alipay, USDT, RMB payment process confuses you and you need a clear, practical guide that works from Nigeria." },
    { icon: "📈", title: "You're already selling and want to scale", desc: "You resell phones locally but you're buying from middle-men. This guide connects you directly to primary sources in China." }
  ];

  return (
    <section className="bg-dark-900 relative z-10" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-[5%] py-[100px] md:py-[100px] py-[70px]">
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 mb-[14px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out">
          Is This For You?
        </div>
        <h2 className="font-outfit font-extrabold text-[clamp(28px,4vw,46px)] leading-[1.1] tracking-[-0.02em] text-white mb-[20px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-100">
          This guide is for you if...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[50px]">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-[18px] bg-card border border-border-subtle rounded-[8px] p-[24px] transition-colors duration-300 hover:border-orange-500/30 fade-up opacity-0 translate-y-[30px] ease-out" style={{ transitionDelay: `${(i % 2) * 100}ms` }}>
              <div className="text-[28px] min-w-[44px] h-[44px] bg-orange-500/10 rounded-[6px] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <strong className="block font-outfit font-bold text-[15px] text-white mb-[5px]">{item.title}</strong>
                <span className="text-[14px] text-text-muted">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
