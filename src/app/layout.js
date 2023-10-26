import Footer from "@/components/Foooter";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Rayan Chambet",
  description: "Rayan Chambet - Product Manager & Software Engineer, based in Paris, France. I'm passionate about building products that make people's lives easier.,", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
