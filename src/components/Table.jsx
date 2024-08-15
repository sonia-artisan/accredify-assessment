import { formatDate } from '../utils/dateFormatting';
import '../styles/components/Table.scss';

const Table = ({ items, icon }) => {
	console.log(items);

	return (
		<table className='min-w-full'>
			<thead>
				<tr className='text-left body-bold'>
					<th className='row-spacing'>Document Name</th>
					<th className='row-spacing'>Received On</th>
				</tr>
			</thead>
			<tbody>
				{items && items.map((item, index) => (
					<tr key={index} className='border-y-2'>
						<td className='row-spacing gap-4 flex items-center body-bold'>
							<div >
								<img src={icon}
								className='table-item-icon' />
							</div>
							{item.document_name}
						</td>
						<td className='body row-spacing'>{formatDate(item.received_on)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
