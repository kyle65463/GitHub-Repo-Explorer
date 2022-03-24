import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link href='https://fonts.googleapis.com/css2?family=Inter&display=optional' rel='stylesheet' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=League+Spartan:wght@400;500;600&family=Roboto+Slab:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
