export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12 text-center">
          Core Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-900">
              Audit & Assurance
            </h3>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Statutory and internal audits with a focus on compliance accuracy
              and financial transparency.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-900">
              Taxation (Direct & GST)
            </h3>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Tax planning, return filings and GST compliance tailored for
              corporates and SMEs.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-900">
              Advisory
            </h3>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Business structuring, financial guidance and regulatory advisory
              for growing enterprises.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/918802805667"
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-md text-sm hover:bg-green-700 transition"
          >
            Speak with Our Team
          </a>
        </div>
      </div>
    </section>
  );
}