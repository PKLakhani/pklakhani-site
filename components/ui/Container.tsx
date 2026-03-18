export default function Container({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "sm" | "md";
}) {
  return (
    <div className={size === "sm" ? "container-sm" : "container"}>
      {children}
    </div>
  );
}