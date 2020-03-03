import React from 'react'


const Box = (props) => {
  let classes = [`box box${props.id}`];
  return (
    <div className={classes}>
      <h2 className="box__heading">{props.heading}</h2>
      <p className="box__text">{props.text}</p>
      <img className="box__img" src={props.logoImg} alt="" />
    </div>
  )
}

export default Box
