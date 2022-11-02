import Context from "@components/Context";
import Header from "@components/Header";
import Footer from "@components/Footer";
import {useState} from "react";

const Layout = ({ children }) => {
	const [audioSrc, setAudioSrc] = useState(null);

	return (
		<Context.Provider
			value={{
				audioSrc,
				setAudioSrc
			}}
		>
			<Header />
			<div className="px-4 pt-12 pb-28 space-y-8 lg:pl-20 lg:pr-6">
				{children}
			</div>
			<Footer />
		</Context.Provider>
	);
};

export default Layout;
