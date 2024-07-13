import type { PageServerLoad } from './$types';
import { getJobList } from '$lib/database';

    

export const load = (async ({params}) => {
    const records = await getJobList(params.job_id);
    if(records?.response?.code === 404) {
        throw new Error("Job Post Not found");    
    }
    
    return { records };
}) satisfies PageServerLoad;