import React from 'react'
import Pacientes from './Pacientes'
import { useEffect } from 'react'


const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {


  
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? (
        <>
        
           <h2 className='font-black text-3xl text-center mt-5'>Listado Pacientes</h2>
    <p className=' text-center text-xl mb-10'>
        Admninistra tus  {''}
        <span className='text-indigo-600 font-bold '>Pacientes y Citas</span>
      </p>


     
    {pacientes.map( (paciente) => {

      return(
        
        <Pacientes
        //prop va a ser 1er paciente y el 2do'paciente' es del parentesis de la funcion va a hacer las veces de index 
        pacientes={paciente}
        key={paciente.id}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      )

    })}
      </>
      ):(  
        <>
        <h2 className='font-black text-3xl text-center mt-5'>Listado Pacientes</h2>
      <p className=' text-center text-xl mb-10'>
          Admninistra tus  {''}
          <span className='text-indigo-600 font-bold '>Pacientes y Citas</span>
        </p>
        </>
        )}


   
      



  </div>
  )
}

export default ListadoPacientes
