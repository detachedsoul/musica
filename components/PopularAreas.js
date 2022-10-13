import Image from "next/future/image";

const PopularAreas = () => {
    const charts = [
        {
            id: 1,
            image: "/release-1.svg",
            title: "Life in a bubble",
            singer: "The van",
        },
        {
            id: 2,
            image: "/release-2.svg",
            title: "Mountain",
            singer: "Krisx",
        },
        {
            id: 3,
            image: "/release-3.svg",
            title: "Limits",
            singer: "John Dillion",
        },
        {
            id: 4,
            image: "/release-4.svg",
            title: "Everything’s black",
            singer: "Ameed",
        },
        {
            id: 5,
            image: "/release-5.svg",
            title: "Cancelled",
            singer: "Eminem",
        },
        {
            id: 6,
            image: "/release-6.svg",
            title: "Nomad",
            singer: "Makrol eli",
        },
        {
            id: 7,
            image: "/release-7.svg",
            title: "Blind",
            singer: "Wiz zee",
        },
    ];

    return (
		<>
			{charts.map((chart) => (
				<div
					className="grid gap-1 min-w-[40%] lg:min-w-[14.5%] rounded-xl"
					key={chart.id}
				>
					<div className="w-full h-[100px] relative overflow-hidden rounded-xl lg:col-span-3 lg:w-full lg:h-[150px]">
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

						<p>{chart.singer}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default PopularAreas;