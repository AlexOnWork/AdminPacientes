import React from 'react'
import { useEffect, useState } from 'react'
import ErrorH from './ErrorH';
import { v4 as uuidv4 } from 'uuid'; // Importa la función uuidv4 para generar un ID único
const Formulario = ({pacientes,setPacientes}) => {


  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [id, setId] = useState('');


  const[error,setError]=useState(false);

  const handleSubmit = (e) => {
    //prevenimos el evento por default de el from 
    e.preventDefault();
    //validacion del formulario
  if([nombre,propietario,email,alta,sintomas].includes('')){
    console.log('hay almenos un campo vacio');
    setError(true)
    return;
  } 
  setError(false)


  //object paciente
  const objetoPaciente ={
    nombre,
    propietario,
    email,
    alta,
    sintomas,
    id: uuidv4()
  }
  //lllenamos paciente con una copia de lo que hay en paciente y le agregamos el obejto nuevo 
  setPacientes([...pacientes,objetoPaciente])
    console.log("Enviando Formulario")

    //reiniciar el form
    setNombre('')
    setPropietario('')
    setAlta('')
    setEmail('')
    setSintomas('')
  }


  return (

    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center mt-5'>Listado Pacientes</h2>
      <p className=' text-center text-xl mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold  '>Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        action="" className='bg-white shadow-md rounded-xl pt-10 pb-5 px-5 mb-10 mx-5'
        
        >

          {error && <ErrorH><p>Todos los campos son obligatorios</p></ErrorH>}
        
        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          <input
            id='mascota'
            type="text"
            placeholder=' Nombre de la mascota'
            className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'

            //e es el evento y el e.target.value es lo que estamops introduciendo en el input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}

          />
        </div>
        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
            Nombre Propietario
          </label>
          <input
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
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
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
            id='email'
            type="text"
            placeholder=' Email contacto Propietario'
            className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="Alta" className='block text-gray-700 uppercase font-bold'>
            Alta
          </label>
          <input
                 value={alta}
                 onChange={(e)=>setAlta(e.target.value)}
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
                 value={sintomas}
                 onChange={(e)=>setSintomas(e.target.value)}
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

