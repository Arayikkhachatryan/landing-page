import "./BaseTextArea.scss"
import { useContext } from 'react'
import { ContactContext } from "../../main/main-contact-us/MainContactUs";

const BaseTextArea = ({ pls, name }) => {
  const { setVal, reqData } = useContext(ContactContext);
  return <textarea value={ reqData[name] } onChange={e => setVal([e.target.value, name])} placeholder={ pls && pls } className="base-textarea"></textarea>
}

export default BaseTextArea