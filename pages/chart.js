import Head from "next/head";
import Image from "next/future/image";
import ViewChart from "@components/ViewChart";

const Chart = () => {
    return (
        <>
            <Head>
				<title>Musica | Chart</title>
				<meta
					name="description"
					content="Musica is a music streaming app"
				/>
			</Head>

            <div className="flex flex-col gap-6 flex-wrap lg:items-end lg:grid lg:grid-cols-12">
                <div className="w-full h-[220px] relative overflow-y-hidden rounded-xl lg:col-span-3 lg:h-[250px] lg:col-span-3">
                    <Image
                        className="w-full h-auto rounded-xl object-cover object-center"
                        src="/tomorrows-tune.svg"
                        alt="Tomorrow's Tune"
                        priority={true}
                        quality={100}
                        fill
                    />
                </div>

                <div className="space-y-4 lg:col-span-7 lg:space-y-10">
                    <div className="flex flex-col gap-2.5">
                        <h2 className="header text-index-hero text-xl lg:text-3xl">
                            Tomorrow’s tunes
                        </h2>

                        <div className="space-y-2">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                            </p>

                            <p>
                                64 songs ~ 16 hrs+
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                        <button className="bg-[#33373b] backdrop-blur-xl bg-opacity-80 rounded-l-full rounded-r-full py-2 px-3 lg:hover:bg-yellow-500 lg:focus:bg-yellow-500 transition-all duration-500 ease-linear group lg:hover:text-white lg:focus:text-white" type="button">
                            <i className="fi fi-sr-play text-custom-black rounded-full relative text-xs bg-yellow-500 pt-[0.3rem] pb-[0.1rem] px-[0.3rem] mr-2 lg:group-hover:bg-[#33373b] lg:group-focus:bg-[#33373b] lg:group-hover:text-custom-white lg:group-focus:text-custom-white transition-all duration-500 ease-linear"></i>
                            Play all
                        </button>

                        <button className="bg-[#33373b] backdrop-blur-xl bg-opacity-80 rounded-l-full rounded-r-full py-2 px-3 lg:hover:bg-yellow-500 lg:focus:bg-yellow-500 transition-all duration-500 ease-linear group lg:hover:text-white lg:focus:text-white" type="button">
                            <i className="fi fi-sr-music-file text-yellow-500 mr-2 lg:group-hover:text-custom-dark-black lg:group-focus:text-custom-dark-black transition-all duration-500 ease-linear"></i>
                            Add to collection
                        </button>

                        <button className="bg-[#33373b] backdrop-blur-xl bg-opacity-80 rounded-l-full rounded-r-full pt-1.5 pb-1 px-2 lg:py-2 lg:px-3 lg:hover:bg-yellow-500 lg:focus:bg-yellow-500 transition-all duration-500 ease-linear group lg:hover:text-white lg:focus:text-white" type="button">
                            <i className="fi fi-sr-heart text-rose-500 mr-2 lg:mr-0 lg:top-1"></i>
                            <span className="lg:hidden">
                                Like
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 mt-8">
                <ViewChart />
            </div>
        </>
    );
}

export default Chart;