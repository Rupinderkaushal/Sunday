import React from 'react';
import{Carousel} from 'react-bootstrap';
const CaroselReact = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpaperaccess.com/full/1209562.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First Image</h3>
      <p>Just try to use react boot strap components!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.iamabiker.com/wp-content/uploads/2018/04/Royal-Enfield-Thunderbird-350X-HD-wallpapers-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second Image</h3>
      <p>Just try to use react boot strap components!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third Image</h3>
      <p>Just try to use react boot strap components!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default CaroselReact;
