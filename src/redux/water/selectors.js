export const selectMonthPercentage = state => state.water.itemsPerMonth;
export const selectWaterRate = state => state.auth.user.waterRate;
export const selectListWaterOfDay = state => state.water.listWaterOfDay;
export const selectDayPercentage = state => state.water.percentOfDailyNorm;
export const selectIsLoading = state => state.water.isLoading;
