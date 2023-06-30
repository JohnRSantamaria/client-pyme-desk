import { ButtonProps } from '@/interfaces/buttonProps';

const Button: React.FC<ButtonProps> = ({ content, onClick, active, disabled }) => {
	return (
		<button
			className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${
				active
					? ' text-zinc-900 bg-[#F056C7] dark:bg-primaryDark dark:text-[#09090B]  '
					: 'text-[#F056C7] dark:text-zinc-900 '
			}
      ${
				!disabled
					? 'bg-white text-[#F056C7] hover:bg-[#F056C7] hover:text-zinc-50 dark:hover:bg-primaryDark'
					: 'text-[#CCD1D1] dark:text-[#E5E8E8] bg-[#CCD1D1] cursor-not-allowed'
			}
      `}
			onClick={onClick}
			disabled={disabled}
		>
			{content}
		</button>
	);
};

export default Button;
