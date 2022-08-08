import BaseInput from "../../../common/baseInput/BaseInput";
import BaseTextArea from "../../../common/baseTextArea/BaseTextArea";
import BaseButton from "../../../common/baseButton/BaseButton";
import { useContext } from "react"
import { ContactContext } from "../MainContactUs";

const ContactForm = () => {
  const { sendReq } = useContext(ContactContext);
    return (
        <form className="main-contact-us-form">
            <div className="main-contact-us-form-titles">
                <h1 className="main-contact-us-form-titles-title">
                    Contact Us
                </h1>
                <h4 className="main-contact-us-form-titles-subtitle">
                    Get in touch with us for a free estimation and a consultation at no cost. No sales agent, you'll get to <br />talk to the developers in charge.
                </h4>
            </div>
            <div className="main-contact-us-form-fileds">
               <div className="main-contact-us-form-fileds-row">
                    <BaseInput type="text" pls="First Name" name="firstName" />
                    <BaseInput type="text" pls="Phone Number" name="phone" />
               </div>
               <BaseInput type="text" pls="Email Address" name="email" />
               <BaseTextArea pls="First Name" name="textArea" />
            </div>
            <BaseButton text="Free Estimation" type="button" sendReq={ sendReq } />
        </form>
    )
}

export default ContactForm;