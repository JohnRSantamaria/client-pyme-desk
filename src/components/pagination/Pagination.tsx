import { PaginationProps } from '@/interfaces/PaginationProps';
import React, { useEffect, useMemo, useState } from 'react';
import PaginationNav from './PaginationNav';

function Pagination({ count, setPage }: PaginationProps) {
	const [pageIndex, setPageIndex] = useState<number>(0);
	const pageCount: number = count;

	useEffect(() => {
		setPage(pageIndex + 1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageIndex]);

	return (
		<div className='flex gap-3 flex-wrap p-6 py-12'>
			<PaginationNav
				gotoPage={setPageIndex}
				canPreviousPage={pageIndex > 0}
				canNextPage={pageIndex < pageCount - 1}
				pageCount={pageCount}
				pageIndex={pageIndex}
			/>
		</div>
	);
}

export default Pagination;
