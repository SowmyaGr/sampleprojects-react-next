export const metadata = {
  title: "Simple Calculator",
  description: "Beginner Calculator App using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
