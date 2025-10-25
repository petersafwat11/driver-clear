import { X, MessageCircle, Mail, CreditCard, Apple, Coins } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#121212] border border-[#3C3C3C] rounded-[32px] p-8 max-w-[500px] w-full relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-white font-bold text-3xl mb-3 font-['Chakra_Petch']">
            Contact Us to Get Started
          </h2>
          <p className="text-gray-400 text-lg">
            Contact us on WhatsApp for the fastest response
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="https://wa.me/447729213427"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white p-6 rounded-xl transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-8 h-8 flex-shrink-0" />
            <div className="text-left">
              <p className="font-bold text-lg">WhatsApp</p>
              <p className="text-sm opacity-90">Chat with us on WhatsApp</p>
            </div>
          </a>

          <a
            href="mailto:support@driveclear.co.uk"
            className="flex items-center gap-4 bg-gradient-to-r from-brand-red to-[#8B0000] hover:from-[#8B0000] hover:to-brand-red text-white p-6 rounded-xl transition-all transform hover:scale-105"
          >
            <Mail className="w-8 h-8 flex-shrink-0" />
            <div className="text-left">
              <p className="font-bold text-lg">Email</p>
              <p className="text-sm opacity-90">Send us an email</p>
            </div>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-[#3C3C3C]">
          <p className="text-white font-bold text-lg text-center mb-4">
            We Accept:
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#3C3C3C] rounded-lg p-3 hover:border-[#5C5C5C] transition-colors">
              <CreditCard className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300 text-sm">Credit/Debit Cards</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#3C3C3C] rounded-lg p-3 hover:border-[#5C5C5C] transition-colors">
              <Apple className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300 text-sm">Apple Pay</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#3C3C3C] rounded-lg p-3 hover:border-[#5C5C5C] transition-colors">
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
              <span className="text-gray-300 text-sm">Google Pay</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#3C3C3C] rounded-lg p-3 hover:border-[#5C5C5C] transition-colors">
              <Coins className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300 text-sm">Crypto</span>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-sm text-center mt-8">
          We&apos;ll respond within a few hours
        </p>
      </div>
    </div>
  );
}
