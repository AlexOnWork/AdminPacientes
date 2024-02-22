import React from 'react'

const Pacientes = ({pacientes,setPaciente,eliminarPaciente}) => {

  //le aplicamos destructuring a pacientes
  const{nombre,propietario,email,alta,sintomas,id}=pacientes

    const handleEliminar = () => {
      console.log("eliminando....")
      const respuesta = confirm('Deseas eliminar este paciente?')

      if(respuesta) {
        eliminarPaciente(id)
      }
    }

  

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
    <div 
    className='flex  justify-between'
    >
      <button type='button'
      className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-xl'
      
      onClick={()=>setPaciente(pacientes)}
      >Editar</button>
      <button type='button'
      className='py-2 px-8 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-xl ml-5'
      onClick={handleEliminar}
      >Eliminar</button>
    </div>
  </div>
  )
}

export default Pacientes
