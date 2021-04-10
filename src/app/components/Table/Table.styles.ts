export const tableStyle = `
	table {
		margin: 0;
		padding: 0;
		width: 100%;
		border-color: var(--theme-color-secondary-300);
		border-bottom-width: 1px;

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
		}
	}
	
	@media
	  only screen 
    and (max-width: 767px) {

		/* Force table to not be like tables anymore */
		table, thead, tbody, th, td, tr {
			display: block;
		}

		/* Hide table headers (but not display: none;, for accessibility) */
		thead tr {
			position: absolute;
			left: -9999px;
		}
		
		table tr:last-child { 
		  margin-bottom: 5rem
	  }
		
    tr {
      margin: 0 0 1rem 0;
      padding: 1rem 0 1rem 0;
    }
    
		td {
			/* Behave  like a "row" */
			border: none;
			border-bottom: none;
			position: relative;
			padding-left: 21%;
			padding-bottom: 0.5rem;
		}

		td:before {
			/* Now like a table header */
			position: absolute;
			/* Top/left values mimic padding */
			top: 0;
			left: 6px;
			width: 45%;
			padding-right: 10px;
			white-space: nowrap;
		}

		/*
		Label the data
    You could also use a data-* attribute and content for this. That way "bloats" the HTML, this way means you need to keep HTML and CSS in sync.
		*/
		td:nth-of-type(1):before { content: "Txid"; }
		td:nth-of-type(2):before { content: "Sender"; }
		td:nth-of-type(3):before { content: "Recipient"; }
		td:nth-of-type(4):before { content: "Timestamp"; }
		td:nth-of-type(5):before { content: "Amount"; }
		td:nth-of-type(6):before { content: "Fee"; }
	}
`;
