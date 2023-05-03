import Head from 'next/head'
import Button from '@/components/button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clase 9</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='conteiner'>
          <h1 className='title'>Ejercicio 9: Con Framework</h1>
          <button className='btn'>Boton desde ReactJS</button>
      </main>
    </>
    );
  }