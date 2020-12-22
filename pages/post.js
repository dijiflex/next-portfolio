

import Layout from '../components/Layout';

import { withRouter } from 'next/router';

const Post = ({ router }) => (
 <Layout title={router.query.title}>
     <p>
         Lorem is the thing that is working for us here
         Lorem is the thing that is working for us here
         Lorem is the thing that is working for us hereLorem is the thing that is working for us hereLorem is the thing that is working for us here
         Lorem is the thing that is working for us hereLorem is the thing that is working for us here
         Lorem is the thing that is working for us here
     </p>
  </Layout>
);

export default withRouter(Post);