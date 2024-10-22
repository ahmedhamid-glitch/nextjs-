import Image from "next/image";
import MyImage from "../../public/next.svg";
const LearnImage = () => {
  return (
    <>
      <Image src={MyImage} alt="Banner Image" />
    </>
  );
};

export default LearnImage;
