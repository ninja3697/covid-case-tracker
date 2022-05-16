import React, { useEffect, useReducer } from "react";

import CardList from "../../components/cardList/cardList.component";
import DataTable from "../../components/dataTable/dataTable.component";
import CustomSpinner from "../../components/spinner/spinner.component";
import { TABLE_COLUMNS } from "../../constants/app.constants";
import DataService from "../../services/data.services";
import mergeStatReducer from "../../utils/mergeStateReducer";

const initialState = {
  totalRecords: {
    isLoading: true,
    lastUpdatedTime: null,
    records: [],
  },
  stateRecords: {
    isLoading: true,
    lastUpdatedTime: null,
    records: [],
  },
};

const DashboardView = () => {
  const [state, setState] = useReducer(mergeStatReducer, initialState);
  const { totalRecords, stateRecords } = state;

  useEffect(() => {
    fetchTotalRecords();
    fetchStateRecords();
  }, []);

  const fetchTotalRecords = () => {
    DataService.getTotalRecords().then((data) => {
      setState({ totalRecords: { ...data, isLoading: false } });
    });
  };

  const fetchStateRecords = () => {
    DataService.getStateRecords().then((data) => {
      setState({ stateRecords: { ...data, isLoading: false } });
    });
  };

  if (totalRecords.isLoading || stateRecords.isLoading)
    return <CustomSpinner />;

  return (
    <div className="dashboard_view">
      <CardList
        dataList={totalRecords.records}
        lastUpdatedTime={totalRecords.lastUpdatedTime}
      />
      <DataTable
        title="State Wise Data"
        columns={TABLE_COLUMNS}
        data={stateRecords.records}
      />
    </div>
  );
};

export default DashboardView;
