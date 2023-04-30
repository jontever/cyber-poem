import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Don't click on that link!" />
        <p className="description">Stop and think<br>
		Before you click that link</p>
		
		<p className="description">Avoid the distress from unlawful egress
		of data.</p>
		
		<p className="description">It could be a fiend
		Who wants control of your machine</p>
		
		<p className="description">Phishing campaigns
		Still remain</p>
		
		<p className="description">The easiest way
		To spread pain and dismay</p>
		
		<p className="description">By malicious threat actors
		For a number of factors</p>
		
		<p className="description">Because the human element,
		Without disrespect or detriment</p>
		
		<p className="description">While an organisation’s greatest asset
		Is not immune to every facet</p>
		
		<p className="description">Of adversary psychology
		And the cyber kill chain chronology</p>
		
		<p className="description">Weaponisation, delivery, exploitation
		Don’t click on the link, you might complete the installation!</p>
      </main>

      <Footer />
    </div>
  )
}
