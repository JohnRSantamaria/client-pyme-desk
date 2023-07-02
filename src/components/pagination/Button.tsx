import { ButtonProps } from '@/interfaces/buttonProps';

const Button: React.FC<ButtonProps> = ({ content, onClick, active, disabled }) => {
	return (
		<button
			className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg 
      ${
				active
					? ' text-zinc-200 bg-primary dark:text-zinc-900 dark:bg-primaryDark'
					: 'text-primary dark:text-zinc-900 '
			}
      ${
				!disabled
					? ' bg-white text-primary hover:bg-primary hover:text-zinc-50 dark:hover:bg-primaryDark'
					: 'text-zinc-200 dark:text-zinc-400 bg-slate-300 dark:bg-slate-600 cursor-not-allowed'
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
