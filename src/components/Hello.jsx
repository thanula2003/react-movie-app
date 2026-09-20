import {useEffect} from "react";
import {useState}  from "react";
import "../css/App.css";


function Helloo ()  {

    const [animate, setAnimate] = useState(false);

     useEffect(() => {
    
    setAnimate(true);
  }, []);

  return (
    <div className={`hello-text ${animate ? "slide-in" : ""}`}>
      Welcome to Movie Hub!🌏
    </div>
  );
}


export default Helloo;