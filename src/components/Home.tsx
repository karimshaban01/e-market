import Header from "./parts/Header";
import Footer from "./parts/Footer";
import './components.css';

const Home = ()=>{
    return(
        <>
        <Header />
        <div className="body">
             <p>This is the general App header</p>
        </div>
        <Footer />
        </>
    )
}

export default Home