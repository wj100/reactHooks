import React,{useRef,useEffect} from 'react'

export default function(){
    const ref=useRef()
   
    useEffect(() => {
        console.log('ref--------------?', ref.current);
    }, [])
    return (
        <div className='div'>
            <p>useRef:</p>
            <div ref={ref}>
                xxxx
            </div>
        </div>
    )
}