import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

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
    <Section>
      <div className="bg-gray-50 -my-24 py-24">
        <Container>

          <h2 className="heading heading-accent text-2xl md:text-3xl text-center text-gray-900 mb-12">
            Industries We Serve
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((item) => (
              <span
                key={item}
                className="text-sm px-4 py-2 border border-gray-400 text-gray-800 rounded-full transition hover:border-black"
              >
                {item}
              </span>
            ))}
          </div>

        </Container>
      </div>
    </Section>
  );
}