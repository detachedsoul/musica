import Image from "next/future/image";

const ViewChart = () => {
    const charts = [
        {
            id: 1,
            coverArt: "/release-1.svg",
            title: "Everlasting Love ~ Juice WRLD",
            type: "Single",
            duration: "4:17"
        },
        {
            id: 2,
            coverArt: "/release-2.svg",
            title: "Can't Help It ~ Juice WRLD",
            type: "Single",
            duration: "4:17"
        },
        {
            id: 3,
            coverArt: "/release-3.svg",
            title: "Gym Class ~ Lil Peep",
            type: "Album",
            duration: "4:17"
        },
        {
            id: 4,
            coverArt: "/release-4.svg",
            title: "Veins ~ Lil Peep",
            type: "Single",
            duration: "4:17"
        },
    ];

    return (
		<>
            {charts.map(chart => (
                <div className="bg-[#33373b] backdrop-blur-xl bg-opacity-80 rounded-xl p-2 grid grid-cols-12 items-center gap-2 lg:gap-12" key={chart.id}>
                    <div className="col-span-3 lg:flex lg:items-center lg:gap-4 lg:col-span-2">
                        <div className="w-full h-[60px] relative overflow-y-hidden rounded-lg lg:col-span-3 lg:w-16">
                            <Image
                                className="w-full h-auto rounded-lg object-cover object-center"
                                src={chart.coverArt}
                                alt={chart.title}
                                priority={true}
                                quality={100}
                                fill
                            />
                        </div>

                        <i className="fr fi-rr-heart hidden lg:inline"></i>
                    </div>

                    <div className="grid grid-cols-12 gap-1 col-span-9 chart-container lg:flex lg:items-center lg:justify-between lg:col-span-10 shrink-0">
                        <p className="col-span-10">
                            {chart.title}
                        </p>

                        <p className="col-span-2 lg:order-last">
                            <i className="fr fi-sr-menu-dots-vertical text-yellow-500"></i>
                        </p>

                        <p className="col-span-10 lg:order-0">
                            {chart.type}
                        </p>

                        <p className="col-span-2">
                            {chart.duration}
                        </p>
                    </div>
                </div>
            ))}
        </>
	);
};

export default ViewChart;