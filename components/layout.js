import Navbar from './navbar/navbar.js'
// import Footer from './footer'

export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </>
    )
  }