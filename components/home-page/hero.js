import classes from './hero.module.css';
import Image from 'next/image';

export default function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/hero-img.jpg'
					alt='an image showing'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I'm Max</h1>
			<p>
				I blog about development - especially frontend frameworks like Angular
				or React
			</p>
		</section>
	);
}
