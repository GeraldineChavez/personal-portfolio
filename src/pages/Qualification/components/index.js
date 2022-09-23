import React from 'react'
import Content from './Content'

const QualificationSection = ({children}) => {
  return (
    <section className="qualification section">
      {children}
    </section>
  )
}

QualificationSection.Content = Content;

export default QualificationSection