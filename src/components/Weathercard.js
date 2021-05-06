import React, { useState } from "react";
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

import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'




function Locpic(props) {

  const [location, setLocation] = useState({
    city:'Pune',
    country: 'India'
  })
  const [weather, setWeather] = useState([])
  const APIKEY = "33d7192a1b32fda0eaa0ed3bd3ec4485"
  
  async function WeatherData (e)  {
    e.preventDefault();
    const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country}&appid={API key}
        `
    ).then((res)=> res.json()).then((data)=>console.log(data));
    setWeather({data: data})
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
            props.onHide }
          >Close</Button>
        </Modal.Footer>
      </Modal>
    );
}






const Weathercard = () => {
    const [modalShow, setModalShow] = useState(false)

   
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
               21.5  C
               </div>
               <div className="range">
                   <div className="min">
                        min
                        <br/>
                        30
                   </div>
                   <div className="max">
                        max
                        <br/>80
                   </div>
               </div>
           </Col>
           <Col lg={6} md={12} className="upcoming">
           <ListGroup variant="flush">
                <ListGroup.Item className="upitem">
                    <span >
                        20/05/2002
                    </span>
                    20 C
                    <img src={bhyankarun} />
                    </ListGroup.Item>
                <ListGroup.Item className="upitem">
                    <span >
                        20/05/2002
                    </span>
                    20 C
                    <img src={bhyankarun} />
                    </ListGroup.Item>
                <ListGroup.Item className="upitem">
                    <span >
                        20/05/2002
                    </span>
                    20 C
                    <img src={bhyankarun} />
                    </ListGroup.Item>
                <ListGroup.Item className="upitem">
                    <span >
                        20/05/2002
                    </span>
                    20 C
                    <img src={bhyankarun} />
                    </ListGroup.Item>
                <ListGroup.Item className="upitem">
                    <span >
                        20/05/2002
                    </span>
                    20 C
                    <img src={bhyankarun} />
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
