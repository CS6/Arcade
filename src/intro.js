import { cloneElement, useState } from "react"
// import { Footer } from "@cs6/branding"

export default function Intro({ children }) {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      {clicked && children}
      {/* {cloneElement(children, { ready: clicked })} */}
      <div className={`fullscreen bg ready"} ${clicked && "clicked"}`} >
        <a onClick={() => setClicked(true)}><h1 class="close" children="<Click>" /> </a>
        {/* <a  className="Enter SimSun"  href="#" onClick={() => setClicked(true)}>
           <h2> {"請您稍等一會.... 然後點我"}</h2>
          </a> */}
      </div>

    </>
  )
}
