import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta property='og:title' content='GitHub Viewer' key='title' />
					<link href='https://fonts.googleapis.com/css2?family=Inter&display=optional' rel='stylesheet' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Ubuntu:wght@400;500;600;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
