import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSETA.UK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to CSETA!" />
        <p className="description">
          Stop and think, before you click that link.
        </p>
		<p className="description">
          Avoid the distress from unlawful egress, of data
        </p>
      </main>

      <Footer />
    </div>
  )
}
