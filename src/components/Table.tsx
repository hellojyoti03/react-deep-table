import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ensureUniqueIds } from "../helper/index";

import { FaPlus, FaMinus } from "react-icons/fa6";

let COSTUM_STYLE_OBJECT = {
  border: '1px solid #ddd',
  headerColor: "#007BFF",
  footerColor: "#28A745",
  bodyColor: "#F8F9FA",
  tableColor : "#FFFFFF",
}


function Table({
	body,
	header,
  costumClass = 'react-deep-table',
  costumStyle = {
  
  },

	rowsPerPage = 6,
}) {
	const [_body, setBody] = useState([]);
	const [_head, setHead] = useState([]);


	const [expandedRows, setExpandedRows] = useState({});
	const [currentPage, setCurrentPage] = useState(1);
	const toggleRow = (reactDeepId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [reactDeepId]: !prev[reactDeepId], 
  }));
	};

	const renderRows = (rows, depth = 0) => {
		

		return rows.map((row, index) => {
			const key = `row-${index}`;

			return (
        <React.Fragment key={key}>
          <tr
									style={{
										
                    
										backgroundColor: depth % 2 === 0 ? costumClass?.['bodyColor'] ? costumClass?.['bodyColor'] : COSTUM_STYLE_OBJECT?.['bodyColor'] : "#EEEEEE",
									}}>
					{
              Object.keys(row).map((_key, index) => {
              console.log(_key, index)
              if (_key === "children") return null;
              
      
							return (
								
                <td style={{
                  display: _key == 'react_deep_id' ? 'none' :  'auto',
                  paddingLeft: `${depth * 20}px`,
                
                }}>
                  <span>
                  {row.children && index == 0 ?   (
											<span
												onClick={() => toggleRow(row['react_deep_id'])}
												style={{
													marginRight: "10px",
													cursor: "pointer",
													background: "none",
													border: "none",
												}}>
											{expandedRows[row.react_deep_id] ? (
                                    <FaMinus style={{
                                      color: costumClass?.['headerColor'] ? costumClass?.['headerColor'] : COSTUM_STYLE_OBJECT?.['headerColor'] , 
                                      
                                      transition: "color 0.3s",
                         
                                      cursor: 'pointer'
                                  }}/>
                                ) : (
                          <FaPlus style={{
                                     cursor: 'pointer',
                                    color: costumClass?.['headerColor'] ? costumClass?.['headerColor'] : COSTUM_STYLE_OBJECT?.['headerColor'] , 
                                   
                                    transition: "color 0.3s", 
                                }}/>
                                )}
											</span>
										) : <></>}
										{ _key== 'react_deep_id' ? <></>: row[_key]}
                  </span>
									
									</td>
							
							);
						})
					
					}
          </tr>
          
        {row.children && expandedRows[row.react_deep_id] &&  renderRows(row.children, depth + 1)} 
				</React.Fragment>
			);
		});
	};

	useEffect(() => {
		let generateDeepTable = ensureUniqueIds(body);
		const totalRows = generateDeepTable.length;
		const totalPages = Math.ceil(totalRows / rowsPerPage);
		const paginatedData = generateDeepTable.slice(
			(currentPage - 1) * rowsPerPage,
			currentPage * rowsPerPage
		);

		setBody(paginatedData);
		setHead(header);
	}, [body, header]);

	return (
		<div
			style={{
				border: `2px solid ${costumClass?.['tableColor'] ? costumClass?.['tableColor'] : COSTUM_STYLE_OBJECT?.['tableColor']}`,
				borderRadius: "8px",
				overflow: "hidden",
				boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
			}}>
			<table className={costumClass} style={{ backgroundColor: costumClass?.['bodyColor'] ? costumClass?.['bodyColor'] : COSTUM_STYLE_OBJECT?.['bodyColor']}}>
			 <thead style={{ backgroundColor: costumClass?.['headerColor'] ? costumClass?.['headerColor'] : COSTUM_STYLE_OBJECT?.['headerColor'], color: "#FFF" }}>
					<tr>
						{_head.map((_thead) => {
							return <th>{_thead}</th>;
						})}
					</tr>
				</thead> 
        <tbody>{renderRows(_body)}</tbody>
        
				{/* <tfoot style={{ backgroundColor: footerColor, color: "#FFF" }}>
          <tr>
            <td>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#FFC107",
                  cursor: "pointer",
                }}
              >
                Previous
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                style={{
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#FFC107",
                  cursor: "pointer",
                }}
              >
                Next
              </button>
            </td>
          </tr>
        </tfoot> */}
			</table>
		</div>
	);
}

Table.propTypes = {
	body: PropTypes.array.isRequired,
	header: PropTypes.array.isRequired,
	headerColor: PropTypes.string,
	footerColor: PropTypes.string,
	bodyColor: PropTypes.string,
	tableColor: PropTypes.string,
	rowsPerPage: PropTypes.number,
};

export default Table;
