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
    padding-top: 80px;
    padding-left: 90px;
    padding-right: 15px;
`;
const BannerImage = styled.img``;

export default Banner;