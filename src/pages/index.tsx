import { Inter } from "next/font/google";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { Products } from "./Products";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main>
      <div >
        <Header />
        <Banner />
        <Products />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}