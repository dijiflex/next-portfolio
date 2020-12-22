import Layout from '../components/Layout';


export default ({statusCode}) => (
<Layout title='Error!!'>
 {statusCode ?  `${statusCode} Error!! Could not load you Data `: `Sorry. Couldn't get that page`}
 
</Layout>
)
