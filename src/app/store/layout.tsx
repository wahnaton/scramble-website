import StoreLayoutClient from "./_components/StoreLayoutClient";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StoreLayoutClient>{children}</StoreLayoutClient>;
}
