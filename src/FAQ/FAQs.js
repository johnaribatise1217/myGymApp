import React, { useState } from 'react'
import '../Pages/Home/home.css'
import { faqData } from '../PageLinks'
import SectionHeader from '../SectionHeader/SectionHeader'
import {FaQuestion} from 'react-icons/fa'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const FAQs = () => {
  return (
    <section className='faqs'>
        <div className="container faq-con">
            <SectionHeader icon={<FaQuestion/>} title="Frequently Asked Questions"/>
            <div className="faqs-wrapper">
                {faqData.map((data) => {
                    const {id, question, answer} = data
                    return (
                        <Faq key={id} id={id} question={question} answer={answer}/>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

const Faq = ({id,question, answer}) => {
    const [isShowAnswer, setShowAnswer] = useState(false)

    const showAnswer = (index) => {
        if(isShowAnswer === index){
            return setShowAnswer(null)
        }
        setShowAnswer(prev => !prev)
    }

    return(
        <article className='faq' key={id} onClick={() => showAnswer(id)}>
            <div>
                <h4>{question}</h4>
                <button className="faq-icon">
                    {
                        isShowAnswer ? <AiOutlineMinus/> : <AiOutlinePlus/>  
                    }
                </button>
            </div>
            {
                isShowAnswer && <p>{answer}</p>
            }
        </article>
    )
}

export default FAQs
