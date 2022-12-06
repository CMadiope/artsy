import React from 'react'
import { useState } from 'react'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'

const Collapsible = (props) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className='py-4'>
      <div onClick={toggle} className='cursor-pointer font-medium flex items-center justify-between'>
        {props.label} {open? <AiOutlineUp/>: <AiOutlineDown/>}
      </div>
      {open && (
        <div>
          {props.children}
        </div>
      )}
    </div>
  )
}

export default Collapsible