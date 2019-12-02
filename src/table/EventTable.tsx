// @ts-nocheck
import React from 'react';
import ReactTable from "react-table";
import moment from 'moment';
import "react-table/react-table.css";

const data = [
  {
    "Id": 1393241,
    "Title": "Testing ES Picker Duplicates",
    "ItemTypeId": 4,
    "AuthorRole": "Primary Owner",
    "Role": null,
    "Status": 3,
    "StatusText": "Pending Final Approval",
    "StatusTextWithDeclinedInformation": "Pending Final Approval",
    "SessionCategory": "Clinic",
    "Series": "",
    "EventId": 10569,
    "EventSeries": "CIO Leadership Forum 2020 Series",
    "EventName": "Gartner CIO Leadership Forum",
    "Region": "North America",
    "EventStartDate": "\/Date(1582434000000)\/",
    "EventEndDate": "\/Date(1582693140000)\/",
    "EventDateRange": "23 - 25 Feb 2020",
    "TrackName": null,
    "DueToEditingDate": null,
    "DueToCommitDate": null,
    "IsMigrated": false,
    "IsDeclined": false,
    "IsDeleted": false,
    "Relationship": "Original",
    "ParentId": null,
    "GartnerSpeakers": null,
    "ExternalSpeakers": null,
    "ParentItemStatusType": null,
    "SeriesEventId": 31
  },
  {
    "Id": 1393241,
    "Title": "Testing ES Picker Duplicates",
    "ItemTypeId": 4,
    "AuthorRole": "Primary Owner",
    "Role": null,
    "Status": 1,
    "StatusText": "Submitted for Approval",
    "StatusTextWithDeclinedInformation": "Submitted for Approval",
    "SessionCategory": "Clinic",
    "Series": "",
    "EventId": 10668,
    "EventSeries": "CIO Leadership Forum 2020 Series",
    "EventName": "CIO Leadership Forum (UK)",
    "Region": "Europe",
    "EventStartDate": "\/Date(1584331200000)\/",
    "EventEndDate": "\/Date(1584590340000)\/",
    "EventDateRange": "16 - 18 Mar 2020",
    "TrackName": null,
    "DueToEditingDate": null,
    "DueToCommitDate": null,
    "IsMigrated": false,
    "IsDeclined": false,
    "IsDeleted": false,
    "Relationship": "Original",
    "ParentId": null,
    "GartnerSpeakers": null,
    "ExternalSpeakers": null,
    "ParentItemStatusType": null,
    "SeriesEventId": 31
  },
  {
    "Id": 1393241,
    "Title": "Testing ES Picker Duplicates",
    "ItemTypeId": 4,
    "AuthorRole": "Primary Owner",
    "Role": null,
    "Status": 1,
    "StatusText": "Submitted for Approval",
    "StatusTextWithDeclinedInformation": "Submitted for Approval",
    "SessionCategory": "Clinic",
    "Series": "",
    "EventId": 10667,
    "EventSeries": "CIO Leadership Forum 2020 Series",
    "EventName": "CIO Leadership Forum (Netherlands)",
    "Region": "Europe",
    "EventStartDate": "\/Date(1583125200000)\/",
    "EventEndDate": "\/Date(1583384340000)\/",
    "EventDateRange": "02 - 04 Mar 2020",
    "TrackName": null,
    "DueToEditingDate": null,
    "DueToCommitDate": null,
    "IsMigrated": false,
    "IsDeclined": false,
    "IsDeleted": false,
    "Relationship": "Original",
    "ParentId": null,
    "GartnerSpeakers": null,
    "ExternalSpeakers": null,
    "ParentItemStatusType": null,
    "SeriesEventId": 31
  },
  {
    "Id": 1393038,
    "Title": "test",
    "ItemTypeId": 3,
    "AuthorRole": "Primary Owner",
    "Role": null,
    "Status": 0,
    "StatusText": "Idea",
    "StatusTextWithDeclinedInformation": "Idea",
    "SessionCategory": "Clinic",
    "Series": "",
    "EventId": null,
    "EventSeries": "Marketing Symposium 2020 Series",
    "EventName": "High-Leverage",
    "Region": null,
    "EventStartDate": null,
    "EventEndDate": null,
    "EventDateRange": "",
    "TrackName": null,
    "DueToEditingDate": "\/Date(1573621200000)\/",
    "DueToCommitDate": null,
    "IsMigrated": false,
    "IsDeclined": false,
    "IsDeleted": false,
    "Relationship": "Original",
    "ParentId": null,
    "GartnerSpeakers": null,
    "ExternalSpeakers": null,
    "ParentItemStatusType": null,
    "SeriesEventId": 0
  },
  {
    "Id": 1393037,
    "Title": "test",
    "ItemTypeId": 4,
    "AuthorRole": "Primary Owner",
    "Role": null,
    "Status": 0,
    "StatusText": "Idea",
    "StatusTextWithDeclinedInformation": "Idea",
    "SessionCategory": "Keynote",
    "Series": "",
    "EventId": 10643,
    "EventSeries": "Marketing Symposium 2020 Series",
    "EventName": "Gartner Marketing Symposium/Xpo",
    "Region": "North America",
    "EventStartDate": "\/Date(1590984000000)\/",
    "EventEndDate": "\/Date(1591243140000)\/",
    "EventDateRange": "01 - 03 Jun 2020",
    "TrackName": null,
    "DueToEditingDate": null,
    "DueToCommitDate": null,
    "IsMigrated": false,
    "IsDeclined": false,
    "IsDeleted": false,
    "Relationship": "Original",
    "ParentId": null,
    "GartnerSpeakers": null,
    "ExternalSpeakers": null,
    "ParentItemStatusType": null,
    "SeriesEventId": 40
  },
  {
    "Id": 1392661,
    "Title": "Test Item",
    "ItemTypeId": 4,
    "AuthorRole": "Primary Owner, Speaker",
    "Role": null,
    "Status": 1,
    "StatusText": "Submitted for Approval",
    "StatusTextWithDeclinedInformation": "Submitted for Approval",
    "SessionCategory": "Breakout",
    "Series": "",
    "EventId": 10598,
    "EventSeries": "Customer Experience Series 2020",
    "EventName": "Gartner Customer Experience \u0026 Technologies Summit",
    "Region": "Asia-Pacific",
    "EventStartDate": "\/Date(1581570000000)\/",
    "EventEndDate": "\/Date(1581742740000)\/",
    "EventDateRange": "13 - 14 Feb 2020",
    "TrackName": null,
    "DueToEditingDate": null,
    "DueToCommitDate": null,
    "IsMigrated": false,
    "IsDeclined": false,
    "IsDeleted": false,
    "Relationship": "Original",
    "ParentId": null,
    "GartnerSpeakers": null,
    "ExternalSpeakers": null,
    "ParentItemStatusType": null,
    "SeriesEventId": 13
  },
  {
    "Id": 1392649,
    "Title": "mike series",
    "ItemTypeId": 4,
    "AuthorRole": "Primary Owner",
    "Role": null,
    "Status": 3,
    "StatusText": "Pending Final Approval",
    "StatusTextWithDeclinedInformation": "Pending Final Approval",
    "SessionCategory": "Other",
    "Series": "",
    "EventId": 10569,
    "EventSeries": "CIO Leadership Forum 2020 Series",
    "EventName": "Gartner CIO Leadership Forum",
    "Region": "North America",
    "EventStartDate": "\/Date(1582434000000)\/",
    "EventEndDate": "\/Date(1582693140000)\/",
    "EventDateRange": "23 - 25 Feb 2020",
    "TrackName": null,
    "DueToEditingDate": null,
    "DueToCommitDate": null,
    "IsMigrated": false,
    "IsDeclined": false,
    "IsDeleted": false,
    "Relationship": "Original",
    "ParentId": null,
    "GartnerSpeakers": null,
    "ExternalSpeakers": null,
    "ParentItemStatusType": null,
    "SeriesEventId": 31
  },
  {
    "Id": 1392649,
    "Title": "mike series",
    "ItemTypeId": 4,
    "AuthorRole": "Primary Owner",
    "Role": null,
    "Status": 1,
    "StatusText": "Submitted for Approval",
    "StatusTextWithDeclinedInformation": "Submitted for Approval",
    "SessionCategory": "Breakout",
    "Series": "",
    "EventId": 10668,
    "EventSeries": "CIO Leadership Forum 2020 Series",
    "EventName": "CIO Leadership Forum (UK)",
    "Region": "Europe",
    "EventStartDate": "\/Date(1584331200000)\/",
    "EventEndDate": "\/Date(1584590340000)\/",
    "EventDateRange": "16 - 18 Mar 2020",
    "TrackName": null,
    "DueToEditingDate": null,
    "DueToCommitDate": null,
    "IsMigrated": false,
    "IsDeclined": false,
    "IsDeleted": false,
    "Relationship": "Original",
    "ParentId": null,
    "GartnerSpeakers": null,
    "ExternalSpeakers": null,
    "ParentItemStatusType": null,
    "SeriesEventId": 31
  },
  {
    "Id": 1392649,
    "Title": "mike series",
    "ItemTypeId": 4,
    "AuthorRole": "Primary Owner",
    "Role": null,
    "Status": 1,
    "StatusText": "Submitted for Approval",
    "StatusTextWithDeclinedInformation": "Submitted for Approval",
    "SessionCategory": "Breakout",
    "Series": "",
    "EventId": 10667,
    "EventSeries": "CIO Leadership Forum 2020 Series",
    "EventName": "CIO Leadership Forum (Netherlands)",
    "Region": "Europe",
    "EventStartDate": "\/Date(1583125200000)\/",
    "EventEndDate": "\/Date(1583384340000)\/",
    "EventDateRange": "02 - 04 Mar 2020",
    "TrackName": null,
    "DueToEditingDate": null,
    "DueToCommitDate": null,
    "IsMigrated": false,
    "IsDeclined": false,
    "IsDeleted": false,
    "Relationship": "Original",
    "ParentId": null,
    "GartnerSpeakers": null,
    "ExternalSpeakers": null,
    "ParentItemStatusType": null,
    "SeriesEventId": 31
  },
  {
    "Id": 1392648,
    "Title": "Sampe Global Event",
    "ItemTypeId": 4,
    "AuthorRole": "Primary Owner, Speaker",
    "Role": null,
    "Status": 1,
    "StatusText": "Submitted for Approval",
    "StatusTextWithDeclinedInformation": "Submitted for Approval",
    "SessionCategory": "Breakout",
    "Series": "",
    "EventId": 10602,
    "EventSeries": "Data & Analytics 2020 Series",
    "EventName": "Gartner Customer Experience \u0026 Technologies Summit",
    "Region": "Europe",
    "EventStartDate": "\/Date(1591588800000)\/",
    "EventEndDate": "\/Date(1591761540000)\/",
    "EventDateRange": "08 - 09 Jun 2020",
    "TrackName": null,
    "DueToEditingDate": null,
    "DueToCommitDate": null,
    "IsMigrated": false,
    "IsDeclined": false,
    "IsDeleted": false,
    "Relationship": "Original",
    "ParentId": null,
    "GartnerSpeakers": null,
    "ExternalSpeakers": null,
    "ParentItemStatusType": null,
    "SeriesEventId": 13
  },
  {
    "Id": 1392648,
    "Title": "Sampe Global Event",
    "ItemTypeId": 1,
    "AuthorRole": "Primary Author, Speaker",
    "Role": null,
    "Status": 0,
    "StatusText": "Idea",
    "StatusTextWithDeclinedInformation": "Idea",
    "SessionCategory": "Keynote",
    "Series": "",
    "EventId": null,
    "EventSeries": "Data & Analytics 2020 Series",
    "EventName": "",
    "Region": null,
    "EventStartDate": null,
    "EventEndDate": null,
    "EventDateRange": "",
    "TrackName": null,
    "DueToEditingDate": "\/Date(1571803200000)\/",
    "DueToCommitDate": null,
    "IsMigrated": false,
    "IsDeclined": false,
    "IsDeleted": false,
    "Relationship": "Original",
    "ParentId": null,
    "GartnerSpeakers": null,
    "ExternalSpeakers": null,
    "ParentItemStatusType": null,
    "SeriesEventId": 0
  },
  {
    "Id": 1392661,
    "Title": "Sampe Global Event1",
    "ItemTypeId": 4,
    "AuthorRole": "Primary Owner, Speaker",
    "Role": null,
    "Status": 1,
    "StatusText": "Submitted for Approval",
    "StatusTextWithDeclinedInformation": "Submitted for Approval",
    "SessionCategory": "Breakout",
    "Series": "",
    "EventId": 10604,
    "EventSeries": "Data & Analytics 2020 Series",
    "EventName": "Gartner Customer Experience \u0026 Technologies Summit",
    "Region": "Asia-Pacific",
    "EventStartDate": "\/Date(1592366400000)\/",
    "EventEndDate": "\/Date(1592539140000)\/",
    "EventDateRange": "17 - 18 Jun 2020",
    "TrackName": null,
    "DueToEditingDate": null,
    "DueToCommitDate": null,
    "IsMigrated": false,
    "IsDeclined": false,
    "IsDeleted": false,
    "Relationship": "Original",
    "ParentId": null,
    "GartnerSpeakers": null,
    "ExternalSpeakers": null,
    "ParentItemStatusType": null,
    "SeriesEventId": 13
  }
];

