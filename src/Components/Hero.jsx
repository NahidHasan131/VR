import Video1 from '../assets/video1.mp4';
import Video2 from '../assets/video2.mp4';

const Hero = () => {
    return (
        <div>
            <div className="flex flex-col items-center mx-auto mt-6 lg:mt-20">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    Step into the Future with <span className='bg-linear-to-r from-green-400 to-green-800 text-transparent bg-clip-text'><br /> Our VR Solutions</span>
                </h1>

                <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                    Empower your creativity and bring your VR app ideas to life with our
                    intuitive development tools. Get started today and turn your imagination
                    into immersive reality!
                </p>

                <div className="flex justify-center my-10">
                    <a href="#" className='bg-linear-to-r from-green-400 to-green-800  py-3 px-4 mx-3 rounded-md'>Start for free</a>
                    <a href="#" className='border py-3 px-4 mx-3 rounded-md'>Documentation</a>
                </div>

                <div className="flex mt-10 justify-center">
                    <video autoPlay loop muted className='w-1/2 mx-2 my-4 rounded-lg border border-green-700 shadow-green-400'>
                    <source src={Video1} type='video/mp4' />
                    Your browser doesn't support the video tag.
                    </video>

                    <video autoPlay loop muted className='w-1/2 mx-2 my-4 rounded-lg border border-green-700 shadow-green-400'>
                    <source src={Video2} type='video/mp4' />
                    Your browser doesn't support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Hero;