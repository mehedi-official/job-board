import { allJoblist } from '$lib/database';
import type { PageServerLoad } from './$types';

export const load = (async () => {

    const records = await allJoblist();
    return { records };
}) satisfies PageServerLoad;