class EventTable extends React.Component {
  getColumns() {
    return [
      {
        Header: "Title",
        accessor: "Title",
        Cell: (props: any) => <span>{props.value}</span>,
        maxWidth: 200
      },
      {
        Header: "My Roles",
        accessor: "AuthorRole"
      },
      {
        Header: "Status",
        accessor: "StatusText",
        id: "status"
      },
      {
        Header: "Session Category",
        accessor: "SessionCategory",
        id: "SessionCategory"
      },
      {
        Header: "Association",
        accessor: "Relationship"
      },
      {
        Header: "Due to Editing",
        accessor: "DueToEditingDate",
        Cell: (props: any) => (props.value && props.value != 'NULL' ? moment.unix(props.value.substr(6, 10)).format('DD MMM YYYY') : '')
      },
      {
        Header: "Conference",
        accessor: "ConferenceName",
        width: 300
      },
      {
        Header: "Conference Series",
        accessor: "ConferenceSeries"
      },
      {
        Header: "Conference Region",
        accessor: "Region"
      },
      {
        Header: "Conference Start Date",
        id: 'date',
        accessor: "ConferenceStartDate",
        Cell: (props: any) => (props.value ? moment.unix(props.value.substr(6, 10)).format('DD MMM YYYY') : '')
      },
      {
        Header: "High Demand Presentation Library",
        accessor: "Series"
      }
    ];
  }

  defaultExpandedRows = () => data.map(_ => true);

  render() {
    return (
      <div>
        <ReactTable
          data={data}
          columns={this.getColumns()}
          defaultPageSize={10}
          defaultExpanded={this.defaultExpandedRows()}
          className="-striped -highlight"
          pivotBy={["Title"]}
        />
      </div>
    );
  }
}

export default EventTable;
