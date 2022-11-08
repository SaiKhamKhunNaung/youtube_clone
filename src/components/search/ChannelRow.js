import React from 'react'
import Avatar from '@mui/material/Avatar';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import './ChannelRow.css'

function ChannelRow({image,channel,subs,noOfVideos,description,verified}) {
  return (
      <div className='channelRow'>
          <Avatar className="channelRow__logo"
          alt={channel} src={image} />
          <div className='channelRow__text'>
              <h4>{channel} { verified && <CheckCircleOutlineSharpIcon/>}</h4>
              <p>{subs} subscriberes • {noOfVideos} videos</p>
              <p>{description}</p>
          </div>
    </div>
  )
}

export default ChannelRow