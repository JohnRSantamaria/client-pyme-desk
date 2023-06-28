import { ReactNode } from 'react';

interface SalesItemsProps {
	title: string;
	data: string | number;
	children: ReactNode;
}

const SalesItems: React.FC<SalesItemsProps> = ({ title, data, children }) => {
	return (
		<article className='flex w-[400px] justify-start items-center gap-4 select-none xs:w-[300px] '>
			{children}
			<h3>
				{title} :
				<span className='text-primary dark:text-primaryDark uppercase '>&#32;{data}</span>
			</h3>
		</article>
	);
};

export default SalesItems;
