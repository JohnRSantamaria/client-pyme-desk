import React, { ChangeEvent, FC } from 'react';

interface InputsFormsProps {
	label: string;
	name: string;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	disabled?: boolean;
	error?: string;
}

const InputsForms: FC<InputsFormsProps> = ({
	label,
	name,
	value,
	onChange,
	type = 'text',
	disabled,
	error
}) => {
	return (
		<div className='relative z-0 w-full'>
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				className={`peer block py-2.5 px-1 w-full text-sm text-gray-600 dark:text-slate-50 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-primary dark:focus:border-primaryDark ${
					disabled ? 'border-gray-300' : 'border-gray-400'
				}`}
				placeholder=' '
				disabled={disabled}
			/>
			<label
				htmlFor={name}
				className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary dark:peer-focus:text-primaryDark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
			>
				{label}
			</label>
			{error && <p className='text-primary dark:text-primaryDark'>{error}</p>}
		</div>
	);
};

export default InputsForms;
