import { useEffect, useRef } from 'react';

export default function PainSection() {
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

  const pains = [
    { icon: "🧱", title: "The iCloud Brick", desc: "Buying 10 'clean' iPhones in bulk, only to discover 8 of them are iCloud-locked and completely useless in Nigeria." },
    { icon: "📵", title: "The Network Trap", desc: "Receiving Chinese domestic version phones that look perfect but can't find MTN, Airtel, or Glo networks." },
    { icon: "👻", title: "The Disappearing Agent", desc: "Paying a 'trusted agent' on WeChat who immediately blocks you and disappears with your hard-earned capital." },
    { icon: "📦", title: "The Refurbished Scam", desc: "Ordering 'brand new sealed' MacBooks or phones that arrive as poorly refurbished scrap with fake parts." }
  ];

  return (
    <section className="bg-dark-900 border-b border-border-subtle relative z-10" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-[5%] py-[100px] md:py-[100px] py-[70px]">
        <div className="text-center mb-[50px]">
          <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-500 mb-[14px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out">
            The Hard Truth
          </div>
          <h2 className="font-outfit font-extrabold text-[clamp(28px,4vw,46px)] leading-[1.1] tracking-[-0.02em] text-white mb-[20px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-100">
            Gadget importation is a goldmine.<br/>But it's full of landmines.
          </h2>
          <p className="text-[17px] text-text-muted leading-[1.75] max-w-[680px] mx-auto fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-200">
            If you've tried importing phones to Nigeria, or even just researched it, you already know the horror stories. One bad order can wipe out months of savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {pains.map((pain, i) => (
            <div key={i} className="flex items-start gap-[18px] bg-red-500/5 border border-red-500/20 rounded-[8px] p-[28px] transition-colors duration-300 hover:border-red-500/40 fade-up opacity-0 translate-y-[30px] ease-out" style={{ transitionDelay: `${(i % 2) * 100}ms` }}>
              <div className="text-[28px] min-w-[48px] h-[48px] bg-red-500/10 rounded-[6px] flex items-center justify-center shrink-0">
                {pain.icon}
              </div>
              <div>
                <strong className="block font-outfit font-bold text-[17px] text-white mb-[6px]">{pain.title}</strong>
                <span className="text-[15px] text-text-muted leading-[1.6] block">{pain.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[50px] text-center fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-300">
          <p className="text-[18px] text-white font-medium">
            You don't need more motivation. <span className="text-orange-500">You need a system that protects your capital.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
