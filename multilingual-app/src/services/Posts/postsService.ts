import { getPosts } from "@/services/Posts/Posts";
import { Post } from "@/services/Posts/Posts";

export const fetchPostsService = async (): Promise<{data?:Post[], error?: string}>=> {

    try {
        const allPosts = await getPosts();

        if(allPosts.error) {
            throw new Error(allPosts.error.message);
        }

        return {data: allPosts.data as Post[]};

    } catch  {
        console.log("An error occurred while loading posts");
        return {error: "An error occurred while loading posts"};
    }


}