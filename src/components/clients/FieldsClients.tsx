import { FieldsProps } from '@/interfaces/clienteInterface/Clienteprops';

const FieldsClient: React.FC<FieldsProps> = ({ data, title }) => {
	return (
		<div>
			<span className='text-primary dark:text-primaryDark'>{title}</span> {data}
		</div>
	);
};

export default FieldsClient;
