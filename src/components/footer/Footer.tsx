'use client';

import Link from 'next/link';
import { footerLinks, socialLinks } from './MockData';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import { usePathname } from 'next/navigation';

type FooterLinkItem = { title: string; slug: string } | { form: boolean };

function isFooterLinkWithSlug(item: FooterLinkItem): item is { title: string; slug: string } {
  return (item as { slug: string }).slug !== undefined;
}

interface IconComponents {
  [key: string]: React.ComponentType<IconBaseProps>;
}

const iconComponents: IconComponents = {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
};

export default function Footer() {
  const pathname = usePathname();

  const noHeader = ['/track'];

  return (
    <>
      {noHeader.includes(pathname) ? null : (
        <div className="mt-[150px]">
          <div className="bg-[#FAFAFA] hidden pt-[30px] pb-[30px]">
            <div className="custom_container">
              <div>
                <div className="flex flex-col gap-[20px] md:flex-row">
                  {footerLinks.map((fLinks, index) => (
                    <div key={index} className="w-full">
                      <h3 className="text-[#191919] text-base font-bold mb-[11px]">{fLinks.title}</h3>
                      <ul>
                        {fLinks.list.map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-[5px]">
                            <Link href={item.slug} className="text-[#666] hover:underline text-xs font-normal leading-slug">
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#351c15] py-6">
            <div className="flex custom_container flex-wrap items-center justify-between gap-[5px] mt-[30px]">
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
              <div className="flex gap-[20px]">
                {socialLinks.map((sLinks, index) => (
                  <div key={index} className="w-full flex flex-col gap-2">
                    <h3 className="text-[#ffffff] text-[12px] font-bold">{sLinks.title}</h3>
                    <ul className="flex gap-3">
                      {sLinks.list.map((item, itemIndex) => {
                        const IconComponent = iconComponents[item.icon];
                        return (
                          <li key={itemIndex} className="mb-[5px]">
                            <Link href={item.slug} className="text-[#ffffff] text-xl">
                              <IconComponent />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="custom_container text-[#fff] flex flex-col gap-6">
              <ul className="flex flex-wrap gap-3 text-sm items-center">
                <li>
                  <Link className="hover:underline" href="">
                    Fraud Awareness
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="">
                    Legal Notice
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="">
                    Privacy Notice
                  </Link>
                </li>
              </ul>
              <div className="text-center text-sm">Copyright ©1994- 2024  United Parcel Service of America, Inc. All rights reserved.</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
