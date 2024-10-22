export const generateMetadata = ({ params }) => {
  if (!params?.id) {
    console.error("No product ID found in params");
    return {
      title: "Product Details",
    };
  }

  return {
    title: `Product ${params.id}`,
  };
};

const ProductDetailsLayout = ({ children }) => {
  return (
    <>
      {children}
      <h2>Featured Products</h2> {/* Corrected the typo */}
    </>
  );
};

export default ProductDetailsLayout;
