// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://watertracker-backand-codekartel.onrender.com';

<<<<<<< Updated upstream
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWZhOTc4NDRjZjc2NThiM2NhMTk0NyIsImlhdCI6MTcxMzM2NzI2NCwiZXhwIjoxNzEzNDUwMDY0fQ.7Sdhg_7kwQk2GFaSouyOl8JD2MJfHlGGR6sYConLLtQ';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const getMonthPercentage = async date => {
  const { data } = await axios.get(`water/month/?date=${date}`);
  return data;
};
=======
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWJhZmRlY2U3NmYyMzhkOGNhZTMyZCIsImlhdCI6MTcxMzE2NDI1NiwiZXhwIjoxNzEzMjQ3MDU2fQ.tOWsV5ScRNaqiBxgQE83J5H3hfaIFMcpzFO5Ucrx3pI';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

// const getMonthPercentage = async date => {
//   const { data } = await axios.get(`/month/?date=${date}`);
//   return data;
// };
>>>>>>> Stashed changes

// export const getMonthPercentageThunk = createAsyncThunk(
//   'month/water',
//   async (date, thunkApi) => {
//     try {
//       return await getMonthPercentage(date);
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
