import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
				<div className="px-4 py-12 space-y-8 lg:space-y-12 lg:pl-20 lg:pr-6">
					{children}
				</div>
			<Footer />
		</>
	);
};

export default Layout;
