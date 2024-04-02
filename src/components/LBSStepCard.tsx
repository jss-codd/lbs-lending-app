import React from 'react'
import Image from 'next/image'

const LBSStepCard = ({ step }:any) => {
    return (
        <div className='lbs_step_card_container'>
            <Image 
                alt="step card"
                height={200}
                width={200}
                src={step.icon}
                className='lbs_step_card_icon'
            />
            <p className='lbs_step_card_title'>
                {step.title}
            </p>
            <p className='lbs_step_card_description'>
                {step.description}
            </p>
        </div>
    )
}

export default LBSStepCard