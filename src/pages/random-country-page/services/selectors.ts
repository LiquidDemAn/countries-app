import { AppState } from './../../../store/typedef';

export const getCountriesNames = (state: AppState) => state.randomCountryPage.countiesNames;
export const getRandomCountry = (state: AppState) => state.randomCountryPage.country;
export const getRandomCountryNeighbors = (state: AppState) => state.randomCountryPage.neighbors;