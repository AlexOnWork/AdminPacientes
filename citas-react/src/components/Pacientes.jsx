import React from 'react'

const Pacientes = ({pacientes}) => {

  //le aplicamos destructuring a pacientes
  const{nombre,propietario,email,alta,sintomas,id}=pacientes


  return (
   
    <div className='mx-5 my-10 bg-white shadow-md rounded-xl px-5 py-10'>
    <p className='font-bold  mb-3 text-gray-700 uppercase'>Nombre:{' '}
    <span className='font-normal normal-case ' >{nombre}</span>
    </p>

    <p className='font-bold  mb-3 text-gray-700 uppercase'>Propietario:{' '}
    <span className='font-normal normal-case ' >{propietario}</span>
    </p>

    <p className='font-bold  mb-3 text-gray-700 uppercase'>Email:{' '}
    <span className='font-normal normal-case ' >{email}</span>
    </p>

    <p className='font-bold  mb-3 text-gray-700 uppercase'>Alta:{' '}
    <span className='font-normal normal-case ' >{alta}</span>
    </p>

    <p className='font-bold  mb-3 text-gray-700 uppercase'>Sintomas:{' '}
    <span className='font-normal normal-case ' >{sintomas}</span>
    </p>
  </div>
  )
}

export default Pacientes
