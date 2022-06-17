import { AppState } from '../../../store/typedef';

export const getCountryInfo = (state: AppState) => state.countryPage.countryInfo;
export const getCountryNeighbors = (state: AppState) => state.countryPage.countryNeighbors;