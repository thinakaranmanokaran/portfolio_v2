import React, { useState } from 'react'

const ToggleSwich = () => {

    const [ toggled, setToggled ] = useState(false);

    function switchON() {
        setToggled(!toggled);
    }

  return (
    <div>
        <div onClick={switchON} className={`w-10 h-6 rounded-full cursor-pointer transition-all duration-500 ${ toggled ? 'bg-light' : 'bg-light50' } `}>
            <div className={`w-[20px] h-[20px]  rounded-full duration-400 translate-y-[2px] transition-all ${toggled ? 'ml-[18px]  bg-skyblue' : 'ml-[1px] bg-[#0c0c0c90] ' } `} ></div>
        </div>
    </div>
  )
}

export default ToggleSwich