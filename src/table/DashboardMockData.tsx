const data = [
  {
    "Id": 1393241,
    "Title": "Testing ES Picker Duplicates",
    "Description": "Testing description",
    "RegionSessions":
      [
        {
          "id": 1,
          "primaryRegionalAuthor": [{ "id": 1, "name": "John" }, { "id": 2, "name": "Mike" }],
          "assignedSpeakers": [{ "id": 1, "name": "Abraham" }, { "id": 2, "name": "Donald" }],
          "category": { "id": 1, "name": "Keynote" },
          "region": { "id": 1, "name": "Europe" },
          "location": { "id": 1, "name": "London, UK" },
          "status": { "id": 4, "value": "Submitted for Approval" }
        },
        {
          "id": 2,
          "primaryRegionalAuthor": [{ "id": 1, "name": "John" }, { "id": 2, "name": "Mike" }],
          "assignedSpeakers": [{ "id": 1, "name": "Abraham" }, { "id": 2, "name": "Donald" }],
          "category": { "id": 2, "name": "Roundtable" },
          "region": { "id": 2, "name": "North America" },
          "location": { "id": 1, "name": "Grapevine, TX" },
          "status": { "id": 4, "value": "Submitted for Approval" }
        },
        {
          "id": 3,
          "primaryRegionalAuthor": [{ "id": 1, "name": "John" }, { "id": 2, "name": "Mike" }],
          "assignedSpeakers": [{ "id": 1, "name": "Abraham" }, { "id": 2, "name": "Donald" }, { "id": 3, "name": "Zahid" }],
          "category": { "id": 3, "name": "Clinic" },
          "region": { "id": 2, "name": "India" },
          "location": { "id": 1, "name": "Mumbai, MH" },
          "status": { "id": 4, "value": "Presentation Templating" }
        }
      ]
  },
  {
    "Id": 1393244,
    "Title": "Testing ES Picker Duplicates",
    "Description": "Testing description",
    "RegionSessions":
      [
        [
          {
            "id": 1,
            "primaryRegionalAuthor": [{ "id": 1, "name": "John" }, { "id": 2, "name": "Mike" }],
            "assignedSpeakers": [{ "id": 1, "name": "Abraham" }, { "id": 2, "name": "Donald" }],
            "category": { "id": 1, "name": "Keynote" },
            "region": { "id": 1, "name": "Europe" },
            "location": { "id": 1, "name": "London, UK" },
            "status": { "id": 4, "value": "Submitted for Approval" }
          },
          {
            "id": 2,
            "primaryRegionalAuthor": [{ "id": 1, "name": "John" }, { "id": 2, "name": "Mike" }],
            "assignedSpeakers": [{ "id": 1, "name": "Abraham" }, { "id": 2, "name": "Donald" }],
            "category": { "id": 2, "name": "Roundtable" },
            "region": { "id": 2, "name": "North America" },
            "location": { "id": 1, "name": "Grapevine, TX" },
            "status": { "id": 4, "value": "Submitted for Approval" }
          },
          {
            "id": 3,
            "primaryRegionalAuthor": [{ "id": 1, "name": "John" }, { "id": 2, "name": "Mike" }],
            "assignedSpeakers": [{ "id": 1, "name": "Abraham" }, { "id": 2, "name": "Donald" }, { "id": 3, "name": "Zahid" }],
            "category": { "id": 3, "name": "Clinic" },
            "region": { "id": 2, "name": "India" },
            "location": { "id": 1, "name": "Mumbai, MH" },
            "status": { "id": 4, "value": "Presentation Templating" }
          }
        ]
      ]
  },
  // {
  //   "Id": 1393241,
  //   "Title": "Testing ES Picker Duplicates",
  //   "Description": "Testing description",
  //   "RegionSessions": {
  //     "primaryRegionalAuthor": ["John", "Mike", "Sai"],
  //     "assignedSpeakers": [{ "id": 1, "name": "Abraham" }, { "id": 2, "name": "Donald" }, { "id": 3, "name": "Zahid" }],
  //     "category": [{ "id": "1", "name": "Keynote" }, { "id": 2, "name": "Roundtable" }, { "id": 3, "name": "Clinic" }],
  //     "region": [{ "id": 1, "name": "North America" }, { "id": 2, "name": "Europe" }, { "id": 2, "name": "India" }],
  //     "location": [{ "id": 1, "name": "London, UK" }, { "id": 1, "name": "Grapevine, TX" }, { "id": 1, "name": "Mumbai, MH" }],
  //     "status": [{ "id": 4, "value": "Submitted for Approval" }, { "id": 4, "value": "Submitted for Approval" }, { "id": 4, "value": "Presentation Templating" }]
  //   }
  // },
  // {
  //   "Id": 1393467,
  //   "Title": "Testing sample 2",
  //   "Description": "Testing description 2",
  //   "RegionSessions": {
  //     "primaryRegionalAuthor": ["John", "Mike"],
  //     "assignedSpeakers": [{ "id": 1, "name": "Abraham" }, { "id": 2, "name": "Donald" }],
  //     "category": [{ "id": "123", "name": "Keynote" }, { "id": "123", "name": "Roundtable" }],
  //     "region": [{ "id": 1, "name": "North America" }, { "id": 2, "name": "Europe" }],
  //     "location": [{ "id": 1, "name": "São Paulo, Brazil" }, { "id": 1, "name": "Tokyo, Japan" }],
  //     "status": [{ "id": 4, "value": "Submitted for Approval" }, { "id": 4, "value": "Submitted for Approval" }]
  //   }
  // },
  // {
  //   "Id": 1393754,
  //   "Title": "Testing sample 3",
  //   "Description": "Testing description 4",
  //   "RegionSessions": {
  //     "primaryRegionalAuthor": ["John", "Mike"],
  //     "assignedSpeakers": [{ "id": 1, "name": "Abraham" }, { "id": 2, "name": "Donald" }],
  //     "category": [{ "id": "123", "name": "Keynote" }, { "id": "123", "name": "Roundtable" }],
  //     "region": [{ "id": 1, "name": "North America" }, { "id": 2, "name": "Europe" }],
  //     "location": [{ "id": 1, "name": "Mumbai, India" }, { "id": 1, "name": "Mexico City, Mexico" }],
  //     "status": [{ "id": 4, "value": "Submitted for Approval" }, { "id": 4, "value": "Submitted for Approval" }]
  //   }
  // },
  // {
  //   "Id": 1393754,
  //   "Title": "Testing sample 3",
  //   "Description": "Testing description 4",
  //   "RegionSessions": {
  //     "primaryRegionalAuthor": ["Chandu", "Venkat"],
  //     "assignedSpeakers": [{ "id": 1, "name": "Abraham" }, { "id": 2, "name": "Donald" }],
  //     "category": [{ "id": "123", "name": "Clinic" }, { "id": "123", "name": "etc" }],
  //     "region": [{ "id": 1, "name": "North America" }, { "id": 2, "name": "Europe" }],
  //     "location": [{ "id": 1, "name": "Mumbai, India" }, { "id": 1, "name": "Mexico City, Mexico" }],
  //     "status": [{ "id": 4, "value": "Submitted for Approval" }, { "id": 4, "value": "Submitted for Approval" }]
  //   }
  // },
];

export default data;