import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LOGO from "../assets/logo-text.png";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white sticky top-0 border-b border-gray-100 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center gap-3">
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2x cursor-pointer">
                        {
                            isOpen ? <AiOutlineClose /> : <AiOutlineMenu />
                        }
                    </button>
                    <img src={LOGO} alt="DevStack" className="h-8" />
                </div>
                <ul className="hidden md:flex gap-6 font-medium text-gray-600">
                    <li><a href="#" className="hover:text-black">Home</a></li>
                    <li><a href="#technologies" className="hover:text-black">Technologies</a></li>
                    <li><a href="#projects" className="hover:text-black">Projects</a></li>
                    <li><a href="#about" className="hover:text-black">About</a></li>
                    <li><a href="#contact" className="hover:text-black">Contact</a></li>
                </ul>
                <div className="flex items-center gap-3">
                    <button className="text-gray-600 hover:text-black font-medium text-sm cursor-pointer ">
                        Sigin In
                    </button>
                    <button className="btn btn-sm bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white border-none rounded-full px-4 font-medium cursor-pointer hover:opacity-90">
                        Sign Up
                    </button>
                </div>
            </div>
            {
                isOpen &&(
                    <div className="md:hidden border-t bg-white px-4 py-3">
                    <ul className="flex flex-col gap-3 font-medium text-gray-600">
                        <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="#technologies" onClick={() => setIsOpen(false)}>Technologies</a></li>
                        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>
                </div>
                )
            }
        </nav>
    );
};

export default Nav;