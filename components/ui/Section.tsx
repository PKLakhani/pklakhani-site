export default function Section({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`${dark ? "section-dark" : "bg-white"} section`}>
      {children}
    </section>
  );
}