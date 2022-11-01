import Image from "next/future/image";
import { useRef, useState } from "react";

const Footer = () => {
    const audioElement = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handleAduioPlay = () => {
        setIsPlaying(() => !isPlaying);
        if (isPlaying) {
            audioElement.current.pause();
        } else {
            audioElement.current.play();
        }
    }

    return (
		<footer className="backdrop-blur-md fixed left-0 right-0 w-full bg-opacity-80 bottom-0 bg-custom-dark-black py-2 px-4 border-t border-gray-700 flex justify-between items-center gap-y-2 gap-x-4 z-50 lg:pl-20 lg:pr-6 lg:grid lg:grid-cols-3 lg:pb-8">
			<audio
				className="hidden not-sr-only"
				src="/2pac_So_Much_Pain.mp3"
				controls
				ref={audioElement}
			></audio>
			<div className="grid grid-cols-2 items-center gap-2 lg:grid-cols-12">
				<div className="w-full h-[70px] relative overflow-hidden rounded-xl lg:col-span-3 lg:h-[60px]">
					<Image
						className="w-full h-auto rounded-xl object-cover object-center bg-red-500"
						src="/now-playing.svg"
						alt="Seasons in"
						priority={true}
						quality={100}
						fill
					/>
				</div>

				<div className="lg:col-span-9">
					<h4 className="header text-white">Seasons in</h4>

					<p>James</p>
				</div>
			</div>

			<div className="flex items-center gap-4 lg:gap-8">
				<button className="hidden lg:block text-lg" type="button">
					<i className="fi fi-sr-shuffle text-white"></i>
				</button>

				<button className="text-lg" type="button">
					<i className="fi fi-sr-rewind text-white"></i>
				</button>

				<button
					className="rounded-full bg-yellow-300 hover:bg-yellow-400 py-[0.3rem] px-[0.6rem]"
					type="button"
					onClick={handleAduioPlay}
				>
					<i
						className={`fi fi-sr-${
							isPlaying ? "pause" : "play"
						} text-white top-0.5 relative text-sm left-[0.05rem]`}
					></i>
				</button>

				<button className="text-lg" type="button">
					<i className="fi fi-sr-forward text-white"></i>
				</button>

				<button className="hidden lg:block text-lg" type="button">
					<i className="fi fi-sr-arrows-repeat-1 text-white"></i>
				</button>
			</div>

			<div className="items-center gap-4 hidden lg:flex grow">
				<button className="hidden lg:block text-lg" type="button">
					<i className="fi fi-sr-volume text-white"></i>
				</button>

				<div className="relative w-full h-0.5 p-0.5 bg-gray-600 rounded-xl">
					<div className="absolute h-0.5 p-0.5 bg-index-hero top-0 w-1/2 left-0 rounded-xl"></div>
				</div>
			</div>

			<div className="absolute bottom-4 w-[32.26%] left-[32.26%] hidden lg:block">
				<div className="relative w-full h-1 p-1 bg-slate-600 rounded-xl">
					<div className="absolute h-1 p-1 bg-index-hero top-0 w-1/2 left-0 rounded-xl before:w-4 before:rounded-full before:absolute before:bg-yellow-300 before:h-4 before:px-[0.06rem] before:-top-1 before:-right-[calc(10%/2)] after:absolute after:w-6 after:rounded-full after:h-6 after:px-[0.08rem] after:-top-2 after:-right-[calc(14.5%/2)] after:border-2 after:border-custom-white"></div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;