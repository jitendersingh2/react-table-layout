// @ts-nocheck
import React from 'react';
import ReactTable from "react-table";
// import moment from 'moment';
import "react-table/react-table.css";
import data from './DashboardMockData';

class Dashboard extends React.Component {
  authorFilter = ''
  speakerFilter = ''
  categoryFilter = ''
  regionFilter = ''
  locationFilter = ''
  statusFilter = ''
  render() {
    const columns = [
      {
        Header: "Title",
        accessor: "Title",
        Cell: (row: any) => row.value !== "" ? <span >{row.value}</span> : null,
        maxWidth: 200,
        className: 'center-text',
        filterMethod: (filter: any, row: any) => {
          return row["Title"].toLowerCase().includes(filter.value.toLowerCase())
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
          console.log('this.authorFilter- ', this.authorFilter);
          const filteredData = props.original.RegionSessions.primaryRegionalAuthor.map((val: any) => ({ primaryRegionalAuthor: val })).filter((val: any) => this.authorFilter == '' || val.primaryRegionalAuthor.toLowerCase().startsWith(this.authorFilter.toLowerCase()));
          return (
            <ReactTable
              data={filteredData}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "primaryRegionalAuthor"
              }]}
              showPagination={false}
              minRows={filteredData.length}
            />
          );
        },
        filterMethod: (filter: any, row: any) => {
          return row["RegionSessions.primaryRegionalAuthor"].some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()))
        },
        Filter: (row: any) => (
          <input 
            type="text" 
            style={{ width: "100%" }} 
            onChange={event => {
              this.authorFilter = event.target.value;
              row.onChange(event.target.value);
            }} 
          />)
      },
      {
        Header: "Assigned Speaker(s)",
        accessor: "RegionSessions.assignedSpeakers",
        className: "removeBorder",
        Cell: (props: any) => {
          const filteredData = props.original.RegionSessions.assignedSpeakers.map((val: any) => ({ assignedSpeakers: val.name })).filter((val: any) => this.speakerFilter == '' || val.assignedSpeakers.toLowerCase().startsWith(this.speakerFilter.toLowerCase()));
          return (
            <ReactTable
              data={filteredData}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "assignedSpeakers"
              }]}
              showPagination={false}
              minRows={filteredData.length}
            />
          );
        },
        filterMethod: (filter: any, row: any) => {
          return row["RegionSessions.assignedSpeakers"].map((val: any) => val.name).some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()))
        },
        Filter: (row: any) => (
          <input 
            type="text" 
            style={{ width: "100%" }} 
            onChange={event => {
              this.speakerFilter = event.target.value;
              row.onChange(event.target.value);
            }} 
          />)
      },
      {
        Header: "Category",
        accessor: "RegionSessions.category",
        className: "removeBorder",
        Cell: (props: any) => {
          const filteredData = props.original.RegionSessions.category.map((val: any) => ({ category: val.name })).filter((val: any) => this.categoryFilter == '' || this.categoryFilter == 'all' || val.category.toLowerCase().startsWith(this.categoryFilter.toLowerCase()));
          return (
            <ReactTable
              data={filteredData}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "category"
              }]}
              showPagination={false}
              minRows={filteredData.length}
            />
          );
        },
        filterMethod: (filter: any, row: any) => {
          if (filter.value == "all") {
            return true;
          }
          return row["RegionSessions.category"].map((val: any) => val.name).some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()))
        },
        Filter: (row: any) => {
          return (
            <select
              onChange={event => {
                this.categoryFilter = event.target.value;
                row.onChange(event.target.value);
              }}
              style={{ width: "100%" }}
              value={row.filter ? row.filter.value : "all"}
            > 
              <option value="all">Show All</option>
              {data
                .map((item: any) => item.RegionSessions.category.map((val: any) => val.name))
                .flat()     
                .filter((item, i, s) => s.lastIndexOf(item) == i)
                .map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                ))}
            </select>
          );
        }
      },
      {
        Header: "Region",
        accessor: "RegionSessions.region",
        className: "removeBorder",
        Cell: (props: any) => {
          const filteredData = props.original.RegionSessions.region.map((val: any) => ({ region: val.name })).filter((val: any) => this.regionFilter == '' || val.region.toLowerCase().startsWith(this.regionFilter.toLowerCase()));
          return (
            <ReactTable
              data={filteredData}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "region"
              }]}
              showPagination={false}
              minRows={filteredData.length}
            />
          );
        },
        filterMethod: (filter: any, row: any) => {
          return row["RegionSessions.region"].map((val: any) => val.name).some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()))
        },
        Filter: (row: any) => (
          <input 
            type="text" 
            style={{ width: "100%" }} 
            onChange={event => {
              this.regionFilter = event.target.value;
              row.onChange(event.target.value);
            }} 
          />)
      },
      {
        Header: "Location",
        accessor: "RegionSessions.location",
        className: "removeBorder",
        Cell: (props: any) => {
          const filteredData = props.original.RegionSessions.location.map((val: any) => ({ location: val.name })).filter((val: any) => this.locationFilter == '' || val.location.toLowerCase().startsWith(this.locationFilter.toLowerCase()));
          return (
            <ReactTable
              data={filteredData}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "location"
              }]}
              showPagination={false}
              minRows={filteredData.length}
            />
          );
        },
        filterMethod: (filter: any, row: any) => {
          return row["RegionSessions.location"].map((val: any) => val.name).some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()))
        },
        Filter: (row: any) => (
          <input 
            type="text" 
            style={{ width: "100%" }} 
            onChange={event => {
              this.locationFilter = event.target.value;
              row.onChange(event.target.value);
            }} 
          />)
      },
      {
        Header: "Status",
        accessor: "RegionSessions.status",
        className: "removeBorder",
        Cell: (props: any) => {
          const filteredData = props.original.RegionSessions.status.map((val: any) => ({ status: val.value })).filter((val: any) => this.statusFilter == '' || val.status.toLowerCase().startsWith(this.statusFilter.toLowerCase()));
          return (
            <ReactTable
              data={filteredData}
              columns={[{
                headerClassName: "auth-role-header",
                accessor: "status",
                Cell: (row: any) => row.value !== "" ? row.original.status : null
              }]}
              showPagination={false}
              minRows={filteredData.length}
            />
          );
        },
        filterMethod: (filter: any, row: any) => {
          return row["RegionSessions.status"].map((val: any) => val.value).some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()))
        },
        Filter: (row: any) => (
          <input 
            type="text" 
            style={{ width: "100%" }} 
            onChange={event => {
              this.statusFilter = event.target.value;
              row.onChange(event.target.value);
            }} 
          />)
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
    console.log('data: ', data);
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
