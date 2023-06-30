import React from 'react';
import AnimatedText from '../AnimateText';

const PedidosComponent = () => {
	return (
		<>
			<AnimatedText
				text='Nuestros Pedidos'
				className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
			/>

			<main className='flex flex-col justify-between items-center w-full min-h-[calc(100vh-200px)] '>
				<section className='flex flex-col justify-evenly items-center w-full h-min-[500px] auto pt-2 border-light dark:border-dark shadow-2xl '></section>
			</main>
		</>
	);
};

export default PedidosComponent;
