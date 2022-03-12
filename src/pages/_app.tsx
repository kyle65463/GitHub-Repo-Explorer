import type { AppProps } from "next/app";
import "../global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="bg-base-200 min-h-screen">
			<Component {...pageProps} />
		</div>
	);
}
