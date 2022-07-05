import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

function BannerSlider() {
    return (
        <SliderDiv >
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_576/https://blog.snappa.com/wp-content/uploads/2020/02/gaming-channel-art-1-1024x576.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://marketplace.canva.com/EAEIYVayiL0/1/0/1600w/canva-yellow-and-purple-modern-gamer-mmo-role-playing-youtube-channel-art-JSLj992Ojok.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/32590/image/youtube%20channel%20banner%20maker_7.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </SliderDiv>
    )
}

const SliderDiv = styled.div`
    padding-bottom: 10px;
`

export default BannerSlider