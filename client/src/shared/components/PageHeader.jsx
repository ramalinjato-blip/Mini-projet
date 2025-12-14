import React from 'react'
import {Plus} from "lucide-react";

const PageHeader = ({title, mainButton}) => {
  return (
    <header className="flex justify-between">
      <h1>{title}</h1>
      <div className="flex items-center gap-2">
        {mainButton.map(button => (
          <button className={`button-icon ${button.index ? "button-primary" : "button-secondary"} `}>
            <Plus size={18}/>
            {button.text}
          </button>
        ))}
      </div>
    </header>
  )
}
export default PageHeader
