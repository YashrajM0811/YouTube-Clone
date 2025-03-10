import React from 'react'
import styled from 'styled-components'
import Image from '../images/ChannelLogo.png';
const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;
const Avatar = styled.img`    
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme}) => theme.text}
`;
const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`;
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px;

`;
const Text = styled.span`
    font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={Image}/>
      <Details>
        <Name>John Dev <Date>1 day ago</Date></Name>
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae nobis sit provident rem, reprehenderit odit eaque similique cumque perspiciatis velit dolorem nihil quod delectus. Laudantium tempora enim odio reprehenderit libero vel iure aspernatur doloribus facilis voluptas nam, quisquam est?
        </Text>
      </Details>
    </Container>
  )
}



export default Comment
