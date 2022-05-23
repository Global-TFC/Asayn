import React from 'react'
import styled from 'styled-components'

function CosHome() {
    return (
        <Coshome>
            <Cosheader>
                <Cosbanner />
                <Cosname>Course Name</Cosname>
                <CosValu>free</CosValu>
                <Cosdis>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit eos itaque facere recusandae explicabo vero atque cupiditate inventore architecto et, quisquam est sint, accusantium voluptatem illum iure? Quidem, quasi.</Cosdis>
                <Createrlink>@brototype</Createrlink>
            </Cosheader>
            <Cosbody>
                <Demovid>
                    <Vidhead>whats this course</Vidhead>
                    <video></video>
                    <VidDis>Lorem ipsum dolor sit amet consectetur adipisicing elit. </VidDis>
                </Demovid>
                <CosAbout>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere suscipit omnis, natus atque molestiae incidunt harum voluptas, delectus sed quis pariatur inventore maiores eius blanditiis minima dolorum? Iusto, consequatur neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit minus eum voluptatibus quod exercitationem accusamus unde similique debitis voluptas nemo, saepe molestiae eaque natus cumque maxime laboriosam architecto nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit sapiente eaque reprehenderit autem dignissimos, voluptate placeat quo perferendis assumenda ea. Itaque, maxime! Provident numquam consequatur consequuntur, iusto veniam porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fuga ratione mollitia asperiores doloribus nam ducimus odio fugit doloremque nesciunt vitae consequatur, dolor, quisquam sapiente esse saepe similique quod ab.</CosAbout>
                <GetBtn>Get Course</GetBtn>
            </Cosbody>
        </Coshome>
    )
}

const Coshome = styled.div``;
const Cosheader = styled.div``;
const Cosbanner = styled.img``;
const Cosname = styled.h3``;
const CosValu = styled.button``;
const Cosdis = styled.p``;
const Createrlink = styled.span``;
const Cosbody = styled.div``;
const Demovid = styled.div``;
const Vidhead = styled.h2``;
const VidDis = styled.p``;
const CosAbout = styled.p``;
const GetBtn = styled.button``;

export default CosHome;