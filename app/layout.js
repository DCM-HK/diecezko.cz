import { meta } from "../components/meta";
import "./globals.css";

export const metadata = {
  title: "Diecézko",
  ...meta,
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
