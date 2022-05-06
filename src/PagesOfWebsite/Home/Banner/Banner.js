import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import fruit1 from '../../../images/fruits1.png';
import fruit2 from '../../../images/fruit2.png';
import fruit3 from '../../../images/fruit3.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div>
           
           <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'500px'}}
          src={fruit1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fruits Store1 </h3>
          <p>In Fruit Store,many fruits are store in it</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'500px'}}
          src={fruit2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Fruits Store2</h3>
          <p>Fruits store in refrigerator</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'500px'}}
          src={fruit3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fruits Store3</h3>
          <p>
            In fruit store fruits are reserved then fruits are divered people;
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;