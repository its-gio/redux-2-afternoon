import axios from 'axios';

const initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false
}

export const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA';

export function requestBudgetData() {
  const data = axios.get('/api/budget-data').then(res => res.data);

  return {
    type: REQUEST_BUDGET_DATA,
    payload: data
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${REQUEST_BUDGET_DATA}_FULFILLED`:
      const { purchases, budgetLimit } = action.payload;
      
      return {
        ...state,
        purchases,
        budgetLimit,
        loading: false
      }
    case `${REQUEST_BUDGET_DATA}_PENDING`:
      return {
        ...state,
        loading: true
      }
    default: return state;
  }
}