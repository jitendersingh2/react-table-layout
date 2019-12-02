// @ts-nocheck
import React from 'react';
import ReactTable from "react-table";
// import moment from 'moment';
import "react-table/react-table.css";
import data from './mockData';
import "./EventTable.css";

class EventTable extends React.Component {
  getColumns(rowsMap: any) {
    return [
      {
        Header: "Title",
        accessor: "Title",
        Cell: (props: any) => props.value !== "" ? <span>{props.value}</span> : null,
        maxWidth: 200,
        className: 'title-cell'
      },
      {
        Header: "My Roles",
        accessor: "AuthorRole",
        Cell: (props: any) => {
          console.log("rowmap- ", rowsMap, props);
          return (
            <ReactTable
              data={rowsMap[props.original.Title].map((val: any) => ({AuthorRole: val.AuthorRole}))}
              columns={[{
                  Header: "",
                  headerClassName: "auth-role-header",
                  accessor: "AuthorRole"
              }]}
              showPagination={false}
              minRows={rowsMap[props.original.Title].length}
            />
          );
        }
      },
      {
        Header: "Session Category",
        accessor: "SessionCategory",
        Cell: (props: any) => {
          console.log("rowmap- ", rowsMap, props);
          return (
            <ReactTable
              data={rowsMap[props.original.Title].map((val: any) => ({SessionCategory: val.SessionCategory}))}
              columns={[{
                  Header: "",
                  headerClassName: "auth-role-header",
                  accessor: "SessionCategory"
              }]}
              showPagination={false}
              minRows={rowsMap[props.original.Title].length}
            />
          );
        }
      },
      // {
      //   Header: "Status",
      //   accessor: "StatusText",
      //   id: "status"
      // },
      // {
      //   Header: "Session Category",
      //   accessor: "SessionCategory",
      //   id: "SessionCategory"
      // },
      // {
      //   Header: "Association",
      //   accessor: "Relationship"
      // },
      // {
      //   Header: "Due to Editing",
      //   accessor: "DueToEditingDate",
      //   Cell: (props: any) => (props.value && props.value != 'NULL' ? moment.unix(props.value.substr(6, 10)).format('DD MMM YYYY') : '')
      // },
      // {
      //   Header: "Conference",
      //   accessor: "ConferenceName",
      //   width: 300
      // },
      // {
      //   Header: "Conference Series",
      //   accessor: "ConferenceSeries"
      // },
      // {
      //   Header: "Conference Region",
      //   accessor: "Region"
      // },
      // {
      //   Header: "Conference Start Date",
      //   id: 'date',
      //   accessor: "ConferenceStartDate",
      //   Cell: (props: any) => (props.value ? moment.unix(props.value.substr(6, 10)).format('DD MMM YYYY') : '')
      // },
      // {
      //   Header: "High Demand Presentation Library",
      //   accessor: "Series"
      // }
    ];
  }

  defaultExpandedRows = () => data.map(_ => true);

  getRowsByTitle = (data: any) => {
    const result: any = {};
    data.forEach((row: any, idx: number, A: Array<any>) => {
      if (!result[row.Title]) {
        result[row.Title] = [];
      }
      result[row.Title].push(row);
    });

    return result;
  }

  getRowsCountByTitle = (data: any) => {
    const result: any = {};
    data.forEach((row: any, idx: number, A: Array<any>) => {
      result[row.Title] =+ (result[row.Title] || 0) + 1;
    });

    return result;
  }

  groupData = (data: any) => {
    const titlesMap = this.getRowsCountByTitle(data);
    const valueIndexes: any = [];
    data.forEach((row: any, idx: number) => {
      if (titlesMap[row.Title]) {
        valueIndexes.push(idx + Math.floor(titlesMap[row.Title] / 2)); 
        titlesMap[row.Title] = null;
      }
    });

    return data.map((row: any, idx: number) => {
      if (valueIndexes.indexOf(idx) === -1) {
        row.Title = "";
      }

      return row;
    });
  }

  render() {
    return (
      <div>
        <ReactTable
          data={Object.keys(this.getRowsByTitle(data)).map((val: any) => ({ Title: val }))}
          columns={this.getColumns(this.getRowsByTitle(data))}
          defaultPageSize={20}
          defaultExpanded={this.defaultExpandedRows()}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default EventTable;
