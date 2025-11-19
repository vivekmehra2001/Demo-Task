import "./globals.css";

export const metadata = {
  title: "Demo Task",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className="antialiased" style={{ fontFamily: "var(--font-funnel)" }}>
        {children}
      </body>
    </html>
  );
}
