import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallary";
// import PaymentMethodPopup from "./components/PaymentMethodPopup";

export default function App() {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <div className="bg-light-yellow">
        <PhotoGallery />
      </div>
      {/* <PaymentMethodPopup /> */}
    </div>
  );
}
