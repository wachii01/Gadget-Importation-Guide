import { useEffect, useRef } from 'react';

export default function FAQ() {
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

  const faqs = [
    { q: "Do I need to travel to China to use this guide?", a: "No. Everything in this guide is set up so you can operate entirely from Nigeria. The suppliers communicate via WhatsApp and WeChat, and the Nigerian agent included in the guide can handle your China-side operations for you." },
    { q: "What if I've never imported anything before?", a: "This guide is specifically written for beginners. It explains every term, every tool, and every step from scratch. The recommendation to start with the Nigerian agent in the guide is there precisely because he removes the hardest parts of starting out." },
    { q: "Is this only about phones, or does it cover laptops too?", a: "It covers phones, laptops, MacBooks, and other gadgets. The supplier contacts in the guide sell all of the above. Simply tell them what you need and they will give you rates." },
    { q: "How do I pay my Chinese supplier from Nigeria?", a: "The guide covers three options: using the Nigerian agent included in the guide (you pay naira, he pays in RMB via Alipay), paying directly via USDT cryptocurrency, or using another Nigeria-China payment agent. The process is explained step by step." },
    { q: "What is iCloud Activation Lock and why does it matter?", a: "It is the single biggest risk in iPhone importing. A phone locked to someone else's iCloud account is unusable — it cannot be set up or sold as a working phone. The guide teaches you exactly how to check for this before buying." },
    { q: "How quickly can I start making sales after reading this?", a: "Many importers place their first order within days of getting the contacts and understanding the process. With the Nigerian agent handling logistics and express shipping available in 2 days, you could be selling your first batch within two to three weeks." }
  ];

  return (
    <section className="bg-dark-900 relative z-10" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-[5%] py-[100px] md:py-[100px] py-[70px]">
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 mb-[14px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out">
          FAQ
        </div>
        <h2 className="font-outfit font-extrabold text-[clamp(28px,4vw,46px)] leading-[1.1] tracking-[-0.02em] text-white mb-[20px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-100">
          Common questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[50px]">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border-subtle rounded-[8px] p-[28px] transition-colors duration-300 hover:border-orange-500/25 fade-up opacity-0 translate-y-[30px] ease-out" style={{ transitionDelay: `${(i % 2) * 100}ms` }}>
              <div className="font-outfit font-bold text-[15px] text-white mb-[10px]">{faq.q}</div>
              <div className="text-[14px] text-text-muted leading-[1.65]">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
