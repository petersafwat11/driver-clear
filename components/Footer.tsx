import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CreditCard,
  Apple,
  Coins,
} from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-brand-dark px-4 md:px-[60px] py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex justify-center mb-12">
          <svg
            className="w-[259px] h-11"
            viewBox="0 0 259 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_46_639)">
              <path
                d="M6.24219 0.0108277C11.9305 -0.00535149 17.6242 0.0108277 23.3126 0.00543465C25.9396 0.0162208 28.5992 0.587886 30.8789 1.91458C33.8642 3.57565 36.0733 6.50948 36.8874 9.81003C37.2185 11.0289 37.3488 12.2908 37.3597 13.5474H31.1123C31.1123 12.0697 30.7649 10.5705 29.967 9.31387C28.9792 7.72292 27.2911 6.63352 25.4728 6.22904C24.6424 6.01871 23.7848 5.98095 22.9326 5.97556C17.3746 5.98095 11.8111 5.97017 6.25304 5.98095C6.24762 3.99091 6.2639 2.00087 6.24219 0.0108277Z"
                fill="white"
              />
              <path
                d="M0 13.8169C2.08427 13.8169 4.16311 13.8115 6.24738 13.8169C6.24738 16.4325 6.24738 19.0427 6.24738 21.6584C12.739 21.6584 19.2306 21.6584 25.7223 21.6584C25.7223 23.6376 25.7223 25.6169 25.7223 27.5907C17.1518 27.5907 8.5759 27.5907 0.00542778 27.5907C0 23.0012 0 18.4064 0 13.8169Z"
                fill="white"
              />
              <path
                d="M25.7223 15.7261C34.2928 15.7261 42.8686 15.7261 51.4391 15.7261C51.4391 20.321 51.4391 24.9105 51.4391 29.5054C49.3548 29.5054 47.276 29.5108 45.1917 29.5054C45.1917 26.8897 45.1917 24.2795 45.1917 21.6638C38.7001 21.6638 32.2085 21.6638 25.7169 21.6638C25.7169 19.6846 25.7169 17.7053 25.7169 15.7315L25.7223 15.7261Z"
                fill="#B80000"
              />
              <path
                d="M14.0687 29.7754H20.327C20.3161 31.7223 20.962 33.7285 22.3624 35.1307C23.8496 36.6569 26.0261 37.3473 28.1267 37.3419C33.815 37.3419 39.5033 37.3527 45.1916 37.3419C45.1971 39.3319 45.1808 41.3219 45.2025 43.312C39.5142 43.3282 33.8204 43.312 28.1267 43.3174C25.4508 43.312 22.7478 42.708 20.4355 41.3435C18.9592 40.4806 17.6511 39.3265 16.6469 37.9513C14.8883 35.6107 14.0904 32.6769 14.0742 29.7808L14.0687 29.7754Z"
                fill="#B80000"
              />
            </g>
            <path
              d="M86.5637 14.6163C88.3628 16.244 89.2695 18.7 89.2695 21.9698C89.2695 25.2396 88.37 27.6955 86.5637 29.3233C84.7575 30.9511 82.3158 31.765 79.2245 31.765H71.2927V12.1675H79.2245C82.3158 12.1675 84.7646 12.9814 86.5637 14.6091V14.6163ZM82.9655 26.7032C83.9793 25.7394 84.4862 24.1616 84.4862 21.9698C84.4862 19.778 83.9793 18.1931 82.9655 17.2364C81.9517 16.2797 80.4667 15.7943 78.5034 15.7943H75.9475V28.1453H78.5034C80.4596 28.1453 81.9446 27.667 82.9655 26.7032Z"
              fill="white"
            />
            <path
              d="M100.907 24.8823H97.3655V31.7718H92.6964V12.1743H102.492C104.776 12.1743 106.561 12.7383 107.846 13.8592C109.124 14.9872 109.767 16.5365 109.767 18.5141C109.767 19.9562 109.424 21.1913 108.739 22.2051C108.053 23.2189 107.061 23.9471 105.761 24.3897L110.266 31.7718H104.833L100.907 24.8823ZM101.756 21.2627C102.82 21.2627 103.627 21.02 104.184 20.5345C104.74 20.049 105.019 19.3779 105.019 18.5141C105.019 17.6502 104.74 16.9862 104.184 16.5079C103.627 16.0296 102.813 15.794 101.756 15.794H97.3655V21.2556H101.756V21.2627Z"
              fill="white"
            />
            <path
              d="M113.201 12.1743H117.87V31.7718H113.201V12.1743Z"
              fill="white"
            />
            <path
              d="M133.348 31.7718H127.751L120.804 12.1743H125.773L130.55 26.9385H130.657L135.404 12.1743H140.316L133.348 31.7718Z"
              fill="white"
            />
            <path
              d="M157.393 19.9636V23.4762H147.948V28.0311H157.886V31.765H143.257V12.1675H157.886V15.7871H147.948V19.9565H157.393V19.9636Z"
              fill="white"
            />
            <path
              d="M177.962 28.5736C177.162 29.6802 176.12 30.5655 174.835 31.2223C173.542 31.8792 172.057 32.2076 170.372 32.2076C168.466 32.2076 166.788 31.8006 165.325 30.9867C163.861 30.1728 162.719 28.9949 161.905 27.4599C161.091 25.9249 160.684 24.0901 160.684 21.9697C160.684 19.8494 161.091 18.0145 161.905 16.4796C162.719 14.9446 163.861 13.7666 165.325 12.9528C166.788 12.1389 168.473 11.7319 170.372 11.7319C171.929 11.7319 173.328 12.0246 174.57 12.6101C175.813 13.1955 176.841 13.9594 177.647 14.9018C178.454 15.8442 179.004 16.8651 179.297 17.9646L174.656 18.6214C174.342 17.6861 173.821 16.9294 173.078 16.3439C172.336 15.7585 171.436 15.4658 170.372 15.4658C168.923 15.4658 167.738 16.0084 166.817 17.0864C165.896 18.1645 165.432 19.7922 165.432 21.9697C165.432 24.1472 165.896 25.775 166.817 26.8531C167.738 27.9311 168.923 28.4737 170.372 28.4737C171.565 28.4737 172.536 28.1096 173.292 27.3742C174.049 26.646 174.556 25.6608 174.813 24.44L179.504 24.904C179.268 26.2391 178.747 27.4599 177.954 28.5665L177.962 28.5736Z"
              fill="white"
            />
            <path
              d="M182.838 12.1743H187.529V27.8737H197.631V31.7718H182.838V12.1743Z"
              fill="white"
            />
            <path
              d="M215.057 19.9636V23.4762H205.612V28.0311H215.55V31.765H200.922V12.1675H215.55V15.7871H205.612V19.9565H215.057V19.9636Z"
              fill="white"
            />
            <path
              d="M224.389 27.3743L222.932 31.765H217.992L225.131 12.1675H231.364L238.503 31.765H233.506L232.049 27.3743H224.389ZM228.23 16.0656H228.123L225.517 23.9688H230.9L228.237 16.0656H228.23Z"
              fill="white"
            />
            <path
              d="M249.64 24.8823H246.099V31.7718H241.43V12.1743H251.225C253.51 12.1743 255.295 12.7383 256.58 13.8592C257.858 14.9872 258.5 16.5365 258.5 18.5141C258.5 19.9562 258.157 21.1913 257.472 22.2051C256.787 23.2189 255.794 23.9471 254.495 24.3897L259 31.7718H253.567L249.64 24.8823ZM250.49 21.2627C251.554 21.2627 252.36 21.02 252.917 20.5345C253.474 20.049 253.752 19.3779 253.752 18.5141C253.752 17.6502 253.474 16.9862 252.917 16.5079C252.36 16.0296 251.546 15.794 250.49 15.794H246.099V21.2556H250.49V21.2627Z"
              fill="white"
            />
            <defs>
              <clipPath id="clip0_46_639">
                <rect width="51.4391" height="43.3171" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="w-full h-px bg-white mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white font-bold text-base uppercase mb-6 font-['Chakra_Petch']">
              MENU LINKS
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Link
                  href="/"
                  className="block text-white text-sm hover:text-brand-red transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="/faqs"
                  className="block text-white text-sm hover:text-brand-red transition-colors"
                >
                  FAQS
                </Link>
                <Link
                  href="/services"
                  className="block text-white text-sm hover:text-brand-red transition-colors"
                >
                  SERVICES
                </Link>
                <Link
                  href="/terms"
                  className="block text-white text-sm hover:text-brand-red transition-colors"
                >
                  TERMS & CONDITIONS
                </Link>
              </div>
              <div className="space-y-4">
                <Link
                  href="/disclaimer"
                  className="block text-white text-sm hover:text-brand-red transition-colors"
                >
                  DISCLAIMER
                </Link>
                <Link
                  href="/privacy"
                  className="block text-white text-sm hover:text-brand-red transition-colors"
                >
                  PRIVACY POLICY
                </Link>
                <Link
                  href="/contact"
                  className="block text-white text-sm hover:text-brand-red transition-colors"
                >
                  CONTACT US
                </Link>
                <Link
                  href="/blogs"
                  className="block text-white text-sm hover:text-brand-red transition-colors"
                >
                  BLOGS
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-base uppercase mb-6 font-['Chakra_Petch']">
              Opening Hours
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-white text-sm">Monday - Friday</p>
                <p className="text-white text-sm mt-1">08:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="text-white text-sm">Saturday - Sunday</p>
                <p className="text-white text-sm mt-1">10:00 AM - 06:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-base uppercase mb-6 font-['Chakra_Petch']">
              CONTACT US
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-[18px] h-[18px] text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm">Address</p>
                  <p className="text-white text-sm mt-1">
                    273 Brick lane, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-[22px] h-[22px] text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm">Email</p>
                  <p className="text-white text-sm mt-1">
                    support@driveclear.co.uk
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-[22px] h-[22px] text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm">Phone</p>
                  <p className="text-white text-sm mt-1">093826 8283660</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-base uppercase mb-6 font-['Chakra_Petch']">
              We Accept
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#3C3C3C] rounded-lg p-2 hover:border-[#5C5C5C] transition-colors">
                <CreditCard className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-xs">Cards</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#3C3C3C] rounded-lg p-2 hover:border-[#5C5C5C] transition-colors">
                <Apple className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-xs">Apple Pay</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#3C3C3C] rounded-lg p-2 hover:border-[#5C5C5C] transition-colors">
                <svg
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" />
                  <text
                    x="12"
                    y="16"
                    textAnchor="middle"
                    fontSize="8"
                    fill="currentColor"
                  >
                    G
                  </text>
                </svg>
                <span className="text-gray-300 text-xs">Google Pay</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#3C3C3C] rounded-lg p-2 hover:border-[#5C5C5C] transition-colors">
                <Coins className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-xs">Crypto</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white mb-5"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm uppercase">
            © 2025 Driveclear Removals. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-red transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://t.me/drive_clear"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-red transition-colors"
            >
              <Send className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
