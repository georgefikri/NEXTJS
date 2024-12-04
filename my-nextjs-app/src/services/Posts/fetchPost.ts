import { get } from "@/services/api";
import { Post } from "@/services/Posts/Posts";

export async function fetchPost(id: string): Promise<Post | null> {

    try {

        const response = await get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if(response.error) {
            console.log(response.error.message);
            return null;
        }
        
        return response.data;

    } catch  {
        console.log('error while fetching post');
        return null;    
    }

}