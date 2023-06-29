import { ButtonProps } from '@/interfaces/buttonProps';

const Button: React.FC<ButtonProps> = ({ content, onClick, active, disabled }) => {
	return (
		<button
			className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${
				active
					? ' text-slate-50 bg-pink-500 dark:bg-primaryDark dark:text-white '
					: 'text-primary dark:text-primaryDark '
			}
      ${
				!disabled
					? 'bg-white text-pink-500 hover:bg-pink-500 hover:text-white dark:hover:bg-primaryDark'
					: 'text-zinc-500 dark:text-zinc-500 bg-white cursor-not-allowed'
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
