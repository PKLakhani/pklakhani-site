export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Content */}
        <div>
          {/* Eyebrow */}
          <p className="text-sm text-gray-500 mb-4">
            Chartered Accountants • Established 1994 • Gurugram
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Audit, Tax & Compliance
            <br />
            for Growing Enterprises
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            We assist corporates and SMEs with statutory audits, taxation and regulatory
            compliance—ensuring clarity, accuracy and timely execution.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            
            {/* Primary */}
            <a
              href="https://wa.me/918802805667?text=Hi,%20I%20would%20like%20to%20discuss%20my%20requirement"
              target="_blank"
              className="bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-green-700 transition"
            >
              Discuss Your Requirement
            </a>

            {/* Secondary */}
            <a
              href="tel:+918802805667"
              className="text-sm px-6 py-3 border border-gray-300 rounded-md hover:border-black transition"
            >
              Call
            </a>

            <a
              href="mailto:pklakhani@gmail.com?subject=Consultation Request"
              className="text-sm px-6 py-3 border border-gray-300 rounded-md hover:border-black transition"
            >
              Email
            </a>
          </div>

          {/* Micro trust */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
            <span>30+ Years Experience</span>
            <span>Pan India Services</span>
            <span>Corporate & SME Focus</span>
          </div>
        </div>

        {/* RIGHT: Visual placeholder (important for balance) */}
        <div className="hidden md:block">
          <div className="w-full h-[380px] bg-gray-100 rounded-lg" />
        </div>

      </div>
    </section>
  );
}