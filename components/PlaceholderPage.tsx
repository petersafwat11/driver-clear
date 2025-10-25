import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-400 mb-8">{description}</p>
          <p className="text-gray-500 mb-8">
            This page is currently being developed. Please check back soon or
            contact us for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white/10 text-white text-sm font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              BACK TO HOME
            </Link>
            <Link
              href="/contact"
              className="bg-brand-red text-white text-sm font-bold px-8 py-4 rounded-xl hover:bg-brand-red/90 transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
