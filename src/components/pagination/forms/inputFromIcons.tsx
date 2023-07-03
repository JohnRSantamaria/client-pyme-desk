import React, { ChangeEvent, FC, ReactNode } from 'react';

interface InputFromIconProps {
	label: string;
	name: string;
	value?: string | number;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	decoration?: ReactNode;
	inputClassName?: string;
	decorationClassName?: string;
}

const InputFormIcon: FC<InputFromIconProps> = ({
	label,
	name,
	value,
	onChange,
	type = 'text',
	decoration,
	inputClassName = '',
	decorationClassName = ''
}) => {
	return (
		<div className='flex flex-row-reverse items-stretch w-full'>
			<input
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				type={type}
				placeholder={label}
				aria-label={label}
				min={0}
				max={10}
				className={`peer block w-full py-3 px-3 text-gray-600 bg-white border border-gray-400 focus:outline-none focus:ring-0 appearance-none rounded-tl-none rounded-bl-none rounded transition-colors duration-300 ${inputClassName}`}
			/>
			<div
				className={`flex items-center rounded-tr-none rounded-br-none rounded px-3 py-3 text-gray-600 border border-gray-400 border-r-0 ${decorationClassName}`}
			>
				{decoration}
			</div>
		</div>
	);
};

export default InputFormIcon;
