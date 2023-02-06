import ContactForm from '../components/contact-form/contact-form';
import Head from 'next/head';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Max' Blog</title>
				<meta name='description' content='Send me your messages' />
			</Head>
			<ContactForm />;
		</>
	);
}
