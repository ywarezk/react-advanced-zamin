import '../styles/globals.css'
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link href="/">
							<a>
								home
							</a>
						</Link>
					</li>
					<li>
						<Link href="/about" prefetch={false}>
							<a>
								About
							</a>
						</Link>
					</li>
				</ul>
			</nav>
			<Component {...pageProps} />
		</div>
		
  	)
}

export default MyApp
