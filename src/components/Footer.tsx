import LOGO from "../assets/logo-text.png";

const Footr=()=>
{
    return (
        <footer className="border-t border-gray-100 bg-white mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="max-w-sm">
                        <img src={LOGO} alt="DevStack" className="h-8"/>
                        <p className="text-sm text-gray-500 mt-4">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex gap-4 mt-6 text-sm font-medium text-gray-600">
                            <a href="#" className="hover:text-black">GitHub</a>
                            <a href="#" className="hover:text-black">Twitter</a>
                            <a href="#" className="hover:text-black">LinkedIn</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:max-w-3xl">
                        <div>
                            <h4 className="font-semibold text-gray-900 text-xs uppercase">
                                Product
                            </h4>
                            <ul className="mt-4 space-y-2 text-sm text-gray-500">
                                <li><a href="#">Home</a></li>
                                <li><a href="#technologies">Technologies</a></li>
                                <li><a href="#projects">Projects</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 text-xs uppercase">
                                Company
                            </h4>
                            <ul className="mt-4 space-y-2 text-sm text-gray-500">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 text-xs uppercase">
                                Legal
                            </h4>
                            <ul className="mt-4 space-y-2 text-sm text-gray-500">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-600">Privacy</a>
                        <a href="#" className="hover:text-gray-600">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footr;
