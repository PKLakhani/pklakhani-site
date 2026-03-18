import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand */}
        <div className="flex flex-col leading-tight">
          <span className="font-semibold text-base tracking-tight">
            P.K. Lakhani & Co.
          </span>
          <span className="text-xs text-gray-500">
            Chartered Accountants • Since 1994
          </span>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-black transition">
            About
          </Link>
          <Link href="/services" className="hover:text-black transition">
            Services
          </Link>
          <Link href="/careers" className="hover:text-black transition">
            Careers
          </Link>
          <Link href="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-3">
          
          {/* Call */}
          <a
            href="tel:+918802805667"
            className="hidden sm:inline text-sm text-gray-700 hover:text-black"
          >
            Call
          </a>

          {/* WhatsApp Primary CTA */}
          <a
            href="https://wa.me/918802805667"
            target="_blank"
            className="bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}