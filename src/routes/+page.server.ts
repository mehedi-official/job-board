import { allJoblist } from '$lib/database';
import type { PageServerLoad } from './$types';

export const load = (async ({ setHeaders }) => {
	const records = await allJoblist();
	setHeaders({
		'cache-control': 'max-age=120, private'
	});
	return { records };
}) satisfies PageServerLoad;
