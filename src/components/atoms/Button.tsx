"use client"
import React from "react"
import styles from "./button.module.css"

interface Props {
    textButton: string;
    typeButton?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
    btnStyle?: string;
    disabled?: boolean;
}



const Button = ({ textButton, typeButton = "submit", onClick, btnStyle, disabled = false }: Props) => {
    
    const buttonClass = `${styles.btn} ${btnStyle ? styles[btnStyle] : ''}`;
    return (
        <button type={typeButton} onClick={onClick} className={buttonClass} disabled={disabled}>
            {textButton}
        </button>
    )
}

export default Button;