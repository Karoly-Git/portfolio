import { React } from 'react'
import Form from './Form'

import { AiOutlineClose as CloseBtn } from 'react-icons/ai'

export default function ContactForm(props) {

    return (
        <div className={props.isFormHidden ? "contact hidden" : "contact"}>
            <div className="headline-box">
                <h2>How can I help?</h2>
                <CloseBtn className='close-btn' onClick={props.hideForm} />
            </div>
            <p>
                Please contact me for any questions you have, I will get back to you shortly.
            </p>
            <Form />
        </div>
    )
}
