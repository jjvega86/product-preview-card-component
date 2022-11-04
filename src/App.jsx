function App() {
  return (
    <div className="max-w-sm mx-auto ">
      <img
        src="src/assets/images/image-product-mobile.jpg"
        alt="chanel perfume against white"
        className="rounded-t-lg mb-4"
      />
      <p className="tracking-widest text-neutral-dark mb-2">PERFUME</p>
      <h3 className="font-extrabold text-3xl mb-4">
        Gabrielle Essence Eau De Parfum
      </h3>
      <p className="text-neutral-dark mb-5">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <p className="text-primary-dark text-3xl font-medium font-fraunces">
        $149.99 <span>$169.99</span>
      </p>
      <button>Add to Cart</button>
      <div>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
