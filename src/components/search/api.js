export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_HOST,
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/"
