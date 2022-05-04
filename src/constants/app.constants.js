export const EMOTIONS = {
  SUCCESS: 1,
  FAILURE: -1,
};

export const TABLE_COLUMNS = [
  {
    id: "state",
    Header: "State/UT",
    accessor: "name",
  },
  {
    id: "active",
    Header: "Active Cases",
    accessor: "active",
  },
  {
    id: "discharged",
    Header: "Recovered",
    accessor: "discharged",
  },
  {
    id: "deaths",
    Header: "Deaths",
    accessor: "deaths",
  },
];
