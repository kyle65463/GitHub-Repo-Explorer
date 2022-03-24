import Navbar from "modules/navbar/Navbar";
import type { AppProps } from "next/app";
import "../global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='relative bg-gray-50 min-h-screen flex flex-col items-center font-body'>
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}
