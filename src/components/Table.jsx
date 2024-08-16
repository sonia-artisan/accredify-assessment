import React from 'react';
import { formatDate } from '../utils/dateFormatting';
import '../styles/components/Table.scss';

import Action from './Action';

const Table = ({ items = [], icon }) => {
	const sortedItems = [...items].sort((a, b) => new Date(b.received_on) - new Date(a.received_on));

	return (
		<table className='min-w-full'>
			<thead>
				<tr className='text-left body-bold text-subtitle'>
					<th className='row-spacing document-name-col'>Document Name</th>
					<th className='row-spacing'>Received On</th>
				</tr>
			</thead>
			<tbody>
				{sortedItems && sortedItems.map((item, index) => (
					<tr key={index} className='border-y-2'>
						<td className='row-spacing gap-4 flex items-center body-bold'>
							<div >
								<img src={icon}
								className='table-item-icon' />
							</div>
							{item.document_name}
						</td>
						<td className='body row-spacing'>{formatDate(item.received_on)}</td>
						<td className='body row-spacing'><Action /></td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
