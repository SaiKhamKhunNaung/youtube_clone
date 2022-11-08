import React from 'react'
import './SidebarRow.css'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
function SidebarRow({selected,Icon,title}) {
  return (
      <div className={`sidebarRow ${selected && 'selected'}`}>
          <Icon className='sidebarRow__icon'/>
          <h4 className='sidebarRow__title'>{title}</h4>
      </div>
  )
}

export default SidebarRow