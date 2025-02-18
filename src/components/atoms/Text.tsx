"use client"
import React, { JSX } from 'react'

interface TextProps {
  text: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"; 
  styleText?: string; 

}

const Text = ({ text, type = "p", styleText }: TextProps) => {
  // Renderizamos el tipo de etiqueta según lo que venga en 'type'
  const Tag = type as keyof JSX.IntrinsicElements;

  return (
    <Tag className={styleText} >
      {text}
    </Tag>
  )
}

export default Text;
