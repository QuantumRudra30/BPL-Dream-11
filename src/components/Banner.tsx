import Logo from "../assets/bg-shadow.png";
import Logo2 from "../assets/banner-main.png";

const Banner = () => {
  return (
    <div
        className="min-h-100 my-7 flex flex-col justify-center items-center bg-black bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${Logo})` }}
    >
      {/* Cricket Image */}
      <img
        src={Logo2}
        alt="Cricket"
        className="w-40 mb-5"
      />

      {/* Heading */}
      <h2 className="font-bold text-3xl text-white">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 mt-3">
        Beyond Boundaries Beyond Limits
      </p>

      {/* Button */}
      <button className="mt-4 px-5 py-2 bg-lime-400 text-black font-bold rounded-lg border-2 border-lime-600">
        Claim Free Credit
      </button>
    </div>
  );
};

export default Banner;