import React from 'react'
import styled from 'styled-components'
import BannerImg from './banner.jpg'

function Banner() {
  return (
    <>
    <BannerSection>
        <BannerImage src={BannerImg} alt='bannerImage'/>
    </BannerSection>
    </>
  )
}

const BannerSection = styled.div`
    height: 10%;
    padding-top: 80px;
    padding-left: 90px;
    padding-right: 15px;
    @media (max-width: 768px) {
    display: none;
    }
`;
const BannerImage = styled.img`
  width: 100%;
  height: 140px;
`;

export default Banner;