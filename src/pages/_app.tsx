import Navbar from "modules/navbar/Navbar";
import type { AppProps } from "next/app";
import "../global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="bg-base-200 min-h-screen">
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}
