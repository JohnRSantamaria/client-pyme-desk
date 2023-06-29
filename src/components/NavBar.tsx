import CustomLink from './CustomLink';

export const NavBar = () => {
	return (
		<header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
			<div className='w-full flex justify-between items-center '>
				<nav className='flex items-center justify-between'>
					<CustomLink
						href='/'
						title='Home'
						className='mr-4'
					/>
					<CustomLink
						href='/clientes'
						title='Clientes'
						className='mx-4'
					/>
					<CustomLink
						href='/pedidos'
						title='Pedidos'
						className='mx-4'
					/>
				</nav>
			</div>
		</header>
	);
};
