import React from 'react'
import './SearchPage.css'
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
  return (
      <div className='searchPage'>
          <div className='searchPage__filter'>
              <TuneSharpIcon />
              <h2>FILTER</h2>
          </div>

          <hr />
          
          <ChannelRow
              image ="/obito.jpg"
              channel="Obito"
              verified
              subs="200K"
              noOfVideos={200}
              description="Now Lets Dive Deep Into Life Of Obito Uchiha"
          />

          <hr />
          <VideoRow
              views="1.4K"
              subs="64K"
              description="Obito Uchiha The One Who Wanted to Become A Hokage"
              timestamp="2 days ago"
              channel="Obito"
              title="Obito Uchiha The One Who Wanted to Become A Hokage"
              image="/obito.jpg"
          />
          <VideoRow
              views="1.4K"
              subs="64K"
              description="Obito Uchiha The One Who Wanted to Become A Hokage"
              timestamp="2 days ago"
              channel="Obito"
              title="Obito Uchiha The One Who Wanted to Become A Hokage"
              image="/obito.jpg"
          />
          <VideoRow
              views="1.4K"
              subs="64K"
              description="Obito Uchiha The One Who Wanted to Become A Hokage"
              timestamp="2 days ago"
              channel="Obito"
              title="Obito Uchiha The One Who Wanted to Become A Hokage"
              image="/obito.jpg"
          />
          <VideoRow
              views="1.4K"
              subs="64K"
              description="Obito Uchiha The One Who Wanted to Become A Hokage"
              timestamp="2 days ago"
              channel="Obito"
              title="Obito Uchiha The One Who Wanted to Become A Hokage"
              image="/obito.jpg"
          />
      </div>
  )
}

export default SearchPage