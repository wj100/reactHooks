import React ,{useState} from 'react'

export default function(){
    const [variable,setVariable]=useState('初始值')
    return (
        <div className='div'>
            <p>usestate：</p>
            <span>{variable}</span>
            <button onClick={()=>setVariable('通过setState改变了')}>change</button>
        </div>
    )
}