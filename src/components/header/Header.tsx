'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import UPSLogo from '../../assets/UPS-logo.svg';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const noHeader = ['/track'];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {noHeader.includes(pathname) ? null : (
        <div>
          <div className="header bg-white p-4">
            <div className="mx-auto flex min-h-[35px] max-w-[1150px] items-center">
              <div>
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
              </div>
            </div>
          </div>
          <div className="border bg-white p-4">
            <ul className="mx-auto flex h-7 max-w-[1150px] items-center gap-8 text-sm">
              <li className="flex cursor-pointer items-center gap-1 hover:text-red-500 hover:underline">
                <span>Shipping</span> <MdKeyboardArrowDown />
              </li>
              <li className="flex cursor-pointer items-center gap-1 hover:text-red-500 hover:underline">
                <span>Tracking</span> <MdKeyboardArrowDown />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
