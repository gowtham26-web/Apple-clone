
import hero from "../assets/images/hero.jpg"

const Hero = () => {
  return (
    <div
      className="w-full h-[550px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 cursor-pointer"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className=" text-center mb-36">
        <h1 className="text-5xl font-bold  text-white mb-4">iPhone 16 Pro</h1>
        <h3 className="text-2xl text-white mb-6">
          Built for Apple Intelligence
        </h3>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-medium">
          Shop
        </button>
      </div>
    </div>
  );
};

export default Hero;