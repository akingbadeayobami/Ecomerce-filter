import Head from 'next/head'
import Image from 'next/image'
import Details from '../components/Details'
import Products from '../components/Products'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import CartDropdown from '../components/CartDropdown'
import SidebarFilter from '../components/SidebarFilter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bejamas App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
        <header>
          <Navbar/>
        </header>
        <CartDropdown/>
        <Details/>
        <Products/>
      </main>
      {/* <div className="mobile-filter">
        <SidebarFilter/>
      </div> */}
    
    </>
  )
}
