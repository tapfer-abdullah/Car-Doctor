import Footer from "../SharedPages/Footer";
import Header from "../SharedPages/Header";
import AboutUS from "./HomeComponents/AboutUS";
import Banner from "./HomeComponents/Banner";
import Service from "./HomeComponents/Service/Service";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AboutUS></AboutUS>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;