import angiangbanner from "../../assets/images/angiangbanner.jpg";

import Carousel from "../Carousel/Carousel";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen inset-0 bg-black bg-opacity-50 flex items-center justify-center">

      <div
        className="mask-y-from-70% mask-y-to-90% bg-cover bg-center blur-sm w-full h-full absolute top-0 left-0 z-0"
        style={{ backgroundImage: `url(${angiangbanner})` }}>

      </div>

      <div className=" z-10 ">
        <Carousel />

      </div>

    </div>
  );
};

export default Banner;