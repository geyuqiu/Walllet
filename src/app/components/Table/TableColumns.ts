export const timestampAccessor = 'timestamp';

export const tableColumns = [
	{
		Header: 'Txid',
		accessor: 'id',
	},
	{
		Header: 'Sender',
		accessor: 'sender',
	},
	{
		Header: 'Recipient',
		accessor: 'recipient',
	},
	{
		Header: 'Timestamp',
		accessor: timestampAccessor,
		className: "justify-center"
	},
	{
		Header: 'Amount',
		accessor: 'amount',
		className: "justify-end"
	},
	{
		Header: 'Fee',
		accessor: 'fee',
		className: "justify-end"
	}
];
