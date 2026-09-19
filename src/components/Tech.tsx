import { useState,useEffect } from "react";
import type { ITechnology } from "../types/technology";

const badgeColorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-500 border-blue-200",
    green: "bg-emerald-50 text-emerald-600 border-emerald-200",
    orange: "bg-orange-50 text-orange-500 border-orange-200",
    red: "bg-rose-50 text-rose-500 border-rose-200",
    yellow: "bg-amber-50 text-amber-600 border-amber-200",
    teal: "bg-teal-50 text-teal-600 border-teal-200",
};


const Tech = () =>
{
    const [technologies, setTechnologies] = useState<ITechnology[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>
    {
        fetch("/technologies.json")
        .then(res => res.json())
        .then((data: ITechnology[]) =>
        {
            setTechnologies(data);
            setLoading(false);
        }
        )
        .catch((err)=>
        {
            console.error(err);
            setLoading(false);
        });
    },[]);
        

    return (
        <section id="technologies" className="container mx-auto px-4 py-12">
            <div className="text-left mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Explore the{" "}
                    <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="text-gray-500 mt-2">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech) => (
                        <div key={tech.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                            <div className="flex justify-between items-center">
                                <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                                {tech.badge ? (
                                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${badgeColorMap[tech.badgeColor || "blue"]}`}>
                                        {tech.badge}
                                    </span>
                                ) : (
                                    <div />
                                )}

                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-4">{tech.name}</h3>
                            <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                                {tech.description}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500 mt-5 pt-4 border-t border-gray-100">
                                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium">
                                    {tech.category}
                                </span>
                                <span>{tech.difficulty}</span>
                                <span className="flex items-center gap-1 font-medium text-gray-800">
                                    ⭐ {tech.rating}
                                </span>
                            </div>
                            <button className="w-full mt-4 py-2.5 bg-gray-900 hover:bg-black text-white rounded-lg font-medium text-sm transition cursor-pointer">
                                Add to Stack
                            </button>

                        </div>
                    ))}
                </div>

                <div className="w-full lg:w-72 bg-blue-100 p-4">
                    {/* Your Stack bosamo ene */}
                </div>
            </div>
        </section>
    )
}

export default Tech;