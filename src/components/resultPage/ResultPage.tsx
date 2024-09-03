'use client';

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Package } from '../../utils/types';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { FaArrowDownShortWide } from 'react-icons/fa6';

interface ResultPageProps {
  packageInfo: Package;
}

export default function ResultPage({ packageInfo }: ResultPageProps) {
  const steps = useMemo(() => {
    const stepList = [
      {
        label: 'Package Received By UPS',
        datetime: `${packageInfo.package_received_date}T${packageInfo.package_received_time}`
      },
      {
        label: 'In Transit',
        datetime: `${packageInfo.in_transit_date}T${packageInfo.in_transit_time}`
      },
      {
        label: 'Out for Delivery',
        datetime: `${packageInfo.out_for_delivery_date}T${packageInfo.out_for_delivery_time}`
      },
      {
        label: 'Delivered',
        datetime: `${packageInfo.estimated_delivery_date}T${packageInfo.estimated_delivery_time}`
      }
    ];

    if (packageInfo.on_hold_date && packageInfo.on_hold_time) {
      stepList.splice(3, 0, {
        label: 'On Hold',
        datetime: `${packageInfo.on_hold_date}T${packageInfo.on_hold_time}`
      });
    }

    return stepList;
  }, [packageInfo]);

  const [currentStep, setCurrentStep] = useState<number>(-1);

  const calculateStep = useCallback(() => {
    const now = new Date().getTime();
    let step = -1;

    for (let i = 0; i < steps.length; i++) {
      if (now >= new Date(steps[i].datetime).getTime()) {
        step = i;
      } else {
        break;
      }
    }

    setCurrentStep(step);
  }, [steps]);

  useEffect(() => {
    calculateStep(); // Initial update
    const interval = setInterval(calculateStep, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, [calculateStep]);

  const formatDate = (datetime: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(datetime).toLocaleDateString(undefined, options);
  };

  const formatTime = (datetime: string) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    return new Date(datetime).toLocaleTimeString(undefined, options);
  };

  const getStatus = (step: number) => {
    switch (step) {
      case 0:
        return 'Package Received';
      case 1:
        return 'In Transit';
      case 2:
        return 'Out for Delivery';
      case 3:
        return 'On Hold';
      case 3:
        return 'Delivered';
      default:
        return 'Processing';
    }
  };

  return (
    <div className="w-full absolute top-0 left-0 right-0 z-10 bg-white p-[16px] text-[#333333]">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-right flex items-center justify-between font-semibold p-4">
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="66.644">
              <path
                d="M8.333 55.062C3.6 51.187 1.1 45.609 1.1 38.947V7.279c7.474-3.962 16.524-5.97 26.9-5.97s19.427 2.008 26.9 5.97v31.668c0 6.662-2.5 12.236-7.233 16.115-4.33 3.549-18.088 9.586-19.668 10.273-1.578-.687-15.336-6.723-19.666-10.273z"
                fill="#300"
              />
              <path
                d="M53.427 6.907c-3.458-.321-7.05-.533-10.709-.533-13.57 0-28.118 2.917-40.145 13.948v18.855c0 6.141 2.271 11.269 6.586 14.786 3.81 3.1 15.535 8.41 18.841 9.869 3.264-1.437 14.959-6.677 18.836-9.869 4.342-3.578 6.591-8.587 6.591-14.786V6.907M5.059 37.215V21.902h4.869v15.529c0 1.382.334 3.428 2.567 3.428a4.08 4.08 0 002.3-.6V21.902h4.863v21.134a12.955 12.955 0 01-7.34 1.956c-4.82 0-7.264-2.616-7.264-7.777M27.036 54.89h-4.872V23.142a11.766 11.766 0 016.566-1.733c5.815 0 9.01 4.412 9.01 11.513s-3.1 11.986-8.51 11.986a7.721 7.721 0 01-2.193-.277zm0-14.24a4.63 4.63 0 001.581.294c2.8 0 4.142-2.573 4.142-7.9 0-5.457-1.171-7.714-4-7.714a4.247 4.247 0 00-1.726.351zm11.808-12.892a6.465 6.465 0 016.536-6.349 8.343 8.343 0 015.346 1.582v4.237a6.522 6.522 0 00-4.363-2c-1.381-.012-2.818.595-2.865 2.327-.047 1.773 1.387 2.473 3.2 3.539 4.069 2.392 4.856 4.542 4.762 7.383-.093 3.115-2.24 6.517-7.053 6.517a10.663 10.663 0 01-5.355-1.512v-4.487a7.755 7.755 0 004.656 1.982c1.787.009 2.963-1.015 2.921-2.714-.037-1.529-.9-2.36-3.043-3.619-4.017-2.356-4.739-4.295-4.746-6.886M7.529 55.949C2.6 51.912 0 46.111 0 39.177V6.214C7.779 2.09 17.2 0 28 0s20.221 2.09 28 6.214v32.963c0 6.934-2.6 12.735-7.529 16.773C43.965 59.644 29.644 65.927 28 66.642c-1.644-.715-15.965-6.998-20.471-10.693zm38.344 6.909v2.861h.516v-1.194h.073c.039.058.777 1.194.777 1.194h.625s-.784-1.147-.864-1.255a.761.761 0 00.633-.76.833.833 0 00-.952-.841zm.752.418c.439 0 .5.215.5.4 0 .268-.115.449-.668.449h-.067v-.851zm2.02 1.02a1.937 1.937 0 11-1.939-1.941 1.937 1.937 0 011.939 1.941M46.7 61.941a2.351 2.351 0 102.354 2.355 2.358 2.358 0 00-2.354-2.355"
                fill="#ffbe00"
              />
            </svg>
          </Link>
          <Link href="/">Go Home</Link>
        </div>
        <div className="p-4 rounded bg-gradient mb-[30px] mt-[30px] text-center font-semibold">Tracking Number: [{packageInfo.tracking_number}] found.</div>
        <div className="border p-4 md:p-8 rounded-lg">
          <div className="vertical-progress-container">
            {steps.map((step, index) => (
              <div key={index} className={`step ${index <= currentStep ? 'active' : ''}`}>
                <div className="circle"></div>
                <div className="content">
                  <p className="label text-base font-semibold uppercase">{step.label}</p>
                  <p className="text-sm flex flex-col mt-1">
                    {formatDate(step.datetime)}
                    <span className="text-[13px]">{formatTime(step.datetime)}</span>
                  </p>
                  {/* {index <= currentStep && (
                    <p className="text-sm flex flex-col mt-1">
                      {formatDate(step.datetime)}
                      <span className="text-[13px]">{formatTime(step.datetime)}</span>
                    </p>
                  )} */}
                </div>
              </div>
            ))}
          </div>
          {/* SENDER'S INFO */}
          <div>
            <div className="p-4 pl-0 flex items-center  gap-3 mt-[10px] font-semibold">
              <span>
                <FaUser />
              </span>
              <span>Sender&apos;s Information</span>
            </div>
            <div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-black uppercase border-b bg-gradient">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Sender Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white text-[#333333] border">
                      <td className="px-4 py-2 w-[200px]">{packageInfo.sender.name}</td>
                      <td className="px-4 py-2 w-[200px]">{packageInfo.sender.contact_number}</td>
                      <td className="px-4 py-2 w-[300px]">{packageInfo.sender.address}</td>
                      <td className="px-4 py-2 w-[200px]">{packageInfo.sender.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* RECIPIENT'S INFO */}
          <div className="mt-2">
            <div className="p-4 pl-0 flex items-center gap-3 mt-[10px] font-semibold">
              <span>
                <FaUser />
              </span>
              <span>Receiver&apos;s Information</span>
            </div>
            <div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-black uppercase border-b bg-gradient">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Receiver Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white text-[#333333] border">
                      <td className="px-4 py-2 w-[200px]">{packageInfo.recipient.name}</td>
                      <td className="px-4 py-2 w-[200px]">{packageInfo.recipient.contact_number}</td>
                      <td className="px-4 py-2 w-[300px]">{packageInfo.recipient.address}</td>
                      <td className="px-4 py-2 w-[200px]">{packageInfo.recipient.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* SHIPMENT'S INFO */}
          <div>
            <div className="p-4 pl-0 flex items-center gap-3 mt-[30px] font-semibold">
              <span>
                <FaArrowDownShortWide />
              </span>
              <span>Shipment Information</span>
            </div>
            <div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Weight (kg)</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.weight_kg}kg</div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Courier</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.courier}</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Packages</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.packages}</div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Quantity</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.quantity}</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Payment Mode</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.paymentMode}</div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Origin</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.origin}</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Destination</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.destination}</div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Pickup Date</div>
                <div className="w-full p-3 py-2">{formatDate(packageInfo.pickup_date ?? '')}</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Pickup Time</div>
                <div className="w-full p-3 py-2">{formatTime(`${packageInfo.pickup_date}T${packageInfo.pickup_time}`)}</div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Status</div>
                <div className="w-full p-3 py-2">{getStatus(currentStep)}</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Estimated Delivery Date</div>
                <div className="w-full p-3 py-2">{formatDate(packageInfo.estimated_delivery_date)}</div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Estimated Delivery Time</div>
                <div className="w-full p-3 py-2">{formatTime(`${packageInfo.estimated_delivery_date}T${packageInfo.estimated_delivery_time}`)}</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Mode</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.mode}</div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Comment</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.comment}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
