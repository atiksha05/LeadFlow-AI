import "./globals.css";

export const metadata = {
  title: "LeadFlowOS",
  description: "AI-powered lead intelligence and prioritization for growth teams."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
