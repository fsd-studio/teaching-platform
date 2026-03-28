import Post from "@/app/components/Post";
import Section from "@/components/template/ui/Section";
import { Title } from "@/components/ui/Title";
import { getBlogPosts } from "@/utils";

export default function Posts() {
    const posts = getBlogPosts()
    
    return (
        <Section id='blog' innerClassName='flex flex-col gap-4'>
            <div className='md:max-w-[80%] w-full flex flex-col gap-4 md:gap-6 mx-auto'>
                <Title>Latest Articles:</Title>
                <div className='my-auto w-full grid gap-4 md:gap-6 mx-auto'>
                    { posts.map((post, index) => (<Post key={index} metadata={post.metadata} slug={post.slug} />)) }
                </div>
            </div>  
        </Section>
    );
}