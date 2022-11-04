import { useState, useEffect } from "react";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [imgURL, setImgURL] = useState(
    "src/assets/images/image-product-mobile.jpg"
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (width >= 640) {
      setImgURL("src/assets/images/image-product-desktop.jpg");
    } else {
      setImgURL("src/assets/images/image-product-mobile.jpg");
    }
  }, [width]);

  return (
    <div>
      <main className="mx-auto flex justify-center">
        <div className="mt-12 mr-20 max-w-md sm:flex">
          <img
            src={imgURL}
            alt="chanel perfume against white"
            className="rounded-t-lg"
          />
          <div className="p-5 bg-neutral-white rounded-b-xl sm:p-12">
            <p className="tracking-widest text-neutral-dark mb-2">PERFUME</p>
            <h3 className="font-extrabold text-4xl mb-4 font-fraunces">
              Gabrielle Essence Eau De Parfum
            </h3>
            <p className="text-neutral-dark mb-5">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex align-middle gap-4 mb-5">
              <p className="text-primary-dark text-3xl font-medium font-fraunces">
                $149.99
              </p>
              <p className="text-sm text-neutral-dark line-through mt-2 ml-2 font-montserrat">
                $169.99
              </p>
            </div>
            <button className="bg-primary-dark text-neutral-white hover:bg-neutral-vdark rounded-lg w-full h-10 flex justify-center pt-4 pb- gap-3">
              <img src="src/assets/images/icon-cart.svg" alt="shopping cart" />
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <footer className="bottom-0 left-10 fixed">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">JJ Vega</a>.
      </footer>
    </div>
  );
}

export default App;
