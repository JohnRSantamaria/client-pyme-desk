import { LinkProps } from 'next/link';
import { svgPropsInterface } from './svgInterface/loaderInterface';
import { ReactNode } from 'react';

export interface CustomLinkInterface extends svgPropsInterface {
	text: string;
}
export interface CustomLinkProps extends LinkProps {
	title: string;
	className?: string;
}

export interface LayoutProps {
	children: ReactNode;
	className?: string;
}
