type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props) => {
  return {
    title: `Product ${params.productid}`,
  };
};
const ProductDetails = ({ params }: Props) => {
  return <h1>Details about product {params.productid}</h1>;
};

export default ProductDetails;
