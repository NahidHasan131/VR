import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
    return (
        <div className='mt-20'>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
                Pricing
                <hr className="bg-linear-to-r from-green-400 to-green-800 border-0 h-1 mt-3 w-30 mx-auto"/>
            </h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className="text-4xl mb-8">
                            {option.title}
                            {option.title === "Pro" && (
                            <span className="bg-linear-to-r from-green-400 to-green-600 text-transparent bg-clip-text text-xl mb-4 ml-2">
                                (Most Popular)
                            </span>
                            )}
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl mt-6 mr-2">{option.price}</span>
                            <span className="bg-linear-to-r from-green-800 to-green-400 text-transparent bg-clip-text tracking-tight">/Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature, index) => (
                                <li key={index} className="mt-8 flex items-center">
                                    <div className="text-green-400 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                        <CheckCircle2 />
                                    </div>
                                    <span className="ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-lg hover:bg-linear-to-r from-green-400 to-green-800 border border-green-700 rounded-full transition duration-200">Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;