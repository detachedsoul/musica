import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const [searchBarIsActive, setSearchBarIsActive] = useState(false);

	const handleNavToggleClick = () => {
		setIsActive(() => !isActive);
	};

	const handleSearchBarToggleClick = () => {
		setSearchBarIsActive(() => !searchBarIsActive);
	};

    return (
		<header className="bg-custom-black sticky top-0 backdrop-blur-md bg-opacity-80 z-[1024]">
			<div className="flex items-center justify-between gap-4 p-4 border-b border-gray-700">
				<button type="button" onClick={handleNavToggleClick}>
					<i
						className={`fr ${
							isActive ? "fi-rr-cross" : "fi-rr-menu-burger"
						}`}
					></i>
				</button>

				<div className="flex justify-between gap-4 items-center w-full">
					<Link href="/">
						<a className="w-10 h-auto relative">
							<Image
								className="aspect-square"
								src="/logo.png"
								alt="Musica"
								width={20}
								height={20}
								priority={true}
								objectFit="cover"
								objectPosition="center"
								quality={100}
							/>
						</a>
					</Link>

					<button type="button" onClick={handleSearchBarToggleClick}>
						<i className="fr fi-rr-search"></i>
					</button>
				</div>
			</div>

			<form className={`flex w-[90%] [top:110%] absolute left-[5%] rounded-l lg:w-auto lg:static ${searchBarIsActive ? '' : '[transform:translateY(-10rem)]'} group transition-all ease-linear duration-500 lg:translate-y-0 [transform-origin:0_0] xs:w-[70%] xs:left-[15%] md:w-1/2 md:left-1/4`} method="get">

				<label className="w-full bg-white rounded-l-lg" htmlFor="searchInput">
					<input className="appearance-none rounded-none w-full bg-white rounded-l-lg focus:outline-none py-2 px-4 hover:ring-1 hover:ring-index-hero/30 hover:ring-offset-2 hover:ring-offset-white focus:ring-1 focus:ring-index-hero/30 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all ease-linear delay-100 border border-gray-400" type="search" id="searchInput" placeholder="Search" name="search-input" title="Search" />
				</label>

				<button className="bg-index-hero text-white pt-[0.3rem] pb-[0.1rem] px-3.5 rounded-r-lg transition-all ease-linear delay-100" type="submit" aria-label="Click to search" title="Click to search">
					<i className="fr fi-rr-search relative top-[0.1rem]"></i>
				</button>

			</form>

			<nav
				className={`bg-navbar p-4 absolute right-0 w-4/5 min-h-screen text-custom-white transition-all duration-700 ease-in-out ${
					isActive ? "scale-100" : "scale-0"
				}`}
			>
				<ul className="grid gap-8">
					<li>
						<Link href="/">
							<a className="flex items-center gap-4 font-bold">
								<i className="fi fi-sr-home text-yellow-300"></i>
								Home
							</a>
						</Link>
					</li>

					<li>
						<Link href="/collections">
							<a className="flex items-center gap-4 hover:text-yellow-300 group">
								<i className="group-hover:text-yellow-300 fi fi-sr-music-alt text-slate-100"></i>
								My Collections
							</a>
						</Link>
					</li>

					<li>
						<Link href="">
							<a className="flex items-center gap-4 hover:text-yellow-300 group">
								<i className="group-hover:text-yellow-300 fi fi-sr-tv-music text-slate-100"></i>
								Music
							</a>
						</Link>
					</li>

					<li>
						<Link href="">
							<a className="flex items-center gap-4 hover:text-yellow-300 group">
								<i className="group-hover:text-yellow-300 fi fi-sr-film text-slate-100"></i>
								Music Videos
							</a>
						</Link>
					</li>

					<li>
						<Link href="">
							<a className="flex items-center gap-4 hover:text-yellow-300 group">
								<i className="group-hover:text-yellow-300 fi fi-sr-user text-slate-100"></i>
								Profile
							</a>
						</Link>
					</li>

					<li>
						<Link href="">
							<a className="flex items-center gap-4 hover:text-yellow-300 group">
								<i className="group-hover:text-yellow-300 fi fi-sr-exit text-slate-100"></i>
								Log Out
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;