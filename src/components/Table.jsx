
const Table = () => {
	const documents = [
		{ name: 'Degree in Information Systems', date: '29 Jun 2021' },
		{
			name: 'Graduate Certificate in Legal Tech - Innovator',
			date: '10 Jun 2021',
		},
		{
			name: 'Fintech: Foundations and Applications of Financial Technology',
			date: '7 Mar 2021',
		},
		{
			name: 'Machine Learning Engineering for Production (MLOps)',
			date: '1 Dec 2020',
		},
		{
			name: 'Machine Learning Engineering for Production (MLOps)',
			date: '1 Dec 2020',
		},
	];

	return (
		<table className='min-w-full'>
			<thead className='bg-gray-100'>
				<tr>
					<th className='text-left px-4 py-2'>Document Name</th>
					<th className='text-left px-4 py-2'>Received On</th>
				</tr>
			</thead>
			<tbody>
				{documents.map((doc, index) => (
					<tr key={index} className='border-t'>
						<td className='px-4 py-2 flex items-center'>
							<div className='bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2'>
								<svg
									className='h-4 w-4'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M8 16h8M8 12h8m-4 8a9 9 0 110-18 9 9 0 010 18z'
									/>
								</svg>
							</div>
							{doc.name}
						</td>
						<td className='px-4 py-2'>{doc.date}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
