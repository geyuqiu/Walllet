import React, {useMemo} from "react";
import {useTable} from 'react-table';
import styled from 'styled-components';

import {tableStyle} from './Table.styles';

const TableWrapper = styled.div`
	${tableStyle}
`;

export const Table = ({
	columns, transactions
}: TableProps) => {
	const tableData = useMemo(() => transactions, [transactions]);
	const tableColumns = useMemo(() => columns, [columns]);
	const {
		getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
	} = useTable({
		data: tableData,
		columns: tableColumns
	});

	return (
		<TableWrapper>
			<table {...getTableProps()}>
				<thead>
				{headerGroups.map((headerGroup: any, headerGroupIndex: number) => (
					<tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
						{headerGroup.headers.map((column: any, thIndex: number) => (
							<th key={thIndex} {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
				</thead>
				<tbody {...getTableBodyProps()}>
				{rows.map((row, trIndex) => {
					prepareRow(row)
					return (
						<tr {...row.getRowProps()} key={trIndex}>
							{row.cells.map((cell, tdIndex) => <td {...cell.getCellProps()} key={tdIndex}>{cell.render('Cell')}</td>)}
						</tr>
					)
				})}
				</tbody>
			</table>
		</TableWrapper>
	);
};

type TableProps = {
	columns: any[];
	transactions: any[]
};

