import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IDynamicState, TDynamicReducers } from 'store/reducers/dynamic/types';
import { TReducersState } from 'utils/types';

const initialState: IDynamicState = {
  explanation: '',
  loading: false,
  pieChartData: [],
  progressValue: 0,
};

const hydrate = createAction<TReducersState>(HYDRATE);

const dynamicSlice = createSlice<IDynamicState, TDynamicReducers>({
  name: 'dynamic',
  initialState,
  reducers: {
    getDynamicData: () => {},
    setExplanation: (state, { payload }) => {
      state.explanation = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setPieChartData: (state, { payload }) => {
      state.pieChartData = payload;
    },
    setProgressValue: (state, { payload }) => {
      state.progressValue = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...action.payload.dynamic,
        ...state,
      };
    });
  },
});

const { actions, reducer } = dynamicSlice;

export const { getDynamicData, setExplanation, setLoading, setPieChartData, setProgressValue } = actions;
export default reducer;
