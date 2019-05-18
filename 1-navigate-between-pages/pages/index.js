import Link from 'next/link'

export default function Index() {
	return (
		<div>
			<Link href="/About">
				<button title="About Page">Go to the about page</button>
			</Link>
			<p>Hello Next.js</p>
		</div>
	)
}
