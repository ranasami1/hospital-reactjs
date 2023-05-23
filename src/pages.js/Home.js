import './Home.css';
import doc from "./../img/pngwing.com (1).png";
import sign2 from "./../img/hospital.png";
import sign1 from "./../img/stethoscope.png"

const Home = () =>{
    return(
        <header>
            <div className="container">
                <div className="row" href="#home" id="content">
                    <div className='col-md-6-col-lg-6'>
                    <h5>We provide all health solution</h5>
                    <h2>Healthy is an outfit that looks different
                         on everybody.</h2>
                    <button><a href="#">Read more</a></button>
                    <img src={sign1} id="sign1" />
                   
                    </div>
                    <div className='col-md-6-col-lg-6'>
                        <img src={doc} alt ="doctor"/>
                        <img id="sign2" src={sign2} alt="sign"/>
                        
                    </div>
                    

                </div>
            </div>
        </header>
    )
};
export default Home;