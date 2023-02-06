import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import Head from 'next/head';

export default function AllPostsPage(props) {
	return (
		<>
			<Head>
				<title>Max' Blog</title>
				<meta name='description' content='A list of all posts' />
			</Head>
			<AllPosts posts={props.posts} />
		</>
	);
}

export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts,
		},
		revalidate: 1800,
	};
}
