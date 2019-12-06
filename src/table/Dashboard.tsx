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
  filterData = (data: any) => {
    if (this.authorFilter) {
      return data.primaryRegionalAuthor
        .map((val: any) => val.name)
        .some((val: any) => val.toLowerCase().startsWith(this.authorFilter.toLowerCase()));
    } else if (this.speakerFilter) {
      return data.assignedSpeakers
        .map((val: any) => val.name)
        .some((val: any) => val.toLowerCase().startsWith(this.speakerFilter.toLowerCase()));
    } else if (this.categoryFilter) {
      if (this.categoryFilter === 'all') return true;
      return data.category.name.toLowerCase().startsWith(this.categoryFilter.toLowerCase());
    } else if (this.regionFilter) {
      return data.region.name.toLowerCase().startsWith(this.regionFilter.toLowerCase());
    } else if (this.locationFilter) {
      return data.location.name.toLowerCase().startsWith(this.locationFilter.toLowerCase());
    } else if (this.statusFilter) {
      return data.status.value.toLowerCase().startsWith(this.statusFilter.toLowerCase());
    }

    return data;
  }
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
          const filteredData = props.row._original.RegionSessions
            .filter(this.filterData)
            .map((session: any) => session.primaryRegionalAuthor.map((val: any) => val.name))
            .map((val: any) => ({ primaryRegionalAuthor: val.join(', ') }));
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
          return row._original.RegionSessions.some((val: any) => val.primaryRegionalAuthor
              .map((val: any) => val.name)
              .some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase())))
        },
        Filter: (row: any) => (
          <input 
            type="text" 
            style={{ width: "100%" }} 
            onChange={event => {
              this.authorFilter = event.target.value;
              row.onChange(event.target.value, row);
            }} 
          />)
      },
      {
        Header: "Assigned Speaker(s)",
        accessor: "RegionSessions.assignedSpeakers",
        className: "removeBorder",
        Cell: (props: any) => {
          const filteredData = props.original.RegionSessions
            .filter(this.filterData)
            .map((session: any) => session.assignedSpeakers.map((val: any) => val.name))
            .map((val: any) => ({ assignedSpeakers: val.join(', ') }));
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
          return row._original.RegionSessions.some((val: any) => val.assignedSpeakers
              .map((val: any) => val.name)
              .some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase())));
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
          const filteredData = props.original.RegionSessions
            .filter(this.filterData)
            .map((val: any) => ({ category: val.category.name }));
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
          return row._original.RegionSessions.map((val: any) => val.category.name)
              .some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()));
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
                .map((item: any) => item.RegionSessions.map((val: any) => val.category.name))
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
          const filteredData = props.original.RegionSessions
            .filter(this.filterData)
            .map((val: any) => ({ region: val.region.name }));
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
          return row._original.RegionSessions.map((val: any) => val.region.name)
              .some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()));
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
          const filteredData = props.original.RegionSessions
            .filter(this.filterData)
            .map((val: any) => ({ location: val.location.name }));
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
          return row._original.RegionSessions.map((val: any) => val.location.name)
              .some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()));
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
          const filteredData = props.original.RegionSessions
            .filter(this.filterData)
            .map((val: any) => ({ status: val.status.value }));
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
          return row._original.RegionSessions.map((val: any) => val.status.value)
              .some((val: any) => val.toLowerCase().startsWith(filter.value.toLowerCase()));
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
          const filteredData = props.original.RegionSessions
            .filter(this.filterData)
            .map((val: any) => ({ status: val.status.value }));
          return (
            <ReactTable
              data={filteredData}
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
              minRows={filteredData.length}
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
