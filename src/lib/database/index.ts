import { PUBLIC_DB_URL } from '$env/static/public';
import PocketBase from 'pocketbase';

const pb = new PocketBase(PUBLIC_DB_URL);

export async function getJobList(id: string) {
    return await pb.collection('job_posts').getOne(id);
}

export async function allJoblist() {
    return await pb.collection('job_posts').getFullList({
        sort: '-created',
    });
}
