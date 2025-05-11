import mother from "../assets/images/hero2.png"


function Mother(){
    return(
        <div className="w-full h-[450px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 cursor-pointer mt-5"
              style={{
                backgroundImage: `url(${mother})`,
              }}>

 <div className=" text-center mt-44">
        <h1 className="text-5xl font-bold  text-black mb-4">Mother's Day</h1>
        <h3 className="text-2xl text-black mb-6">
         It's not too late to find the perfect gift for Mom.
        </h3>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-medium">
          Shop
        </button>
      </div>
    </div>
       
        
    )
}
export default Mother