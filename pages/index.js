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
        <p>Stop and think<br>
		Before you click that link</p>
		
		<p>Avoid the distress from unlawful egress<br>
		of data.</p>
		
		<p>It could be a fiend<br>
		Who wants control of your machine</p>
		
		<p>Phishing campaigns<br>
		Still remain</p>
		
		<p>The easiest way<br>
		To spread pain and dismay</p>
		
		<p>By malicious threat actors<br>
		For a number of factors</p>
		
		<p>Because the human element,<br>
		Without disrespect or detriment</p>
		
		<p>While an organisation’s greatest asset<br>
		Is not immune to every facet</p>
		
		<p>Of adversary psychology<br>
		And the cyber kill chain chronology</p>
		
		<p>Weaponisation, delivery, exploitation<br>
		Don’t click on the link, you might complete the installation!</p>
      </main>

      <Footer />
    </div>
  )
}
