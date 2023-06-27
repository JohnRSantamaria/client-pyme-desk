import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';

function Pedidos() {
	return (
		<>
			<Head>
				<title>JohnS Pyme Desk | Pedidos</title>
				<meta
					name='description'
					content='Gestione y supervise todos los pedidos de los clientes de su tienda en esta página. Manténgase al tanto de los estados de los pedidos y gestione eficazmente las entregas.'
				/>
			</Head>
			<main className='flex w-full flex-col items-center justify-center min-h-[calc(100vh-80px)] dark:text-light'>
				<Layout className='pt-16'>
					<h1>Pedidos</h1>
				</Layout>
			</main>
		</>
	);
}

export default Pedidos;
