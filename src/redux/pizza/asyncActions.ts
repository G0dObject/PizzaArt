import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import identity from 'lodash/identity';
import pickBy from 'lodash/pickBy';
import { Pizza, SearchPizzaParams } from './types';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    console.log(params);
    const { data } = await axios.get<Pizza[]>(process.env.REACT_APP_BASE_API_URL+"Menu/items", {
      params: pickBy(
        {
          page: currentPage,
          limit: 4,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });
    return data;
  },
);
