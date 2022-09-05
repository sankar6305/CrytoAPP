import React from 'react'

const Component = (props) => {
  return (
    <div className='Component'> 
      <div>{ props.brand.id }</div>
      <div>{props.brand.name}</div>
      <div> </div>
      <div>current_price</div>
      <div>market_cap</div>
        <div>Change in a Day </div>
        <div>Total Value </div>
        <div><b><span>&#8593;</span></b>   Maximum in a day </div>
        <div>minimum in a day </div>
    </div>
  )
}

export default Component;
