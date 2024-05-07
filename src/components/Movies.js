import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for you</h4>
      <Content>
        <Wrap>
            <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg"/>
        </Wrap>
        <Wrap>
            <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/08A93C557C046ED8E088F6822BB179BDB28362D2DA214825E1FCC06DCC65EE24/scale?width=800&aspectRatio=1.78&format=jpeg"/>
        </Wrap>
        <Wrap>
            <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg"/>
        </Wrap>
        <Wrap>
            <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg"/>
        </Wrap>
        <Wrap>
            <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg"/>
        </Wrap>
        <Wrap>
            <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/08A93C557C046ED8E088F6822BB179BDB28362D2DA214825E1FCC06DCC65EE24/scale?width=800&aspectRatio=1.78&format=jpeg"/>
        </Wrap>
        <Wrap>
            <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg"/>
        </Wrap>
        <Wrap>
            <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg"/>
        </Wrap>

      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));

`
const Wrap = styled.div`
   border-radius: 10px;
   cursor: pointer;
   overflow: hidden;
   border: 3px solid rgba(249, 249, 249, 0.1);
   box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s; 

 img{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
 &:hover{
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
 }
`