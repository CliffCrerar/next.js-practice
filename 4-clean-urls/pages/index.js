import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function PostLink(props) {
  return (
    <li>
      <Link as={`/p/${props.id}`}  href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export default function Index() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-next.js" title="Hello Next.js" />
        <PostLink id="learn-next.js" title="Learn Next.js is awesome" />
        <PostLink id="deploy-next.js" title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}
