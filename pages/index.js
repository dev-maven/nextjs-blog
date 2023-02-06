import Head from 'next/head';
import FeaturedPost from '../components/home-page/featured-post';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

export default function HomePage(props) {
	console.log(props);
	return (
		<>
			<Head>
				<title>Max' Blog</title>
				<meta
					name='description'
					content='I post about programming and web development.'
				/>
			</Head>
			<Hero />
			<FeaturedPost posts={props.posts} />
		</>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
		revalidate: 1800,
	};
}
