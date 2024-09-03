'use client';

import Image from 'next/image';
import TrackingForm from '../trackingForm/TrackingForm';
import { useState } from 'react';
import bannerImg from '../../assets/appteaser-ma.png';

export default function Banner() {
  const [loading, setLoading] = useState(false);

  const items = [
    {
      img: 'https://i.imgur.com/Q5cj2lz.png',
      title: 'Shop',
      desc: 'Find the right service'
    },
    {
      img: 'https://i.imgur.com/nfO0Y86.png',
      title: 'Get a Quote',
      desc: 'Estimate cost to share and compare'
    },
    {
      img: 'https://i.imgur.com/36w5AaD.png',
      title: 'Request a Business Account',
      desc: 'Shipping regularly or frequently? Learn about volume discounts'
    }
  ];
  return (
    <div className="bg-[#351c15] overflow-hidden px-4 pb-[50px] md:pb-0 pt-10">
      <div className="custom_container !p-0">
        <div className="relative flex justify-between mt-5">
          <div className="w-full">
            <div className="flex items-center gap-5">
              <h5 className="text-[28px] underline underline-offset-[7px] decoration-[#ffc400] decoration-4 text-white mb-5">Track</h5>
              <h5 className="text-[28px] text-white mb-5">Quote</h5>
              <h5 className="text-[28px] text-white mb-5">Ship</h5>
              <h5 className="text-[28px] text-white mb-5">Billing</h5>
            </div>
            <TrackingForm />
            <p className="text-white mt-3">Need help changing your delivery? Get Help</p>
          </div>
          <div className="w-[500px] hidden md:block max-h-[408px]">
            <Image src={bannerImg} width={5000} height={5000} className="w-[300%] h-full" alt="dddd" />
          </div>
        </div>
      </div>
    </div>
  );
}
