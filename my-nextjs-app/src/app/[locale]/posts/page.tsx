import { getPosts } from "@/services/Posts/Posts";
import { PostsListing} from "@/components/Posts/Posts"
import { Post } from "@/services/Posts/Posts"
import { localization } from "@/consts/loadMessage";

export default async function PostsPage({params}: {params: {locale: string}}) {
    const messages = localization(params.locale);
    let allPosts

    try {
        allPosts = await getPosts();

        if (allPosts.error) {
            throw new Error(allPosts.error.message);
        }
        
    } catch {
        return <div>{messages["errorLoadingPosts"] ?? "An error occurred while loading posts"} </div>;

    }



    return <PostsListing posts={allPosts.data as Post[]} />;
}