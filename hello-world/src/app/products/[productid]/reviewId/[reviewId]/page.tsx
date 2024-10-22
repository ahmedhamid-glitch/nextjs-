// import { notFound } from "next/navigation";

// const ReviewDetails = ({
//   params,
// }: {
//   params: {
//     productId: string;
//     reviewId: string;
//   };
// }) => {
//   if (parseInt(params.reviewId) > 1000) {
//     notFound();
//   }

//   const getRandomInt = (count: number) => {
//     return Math.floor(Math.random() * count);
//   };

//   const random = getRandomInt(2);

//   if (random === 1) {
//     throw new Error("Error loading review");
//   }

//   return (
//     <h1>
//       Review {params.reviewId} for product {params.productId}
//     </h1>
//   );
// };

// export default ReviewDetails;

import { notFound } from "next/navigation";

const ReviewDetails = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  const reviewIdNumber = parseInt(params.reviewId, 10);

  if (isNaN(reviewIdNumber) || reviewIdNumber > 1000) {
    notFound();
  }

  const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
  };

  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }

  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
};

export default ReviewDetails;
