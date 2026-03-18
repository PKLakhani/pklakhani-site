import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main>

      <Section dark>
        <Container size="sm">
          <h1 className="heading heading-accent text-3xl text-center">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-300 text-center">
            Reach out for audit, taxation and advisory services.
          </p>
        </Container>
      </Section>

      <Section>
        <Container size="sm">

          <div className="space-y-6 text-gray-700">

            <div>
              <h3 className="font-semibold">Office Address</h3>
              <p className="text-sm text-gray-600">
                302, JMD Galleria, Sohna Road, Sector 48, Gurugram
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:+91981115617" className="text-sm text-gray-600">
                +91 98111 15617
              </a>
            </div>

            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:pradeep.lakhani@gmail.com" className="text-sm text-gray-600">
                pradeep.lakhani@gmail.com
              </a>
            </div>

          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Button href="https://wa.me/918802805667" target="_blank">
              WhatsApp
            </Button>

            <Button href="tel:+91981115617" variant="secondary">
              Call
            </Button>
          </div>

        </Container>
      </Section>

    </main>
  );
}