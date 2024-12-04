import { PostsListing} from "@/components/Posts/Posts"
import { Post } from "@/services/Posts/Posts"
import { localization } from "@/consts/loadMessage";
import { fetchPostsService } from "@/services/Posts/postsService";

export default async function PostsPage({params}: {params: {locale: string}}) {
    const messages = localization(params.locale);
    
    const {data: allPosts, error} = await fetchPostsService();

    if(error) {
        return <div>{messages["errorLoadingPosts"] ?? "Error loading posts"}</div>;
    }



    return <PostsListing posts={allPosts as Post[]} locale={params.locale}  />;
}