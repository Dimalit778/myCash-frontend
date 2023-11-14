// Get Filtered By Month List of Incomes or Expenses

import { numberFormat } from './numberFormat';

// RETURN the SUM amount of the list
export const calculateTotal = (list) => {
  let total = 0;
  list.forEach((e) => {
    total += e.amount;
  });
  return numberFormat(total);
};
