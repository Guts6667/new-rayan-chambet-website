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
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo512.png" />
          <link rel="icon" type="image/png" sizes="20x40" href="/logo512.png"/>
          <link rel="icon" type="image/png" sizes="10x20" href="/logo1902.png"/>
      </head>
      <body className="bg-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
