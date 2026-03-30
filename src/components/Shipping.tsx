import { useEffect, useRef } from 'react';

export default function Shipping() {
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
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 mb-[14px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out">
          Shipping to Nigeria
        </div>
        <h2 className="font-outfit font-extrabold text-[clamp(28px,4vw,46px)] leading-[1.1] tracking-[-0.02em] text-white mb-[20px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-100">
          Exact rates from two<br/>verified shipping partners
        </h2>
        <p className="text-[17px] text-text-muted leading-[1.75] max-w-[600px] fade-up opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-200">
          No more guessing what it costs to get your goods from China to Nigeria. Two trusted shipping companies with direct contacts are included in the guide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[50px]">
          <div className="bg-card border border-border-subtle rounded-[8px] overflow-hidden transition-colors duration-300 hover:border-orange-500/35 fade-up opacity-0 translate-y-[30px] ease-out delay-0">
            <div className="bg-gradient-to-br from-orange-500/15 to-transparent border-b border-border-subtle px-[28px] py-[24px]">
              <div className="font-outfit font-extrabold text-[20px] text-white mb-[4px]">Shipping Company 1</div>
              <div className="text-[13px] text-orange-500">Contact included in guide</div>
            </div>
            <div className="px-[28px] py-[24px]">
              <div className="flex justify-between items-center py-[12px] border-b border-border-subtle text-[14px]">
                <span className="text-text-muted">Rate per phone</span>
                <span className="text-orange-500 font-outfit font-bold">₦20,000</span>
              </div>
              <div className="flex justify-between items-center py-[12px] border-b border-border-subtle text-[14px]">
                <span className="text-text-muted">Delivery time</span>
                <span className="text-white font-medium">2-Day Express</span>
              </div>
              <div className="flex justify-between items-center py-[12px] text-[14px]">
                <span className="text-text-muted">Best for</span>
                <span className="text-white font-medium text-right">Urgent orders, first-time suppliers</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-border-subtle rounded-[8px] overflow-hidden transition-colors duration-300 hover:border-orange-500/35 fade-up opacity-0 translate-y-[30px] ease-out delay-100">
            <div className="bg-gradient-to-br from-orange-500/15 to-transparent border-b border-border-subtle px-[28px] py-[24px]">
              <div className="font-outfit font-extrabold text-[20px] text-white mb-[4px]">Shipping Company 2</div>
              <div className="text-[13px] text-orange-500">Contact included in guide</div>
            </div>
            <div className="px-[28px] py-[24px]">
              <div className="flex justify-between items-center py-[12px] border-b border-border-subtle text-[14px]">
                <span className="text-text-muted">Packaged phone</span>
                <span className="text-orange-500 font-outfit font-bold">₦18,000</span>
              </div>
              <div className="flex justify-between items-center py-[12px] border-b border-border-subtle text-[14px]">
                <span className="text-text-muted">Naked phone</span>
                <span className="text-orange-500 font-outfit font-bold">₦14,000</span>
              </div>
              <div className="flex justify-between items-center py-[12px] border-b border-border-subtle text-[14px]">
                <span className="text-text-muted">Delivery time</span>
                <span className="text-white font-medium">5–10 days</span>
              </div>
              <div className="flex justify-between items-center py-[12px] text-[14px]">
                <span className="text-text-muted">Best for</span>
                <span className="text-white font-medium text-right">Bulk orders, cost savings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
