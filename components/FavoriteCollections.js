import Image from "next/future/image";

const FavoriteCollections = () => {
    const collections = [
        {
            id: 1,
            coverArt: "/release-1.svg",
            title: "Limits",
            singer: "John Watts",
            likes: "2.3m"
        },
        {
            id: 2,
            coverArt: "/release-2.svg",
            title: "Limits",
            singer: "John Watts",
            likes: "2.3m"
        },
        {
            id: 3,
            coverArt: "/release-3.svg",
            title: "Limits",
            singer: "John Watts",
            likes: "2.3m"
        },
        {
            id: 4,
            coverArt: "/release-4.svg",
            title: "Limits",
            singer: "John Watts",
            likes: "2.3m"
        },
    ];

    return (
		<>
			{collections.map((collection) => (
				<div
					className="relative group overflow-hidden rounded-xl"
					key={collection.id}
				>
					<div className="w-full h-[220px] relative overflow-hidden transition-all ease-linear duration-500 rounded-xl lg:col-span-3 lg:w-full lg:h-[250px] hover:scale-110 focus:scale-110">
						<Image
							className="w-full h-auto rounded-xl object-cover object-center"
							src={collection.coverArt}
							alt={collection.title}
							priority={true}
							quality={100}
							fill
						/>
					</div>

					<div className="flex items-center gap-4 justify-between absolute w-[calc(100%-2rem)] bottom-4 right-4">
						<div className="flex flex-col gap-4 transition-all ease-linear duration-500 lg:translate-y-[-0.5rem] lg:absolute  lg:group-hover:translate-y-[-2.7rem] lg:gap-0 origin-center">
							<div className="-space-y-1">
								<h2 className="header text-xl">
									{collection.title}
								</h2>

								<p className="">{collection.singer}</p>
							</div>

							<p className="lg:translate-y-4">
								{collection.likes} likes
							</p>
						</div>

						<span className="rounded-full bg-yellow-300 backdrop-blur-sm hover:bg-yellow-400 py-[0.20rem] px-[0.55rem] lg:group-hover:bottom-3 lg:-bottom-12 transition-all ease-linear duration-500 origin-center lg:absolute lg:right-0">
							<i className="fi fi-sr-play text-white top-0.5 relative text-sm left-[0.05rem]"></i>
						</span>
					</div>
				</div>
			))}
		</>
	);
};

export default FavoriteCollections;