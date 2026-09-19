import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    Build Your Ideal
                    <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"> Development Stack</span>
                </h1>
                <p className="mt-4 text-gray-600 sm:text-lg max-w-xl mx-auto md:mx-0">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href="#technologies" className="px-6 py-3 bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-95 transition shadow-sm">
                        Explore Technologies
                    </a>
                    <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition shadow-sm cursor-pointer">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="flex-1 flex justify-center">
                <img src={bannerImg} alt="" className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-lg" />
            </div>
        </section>
    );
};

export default Banner;