// components/TrackingForm.js (or TrackingForm.tsx)
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push(`/track?trackingNumber=${trackingNumber}`);
    }, 2000);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex relative flex-col gap-4 md:flex-row items-center"
      >
        <input
          type="text"
          id="trackingNumber"
          className="w-full h-[45px] outline-none text-base placeholder:text-sm placeholder:text-[#3b3b3b] border-none py-[10px] pr-[120px] rounded p-[12px]"
          placeholder="Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          required
        />
        {/* <button type="submit" className=''>Track Package</button> */}
        <button
          type="submit"
          className="w-full md:w-[130px] h-[45px] px-4 gap-3 flex items-center justify-center rounded-[2.5rem] bg-[#ffc400] hover:bg-[#ffc400] text-base font-semibold text-black"
          disabled={loading}
        >
          {loading ? (
            "Loading..."
          ) : (
            "Track >"
          )}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
}
