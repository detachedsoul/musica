import Image from "next/future/image";

const NewReleases = () => {
    const charts = [
        {
            id: 1,
            image: "/release-1.png",
            title: "Life in a bubble",
            singer: "The van",
        },
        {
            id: 2,
            image: "/release-2.png",
            title: "Mountain",
            singer: "Krisx",
        },
        {
            id: 3,
            image: "/release-3.png",
            title: "Limits",
            singer: "John Dillion",
        },
        {
            id: 4,
            image: "/release-4.png",
            title: "Everything’s black",
            singer: "Ameed",
        },
        {
            id: 5,
            image: "/release-5.png",
            title: "Cancelled",
            singer: "Eminem",
        },
        {
            id: 6,
            image: "/release-6.png",
            title: "Nomad",
            singer: "Makrol eli",
        },
        {
            id: 7,
            image: "/release-7.png",
            title: "Blind",
            singer: "Wiz zee",
        },
    ];

    return (
        <>
            {charts.map(chart => (
                <div className="grid gap-1 min-w-[40%] lg:w-full rounded-xl" key={chart.id}>
                    <div className="w-full h-[100px] relative overflow-hidden rounded-xl lg:col-span-3 lg:w-full lg:h-auto">
                        <Image
                            className="w-full h-auto rounded-xl object-cover object-center"
                            src={chart.image}
                            alt={chart.title}
                            priority={true}
                            quality={100}
                            fill
                        />
                    </div>

                    <div className="space-y-0.5">
                        <h4 className="text-white header text-md">
                            {chart.title}
                        </h4>

                        <p>
                            {chart.singer}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default NewReleases;