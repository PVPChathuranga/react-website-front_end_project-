import Navbar from "../Components/Navbar";
import ImageWithContent from "../Components/ImageContainer/imageWithContent";
import Content from "../Components/OtherContent/content";
import FAQ from "../Components/QuestionComponent/question";
import Footer from "../Components/Footer/footer";
import "./Home.css";

export default function Home() {
    return (
      <div>
          
        <Navbar/>
        <div >
        <ImageWithContent/>
        </div>
        
        <div>
          <Content/>
          <FAQ/>
        </div>

        <div>
          <Footer/>
        </div>
        
        
  
      </div>
    )
  }