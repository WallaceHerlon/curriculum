import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'Tecnólogo',
    subject: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    institution: 'UNINOVE (Universidade Nove de Julho)'
  },
  {
    degree: 'Técnico',
    subject: 'Técnico em Eletroeletrônica',
    institution: 'SENAI (Serviço Nacional de Aprendizagem Industrial)'
  },
  {
    degree: 'Técnico',
    subject: 'Técnico em Eletrônica',
    institution: 'SEQUENCIAL (Centro Técnico Profissionalizante Sequencial)'
  },
]

const Education = () => {
  return (
    <div>
      <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>Formação Acadêmica</h3>
      <div className='mx-6 md:mx-0 md:grid md:grid-cols-3 leading-none bg-white rounded-lg shadow-lg'>
        {degrees.map((degree, i) => (
          <EducationItem key={'i' + i} degree={degree} />
        ))}
      </div>
    </div>
  )
}
export default Education