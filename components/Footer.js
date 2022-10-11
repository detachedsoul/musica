import Image from "next/future/image";

const Footer = () => {
    return (
        <footer className="backdrop-blur-md sticky bg-opacity-80 bottom-0 bg-custom-dark-black p-4 border-t border-gray-700 flex justify-between items-center gap-y-2 gap-x-4">
            <div className="grid grid-cols-2 items-center gap-2">
                <div className="w-full h-[70px] relative overflow-hidden rounded-xl">
                    <Image
                        className="w-full h-auto rounded-xl object-cover object-center bg-red-500"
                        src="/now-playing.png"
                        alt="Seasons in"
                        priority={true}
                        quality={100}
                        fill
                    />
                </div>

                <div className="">
                    <h4 class="header text-white">
                        Seasons in
                    </h4>

                    <p>
                        James
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="rounded-full bg-yellow-300 hover:bg-yellow-400 py-1 px-2">
                    <i className="fi fi-sr-play text-white top-0.5 relative text-sm"></i>
                </span>

                <span>
                    <i className="fi fi-sr-forward text-white"></i>
                </span>
            </div>


            {/* <div className="flex items-center gap-4 bg-indigo-500">
                <span className="rounded-full bg-yellow-300 hover:bg-yellow-400 py-1 px-2">
                    <i className="fi fi-sr-play text-white top-0.5 relative text-sm"></i>
                </span>

                <span>
                    <i className="fi fi-sr-forward text-white"></i>
                </span>
            </div> */}
        </footer>
    );
}

export default Footer;