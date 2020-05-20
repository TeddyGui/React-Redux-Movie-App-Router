import React from 'react'

function StarsR({count , setRate = ()=>{} } ) {
    let stars=[]
    for (let i=0;i<5;i++)
    {   
        if(i<count)
        stars.push(<span className='star1' onClick={()=> setRate(i)}  >★</span>)
        else
        stars.push(<span className='star2' onClick={()=> setRate(i+1)}   >☆</span>)

    }
    return (
       
        <div className="Stars">
        {stars}
        </div>
    )
}

export default StarsR
