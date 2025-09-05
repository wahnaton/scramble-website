import StoreLayoutClient from "./_components/StoreLayoutClient";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      <StoreLayoutClient>{children}</StoreLayoutClient>
    </div>
  );
}
