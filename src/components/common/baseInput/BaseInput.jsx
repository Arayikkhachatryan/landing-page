import { useContext } from "react"
import { ContactContext } from "../../main/main-contact-us/MainContactUs"
import "./BaseInput.scss"

const BaseInput = ({ type, pls, name }) => {
  const { setVal, reqData } = useContext(ContactContext);
    return <input className="base-input" 
                type={ type && type } 
                placeholder={ pls && pls } 
                value={ reqData[name] }
                onChange={ e => setVal([e.target.value, name]) }  />
}

export default BaseInput