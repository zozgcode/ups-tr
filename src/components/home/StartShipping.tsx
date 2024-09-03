import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function StartShipping() {
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="custom_container flex flex-col md:flex-row items-center gap-[30px] md:gap-[100px]">
        <div className="w-full">
          <Image src="https://i.imgur.com/NVSKTuz.jpeg" width={5000} height={5000} className="w-[300%] h-full" alt="dddd" />
        </div>
        <div className="w-full p-3">
          <h2 className="text-[40px] text-black mb-[10px]">Let’s Start Shipping</h2>
          <p className="mb-[1.5rem] text-[20px] text-black">You have parcels. We’ll take care of them.</p>
          <Link href="/" className="max-w-max h-[45px] p-3 flex items-center justify-center gap-3 rounded-[2.5rem] bg-[#ffc400] hover:bg-[#ffc400] text-base font-semibold text-black">
            Ship Now <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>

      <div className="custom_container flex flex-col-reverse md:flex-row items-center gap-[30px] md:gap-[100px]">
        <div className="w-full p-3">
          <h2 className="text-[40px] text-black mb-[10px]">Manage All Your Shipments In One Place</h2>
          <p className="mb-[1.5rem] text-[20px] text-black">See inbound and outbound parcels from one custom dashboard with UPS My Choice® for Business.</p>
          <Link href="/" className="max-w-max h-[45px] p-3 flex items-center justify-center gap-3 rounded-[2.5rem] bg-[#ffc400] hover:bg-[#ffc400] text-base font-semibold text-black">
            Learn More <MdKeyboardArrowRight />
          </Link>
        </div>
        <div className="w-full">
          <Image src="https://i.imgur.com/EbQmYSS.jpeg" width={5000} height={5000} className="w-[300%] h-full" alt="dddd" />
        </div>
      </div>
    </div>
  );
}
