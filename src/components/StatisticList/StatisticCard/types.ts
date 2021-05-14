import { TExpense } from 'utils/types';

export interface IStatisticCardProps {
  title: string;
  sum: number;
  image: string;
  expenses: TExpense[];
}
