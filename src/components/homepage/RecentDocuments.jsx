import { useDispatch, useSelector } from 'react-redux';
import { fetchDocuments } from '../../redux/documentsSlice';
import { useEffect } from 'react';


import Container from '../Container';
import Table from '../Table';
import DocumentIcon from '/src/assets/sidebar/document.svg';

const RecentDocuments = () => {
	const dispatch = useDispatch();
	const documentsData = useSelector((state) => state.documents);

	const documents = documentsData.data?.record?.data;

	useEffect(() => {
		dispatch(fetchDocuments());
	}, [dispatch]);

	return (
		<Container>
			<Table items={documents} icon={DocumentIcon} />
		</Container>
	);
};

export default RecentDocuments;
