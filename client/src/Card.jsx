import React from 'react'
import styled from 'styled-components'
import Web from "./images/web.png"
import ChannelLogo from './images/ChannelLogo.png'
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => props.type === "sm" ? "10px": "45px"};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => props.type === "sm" ? "120px" : "202px"};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: white;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`
  
`;

const ChannelName = styled.h2`
font-size: 14px;
color: ${({ theme }) => theme.textSoft};
margin: 8px 0px; 
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft}
`;

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration: "none"}}>
    <Container type={type}>
      <Image type={type} src={Web} />
      <Details type={type}>
        <ChannelImage  type={type} src={ChannelLogo}/>
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>JavaScript Originals</ChannelName>
          <Info>660,980 views * 1 Day Ago</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card
