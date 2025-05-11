import{
    FaApple,FaSearch,FaShoppingCart
} from "react-icons/fa"





function Navbar(){
    return(
        <nav className="bg-black text-white p-4 sticky top-0 z-10" >
            <div className="flex justify-between items-center">
                <div className="text-2xl">
                    < FaApple/>
                </div>
        
                <ul className="flex justify-evenly items-center gap-5 text-s">
                    <li className=" hover:text-gray-400"> <a href="">Store</a></li>
                    <li className=" hover:text-gray-400"> <a href="">Mac</a></li>
                    <li className=" hover:text-gray-400" > <a href="">iPad</a></li>
                    <li className=" hover:text-gray-400" > <a href="">iPad</a></li>
                    <li className=" hover:text-gray-400"> <a href="">iPhone</a></li>
                    <li className=" hover:text-gray-400"> <a href="">Watch</a></li>
                    <li className=" hover:text-gray-400"> <a href="">Airpods</a></li>
                    <li className=" hover:text-gray-400"> <a href="">TV & Home</a></li>
                    <li className=" hover:text-gray-400"> <a href="">Entertainment</a></li>
                    <li className=" hover:text-gray-400"> <a href="">Accessories</a></li>
                    <li className=" hover:text-gray-400"> <a href="">Support</a></li>
                    <li> <FaSearch/></li>
                    <li><FaShoppingCart/></li>
                
                </ul>
            </div>

        </nav>
    )
}
export default Navbar