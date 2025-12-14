import React from 'react'
import lightPurple from "../../assets/big purple background svg.svg"
import blueGradient from "../../assets/little blue gradient svg.svg"
import blackSvg from "../../assets/black svg.svg"

const BackgroundSvg = () => {
  return (
    <div className="relative min-w-[1100px] md:min-w-[1500px] lg:min-w-[2100px]">
      <img className="absolute left-1/2 -translate-x-1/2 md:-top-20" src={lightPurple} alt="Light purple background"/>
      <img className="absolute left-1/2 -translate-x-1/2 -top-40 blur-[85px]" src={blueGradient} alt="blue gradient svg"/>
      <img className="absolute left-1/2 -translate-x-1/2 top-68 blur-2xl" src={blackSvg} alt="black svg"/>
    </div>
  )
}
export default BackgroundSvg
