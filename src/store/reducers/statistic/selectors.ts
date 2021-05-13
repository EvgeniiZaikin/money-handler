import { TReducersState } from 'utils/types';

export const getLoadingProgress = (state: TReducersState) => state.statistic.progress;
export const getIsShowingProgress = (state: TReducersState) => state.statistic.showProgress;
export const getExplanation = (state: TReducersState) => state.statistic.explanation;
