
import Document, { Head, Main, NextScript, Html} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                 <Head>
                    
                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" />
                 <link rel="preconnect" href="https://fonts.gstatic.com"/>
                 <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>
                 </Head>
                 <body>
                     <Main/>

                     <NextScript />
                 </body>
                 <style jsx>{`
                 body {
                    font-family: 'Roboto', sans-serif;
                 }
                 `}</style>
            </Html>
        )
    }
}

