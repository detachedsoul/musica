import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
	const router = useRouter();

	const [isActive, setIsActive] = useState(false);
	const [searchBarIsActive, setSearchBarIsActive] = useState(false);

	const handleNavToggleClick = () => {
		setIsActive(() => !isActive);
	};

	const handleSearchBarToggleClick = () => {
		setSearchBarIsActive(() => !searchBarIsActive);
	};

	useEffect(() => {
		setIsActive(() => isActive = false);
	}, [router.asPath]);

    return (
		<header className="bg-custom-black sticky top-0 backdrop-blur-md bg-opacity-80 z-[1024]">
			<div className="flex items-center justify-between gap-4 p-4 border-b border-gray-700 lg:border-none">
				<button className="lg:hidden" type="button" onClick={handleNavToggleClick}>
					<i
						className={`fr ${
							isActive ? "fi-rr-cross" : "fi-rr-menu-burger"
						}`}
					></i>
				</button>

				<div className="flex justify-between gap-4 items-center w-full lg:justify-start">
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

					<button className="lg:hidden" type="button" onClick={handleSearchBarToggleClick}>
						<i className="fr fi-rr-search"></i>
					</button>

					<form className={`flex w-[90%] [top:110%] absolute left-[5%] rounded-lg lg:w-auto lg:static ${searchBarIsActive ? '' : '[transform:translateY(-10rem)]'} group transition-all ease-linear duration-500 lg:translate-y-0 [transform-origin:0_0] lg:bg-navbar lg:ml-1.5`} method="GET">
						<button className="bg-custom-dark-black text-white pt-[0.3rem] pb-[0.1rem] px-3.5 rounded-l-lg transition-all ease-linear delay-100 lg:bg-transparent lg:text-custom-white lg:pl-5" type="submit" aria-label="Click to search" title="Click to search">
							<i className="fr fi-rr-search relative top-[0.01rem]"></i>
						</button>

						<label className="w-full bg-custom-white rounded-r-lg lg:bg-transparent" htmlFor="searchInput">
							<input className="appearance-none rounded-none w-full bg-custom-white rounded-r-lg focus:outline-none py-2 px-4 transition-all ease-linear duration-500 border border-gray-400 lg:bg-transparent lg:border-none lg:py-2.5 lg:pl-0 lg:pr-6" type="search" id="searchInput" placeholder="Search artists" name="search-input" title="Search" />
						</label>
					</form>
				</div>
			</div>

			<nav
				className={`bg-navbar p-4 fixed right-0 w-4/5 min-h-screen text-custom-white transition-all duration-700 ease-in-out ${
					isActive ? "scale-100" : "scale-0"
				} lg:scale-100 lg:left-0 lg:w-14 lg:bg-transparent lg:pl-1.5`}
			>
				<ul className="grid gap-8 lg:gap-4">
					<div className="grid gap-8 lg:bg-navbar lg:py-4 lg:px-3.5 lg:rounded-t-3xl lg:rounded-b-3xl lg:gap-4">
						<li>
							<Link href="/">
								<a className={`flex items-center gap-4 lg:text-lg transition-all ease-linear duration-500 ${router.asPath === '/' ? 'font-bold text-yellow-300' : 'hover:text-yellow-300 text-slate-100'}`}>
									<i className="fi fi-sr-home text-inherit"></i>
									<span className="lg:hidden">
										Home
									</span>
								</a>
							</Link>
						</li>

						<li>
							<Link href="/collections">
								<a className={`flex items-center gap-4 lg:text-lg ${router.asPath === '/collections' ? 'font-bold text-yellow-300' : 'hover:text-yellow-300 text-slate-100'}`}>
									<i className="fi fi-sr-music-alt text-inherit"></i>
									<span className="lg:hidden">
										My Collections
									</span>
								</a>
							</Link>
						</li>

						<li>
							<Link href="">
								<a className="flex items-center gap-4 hover:text-yellow-300 group lg:text-lg">
									<i className="group-hover:text-yellow-300 fi fi-sr-tv-music text-slate-100"></i>
									<span className="lg:hidden">
										Music
									</span>
								</a>
							</Link>
						</li>

						<li>
							<Link href="">
								<a className="flex items-center gap-4 hover:text-yellow-300 group lg:text-lg">
									<i className="group-hover:text-yellow-300 fi fi-sr-film text-slate-100"></i>
									<span className="lg:hidden">
										Music Videos
									</span>
								</a>
							</Link>
						</li>
					</div>

					<div className="grid gap-8 lg:bg-navbar lg:py-4 lg:px-3.5 lg:rounded-t-3xl lg:rounded-b-3xl lg:gap-4">
						<li>
							<Link href="">
								<a className="flex items-center gap-4 hover:text-yellow-300 group lg:text-lg">
									<i className="group-hover:text-yellow-300 fi fi-sr-user text-slate-100"></i>
									<span className="lg:hidden">
										Profile
									</span>
								</a>
							</Link>
						</li>

						<li>
							<Link href="">
								<a className="flex items-center gap-4 hover:text-yellow-300 group lg:text-lg">
									<i className="group-hover:text-yellow-300 fi fi-sr-exit text-slate-100"></i>
									<span className="lg:hidden">
										Log Out
									</span>
								</a>
							</Link>
						</li>
					</div>
				</ul>
			</nav>
		</header>
	);
}

export default Header;