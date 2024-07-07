import React from 'react'
import styled from 'styled-components'
import Image from '../images/ChannelLogo.png'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import Comments from '../components/Comments';
import Card from '../Card';
const Container =styled.div`
    display: flex;
    gap: 24px;
`;
const Content = styled.div`
    flex: 5;

`;
const Recommendation = styled.div`
    flex: 2;
`;
const VideoWrapper=styled.div`

`;

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ChannelInfo= styled.div`
    display: flex;
    gap: 20px;
`;
const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`;
const ChannelImage= styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;
const ChannelDetail= styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.text}
`;
const ChannelName= styled.span`
    font-weight: 500;
`;
const ChannelCounter= styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.textSoft};
    font-size: 12px;
`;
const Description= styled.p`
    font-size: 14px;
`;

const Title =styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme}) => theme.text};
`;
const Deatils = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Info = styled.span`
    color: ${({theme}) => theme.textSoft};
`;
const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({theme}) => theme.text};
`;
const Button= styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft}
`;



const Video = () => {
  return (
    <Container>
       <Content>
        <VideoWrapper>
            <iframe
                width="100%" 
                height="465"    
                src="https://www.youtube.com/embed/pFvWwFua6mw" 
                title="YouTube video player"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
            <Title>Test Video</Title>
            <Deatils>
                <Info>
                    3M views * 2 years ago
                </Info>
                <Buttons>
                    <Button><ThumbUpAltOutlinedIcon/> 12k</Button>
                    <Button><ThumbDownOutlinedIcon /> Dislike</Button>
                    <Button><ReplyOutlinedIcon/> Share</Button>
                    <Button><ScheduleOutlinedIcon/> Watch Later</Button>
                </Buttons>
            </Deatils>
            <Hr />
            <Channel>
                <ChannelInfo>
                    <ChannelImage src={Image} />
                    <ChannelDetail>
                        <ChannelName>JavaScript Originals</ChannelName>
                        <ChannelCounter>987K Subscribers</ChannelCounter>
                        <Description>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur doloremque nam autem aliquam odit voluptas corrupti maiores quas ducimus omnis cumque dolor, labore eaque vel fugiat in? Deleniti, iure?
                        </Description>
                    </ChannelDetail>
                </ChannelInfo>

                <Subscribe>SUBSCRIBE</Subscribe>
            </Channel>
            <Hr />
            <Comments />
        </VideoWrapper>
       </Content>
       <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        </Recommendation>
    </Container>
  )
}

export default Video
