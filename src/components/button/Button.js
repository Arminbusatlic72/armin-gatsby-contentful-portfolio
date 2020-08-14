import React from 'react'
import projectStyles from './button.module.scss'
const Button = (props) => {
    return <a className={projectStyles.btn__rounded} href={props.link} target="_blank" rel="noopener noreferrer">{props.children}</a>
}
export default Button