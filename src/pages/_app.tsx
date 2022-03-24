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

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600&family=Roboto+Slab:wght@400;500;600;700&display=swap" rel="stylesheet"></link>