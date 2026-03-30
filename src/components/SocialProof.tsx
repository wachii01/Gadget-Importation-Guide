export default function SocialProof() {
  return (
    <div className="bg-dark-800 border-y border-border-subtle px-[5%] py-[20px] flex items-center justify-center gap-x-[48px] gap-y-[24px] flex-wrap">
      <div className="flex items-center gap-[10px] text-[13px] text-text-muted">
        <span className="text-[20px]">👥</span>
        <div><strong className="text-text-main font-outfit text-[15px]">200+ Importers</strong><br/>already using this guide</div>
      </div>
      <div className="flex items-center gap-[10px] text-[13px] text-text-muted">
        <span className="text-[20px]">📱</span>
        <div><strong className="text-text-main font-outfit text-[15px]">Phones, Laptops & MacBooks</strong><br/>covered in one guide</div>
      </div>
      <div className="flex items-center gap-[10px] text-[13px] text-text-muted">
        <span className="w-[20px] h-[15px] flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-full h-full rounded-[2px] object-cover">
            <rect width="900" height="600" fill="#ee1c25"/>
            <path fill="#ff0" d="M150 250l-30-90-30 90 75-55h-90l75 55zm150-100l-10-30-10 30 25-20h-30l25 20zm50 75l-10-30-10 30 25-20h-30l25 20zm0 75l-10-30-10 30 25-20h-30l25 20zm-50 75l-10-30-10 30 25-20h-30l25 20z"/>
          </svg>
        </span>
        <div><strong className="text-text-main font-outfit text-[15px]">Real Supplier Contacts</strong><br/>verified & ready to use</div>
      </div>
      <div className="flex items-center gap-[10px] text-[13px] text-text-muted">
        <span className="text-[20px]">🚚</span>
        <div><strong className="text-text-main font-outfit text-[15px]">Shipping Rates Included</strong><br/>from ₦14,000 per unit</div>
      </div>
      <div className="flex items-center gap-[10px] text-[13px] text-text-muted">
        <span className="text-[20px]">✅</span>
        <div><strong className="text-text-main font-outfit text-[15px]">Full Due Diligence SOP</strong><br/>so you never buy wrong</div>
      </div>
    </div>
  );
}
