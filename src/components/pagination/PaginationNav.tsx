import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from './Button';
import { PaginationNavProps } from '@/interfaces/paginationNavProps';
import PageLinks from './PageLinks';

const PaginationNav: React.FC<PaginationNavProps> = ({
	gotoPage,
	canPreviousPage,
	canNextPage,
	pageCount,
	pageIndex
}) => {
	return (
		<ul className='flex gap-2'>
			<li>
				<Button
					content={
						<div className='flex ml-1'>
							<FaChevronLeft size='0.6rem' />
							<FaChevronLeft
								size='0.6rem'
								className='-translate-x-1/2'
							/>
						</div>
					}
					onClick={() => gotoPage(0)}
					disabled={!canPreviousPage}
				/>
			</li>
			{/* {renderPageLinks()} */}
			<PageLinks
				pageCount={pageCount}
				pageIndex={pageIndex}
				gotoPage={gotoPage}
			/>
			<li>
				<Button
					content={
						<div className='flex ml-1'>
							<FaChevronRight size='0.6rem' />
							<FaChevronRight
								size='0.6rem'
								className='-translate-x-1/2'
							/>
						</div>
					}
					onClick={() => gotoPage(pageCount - 1)}
					disabled={!canNextPage}
				/>
			</li>
		</ul>
	);
};

export default PaginationNav;
