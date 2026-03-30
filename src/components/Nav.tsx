import { useEffect, useState } from 'react';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-[5%] py-[18px] flex items-center justify-between bg-dark-900/85 backdrop-blur-[14px] border-b border-border-subtle">
      <div className="font-outfit font-extrabold text-[15px] tracking-[0.08em] text-orange-500 uppercase">
        Shenzhen to Shelf
      </div>
      <a 
        href="#get-guide" 
        className="bg-orange-500 text-white font-outfit font-bold text-[13px] tracking-[0.04em] px-[22px] py-[10px] rounded-[4px] no-underline transition-all duration-200 hover:bg-orange-400 hover:-translate-y-[1px]"
      >
        Get the Guide →
      </a>
    </nav>
  );
}
