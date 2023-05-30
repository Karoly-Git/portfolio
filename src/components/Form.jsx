import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FiSend as SendIcon } from 'react-icons/fi'

export default function Form() {
    const schema = yup.object().shape({
        senderName: yup.string().required('Name is required!'),
        senderPhone: yup.number(),
        subject: yup.string(),
        senderEmail: yup.string().email('It doesn\'t seem to be a valid email address!').required('Email is required!'),
        text: yup.string().required('Message is required!'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        const result = await fetch('http://localhost:8000/sendemail', {
            method: "POST",
            mode: 'no-cors',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(data),
        });

    };

    return (
        <form method="POST" action="/sendemail" onSubmit={handleSubmit(onSubmit)}>
            {errors.senderName && <span><p className='error'>{errors.senderName?.message}</p></span>}
            <input type="text" placeholder="Name*" name="sender_name" {...register('senderName')}></input>

            <input type="tel" placeholder="Phone" name="sender_phone" {...register('senderPhone')}></input>

            <input type="text" placeholder="Subject" name="subject" {...register('subject')}></input>
            {errors.senderEmail && <span><p className='error'>{errors.senderEmail?.message}</p></span>}

            <input type="email" placeholder="Email*" name="sender_email" {...register('senderEmail')}></input>
            {errors.text && <span><p className='error'>{errors.text?.message}</p></span>}

            <textarea placeholder="Type your message here*" name="message" {...register('text')}></textarea>

            <button className='download-link' type="submit" name="submit">
                <SendIcon className='send-icon' />
                Send message
            </button>
        </form>
    )
}
