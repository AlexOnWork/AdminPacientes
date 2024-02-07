import React from 'react'

const Formulario = () => {
  return (

    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center mt-5'>Listado Pacientes</h2>
      <p className=' text-center text-xl mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold  '>Administralos</span>
      </p>
      <form action="" className='bg-white shadow-md rounded-xl pt-10 pb-5 px-5 mb-10 '>
        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
            </label>
          <input 
          id='mascota'
          type="text"
           placeholder=' Nombre de la mascota' 
           className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
           />
        </div>
        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
            Nombre Propietario
            </label>
          <input 
          id='propietario'
          type="text"
           placeholder=' Nombre del Propietario' 
           className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
           />
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
            Email
            </label>
          <input 
          id='email'
          type="email"
           placeholder=' Email contacto Propietario' 
           className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
           />
        </div>
        <div className='mb-5'>
          <label htmlFor="Alta" className='block text-gray-700 uppercase font-bold'>
           Alta
            </label>
          <input 
          id='alta'
          type="date"
           className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
           />
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>
          Sintomas
            </label>
          <textarea
          id='sintomas'
          type="text"
           className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
           placeholder='Describe los sintomas'
           />
        </div>
        <input 
        className='bg-indigo-600 w-full p-3 mb-0 rounded-lg text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all'
        value='agregar paciente'
        type="submit" />
        
      </form>
    </div>
  )
}

export default Formulario

