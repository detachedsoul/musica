import Head from "next/head";
import Image from "next/future/image";
import FavoriteCollections from "@components/FavoriteCollections.js";

const Collections = () => {
    return (
        <>
            <Head>
				<title>Musica | Collections</title>
				<meta
					name="description"
					content="Musica is a music streaming app"
				/>
			</Head>

            <div className="flex gap-4 items-center flex-wrap">
                <button className="rounded-r-3xl rounded-l-3xl bg-yellow-300 py-2.5 px-6 text-custom-dark-black hover:bg-yellow-400 border border-custom-dark-black" type="button">
                    My collections
                </button>

                <button className="rounded-r-3xl rounded-l-3xl border border-custom-white py-2.5 px-6 text-custom-white hover:bg-yellow-300 hover:text-custom-dark-black hover:border-custom-dark-black" type="button">
                    Likes
                </button>
            </div>

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
                <FavoriteCollections />
            </div>
        </>
    );
}

export default Collections;