import { connect } from '$lib/api/cloudcms';

// POST /api/authors
export const post = async (request) => {
	let query = request.body || {};
	query._type = "store:author";

	const pagination = Object.fromEntries(request.query);

	const session = await connect(fetch);
	const branch = await session.master();

    let authors = (await branch.queryNodes(query, pagination)).rows;


	return {
		body: {
			authors
		}
	};
};