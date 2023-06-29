import React, { useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from './Button';

interface PaginationNavProps {
	gotoPage: (page: number) => void;
	canPreviousPage: boolean;
	canNextPage: boolean;
	pageCount: number;
	pageIndex: number;
}

const PaginationNav: React.FC<PaginationNavProps> = ({
	gotoPage,
	canPreviousPage,
	canNextPage,
	pageCount,
	pageIndex
}) => {
	const renderPageLinks = useCallback(() => {
		if (pageCount === 0) return null;
		const visiblePageButtonCount = 3;
		let numberOfButtons =
			pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
		const pageIndices = [pageIndex];
		numberOfButtons--;
		[...Array(numberOfButtons)].forEach((_item, itemIndex) => {
			const pageNumberBefore = pageIndices[0] - 1;
			const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;

			if (pageNumberBefore >= 0 && pageNumberAfter < pageCount) {
				if (itemIndex % 2 === 0) {
					pageIndices.push(pageNumberAfter);
				} else {
					pageIndices.unshift(pageNumberBefore);
				}
			} else if (pageNumberBefore >= 0) {
				pageIndices.unshift(pageNumberBefore);
			} else if (pageNumberAfter < pageCount) {
				pageIndices.push(pageNumberAfter);
			}
		});
		return pageIndices.map((pageIndexToMap) => (
			<li key={pageIndexToMap}>
				<Button
					content={pageIndexToMap + 1}
					onClick={() => gotoPage(pageIndexToMap)}
					active={pageIndex === pageIndexToMap}
				/>
			</li>
		));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageCount, pageIndex]);

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
			{renderPageLinks()}
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
