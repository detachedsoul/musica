import Image from "next/future/image";

const TopCharts = () => {
    const charts = [
        {
            id: 1,
            image: "/golden-age.png",
            title: "Golden age of 80s",
            singer: "Sean Swadder",
            duration: "2:34:45",
        },
        {
            id: 2,
            image: "/reggae-blues.png",
            title: "Reggae 'n' blues",
            singer: "Dj YK mule",
            duration: "1:02:42",
        },
        {
            id: 3,
            image: "/tomorrows-tune.png",
            title: "Tomorrow’s tunes",
            singer: "Obi Datti",
            duration: "2:01:25",
        },
    ];

    return (
        <>
            {charts.map(chart => (
                <div className="rounded-xl bg-custom-dark-black p-4 grid gap-4 grid-cols-12 items-start min-w-[90%] mx-auto lg:min-w-full" key={chart.id}>
                    <div className="grid gap-4 lg:grid-cols-12 col-span-10">
                        <div className="w-[70%] h-[100px] relative overflow-hidden rounded-xl lg:col-span-3 lg:w-full lg:h-auto">
                            <Image
                                className="w-full h-auto rounded-xl object-cover object-center"
                                src={chart.image}
                                alt={chart.title}
                                priority={true}
                                quality={100}
                                fill
                            />
                        </div>

                        <div className="lg:col-span-9 space-y-1.5">
                            <div className="space-y-1.5">
                                <h4 className="text-white header text-lg">
                                    {chart.title}
                                </h4>

                                <p>
                                    {chart.singer}
                                </p>
                            </div>

                            <p className="text-white">
                                {chart.duration}
                            </p>
                        </div>
                    </div>

                    <div className="col-span-2 ml-auto">
                        <span className="border rounded-full border-custom-white py-1.5 px-2">
                            <i className="fr fi-rr-heart text-yellow-300 top-0.5 relative text-sm"></i>
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TopCharts;