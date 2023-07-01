import { ObservacionesProps } from '@/interfaces/PaginationProps';

const Observaciones: React.FC<ObservacionesProps> = ({ observaciones }) => {
	return <div className='max-h-20'>{observaciones}</div>;
};

export default Observaciones;
