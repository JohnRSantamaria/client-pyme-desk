import React, { useCallback } from 'react';
import Button from './Button';
import { checkTargetForNewValues } from 'framer-motion';

interface PageLinksProps {
	pageCount: number;
	pageIndex: number;
	gotoPage: (page: number) => void;
}

const PageLinks: React.FC<PageLinksProps> = ({ pageCount, pageIndex, gotoPage }) => {
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
		console.log(pageCount);
		console.log(numberOfButtons);
		// Ordenar los índices antes de renderizar los botones
		pageIndices.sort((a, b) => a - b);

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

	return <>{renderPageLinks()}</>;
};

export default PageLinks;
