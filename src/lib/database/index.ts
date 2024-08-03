import { PUBLIC_DB_URL } from '$env/static/public';
import PocketBase from 'pocketbase';
import Dexie from 'dexie';


// Pocketbase Configuration
const pb = new PocketBase(PUBLIC_DB_URL);

export async function getJobList(id: string) {
    return await pb.collection('job_posts').getOne(id);
}

export async function allJoblist() {
    return await pb.collection('job_posts').getFullList({
        sort: '-created',
    });
}

// Dexie Js Configuration
export const local_db = new Dexie('urban');
local_db.version(1).stores({
    posts: "++id, &job_post_id"
});

async function add_Job_Post(id:string):Promise<number> {
    let local_id = await local_db.posts.add({job_post_id: id});
    return local_id;
}

async function get_Local_ID_By_Job_Post(job_post_id:string):Promise<number | boolean> {
    let result= await local_db.posts.where('job_post_id').equals(job_post_id).toArray();
    if(result.length === 0) {
        return false;
    }
    let [{id}] = result;
    return id;
}

async function delete_Job_Post(id:number) {
    await local_db.posts.delete(id);
}

async function get_bookmarkIds():Promise<string[]> {
    let result = await local_db.posts.toArray();
    return result.map(item => item.job_post_id);
}

export {add_Job_Post, get_Local_ID_By_Job_Post, delete_Job_Post, get_bookmarkIds}
