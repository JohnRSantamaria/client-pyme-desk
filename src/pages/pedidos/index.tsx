import Layout from '@/components/Layout';
import PedidosComponent from '@/components/pedidos/Pedidos';

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
					<PedidosComponent />
				</Layout>
			</main>
		</>
	);
}

export default Pedidos;
