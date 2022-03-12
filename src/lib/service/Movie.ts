import { variables } from '$lib/variables';

const baseUrl = variables.movieUrl;

// Apply all headers
const headers = {
	Accept: 'application/json',
	Authorization: `Bearer ${variables.movieToken}`
};

export const movies = {
	getPopular: async () => {
		try {
			return await fetch(`${baseUrl}/movie/popular`, {
				headers
			});
		} catch (err) {
			return err;
		}
	},
	getUpcoming: async () => {
		try {
			return await fetch(`${baseUrl}/movie/upcoming`, {
				headers
			});
		} catch (err) {
			return err;
		}
	}
};

export default movies;
