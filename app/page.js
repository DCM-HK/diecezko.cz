import Cover from "../components/cover";
import Header from "../components/header";
import LionOverlay from "../components/lion-overlay";
import Switcher from "../components/switcher";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <LionOverlay />
      <Header />
      <Cover>
        <Switcher />
      </Cover>
      <Footer />
    </main>
  );
}
