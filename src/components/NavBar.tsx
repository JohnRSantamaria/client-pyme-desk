import Link from 'next/link';
import CustomLink from './CustomLink';

export const NavBar = () => {
	return (
		<header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 '>
			<div className='w-full flex justify-between items-center sm:justify-center'>
				<Link
					href='/'
					passHref
				>
					<span className='text-xl font-bold sm:hidden'>PYME DESK</span>
				</Link>
				<nav className='flex items-center justify-between gap-8'>
					<CustomLink
						href='/'
						title='Inicio'
					/>
					<CustomLink
						href='/clientes'
						title='Clientes'
					/>
					<CustomLink
						href='/pedidos'
						title='Pedidos'
					/>
				</nav>
			</div>
		</header>
	);
};
