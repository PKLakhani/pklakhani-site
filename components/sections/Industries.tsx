const industries = [
  "Automobiles",
  "Information Technology",
  "Real Estate",
  "Financial Services",
  "Hospitality",
  "Manufacturing",
  "Telecom",
];

export default function Industries() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-12">
          Industries We Serve
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((item) => (
            <span
              key={item}
              className="text-sm px-4 py-2 border border-gray-300 rounded-full text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}