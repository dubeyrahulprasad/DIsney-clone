import React from 'react'
import styled from "styled-components"

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"/>
      </ImageTitle>
      <Controls>
        <PlayButton>
            <img src="/images/play-icon-black.png"/>
            <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
        <img src="/images/play-icon-white.png"/>
            <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
         <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png"/>
        </GroupWatchButton>

      </Controls>
      <Subtitles>
        oifghjd
      </Subtitles>
      <Description>
        A chinese 
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
   min-height: calc(100vh - 70px);
   padding: calc(3.5vw + 5px);
   position: relative;
`
const Background = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index:-1;

   img{
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  // position: relative;

 img{
  width: 100%;
  height: 100%;
 // position : fixed;
  object-fit: contain;
 }

`

const Controls = styled.div`
 display: flex;
 align-items:center;
`

const PlayButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22Px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb (249, 249, 249);
  border: none;
  letter-spacing: 1.8px
  cursor: pointer;

  &:hover{
    background: rgb(198, 198, 198);
}

`
const TrailerButton = styled(PlayButton)`
cursor: pointer;
background: rgb(0,0,0,3);
border: 1px solid rgb(249,249,249);
color: rgb(249,249,249);
text-transform: uppercase;


`
const AddButton = styled(PlayButton)`
cursor: pointer;
margin-right: 16px;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 55%;
border: 1px solid white;
background-color: rgba(0, 0, 0, 0.6);
span {
  font-size: 25px;
  color: white;

}


`
const GroupWatchButton = styled(AddButton)`
 background: rgb(0, 0, 0);
`

const Subtitles = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249,249,249);
`