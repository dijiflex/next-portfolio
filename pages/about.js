


import Link from 'next/link';
import Layout from '../components/Layout';
import { Component } from 'react'
import Error from './_error';

  export async function   getStaticProps(){
    const res =  await fetch('https://api.github.com/users/dijiflex');
    const statusCode = res.status > 200 ? res.status : false
    const data = await res.json();

       return {
           props: { user: data, statusCode }, // will be passed to the page component as props
       }
   }

export default class About extends Component {
   
    render () {
        const {user, statusCode} = this.props;

        if(statusCode) {
            return <Error statusCode={statusCode}/>
        }
        return (
            <Layout title='About'>
                {user.avatar_url}
                <Link href='/'>
                <a >Go to Home</a>
                </Link>
                <p>A javascript Programmer</p>
                <img src={user.avatar_url} width={100} quality={1} height={100} alt='Youtube Logo' />
            </Layout>
        )
    }
}
  