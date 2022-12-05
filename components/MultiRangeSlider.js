import React, {useState} from 'react';
import { TwoThumbInputRange } from "react-two-thumb-input-range";

const MultiRangeSlider = () => {
  const [value, setValue] = useState([0, 1000])
  const onValueChange =(values) => {
    setValue(values)
  }
  return (
    <div className='w-38'>
      <TwoThumbInputRange 
        onChange={onValueChange} values={value} min={0} max={1000}
      className='w-32'/>
    </div>
  )
}

export default MultiRangeSlider