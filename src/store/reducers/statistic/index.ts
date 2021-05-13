import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IStatisticState, TStatisticReducers } from 'store/reducers/statistic/types';
import { TReducersState } from 'utils/types';

const initialState: IStatisticState = {
  list: [],
  progress: 0,
  showProgress: false,
  explanation: '',
};

const hydrate = createAction<TReducersState>(HYDRATE);

const statisticSlice = createSlice<IStatisticState, TStatisticReducers>({
  name: 'statistic',
  initialState,
  reducers: {
    getStatisticData: () => {},
    setStatisticList: (state, { payload }) => {
      state.list = payload;
    },
    setProgress: (state, { payload }) => {
      state.progress = payload;
    },
    setShowProgress: (state, { payload }) => {
      state.showProgress = payload;
    },
    setExplanation: (state, { payload }) => {
      state.explanation = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.statistic,
        showProgress: state.showProgress,
      };
    });
  },
});

const { actions, reducer } = statisticSlice;

export const { getStatisticData, setStatisticList, setProgress, setShowProgress, setExplanation } = actions;
export default reducer;
