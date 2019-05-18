import { Layout } from '../components'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
//console.log('Link: ', Link);
//console.log('fetch: ', fetch);
console.log()

const h5Style = {
  cursor: "pointer"
}

const Index = props => {

  //console.log('props: ', props)
  var i = -1;
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(show => (
          <li key={i++}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <h4 style={h5Style}>{show.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

Index.getInitialProps = async function(){
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);
    console.log();
    return {
        shows: data.map(entry=>entry.show)
    };
}

export default Index
