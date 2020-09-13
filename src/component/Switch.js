import React, { useRef } from 'react';
import './switch.css';

function Switch({checked, setChecked, setDarkMode}) {
    const ref = useRef(null);

    const changeColor = () => {
      setDarkMode(ref.current.checked);
      setChecked(ref.current.checked);
      console.log(ref.current.checked);
    }
  
    return (
        <div className="dark-mode">
          <p className="dark-mode-title">Dark Mode</p>
          <input ref={ref} checked={checked} onChange={changeColor} type="checkbox" className="checkbox" id="checkbox" />
          <label className="switch" htmlFor="checkbox"></label>
        </div>
    );
}

export default Switch;