export type AllCountriesType = {
	name: string;
	capital: string;
	region: string;
	population: number;
	flags: {
		svg: string;
		png: string;
	};
	independent: boolean;
};

export type CountryCardType = {
	name: string;
	flag: string;
    info: ({
        title: string;
        description: number;
    } | {
        title: string;
        description: string;
    })[];
};

export type HomePageStateType = {
	allCountries: AllCountriesType[];
};
