
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>GENREV | Faith-Based Media</title>
        <meta name="description" content="From Genesis to Revelation — we grow brands that matter." />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-white text-red-600 text-center p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to GENREV</h1>
          <p className="text-lg">Faith-Based Social Media Agency — Launching with purpose 🔥</p>
        </div>
      </main>
    </>
  )
}
