import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { AiOutlineCheck } from 'react-icons/ai';

interface CheckboxProps {
	label: string;
	name: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, checked, onChange }) => {
	return (
		<Switch.Group>
			<div className='flex items-center justify-start pl-2'>
				<Switch.Label className='mr-4 dark:text-white'>{label}</Switch.Label>
				<Switch
					checked={checked}
					onChange={onChange}
					name={name}
					className={`
            relative flex h-6 w-6 items-center justify-center rounded-lg transition-all duration-200 outline-none ring-1 bg-gray-200 ring-gray-200
            ${!checked ? 'ring-gray-400' : ''}
            ${checked ? 'ring-primary dark:ring-primaryDark' : ''}           
          `}
				>
					<AiOutlineCheck
						size='1rem'
						className={`
             ${checked ? 'scale-100' : 'scale-0'} 
             ${checked ? 'text-primary dark:text-primaryDark' : 'text-gray-400'} 
             transition-transform duration-200 ease-out`}
					/>
				</Switch>
			</div>
		</Switch.Group>
	);
};

export default Checkbox;
