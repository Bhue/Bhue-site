import "./globals.css";

export const metadata = {
  title: "Bhue — Data Science & Statistics Consulting",
  description: "Turn data into decisions with ML, statistics, and analytics engineering."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
