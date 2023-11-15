
import { IoMdTime} from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Ninja = () => {
  return (
    <body className="text-gray-600 font-mono">
    <div className="md:flex justify-between">
        <div className="md:col-span-1 md:flex md:justify-end">
            <nav className="text-right">
                <div>
                    <h1 className="font-bold uppercase p-4 ">
                        <a href="/" className='hover:text-gray-400'>Food Ninja</a>
                    </h1>
                </div>
                <ul className="text-sm mt-6">
                    <li className="text-gray-700 font-bold">
                        <a href="#" className="px-4 flex- justify-end mt-5">
                            <span className="">Home</span>
                            <RiHome2Line className="w-5 "/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>About</span>
                            <FaQuestion className="w-5"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Contact</span>
                            <MdOutlineEmail className="w-5"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <main className="bg-red-100 px-16 py-6 md:col-span-2">
            <div className="flex justify-center md:justify-end">
                <a href="#" className="btn text-red-500 border-red-500 md:border-2 hover:bg-red-500 hover:text-white">Log in</a>
                <a href="#" className="btn text-red-500 ml-2 border-red-500 md:border-2 hover:bg-red-500 hover:text-white">Sign Up</a>
            </div>

            <header>
                <h2 className="text-gray-900 text-6xl font-semibold">Recipes</h2>
                <h3 className="text-2xl font-semibold">For Ninjas</h3>
            </header>
 
            <div>
                <h4 className="font-bold mt-14 pb 200 border-b border-gray-200">Latest Recipies</h4>

            

                <div className="mt-8 grid lg:grid-cols-3 gap-10">
                    
                    <div className="card hover:shadow-lg">
                        <img src="../public/food.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
                        <div className="m-4">
                            <span className="font-bold">5 Bean chill stew</span>
                            <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                        </div>
                        <div className="badge">
                            <IoMdTime className="inline-block w-6"/>
                            <span>25 mins</span>
                        </div>
                    </div>
                    <div className="card hover:shadow-lg">
                        <img src="../public/food.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
                        <div className="m-4">
                            <span className="font-bold">5 Bean chill stew</span>
                            <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                        </div>
                        <div className="badge">
                            <IoMdTime className="inline-block w-6"/>
                            <span>25 mins</span>
                        </div>
                    </div>
                    <div className="card hover:shadow-lg">
                        <img src="../public/food.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
                        <div className="m-4">
                            <span className="font-bold">5 Bean chill stew</span>
                            <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                        </div>
                        <div className="badge">
                            <IoMdTime className="inline-block w-7"/>
                            <span>25 mins</span>
                        </div>
                    </div>
                    
                </div>

                <h4 className="font-bold mt-12 pb border-b">Most Popular</h4>

                <div className="mt-8">
                    
                </div>
                <div className="flex justify-center">
                    <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner">Load more</div>
                </div>

            </div>
        </main>

    </div>
    </body>
  )
}

export default Ninja