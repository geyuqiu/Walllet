export const tableStyle = `
	table {
		margin: 0;
		padding: 0;
		width: 100%;
		border: none;
		border-collapse: collapse;

		thead {
			th.hasBorder:not(:last-child):after {
				content: "";
		    height: 50%;
		    position: absolute;
		    right: 0;
		    top: 25%;
		    border-left-width: 1px;
		    border-color: inherit;
			}
			
			.first\\:pl-0:first-child {
		    padding-left: 11px !important;
			}
			
			.last\\:pr-0:last-child {
		    padding-right: 11px !important;
			}
		}
	}
`;
