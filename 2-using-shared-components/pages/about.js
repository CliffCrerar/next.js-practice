//import Layout from '../components/MyLayout'
import withLayout from '../components/MyLayout';

// export default function About() {
// 	return (
// 		<Layout>
// 			<p>This is the about page</p>
// 		</Layout>
// 	)
// }

const Page = ()=> <p>This is the about page</p>

export default withLayout(Page);