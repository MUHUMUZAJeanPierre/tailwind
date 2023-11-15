

const Footer = () => {
  return (
    <footer className="bg-blue-900 ">
    <div className=" container pt-2">
        <div className=" md:flex md:justify-evenly border-b md:gap-3 border-solid border-white pb-9 pl-4 sm:pl-8">
            <div className="">
                
                <a href="">
                    <img src="../public/10001.png" alt="Logo Image" className='w-full md:72 lg:w-96 h-auto p-5' />
                </a>
                {/* </Link> */}
            </div>
            <div className="mb-4 sm:mb-12 lg:mb-12">
                <span>
                        <ul className=''>
                            <li className=''>
                                <h2 className="headingTwo">Our company</h2>
                            </li>
                            <li className=''>
                                <a href="" className='anchorTag'>About Us</a>
                            </li>
                            <li className=''>
                                <a href="" className='anchorTag'>Get a Quote</a>
                            </li>
                            <li className=''>
                                <a href="" className='anchorTag'>Our Service</a>
                            </li>
                            <li className=''>
                                <a href="" className='anchorTag'>Fab Class</a>
                            </li>
                        </ul>
                </span>
            </div>
            <div className="mb-4 sm:mb-8 lg:mb-12">
                {/* <h2>Get In Touch</h2> */}
               <span>
                    <ul>
                        <li>
                            <h2 className="headingTwo">Get In Touch</h2>
                        </li>
                        <li>
                            <a href="" className='anchorTag'>Twitter</a>
                        </li>
                        <li>
                            <a href="" className='anchorTag'>Facebook</a>
                        </li>
                        <li>
                            <a href="" className='anchorTag'>Instagram</a>
                        </li>
                    </ul>
               </span>
                
            </div>
            <div className="mb-4 sm:mb-8 lg:mb-12">
                <ul>
                    <li>
                        <h2 className="headingTwo">Contact Info</h2>
                    </li>
                    <li>
                        <p className="text-white text-base font-sans font-light no-underline block transition-all duration-300 ease-in-out leading-6 pt-2">44 KG 548 St, Kigali</p>
                    </li>
                    <li>
                        <p className="text-white text-base font-sans  font-light no-underline block transition-all duration-300 ease-in-out leading-6 pt-2">+250-789-276-080</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="md:flex justify-evenly pt-4 pb-4 pl-4 sm:pl-8">
            <div>
                <p className="text-white font-sans font-bold">Copyright © 2022 FABLAB RWANDA</p>
            </div>
            <div>
                <p className="text-white font-sans font-bold">Designed By Klab</p>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer