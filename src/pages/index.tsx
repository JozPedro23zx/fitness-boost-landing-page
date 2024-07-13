import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Products } from "./components/Products";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

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