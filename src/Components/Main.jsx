import Home from "./Home";
import ToursPackage from "./ToursPackage";
import Reviews from "./Reviews";
import Enquiry from "./Enquiry";



function Main({ page, onNav, theme, toggleTheme, handlePayment, payment }) {
  return (
    <main className="main">
      {page==='Home' && <Home onNav={onNav} page={page}/>}
      {page==='ToursPackage' && <ToursPackage onNav={onNav} theme={theme} toggleTheme={toggleTheme} handlePayment={handlePayment} payment={payment}/>}
      {page === 'Reviews' && <Reviews onNav={onNav} theme={theme} toggleTheme={toggleTheme} />}
      {page === 'Enquiry' && <Enquiry onNav={onNav} theme={theme} toggleTheme={toggleTheme} />}
    </main>
  )
}
export default Main;