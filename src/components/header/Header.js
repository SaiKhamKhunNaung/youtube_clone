import React,{useState} from 'react'
import './Header.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import YoutubeSearchedForSharpIcon from '@mui/icons-material/YoutubeSearchedForSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
// import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function Header() {

  const [inputSearch, setInputSearch] = useState('');

  function getInput(event) {
    setInputSearch(event.target.value)
  }
  return (
      <div className='header'>
        <div className='header__left'>
          <MenuSharpIcon />
        <Link to="/">
          <img
              className='header__logo'
              src="/YTlogo.png"
          />
        </Link>
        </div>  
        <div className='header__input'> 
        <input value={inputSearch} onChange={getInput} type='text' placeholder='Search' />
        <Link to={`/search/${inputSearch}`}>
             <YoutubeSearchedForSharpIcon className='header__inputButton'/>
        </Link>
        </div>    
        <div className='header__right'>
          <VideoCallSharpIcon className='header__icon'/>
          <NotificationsSharpIcon className='header__icon'/>
          <Avatar
              alt="Ss"
              src="/obito.jpg"
              />
        </div>
    </div>
  )
}

export default Header