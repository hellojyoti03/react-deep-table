// @ts-nocheck
import { useState } from 'react'
import Table from './components/Table'
function App() {
  // const demoData = [
  //   {
  //     label: "Category 1",
  //     children: [
  //       {
  //         label: "Subcategory 1.1",
  //         children: [
  //           { label: "Item 1.1.1" },
  //           { label: "Item 1.1.2" },
  //         ],
  //       },
  //       {
  //         label: "Subcategory 1.2",
  //         children: [
  //           {
  //             label: "Item 1.2.1",
  //             children: [
  //               { label: "Detail 1.2.1.1" },
  //               { label: "Detail 1.2.1.2" },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     label: "Category 2",
  //     children: [
  //       { label: "Subcategory 2.1" },
  //       {
  //         label: "Subcategory 2.2",
  //         children: [{ label: "Item 2.2.1" }],
  //       },
  //     ],
  //   },
  //   {
  //     label: "Category 3",
  //   },
  // ];
  
  const demoData = [
    {
      id: 1,
      name: "Category 1",
      value: "Value 1",
      status: "Active",
      date: "2024-12-03",
      children: [
        {
          id: 2,
          name: "Subcategory 1.1",
          value: "Value 1.1",
          status: "Inactive",
          date: "2024-11-20",
          children: [
            { id: 3, name: "Item 1.1.1", value: "Value 1.1.1", status: "Active", date: "2024-11-10" },
          ],
        },
        {
          id: 4,
          name: "Subcategory 1.2",
          value: "Value 1.2",
          status: "Active",
          date: "2024-10-30",
        },
      ],
    },
  ];
  const headerData = ['ID', 'Name', 'Value', 'Status', 'Date']
  
  

  return (
    <>
      <Table body={demoData} header={headerData} />
    </>
  )
}

export default App
