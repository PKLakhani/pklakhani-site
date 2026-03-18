import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        
        {/* Firm Info */}
        <div>
          <h3 className="font-semibold text-lg">
            P.K. Lakhani & Co.
          </h3>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Chartered Accountants based in Gurugram providing audit, taxation,
            GST, and advisory services to corporates and growing enterprises.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Established in 1994
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-700">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/about" className="hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-black">
                Services
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-black">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + CTA */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-700">
            Contact
          </h4>

          <div className="text-sm text-gray-600 space-y-2">
            <p>Gurugram, India</p>

            <a
              href="tel:+918802805667"
              className="block hover:text-black"
            >
              +91 8802805667
            </a>

            <a
              href="mailto:pklakhani@gmail.com?subject=Consultation Request"
              className="block hover:text-black"
            >
              pklakhani@gmail.com
            </a>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/918802805667"
            target="_blank"
            className="inline-block mt-4 bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} P.K. Lakhani & Co. All rights reserved.
      </div>
    </footer>
  );
}