export default function CTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-2xl md:text-3xl font-semibold">
          Need Assistance with Audit or Compliance?
        </h2>

        <p className="mt-4 text-gray-400">
          Connect with our team to discuss your requirements.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          
          <a
            href="https://wa.me/918802805667"
            target="_blank"
            className="bg-green-600 px-6 py-3 rounded-md text-sm hover:bg-green-700 transition"
          >
            WhatsApp
          </a>

          <a
            href="tel:+918802805667"
            className="border border-gray-600 px-6 py-3 rounded-md text-sm hover:border-white transition"
          >
            Call
          </a>
        </div>
      </div>
    </section>
  );
}