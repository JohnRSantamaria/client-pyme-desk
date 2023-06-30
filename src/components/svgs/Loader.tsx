import { svgPropsInterface } from '@/interfaces/svgInterface/loaderInterface';
import React from 'react';

const LoaderComponent: React.FC<svgPropsInterface> = ({ className }) => {
	return (
		<svg
			version='1.0'
			xmlns='http://www.w3.org/2000/svg'
			width='100px'
			height='100px'
			viewBox='0 0 100 100'
			preserveAspectRatio='xMidYMid meet'
			className={`${className}`}
		>
			<circle
				fill='#fff'
				stroke='none'
				cx='6'
				cy='50'
				r='6'
			>
				<animate
					attributeName='opacity'
					dur='1s'
					values='0;1;0'
					repeatCount='indefinite'
					begin='0.1'
				/>
			</circle>
			<circle
				fill='#fff'
				stroke='none'
				cx='26'
				cy='50'
				r='6'
			>
				<animate
					attributeName='opacity'
					dur='1s'
					values='0;1;0'
					repeatCount='indefinite'
					begin='0.2'
				/>
			</circle>
			<circle
				fill='#fff'
				stroke='none'
				cx='46'
				cy='50'
				r='6'
			>
				<animate
					attributeName='opacity'
					dur='1s'
					values='0;1;0'
					repeatCount='indefinite'
					begin='0.3'
				/>
			</circle>
		</svg>
	);
};

export default LoaderComponent;
