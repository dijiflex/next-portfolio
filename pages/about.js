


import Link from 'next/link';
import Layout from '../components/Layout';
export default () => (
 <Layout title='About'>
    
     <Link href='/'>
      <a >Go to Home</a>
     </Link>
     <p>A javascript Programmer</p>
     <img src="/public/youtubelogo.png"  alt='Youtube logo' />

 </Layout>
);