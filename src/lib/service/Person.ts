import { variables } from '$lib/variables';

const baseUrl = variables.movieUrl;
// Apply all headers
const headers = {
	Accept: 'application/json',
	Authorization: `Bearer ${variables.movieToken}`
};

export const movies = {
	getDetail: async (id) => {
		try {
			return await fetch(`${baseUrl}/person/${id}`, {
				headers
			});
		} catch (err) {
			return err;
		}
	},
	getCredits: async (id) => {
		try {
			return await fetch(`${baseUrl}/person/${id}/movie_credits`, {
				headers
			});
		} catch (err) {
			return err;
		}
	}
};

export default movies;
