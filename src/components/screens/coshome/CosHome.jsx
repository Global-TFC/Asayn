import React, { } from 'react'
import styled from 'styled-components'
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./coshome.css"


function CosHome() {
    const longtext = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuereLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuereLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere";
    return (
        <Coshome>
            <Cosheader>
                <Cosbanner src='https://image.shutterstock.com/image-vector/online-education-isometric-narrow-banner-260nw-1725096907.jpg' alt='banner' /><br />
                <Cosname>Course Name</Cosname>
                <br />
                <CosValu>free</CosValu>
                <Createrlink>@brototype</Createrlink>
                <Cosdis>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit eos itaque facere recusandae explicabo vero atque cupiditate inventore architecto et, quisquam est sint, accusantium voluptatem illum iure? Quidem, quasi.</Cosdis>
            </Cosheader>
            <Cosbody>
                <Demovid>
                    <Vidhead>whats this course</Vidhead> <br />
                    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/tgbNymZ7vqY" title='ytvid'></iframe>
                    <VidDis>Lorem ipsum dolor sit amet consectetur adipisicing elit. </VidDis>
                </Demovid>
                <Docdiv >
                    <ReactReadMoreReadLess
                        charLimit={300}
                        readMoreText={"Read more ▼"}
                        readLessText={"Read less ▲"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                        className="readmore"
                    >
                        {longtext}
                    </ReactReadMoreReadLess> <br />
                    <GetBtn>Get Course</GetBtn>
                </Docdiv>
            </Cosbody>
            <CosFooter>

            </CosFooter>
        </Coshome>
    )
}

const Coshome = styled.div`
    padding-top: 70px;
`;
const Cosheader = styled.div`
    display: inline-block;
    text-align: center;
    height: 300px;
`;
const Cosbanner = styled.img``;
const Cosname = styled.span`
    color: black;
    font-weight: 900;
    font-size: 50px;
`;
const CosValu = styled.span`
  background-color: #4CAF50; /* Green */
  border: none;
  border-radius: 20px;
  color: #000000;
  padding: 4px 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
`;
const Cosdis = styled.p`
    padding-top: 20px;
    color: #a38e68;
    width: 70%;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
`;
const Createrlink = styled.span`
    color: black;
`;
const Cosbody = styled.div`
    display: flex;
    padding-bottom: 10%;
`;
const Demovid = styled.div`
    width: 100vh;
    text-align: center;
`;
const Vidhead = styled.span`
    color: black;
    font-size: x-large;
`;
const VidDis = styled.p``;
const Docdiv = styled.div`
    width: 100vh;
    color: black;
    text-align: center;  
    padding-top: 2%;
`;
const CosFooter = styled.div``;
const GetBtn = styled.button`
  color: #06a800;
  margin-top: 20px;
  padding: 4px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white; 
  border: 2px solid #4CAF50;
  border-radius: 10px;
  &:hover{
    background-color: #4CAF50;
    color: white;
  }
`;

export default CosHome;