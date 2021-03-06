import cn from "classnames";
import React, {useMemo} from "react";
import {useSortBy, useTable} from "react-table";
import {styled} from "twin.macro";

import {useViewportTable} from '../../hooks/useViewport';
import {HideColumnsResponsive} from '../../pages/Wallet/WalletView';
import {Icon} from "../Icon/Icon";
import {tableStyle} from "./Table.styles";

type TableProps = {
	children?: any;
	className?: string;
	data: any[];
	columns: any[];
	hideHeader?: boolean;
	initialState?: Record<string, any>;
	hideColumnsAtBreakpoint?: HideColumnsResponsive[];
};

const TableWrapper = styled.div`
	${tableStyle}
`;

export const Table = ({children, data, columns, hideHeader, className, initialState, hideColumnsAtBreakpoint}: TableProps) => {
	const tableData = useMemo(() => data, [data]);
	const tableColumns = useMemo(() => columns, [columns]);

	const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, toggleHideColumn} = useTable(
		{
			data: tableData,
			columns: tableColumns,
			autoResetSortBy: false,
			disableSortRemove: true,
			initialState,
		},
		useSortBy,
	);

	useViewportTable(toggleHideColumn, hideColumnsAtBreakpoint);

	const renderChildNode = (data: any, index: number) => {
		if (typeof children === "function") {
			return children(data, index);
		}
		return <tr/>;
	};

	return (
		<TableWrapper {...getTableProps({className})} className={cn("w-full max-w-screen-xl", {"-mt-3": !hideHeader})}>
			<table cellPadding={0} className="table-auto">
				{!hideHeader && (
					<thead>
					{headerGroups.map((headerGroup: any, index: number) => (
						<tr
							className="border border-theme-secondary-300"
							key={index}
							{...headerGroup.getHeaderGroupProps()}
						>
							{headerGroup.headers.map((column: any, thIndex: number) => (
								<th
									key={thIndex}
									className={cn(
										"group border text-sm text-left select-none text-theme-secondary-500 border-theme-secondary-300 m-0 p-3 md:px-5 font-semibold",
										{hasBorder: !column.className?.includes("no-border")},
										{"w-1": column.minimumWidth},
										{
											[`${column.cellWidth} min-${column.cellWidth}`]:
											!column.minimumWidth && column.cellWidth,
										},
									)}
									{...column.getHeaderProps(column.getSortByToggleProps())}
								>
									<div
										className={cn("flex flex-inline align-top", column.className, {
											"flex-row-reverse":
												column.className?.includes("justify-end") && !column.disableSortBy,
										})}
									>
										<div data-testid={`table__th--${thIndex}`}>{column.render("Header")}</div>
										{column.canSort && (
											<div
												className={cn(
													"flex items-center text-theme-secondary-500 dark:text-theme-secondary-700 transition-opacity",
													{"opacity-0 group-hover:opacity-100": !column.isSorted},
													{
														"ml-auto mr-2": column.className?.includes("justify-end"),
														"ml-2": !column.className?.includes("justify-end"),
													},
												)}
											>
												<Icon
													role="img"
													name="ArrowDown"
													className={cn("transition-transform", {
														"transform rotate-180":
															(column.isSorted && !column.isSortedDesc) ||
															(!column.isSorted && !column.sortDescFirst),
													})}
													width={8}
													height={5}
												/>
											</div>
										)}
									</div>
								</th>
							))}
						</tr>
					))}
					</thead>
				)}

				<tbody {...getTableBodyProps()}>
				{rows.map((row: any) => {
					prepareRow(row);
					return {...renderChildNode(row.original, row.index), ...row.getRowProps()};
				})}
				</tbody>
			</table>
		</TableWrapper>
	);
};

Table.defaultProps = {
	data: [],
	columns: []
};
