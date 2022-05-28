export type AllCountriesType = {
    name: string,
    capital: string,
    region: string,
    population: number,
    flags: {
        svg: string,
        png: string
    },
    independent: boolean
} 

export type HomePageStateType = {
    allCountries: AllCountriesType []
};