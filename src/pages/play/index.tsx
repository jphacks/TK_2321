import React from 'react'
import Head from 'next/head'
import Footer from '@/components/atoms/Footer'
import BattleField from '@/components/atoms/Field'

const Test = () => {
  return (
    <div>
      <Head>
        <title>TIME TO BATTLE</title>
      </Head>
      <main>
        <BattleField
          background="Pokemon"
          rows={15}
          cols={20}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Test
