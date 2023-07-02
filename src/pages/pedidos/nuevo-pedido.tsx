import AnimatedText from '@/components/AnimateText';
import Layout from '@/components/Layout';
import PedidoNuevoForm from '@/components/pedidos/pedidosForm/PedidoNuevoForm';
import Head from 'next/head';
import React from 'react';

const NuevoPedido = () => {
	return (
		<>
			<Head>
				<title>JohnS Pyme Desk | Pedidos</title>
				<meta
					name='description'
					content='Gestione y supervise todos los pedidos de los clientes de su tienda en esta página. Manténgase al tanto de los estados de los pedidos y gestione eficazmente las entregas.'
				/>
			</Head>
			<AnimatedText
				text='Nuevos Pedidos'
				className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
			/>
			<Layout>
				<PedidoNuevoForm />
			</Layout>
		</>
	);
};

export default NuevoPedido;
