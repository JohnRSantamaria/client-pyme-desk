import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

import Head from 'next/head';
import Footer from '@/components/Footer';
import { NavBar } from '@/components/NavBar';

//context
import { PedidoProvider } from '@/context/PedidoContext';
import { ClientesProvider } from '@/context/ClientesContext';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-mont'
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<PedidoProvider>
			<ClientesProvider>
				<Head>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1'
					/>
					<link
						rel='icon'
						href='/favicon.ico'
					/>
				</Head>
				<main
					className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen overflow-x-hidden`}
				>
					<NavBar />
					<Component {...pageProps} />
					<Footer />
				</main>
			</ClientesProvider>
		</PedidoProvider>
	);
}
