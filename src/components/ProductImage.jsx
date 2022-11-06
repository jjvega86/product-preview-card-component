import useURL from "../hooks/useURL";

const urlOptions = {
  mobile: "img/image-product-mobile.jpg",
  desktop: "img/image-product-desktop.jpg",
};

const ProductImage = () => {
  const imgURL = useURL(urlOptions);
  return (
    <img
      src={imgURL}
      alt="chanel perfume against white"
      className="rounded-t-lg"
    />
  );
};

export default ProductImage;
