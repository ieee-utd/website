import React from 'react'
import Slider from 'react-slick'
import './carousel.css'


class Carousel extends React.Component {
    render() {
      let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      }
      return (
        <div className="Carousel">
          <Slider {...settings}>
            <div className="slide"><img src='https://scontent.fftw1-1.fna.fbcdn.net/v/t31.0-8/14435094_1234609639934889_3153953695655798342_o.jpg?oh=32bc8b043fe1023dfc6b8aba7f08feab&oe=5A71FF14' alt="" draggable='false'/></div>
            <div className="slide"><img src='https://scontent.fftw1-1.fna.fbcdn.net/v/t31.0-8/22467504_1688416147887567_5267673313953546357_o.jpg?oh=162d1c7c2b2d9c87c81288b2cad9a71a&oe=5A85E074' alt="" draggable='false'/></div>
            <div className="slide"><img src='https://scontent.fftw1-1.fna.fbcdn.net/v/t31.0-8/22538988_1688416151220900_2948706872682757992_o.jpg?oh=99167252ae1afbff39f43b4f1fc256db&oe=5A73F605' alt="" draggable='false'/></div>
            <div className="slide"><img src='https://scontent.fftw1-1.fna.fbcdn.net/v/t31.0-8/14311461_1222705217791998_2171808861766414591_o.jpg?oh=afde149611ea893c2fd2704723025d4f&oe=5A6DFE32' alt="" draggable='false'/></div>
            <div className="slide"><img src='https://scontent.fftw1-1.fna.fbcdn.net/v/t31.0-8/14310460_1224091220986731_1771511160160383919_o.jpg?oh=a4b3f4c4ffe7c54a816ce7a191866377&oe=5A68C856' alt="" draggable='false'/></div>
          </Slider>
        </div>
      )
  }
}

export default Carousel