import { AppState } from './../../../store/typedef';

export const getRandomCountry = (state: AppState) => state.randomCountryPage.country;
export const getRandomCountryNeighbors = (state: AppState) => state.randomCountryPage.neighbors;
export const getRandomCountryLoading = (state: AppState) => state.randomCountryPage.loading;