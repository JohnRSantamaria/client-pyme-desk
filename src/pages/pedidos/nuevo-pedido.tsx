import AnimatedText from '@/components/AnimateText';
import Layout from '@/components/Layout';
import PedidoNuevoForm from '@/components/pedidos/pedidosForm/PedidoNuevoForm';
import Head from 'next/head';
import React from 'react';

const NuevoPedido = () => {
	return (
		<>
			<Head>
				<title>JohnS Pyme Desk | Nuevo Pedido</title>
				<meta
					name='description'
					content='Cree los nuevo pedidos de los clientes de su tienda en esta página. Manténgase al tanto de los estados de los pedidos y gestione eficazmente las entregas.'
				/>
			</Head>
			<main className='text-dark w-full min-h-[calc(100vh-80px)] dark:text-light'>
				<Layout>
					<PedidoNuevoForm />
				</Layout>
			</main>
		</>
	);
};

export default NuevoPedido;
