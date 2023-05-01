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
        <Header title="Social Engineering" />
        <p className="description">
          Stop and think, before you click that link.
        </p>
		<p className="description">
          Avoid the distress from unlawful egress, of data.
        </p>
		<p className="description">
		It could be a fiend who wants control of your machine.
		</p>
		<p className="description">
		Phishing campaigns still remain, the easiest way to spread pain and dismay
		</p>
		<p className="description">
		By malicious threat actors, for a number of factors.
		</p>
		<p className="description">
		Because the human element, without disrespect or detriment,
		</p>
		<p className="description">
		Whilst an organisation’s greatest asset, is not immune to every facet,
		</p>
		<p className="description">
		Of adversary psychology and the cyber kill chain chronology.
		</p>
		<p className="description">
		Weaponisation, delivery, exploitation, don’t click on that link, you might complete the installation!
		</p>
      </main>

      <Footer />
    </div>
  )
}
