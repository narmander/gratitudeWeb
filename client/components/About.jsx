import React from 'react';
import styled from 'styled-components';

export const About = () => {
  return (
    <>
    <AboutContainer>
      <AboutDiv>
        <AboutText>About Daily Gratitude</AboutText>
      </AboutDiv>
    </AboutContainer>
    <Container000>
        <ImgDiv000>
          <Img000 src={"https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}></Img000>    
        </ImgDiv000>
        <TextContainer000>
          <TextBlock000>
            <TextInfo000>
            At Harry’s we embrace the messiness of masculinity.
            </TextInfo000>
          </TextBlock000>
          <TextBlock001>
            <TextInfo001>
            One way we try to do this is by talking about the things that don’t get talked about as much as they should. Men today are equally as comfortable being nurturing as they are strong, accepting of others as they are self-assured. And there’s wonderful chaos to be found in the middle.
            </TextInfo001>
          </TextBlock001>
        </TextContainer000>
    </Container000>
    <Container001>
      <ImgDiv001>
        <Img001 src={"https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}></Img001>
      </ImgDiv001>
      <TextContainer001>
          <TextBlock002>
            <TextInfo002>
            Meet Jeff and Andy
            </TextInfo002>
          </TextBlock002>
          <TextBlock003>
            <TextInfo003>
            Our founders, Jeff and Andy, created Harry’s because they were tired of overpaying for overdesigned razors, and of standing around waiting for the person in the drugstore to unlock the cases so they could actually buy them. When they asked around, they learned lots of guys were upset about the situation too, so they decided to do something about it.
            </TextInfo003>
          </TextBlock003>
        </TextContainer001>
    </Container001>
    <DownloadContainer>
      <DownloadDiv>

      </DownloadDiv>
    </DownloadContainer>
    </>
  )
  
}

const Container000 = styled.section`
  @media (min-width: 64em) {
    height: 944px;
}
  position: relative;
  width: 100%;
  // margin-bottom: -10px;
`
const ImgDiv000 = styled.div`
  @media (min-width: 768px) {
    left: 50%;
}
  @media (min-width: 64em) {
    // padding-top: 700px;
    background-size: auto 700px;
}
  @media (min-width: 48em) {
    width: 50%;
    position: absolute;
    top: 0px;
    z-index: 0;
    background-size: auto 490px;
    
}
`;
const Img000 = styled.img`
  width: 100%;
  
`

const AboutContainer = styled.section`
  height: 287px;
  background-color: white;
  position: relative;

`
const AboutDiv = styled.div`
  

`
const AboutText = styled.h1`

  text-align: center;
  font-size: 72px;
  letter-spacing: 3.9px;
  line-height: 40px;
  font-weight: 500;
  text-transform: none;
  padding-top: 75px;

`
const TextContainer000 = styled.div`
  background-color: rgb(47, 51, 96);
  @media (min-width: 768px) {
    height: 100%;
    display: block;
  }
  
  @media (min-width: 48em) {
    width: 50%;
    position: absolute;
    top: 0px;
    z-index: 0;
    // padding-top: 244px;
  }
`
const TextBlock000 = styled.div`
padding-top: 200px;
  padding-right: 200px;
  color: #f1c0fb;
  text-align: left;
  padding-left: 300px;
`
const TextInfo000 = styled.h1`
  font-size: 48px;
  letter-spacing: 2.9px;
  line-height: 60px;
  font-family: "brandon-grotesque", "Brandon Grotesque",   "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  text-transform: none;
`
const TextBlock001 = styled.div`
  padding-right: 200px;
  color: #f1c0fb;
  text-align: left;
  padding-left: 300px;
`
const TextInfo001 = styled.p`
  font-family: "museo-sans", "Museo Sans", "Helvetica",   "Arial", sans-serif;
  font-weight: 300;
  font-size: 30px;
  letter-spacing: 2.9px;
  line-height: 40px;
  text-transform: none;
`
const Container001 = styled.section`
@media (min-width: 64em) {
  height: 944px;
}
position: relative;
width: 100%;
// margin-bottom: -10px;
`
const ImgDiv001 = styled.div`
@media (min-width: 768px) {
  // padding-top: 251px;
}
@media (min-width: 64em) {
  // padding-top: 700px;
  background-size: auto 700px;
}
@media (min-width: 48em) {
  width: 50%;
  position: absolute;
  top: 0px;
  z-index: 0;
  background-size: auto 490px;
  
}
`
const Img001 = styled.img`
width: 100%;
`
const TextContainer001 = styled.div`
right: 0%;
  background-color: rgb(0, 0, 0);
  @media (min-width: 768px) {
    height: 100%;
    display: block;
  }
  
  @media (min-width: 48em) {
    width: 50%;
    position: absolute;
    top: 0px;
    z-index: 0;
    // padding-top: 244px;
  }
`
const TextBlock002 = styled.div`
padding-top: 200px;
  padding-right: 200px;
  color: #f1c0fb;
  text-align: left;
  padding-left: 300px;
`
const TextInfo002 = styled.h1`
  font-size: 48px;
  letter-spacing: 2.9px;
  line-height: 60px;
  font-family: "brandon-grotesque", "Brandon Grotesque",   "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  text-transform: none;
`
const TextBlock003 = styled.div`
  padding-right: 200px;
  color: #f1c0fb;
  text-align: left;
  padding-left: 300px;
`
const TextInfo003 = styled.p`
  font-family: "museo-sans", "Museo Sans", "Helvetica",   "Arial", sans-serif;
  font-weight: 300;
  font-size: 30px;
  letter-spacing: 2.9px;
  line-height: 40px;
  text-transform: none;
`
const DownloadContainer = styled.section`
height: 287px;
  background-color: white;
  position: relative;
`
const DownloadDiv = styled.div`

`