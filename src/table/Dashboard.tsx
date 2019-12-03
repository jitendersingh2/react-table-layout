// @ts-nocheck
import React from 'react';
import ReactTable from "react-table";
// import moment from 'moment';
import "react-table/react-table.css";
import data from './DashboardMockData';

class Dashboard extends React.Component {
  render() {
    const columns = [
      {
        Header: "Title",
        accessor: "Title",
        Cell: (row: any) => row.value !== "" ? <span >{row.value}</span> : null,
        maxWidth: 200,
        className: 'center-text',
        filterMethod: (filter: any, row: any) => {
          return row["Title"].toLowerCase().startsWith(filter.value.toLowerCase())
        },
      },
      {
        Header: "Description",
        accessor: "Description",
        Cell: (props: any) => props.value !== "" ? <span>{props.value}</span> : null,
        maxWidth: 200,
        className: 'center-text',
        filterMethod: (filter: any, row: any) => {
          return row["Description"].toLowerCase().startsWith(filter.value.toLowerCase())
        },
      },
      {
        Header: "Session Doc Code",
        accessor: "Id",
        Cell: (props: any) => props.value !== "" ? <span>{props.value}</span> : null,
        className: 'center-text'
      },
      {
        Header: "Primary Regional Author",
        accessor: "RegionSessions.primaryRegionalAuthor",
        className: "removeBorder",
        Cell: (props: any) => {
          return (
            <ReactTable
              data={props.original.RegionSessions.primaryRegionalAuthor.map((val: any) => ({ primaryRegionalAuthor: val }))}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "primaryRegionalAuthor"
              }]}
              showPagination={false}
              minRows={props.original.RegionSessions.primaryRegionalAuthor.length}
            />
          );
        },
        filterMethod: (filter: any, row: any) => {
          return row["RegionSessions.primaryRegionalAuthor"].some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()))
        }
      },
      {
        Header: "Assigned Speaker(s)",
        accessor: "RegionSessions.assignedSpeakers",
        className: "removeBorder",
        Cell: (props: any) => {
          return (
            <ReactTable
              data={props.original.RegionSessions.assignedSpeakers.map((val: any) => ({ assignedSpeakers: val.name }))}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "assignedSpeakers"
              }]}
              showPagination={false}
              minRows={props.original.RegionSessions.assignedSpeakers.length}
            />
          );
        },
        filterMethod: (filter: any, row: any) => {
          return row["RegionSessions.assignedSpeakers"].map((val: any) => val.name).some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()))
        }
      },
      {
        Header: "Category",
        accessor: "RegionSessions.category",
        className: "removeBorder",
        Cell: (props: any) => {
          return (
            <ReactTable
              data={props.original.RegionSessions.category.map((val: any) => ({ category: val.name }))}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "category"
              }]}
              showPagination={false}
              minRows={props.original.RegionSessions.category.length}
            />
          );
        },
        filterMethod: (filter: any, row: any) => {
          return row["RegionSessions.category"].map((val: any) => val.name).some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()))
        }
      },
      {
        Header: "Region",
        accessor: "RegionSessions.region",
        className: "removeBorder",
        Cell: (props: any) => {
          return (
            <ReactTable
              data={props.original.RegionSessions.region.map((val: any) => ({ region: val.name }))}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "region"
              }]}
              showPagination={false}
              minRows={props.original.RegionSessions.primaryRegionalAuthor.length}
            />
          );
        },
        filterMethod: (filter: any, row: any) => {
          return row["RegionSessions.region"].map((val: any) => val.name).some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()))
        }
      },
      {
        Header: "Location",
        accessor: "RegionSessions.location",
        className: "removeBorder",
        Cell: (props: any) => {
          return (
            <ReactTable
              data={props.original.RegionSessions.location.map((val: any) => ({ location: val.name }))}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "location"
              }]}
              showPagination={false}
              minRows={props.original.RegionSessions.location.length}
            />
          );
        },
        filterMethod: (filter: any, row: any) => {
          return row["RegionSessions.location"].map((val: any) => val.name).some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()))
        }
      },
      {
        Header: "Status",
        accessor: "RegionSessions.status",
        className: "removeBorder",
        Cell: (props: any) => {
          return (
            <ReactTable
              data={props.original.RegionSessions.status.map((val: any) => ({ status: val.value }))}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "status",
                Cell: (row: any) => row.value !== "" ? row.original.status : null
              }]}
              showPagination={false}
              minRows={props.original.RegionSessions.status.length}
            />
          );
        },
        filterMethod: (filter: any, row: any) => {
          return row["RegionSessions.status"].map((val: any) => val.value).some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()))
        }
      },
      {
        Header: "Action",
        accessor: "RegionSessions.status",
        className: "removeBorder",
        Cell: (props: any) => {
          return (
            <ReactTable
              data={props.original.RegionSessions.status.map((val: any) => ({ status: val.value }))}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "status",
                Cell: (row: any) => row.value !== "" ?
                  <div className="row">
                    <div className="col-md-6">
                      <button type="button" className="btn actionBtn considerBtn">Consider</button>
                    </div>
                    <div className="col-md-6">
                      <button type="button" className="btn btn-danger actionBtn">Decline</button>
                    </div>
                  </div> : null
              }]}
              showPagination={false}
              minRows={props.original.RegionSessions.status.length}
            />
          );
        }
      },
    ]
    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          filterable
          defaultPageSize={10}
          // defaultExpanded={this.defaultExpandedRows()}
          className="-striped -highlight home-grid"
          style={{ padding: "6px 0px !important", fontWeight: "700 !important", height: "81.5vh" }}
        />
      </div>
    );
  }
}

export default Dashboard;
