import React, { useMemo } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
} from "react-table";

import "./dataTable.component.scss";

// Define a default UI for filtering
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <Form.Control
      value={value || ""}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      type="text"
      placeholder="Search..."
    />
  );
};

const DataTable = ({ title, columns, data }) => {
  const {
    state,
    headerGroups,
    rows,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: useMemo(
          () => [
            {
              id: columns[0].id,
              desc: false,
            },
          ],
          []
        ),
      },
    },
    useGlobalFilter,
    useSortBy
  );

  return (
    <div className="data_table">
      <Row className="title_row">
        <Col className="title" sm={12} md={3}>
          <h6>{title}</h6>
        </Col>
        <Col sm={12} md={9}>
          <GlobalFilter
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </Col>
      </Row>
      <Table {...getTableProps()} responsive striped bordered hover>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}{" "}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
