import Head from "next/head";
import Image from "next/future/image";
import TopCharts from "@components/TopCharts";
import NewReleases from "@components/NewReleases";

const Home = () => {
    return (
		<>
			<Head>
				<title>Musica | Home</title>
				<meta
					name="description"
					content="Musica is a music streaming app"
				/>
			</Head>

            <div className="px-4 py-12 space-y-8">

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    <div className="bg-index-hero text-white rounded-xl relative p-4 grid gap-32 lg:col-span-7">
                        <div className="w-52 top-0 right-0 h-full z-50 absolute overflow-hidden">
                            <Image
                                className="w-full h-auto z-50"
                                src="/sine-wave.png"
                                alt="Liked By 33k"
                                priority={true}
                                quality={100}
                                fill
                            />
                        </div>

                        <p>
                            Currated playlist
                        </p>

                        <div className="grid gap-8">
                            <div className="space-y-2">
                                <h3 className="header text-3xl">
                                    R & B Hits
                                </h3>

                                <p>
                                    All mine, Lie again, Petty call me everyday, Out of
                                    time, No love, Bad habit, and so much more
                                </p>
                            </div>

                            <div className="grid grid-cols-12 items-center gap-4">
                                <div className="w-full h-10 relative col-span-6 overflow-hidden">
                                    <Image
                                        className="w-full h-auto object-cover object-center"
                                        src="/likedBy.png"
                                        alt="Liked By 33k"
                                        priority={true}
                                        quality={100}
                                        fill
                                    />
                                </div>

                                <i className="fi fi-sr-heart block mx-auto col-span-2"></i>

                                <span className="col-span-4">33k Likes</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <h3 className="header text-xl">
                            Top charts
                        </h3>

                        <div className="lg:grid gap-2 flex items-center overflow-x-auto custom-scrollbar py-4">
                            <TopCharts />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <h3 className="header text-xl">
                        New Releases
                    </h3>

                    <div className="lg:grid gap-4 flex justify-between overflow-x-auto custom-scrollbar py-4">
                        <NewReleases />
                    </div>
                </div>
            </div>
		</>
	);
}

export default Home;