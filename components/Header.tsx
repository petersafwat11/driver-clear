"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Send, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const FacebookIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      d="M17 3.5C17 3.36745 16.9473 3.24027 16.8536 3.1465C16.7598 3.05273 16.6326 3.00005 16.5 3.00005H14C12.7411 2.93734 11.5086 3.37544 10.5717 4.21863C9.63485 5.06182 9.06978 6.24155 9 7.50005V10.2001H6.5C6.36739 10.2001 6.24021 10.2527 6.14645 10.3465C6.05268 10.4403 6 10.5674 6 10.7001V13.3001C6 13.4327 6.05268 13.5598 6.14645 13.6536C6.24021 13.7474 6.36739 13.8001 6.5 13.8001H9V20.5001C9 20.6327 9.05268 20.7598 9.14645 20.8536C9.24021 20.9474 9.36739 21.0001 9.5 21.0001H12.5C12.6326 21.0001 12.7598 20.9474 12.8536 20.8536C12.9473 20.7598 13 20.6327 13 20.5001V13.8001H15.62C15.7312 13.8017 15.8397 13.7661 15.9285 13.6991C16.0172 13.6321 16.0811 13.5374 16.11 13.4301L16.83 10.8301C16.8499 10.7562 16.8526 10.6787 16.8378 10.6036C16.8231 10.5286 16.7913 10.4579 16.7449 10.397C16.6985 10.3362 16.6388 10.2868 16.5704 10.2526C16.5019 10.2185 16.4265 10.2005 16.35 10.2001H13V7.50005C13.0249 7.25253 13.1411 7.02317 13.326 6.85675C13.5109 6.69033 13.7512 6.59881 14 6.60005H16.5C16.6326 6.60005 16.7598 6.54737 16.8536 6.45361C16.9473 6.35984 17 6.23266 17 6.10005V3.50005Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        hasScrolled
          ? "py-3 bg-brand-dark/[.96] md:py-[30px]"
          : "py-[30px] absolute md:absolute"
      }`}
    >
      <div className="px-4 md:px-[60px]">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 relative z-50">
            <svg
              className="w-11 h-[37px]"
              viewBox="0 0 44 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M5.32776 0.00925399C10.1828 -0.00455514 15.0425 0.00925399 19.8975 0.00465094C22.1397 0.013857 24.4097 0.50178 26.3555 1.63413C28.9034 3.05187 30.7889 5.55592 31.4838 8.37298C31.7664 9.41327 31.8776 10.4904 31.8869 11.5629H26.5547C26.5547 10.3017 26.2582 9.02201 25.5772 7.9495C24.734 6.59161 23.2933 5.66179 21.7413 5.31656C21.0325 5.13704 20.3006 5.10482 19.5732 5.10022C14.8294 5.10482 10.0809 5.09562 5.33702 5.10482C5.33239 3.4063 5.34629 1.70778 5.32776 0.00925399Z"
                  fill="white"
                />
                <path
                  d="M0 11.7931C1.77895 11.7931 3.55326 11.7885 5.33221 11.7931C5.33221 14.0255 5.33221 16.2534 5.33221 18.4859C10.8729 18.4859 16.4136 18.4859 21.9542 18.4859C21.9542 20.1752 21.9542 21.8645 21.9542 23.5492C14.6392 23.5492 7.31962 23.5492 0.00463267 23.5492C0 19.632 0 15.7103 0 11.7931Z"
                  fill="white"
                />
                <path
                  d="M21.9542 13.4224C29.2692 13.4224 36.5889 13.4224 43.9038 13.4224C43.9038 17.3442 43.9038 21.2613 43.9038 25.1831C42.1249 25.1831 40.3506 25.1877 38.5716 25.1831C38.5716 22.9507 38.5716 20.7228 38.5716 18.4903C33.031 18.4903 27.4903 18.4903 21.9496 18.4903C21.9496 16.801 21.9496 15.1117 21.9496 13.427L21.9542 13.4224Z"
                  fill="#B80000"
                />
                <path
                  d="M12.0078 25.4136H17.3493C17.34 27.0753 17.8913 28.7876 19.0866 29.9844C20.3559 31.2871 22.2136 31.8762 24.0065 31.8716C28.8615 31.8716 33.7165 31.8808 38.5716 31.8716C38.5762 33.5702 38.5623 35.2687 38.5808 36.9672C33.7258 36.981 28.8661 36.9672 24.0065 36.9718C21.7225 36.9672 19.4155 36.4517 17.442 35.2871C16.1819 34.5506 15.0654 33.5656 14.2084 32.3918C12.7074 30.3941 12.0264 27.89 12.0125 25.4182L12.0078 25.4136Z"
                  fill="#B80000"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="43.9038" height="36.9716" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>

          <nav className="hidden lg:flex items-center bg-white/10 rounded-full px-7 py-[18px] backdrop-blur-sm">
            <Link
              href="/speeding-offences"
              className={`text-sm font-medium transition-colors px-3.5 ${isActive("/speeding-offences") ? "text-brand-red" : "text-white hover:text-brand-red"}`}
            >
              SPEEDING OFFENCES
            </Link>
            <Link
              href="/red-light-offences"
              className={`text-sm font-medium transition-colors px-3.5 ${isActive("/red-light-offences") ? "text-brand-red" : "text-white hover:text-brand-red"}`}
            >
              RED LIGHT OFFENCES
            </Link>
            <Link
              href="/ncb-renewals"
              className={`text-sm font-medium transition-colors px-3.5 ${isActive("/ncb-renewals") ? "text-brand-red" : "text-white hover:text-brand-red"}`}
            >
              NCB RENEWALS
            </Link>
            <Link
              href="/pcn-clearances"
              className={`text-sm font-medium transition-colors px-3.5 ${isActive("/pcn-clearances") ? "text-brand-red" : "text-white hover:text-brand-red"}`}
            >
              PCN CLEARANCES
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors px-3.5 ${isActive("/contact") ? "text-brand-red" : "text-white hover:text-brand-red"}`}
            >
              CONTACT US
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-14 h-14 rounded-full border border-[#464646] bg-white/10 backdrop-blur-sm items-center justify-center hover:bg-white/20 transition-colors text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://t.me/drive_clear"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-14 h-14 rounded-full border border-[#0088cc] bg-[#0088cc] items-center justify-center hover:bg-[#0066aa] transition-colors"
            >
              <Send className="w-6 h-6 text-white" />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-14 h-14 rounded-full border border-[#464646] bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors relative z-50"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen &&
        createPortal(
          <div className="lg:hidden fixed inset-0 bg-brand-dark/95 backdrop-blur-lg z-40 px-4 overflow-y-auto flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-6 w-full">
              <Link
                href="/speeding-offences"
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${isActive("/speeding-offences") ? "text-brand-red" : "text-white hover:text-brand-red"}`}
              >
                SPEEDING OFFENCES
              </Link>
              <Link
                href="/red-light-offences"
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${isActive("/red-light-offences") ? "text-brand-red" : "text-white hover:text-brand-red"}`}
              >
                RED LIGHT OFFENCES
              </Link>
              <Link
                href="/ncb-renewals"
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${isActive("/ncb-renewals") ? "text-brand-red" : "text-white hover:text-brand-red"}`}
              >
                NCB RENEWALS
              </Link>
              <Link
                href="/pcn-clearances"
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${isActive("/pcn-clearances") ? "text-brand-red" : "text-white hover:text-brand-red"}`}
              >
                PCN CLEARANCES
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${isActive("/contact") ? "text-brand-red" : "text-white hover:text-brand-red"}`}
              >
                CONTACT US
              </Link>

              <div className="flex items-center gap-4 pt-8">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-[#464646] bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://t.me/drive_clear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-[#0088cc] bg-[#0088cc] flex items-center justify-center hover:bg-[#0066aa] transition-colors"
                >
                  <Send className="w-6 h-6 text-white" />
                </a>
              </div>
            </nav>
          </div>,
          document.body,
        )}
    </header>
  );
}
