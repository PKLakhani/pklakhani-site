export default function Button({
  children,
  href,
  variant = "primary",
  target,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "secondary-dark";
  target?: string;
}) {
  const styles = {
    primary: "btn btn-primary",
    secondary: "btn btn-secondary",
    "secondary-dark": "btn btn-secondary-dark",
  };

  return (
    <a href={href} target={target} className={styles[variant]}>
      {children}
    </a>
  );
}