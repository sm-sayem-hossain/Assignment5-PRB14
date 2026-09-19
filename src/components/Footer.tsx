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
                </div>
            </div>
        </footer>
    )
}


export default Footr;
