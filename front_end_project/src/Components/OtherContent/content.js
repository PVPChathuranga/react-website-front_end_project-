import "./content.css";
import img from '../../Images/image1.png';
import img1 from '../../Images/image2.png'; 
import Button from "../Button/button";

export default function Content() {
    return (
      <div>
        <div className="overAllcontent">                  
        <div className="containers">
          <div className="overview">
              <img 
                src={img} 
                alt="Responsive" 
                className="img"
              />
          </div>
          <div className="overview">
            <h2 className="heading"> Web & Mobile App Development </h2>
            <p className="paragraph">
            Your web and mobile Apps are pieces of the puzzle to grow your business. 
            We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </p>
            <div className="button_container">
                <Button>LEARN MORE</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="overAllcontent">                  
        <div className="containers">
          <div className="overview">
          <h2 className="heading"> Digital Strategy Consulting </h2>
            <p className="paragraph">
            Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>
            <div className="button_container">
                <Button>LEARN MORE</Button>
            </div>
          </div>
          <div className="overview">
            <img 
                src={img1} 
                alt="Responsive" 
                className="img"
              />
          </div>
        </div>
      </div>
    
      </div>
    )
  }