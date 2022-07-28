import React, {useRef} from 'react';
import '../styles/calculator.css'

export default function Calculator({res, handleOnClickDigit, handleReset, handleChangeSign, handleOperator, handlePercent}) {
    


    return (
        <div className="calculator">
            <div className="display" style={{fontSize: res.length > 4 ? 40 : 51.2}}>{res}</div>
            <div className="buttons-grid">
                <div className="left-part">
                    <div className="top-part">
                        <button className='top-buttons reset' onClick={handleReset}>AC</button>
                        <button className='top-buttons' onClick={handleChangeSign}>+/-</button>
                        <button className='top-buttons' onClick={handlePercent}>%</button>
                    </div>
                    <div className="bottom-part" onClick={handleOnClickDigit}>
                        <button className='digit'>7</button>
                        <button className='digit'>8</button>
                        <button className='digit'>9</button>
                        <button className='digit'>4</button>
                        <button className='digit'>5</button>
                        <button className='digit'>6</button>
                        <button className='digit'>1</button>
                        <button className='digit'>2</button>
                        <button className='digit'>3</button>
                        <button className='digit span-two'>0</button>
                        <button className='digit'>.</button>
                    </div>
                </div>
                <div className="right-part" onClick={handleOperator}>
                <button className='right-col'>/</button>
                <button className='right-col'>x</button>
                <button className='right-col'>-</button>
                <button className='right-col'>+</button>
                <button className='right-col'>=</button>
                </div>
            </div>
        </div>
    )
}