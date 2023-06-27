import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';

function Clientes() {
	return (
		<>
			<Head>
				<title>JohnS Pyme Desk | Clientes</title>
				<meta
					name='description'
					content='Administre la información y los perfiles de sus clientes en esta página. Vea su historial de compras, preferencias y mantenga sus datos de contacto actualizados.'
				/>
			</Head>
			<main className='flex w-full flex-col items-center justify-center min-h-[calc(100vh-80px)] dark:text-light'>
				<Layout className='pt-16'>
					<h1>Clientes</h1>
				</Layout>
			</main>
		</>
	);
}

export default Clientes;
