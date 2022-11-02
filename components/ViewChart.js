import Context from "@components/Context";
import Image from "next/future/image";
import Link from "next/link";
import { useContext } from "react";

const ViewChart = ({ data }) => {
	let { audioSrc, setAudioSrc } = useContext(Context);

	const handlePlayAudio = () => {
		setAudioSrc(() => audioSrc = data.song);
	};

	return (
		<>
			<button className="bg-[#33373b] backdrop-blur-xl bg-opacity-80 rounded-xl p-2 grid grid-cols-12 items-center gap-2 lg:gap-12" type="button" onClick={handlePlayAudio}>
				<div className="col-span-3 lg:flex lg:items-center lg:gap-4 lg:col-span-2">
					<div className="w-full h-[60px] relative overflow-y-hidden rounded-lg lg:col-span-3 lg:w-16">
						<Image
							className="w-full h-auto rounded-lg object-cover object-center"
							src={data.coverArt}
							alt={data.title}
							priority={true}
							quality={100}
							fill
						/>
					</div>

					<i className="fr fi-rr-heart hidden lg:inline"></i>
				</div>

				<div className="grid grid-cols-12 gap-1 col-span-9 data-container lg:grid lg:items-center lg:justify-between lg:col-span-10 lg:grid-cols-4 shrink-0">
					<p className="col-span-10 lg:col-span-1 header">{data.title}</p>

					<p className="col-span-2 lg:order-last lg:col-span-1 lg:text-right">
						<i className="fr fi-sr-menu-dots-vertical text-yellow-500"></i>
					</p>

					<p className="col-span-10 lg:order-0 lg:col-span-1 lg:text-right">
						{data.type}
					</p>

					<p className="col-span-2 lg:col-span-1 lg:text-right">
						{data.duration}
					</p>
				</div>
			</button>
		</>
	);
};

export default ViewChart;
