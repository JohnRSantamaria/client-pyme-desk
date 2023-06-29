import { ButtonProps } from '@/interfaces/buttonProps';

function Button({ content, onClick, active, disabled }: ButtonProps) {
	return (
		<button
			className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${
				active
					? 'text-white bg-primary dark:text-white dark:bg-primaryDark'
					: 'text-primary dark:text-primaryDark'
			}
      ${
				!disabled
					? 'bg-white hover:bg-primary hover:text-white dark:hover:bg-primaryDark'
					: 'text-zinc-400 dark:text-zinc-400 bg-white cursor-not-allowed '
			}
      `}
			onClick={onClick}
			disabled={disabled}
		>
			{content}
		</button>
	);
}
export default Button;
