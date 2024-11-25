import {get} from "../api";

import { FetcherResponse } from "@/types/fetcher";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const getPosts = async (): Promise<FetcherResponse<Post[]>> => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return get<Post[]>(url);
}