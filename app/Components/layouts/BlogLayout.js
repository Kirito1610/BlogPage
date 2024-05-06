import Navbar from "../modules/Navbar";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
function BlogLayout({children}) {
  return (
    <div>
        <Header />
        <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default BlogLayout
