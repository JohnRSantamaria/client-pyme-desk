export interface PaginationNavProps {
	gotoPage: (page: number) => void;
	canPreviousPage: boolean;
	canNextPage: boolean;
	pageCount: number;
	pageIndex: number;
}
