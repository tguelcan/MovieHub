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
	},
	getDetail: async (id) => {
		try {
			return await fetch(`${baseUrl}/movie/${id}`, {
				headers
			});
		} catch (err) {
			return err;
		}
	},
	getSimilar: async (id) => {
		try {
			return await fetch(`${baseUrl}/movie/${id}/similar`, {
				headers
			});
		} catch (err) {
			return err;
		}
	},
	getCredits: async (id) => {
		try {
			return await fetch(`${baseUrl}/movie/${id}/credits`, {
				headers
			});
		} catch (err) {
			return err;
		}
	}
};

export default movies;
