import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout, { siteTitle } from '../../components/layout';

//funcion que le manda la informacion de la pagina individualmente
export async function getStaticProps({ params }) {
  const postData = getPostData(params.name);
  return {
    props: {
      postData,
    },
  };
}

//Funcion que se encarga de la creacion de las paginas
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
