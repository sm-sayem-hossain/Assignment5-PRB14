import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    Build Your Ideal
                    <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"> Development Stack</span>
                </h1>
                <p className="mt-4 text-gray-600 sm:text-lg max-w-xl mx-auto md:mx-0">Discover, compare, and choose the best technologies to build your next-generation web applications with confidence.</p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href="#technologies" className="btn bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white border-none rounded-full px-6 font-medium cursor-pointer hover:opacity-90 shadow-md">
                        Explore Technologies
                    </a>
                    <button className="btn btn-outline border-gray-300 hover:border-gray-400 hover:bg-gray-100 text-gray-700 rounded-full px-6 font-medium cursor-pointer">
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