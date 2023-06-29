export interface ButtonProps {
	content: React.ReactNode;
	onClick: () => void;
	active?: boolean;
	disabled?: boolean;
}
