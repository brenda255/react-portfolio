import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Brenda Sendejas - Software Developer',
	description:
		'Welcome to my portfolio! I am an aspiring software developer currently learning JavaScript, React, and modern web technologies. I’m passionate about creating clean, simple, and user-friendly projects as I grow my skills. ',
	keywords: [
		'Software Developer',
		'Clean Code',
		'Minimal Design',
		'Modern Development',
		'Web Development',
		'User Experience',
		'Design Systems',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Performance',
		'Accessibility',
		'Minimalist Portfolio',
		'Brenda',
	],
	authors: [{ name: 'Brenda' }],
	creator: 'Brenda',
	openGraph: {
		title: 'Software Developer Portfolio',
		description: 'Passionate software developer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		url: 'https://your-domain.com',
		siteName: 'Brenda - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Brenda - Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	// twitter: {
	// 	card: 'summary_large_image',
	// 	title: 'Brenda - Software Developer',
	// 	description: 'Passionate software developer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
	// 	creator: '@yourusername',
	// 	images: ['/og-image.jpg'],
	// },
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
