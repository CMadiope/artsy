import React, { useState } from "react";
import { useRanger } from "react-ranger";

const MultiRangeSlider = () => {
  const [values, setValues] = useState([20, 150]);
  const { getTrackProps, handles } = useRanger({
    min: 0,
    max: 300,
    stepSize: 5,
    values,
    onChange: setValues,
  });

  return (
    <div className='w-38 pt-8'>
      <div
        className='h-[4px] bg-[#dd] shadow-lg border-[2px] bg-gray-700'
        {...getTrackProps}
      >
        {handles.map(({ getHandleProps }) => (
          <div
            className='w-[14px] h-[14px] outline-none rounded-full border-2'
            {...getHandleProps}
            key={Math.random(1 * 1000)}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiRangeSlider;
