import React from 'react'
import styled from 'styled-components';
// import logo from '../images/logo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsHandballSharpIcon from '@mui/icons-material/SportsHandballSharp';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    background-color: ${({theme}) => theme.bgLighter};
    height: 100vh;
    color: ${({theme}) => theme.text};
    font-size: 13px;
    position: sticky;
    top: 0;
`;

const Wrapper = styled.div`
    padding: 18px 20px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 20px;
`;

// const Img = styled.div`
//     width: 50px;
//     height: 30px;
//     z-index: 0;  
// `;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    font-weight: 300;
    padding: 7.5px 0px;

    &: hover{
        background-color: ${({theme}) => theme.soft}
    }
`;

const Hr = styled.div`
    margin: 6px 0px;
    border: 0.5px solid ${({theme}) => theme.soft}; 
`;

const Login = styled.div``
const Button = styled.button`
    padding: 5px 18px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius:3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px
`;
const Title= styled.h2`
    font-size: 12px;
    font-weight: 500;
    color: #aaaaa;
    margin-bottom: 10px
`;

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
        <Link to="/" style={{textDecoration: "none", color:"inherit"}}>
            <Logo>
                {/* <Img src={logo}/> */}
                <YouTubeIcon />
                 YouTube
            </Logo>
        </Link>
            <Item>
                <HomeIcon sx={{ fontSize: 18 }}/>
                 Home
            </Item>
            <Item>
                <ExploreIcon sx={{ fontSize: 18 }}/>
                Explore
            </Item>
            <Item>
                <SubscriptionsIcon sx={{ fontSize: 18 }}/>
                Subscriptions
            </Item>
            <Hr />
            <Item>
                <LibraryAddOutlinedIcon sx={{ fontSize: 18 }}/>
                Library
            </Item>
            <Item>
                <HistoryOutlinedIcon sx={{ fontSize: 18 }}/>
                History
            </Item>
            <Hr/>
            <Login>
                Sign in to like videos, comment and scubscribe
                <Link to="signin" style={{textDecoration:"none"}}>
                <Button>
                    <AccountCircleOutlinedIcon sx={{ fontSize: 18}}/>SIGN IN
                </Button>
                </Link>
            </Login>
            <Hr/>
            <Title>Best of Youtube</Title>
            <Item>
                <LibraryMusicIcon sx={{ fontSize: 18 }}/>
                Music
            </Item>
            <Item>
                <SportsHandballSharpIcon sx={{ fontSize: 18 }}/>
                Sports
            </Item>
            <Item>
                <SportsEsportsIcon sx={{ fontSize: 18 }}/>
                Gaming
            </Item>
            <Item>
                <MovieCreationOutlinedIcon sx={{ fontSize: 18 }}/>
                Movies
            </Item>
            <Item>
                <NewspaperIcon sx={{ fontSize: 18 }}/>
                News
            </Item>
            <Item>
                <LiveTvIcon sx={{ fontSize: 18 }}/>
                Live
            </Item>
            <Hr/>
            <Item>
                <SettingsOutlinedIcon sx={{ fontSize: 18 }}/>
                Settings
            </Item>
            <Item>
                <FlagOutlinedIcon sx={{ fontSize: 18 }}/>
                Report
            </Item>
            <Item>
                <HelpOutlineOutlinedIcon sx={{ fontSize: 18 }}/>
                Help
            </Item>
            <Item onClick={() => setDarkMode(!darkMode)}>
                <SettingsBrightnessOutlinedIcon sx={{ fontSize: 18 }}/>
                {darkMode ? 'Light' : 'Dark'} Mode 
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu
