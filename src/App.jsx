import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

import useURL from "./hooks/useURL";

const urlOptions = {
  mobile: "src/assets/images/image-product-mobile.jpg",
  desktop: "src/assets/images/image-product-desktop.jpg",
};

function App() {
  const imgURL = useURL(urlOptions);

  return (
    <div className="mx-auto flex justify-center">
      <ProductCard imgURL={imgURL} />
      <Footer />
    </div>
  );
}

export default App;
