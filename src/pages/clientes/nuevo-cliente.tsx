import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import FormNuevoCliente from '@/components/clients/FormNuevoCliente';

const Newclient: React.FC = () => {
	return (
		<>
			<Head>
				<title>JohnS Pyme Desk |Nuevo Cliente</title>
				<meta
					name='description'
					content='Cree un nuevo Cliente en esta página, con el que podra realizar pedidos en la pagina de pedidos nuevo pedido.'
				/>
			</Head>

			<main className='text-dark w-full min-h-[calc(100vh-80px)] dark:text-light'>
				<Layout>
					<FormNuevoCliente />
				</Layout>
			</main>
		</>
	);
};

export default Newclient;
