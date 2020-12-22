

import Link from 'next/link';
import Layout from '../components/Layout';
const Index = () => (
<Layout title='Home'>
    <Link href='/about'>
      <a >Go to About Page</a>
     </Link>
    <div>Welcome To Next.js</div>
</Layout>
    
);

export default Index;
