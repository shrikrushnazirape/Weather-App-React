import React, { useEffect, useState } from "react";
import "./weather.css";
import { Col, Container,  Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup'



// all required imgs
import bhyankarun from "../assets/sunny.svg";
import pin from "../assets/pin.svg";
import setting from "../assets/setting.svg";
import tiptip from "../assets/drizzle.png";
import nirabhraAkash from "../assets/half-moon.png"
import jorachaPaus from "../assets/heavy-rain.svg"
import diwsaPaus from "../assets/iconfinder_weather_24_2682827.png";
import pasu from "../assets/rain.svg";
import barfa from "../assets/snowing.png";
import vadal from "../assets/thunderstorm.png";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";
import Humidity from "../assets/humidity.png"
import pressure from "../assets/wind.png"

import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'

const APIKEY = "33d7192a1b32fda0eaa0ed3bd3ec4485"


function Locpic(props) {

  const [location, setLocation] = useState({
    city:'Pune',
    country: 'India'
  })

  const [Wdata, setWData] = useState([])


  const [weather, setWeather] = useState([])
  
  async function WeatherData (e)  {
    e.preventDefault();
    const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country}&appid=${APIKEY}
        `
    ).then((res)=> res.json())
    .then((data)=> data);


    (setWData({data : data}))
    console.log("done")
   
  }

  const HandleClick = (e)=>{
    e.preventDefault();
    WeatherData(e);
    props.onHide();

}


    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={
            HandleClick }
          >Close</Button>
        </Modal.Footer>
      </Modal>
    );
}



const Weathercard = () => {
    const [modalShow, setModalShow] = useState(false)
    const [jaga, setJaga] = useState({
      city: "Pune",
      country : "India"
    })

    const [Hawaman, setHawaman] = useState([])

    useEffect( ()=> {
      async function fetchdata(){
        const request = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${jaga.city},${jaga.country}&appid=${APIKEY}
          `
      ).then((res)=>res.json())
      .then((request)=> setHawaman([request]))
      return request
      }
      fetchdata();
      console.log(Hawaman[0])
    },[])
    

  const timeConversion=(e)=>{
    var date = new Date( e * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }


  return (
    <div className="ctn">
      <div className="location">
        <img src={pin} alt="pin" />
        Pune , India
            <button
            onClick={()=>
              setModalShow(true)
            }
            >
            <img src={setting} alt="" />
            </button>

      </div>
       
       <Row>
           <Col lg={6} md={12} className="today">
               <img src={bhyankarun} alt=""/>
               <div className="temp">
               {Math.floor(Hawaman[0].main.temp - 273.15)}
                <sup>o</sup>
                C
               </div>
               <div className="range">
                   <div className="min">
                        min
                        <br/>
              {Math.floor(Hawaman[0].main.temp_min - 273.15)}
                <sup>o</sup>
                C
                   </div>
                   <div className="max">
                        max
                        <br/>
                {Math.floor(Hawaman[0].main.temp_min - 273.15)}
                <sup>o</sup>
                C
                   </div>
               </div>
           </Col>
           <Col lg={6} md={12} className="upcoming">
           <ListGroup variant="flush">
                <ListGroup.Item className="upitem">
                    <span >
                        Humidity
                    </span>
                    {Hawaman[0].main.humidity}
                    <img src={Humidity} />
                    </ListGroup.Item>
                <ListGroup.Item className="upitem">
                    <span >
                        Pressure
                    </span>
                    {Hawaman[0].main.pressure}
                    <img src={pressure} />
                    </ListGroup.Item>
                <ListGroup.Item className="upitem">
                    <span >
                        Sunrise
                    </span>
                    
                    {timeConversion(Hawaman[0].sys.sunrise)}
                    <img src={sunrise} />
                    </ListGroup.Item>
                <ListGroup.Item className="upitem">
                    <span >
                      Sunset
                    </span>
                    {timeConversion(Hawaman[0].sys.sunset)}
                    {/* {Hawaman[0].sys.sunset} */}
                    <img src={sunset} />
                    </ListGroup.Item>
             
            </ListGroup>
           </Col>
       </Row>
       <Locpic show = {modalShow}
       onHide={()=> setModalShow(false)}
       />
    </div>

  );
};

export default Weathercard;
