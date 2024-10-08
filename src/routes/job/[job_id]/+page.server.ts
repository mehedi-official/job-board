import type { PageServerLoad } from './$types';
import { getJobList } from '$lib/database';

    

export const load = (async ({params, setHeaders}) => {
    const records = await getJobList(params.job_id);
    if(records?.response?.code === 404) {
        throw new Error("Job Post Not found");    
    }
    // const get_records = async () => {
    //     const records = await getJobList(params.job_id);
    //     if(records?.response?.code === 404) {
    //         return new Error("Job Post Not found");    
    //     }
    //     return records;
    // }
    setHeaders({
        "cache-control": "max-age=86400, public"
    })
    return { records };
}) satisfies PageServerLoad;