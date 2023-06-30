import { ClientProps, FieldsProps } from '@/interfaces/clienteInterface/Clienteprops';

const FieldsClient: React.FC<FieldsProps> = ({ data, title }) => {
	return (
		<div>
			<span className='text-primary dark:text-primaryDark'>{title}</span> {data}
		</div>
	);
};

const Client: React.FC<ClientProps> = ({ user }) => {
	return (
		<div className='rounded-lg p-2'>
			<FieldsClient
				data={user.nombre}
				title={'Nombre:'}
			/>
			<FieldsClient
				data={user.celular}
				title={'Celular:'}
			/>
			<FieldsClient
				data={user.ciudad}
				title={'Cuidad:'}
			/>
			<FieldsClient
				data={user.correo}
				title={'Correo:'}
			/>
			<FieldsClient
				data={user.direccion}
				title={'Dirección:'}
			/>
		</div>
	);
};

export default Client;
