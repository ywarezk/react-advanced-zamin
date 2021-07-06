// /about


export default function About({message}) {
	return <h1>about page {message}</h1>
}

export async function getStaticProps(context) {
  return {
    props: {
		message: 'hello world'
	}, // will be passed to the page component as props
  }
}