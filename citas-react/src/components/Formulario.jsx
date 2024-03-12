import React from 'react';
import { useEffect, useState } from 'react';
import ErrorH from './ErrorH'; // Importar el componente de error
import { v4 as uuidv4 } from 'uuid'; // Importar la función uuidv4 para generar un ID único

// Definir el componente Formulario con destructuración de props
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  // Declarar estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [servicios, setServicios] = useState('');
  const [error, setError] = useState(false); // Estado para el manejo de errores

  // Efecto que se ejecuta cuando el estado 'paciente' cambia
  useEffect(() => {
    // Verificar si hay un paciente seleccionado
    if (Object.keys(paciente).length > 0) {
      // Si hay un paciente, establecer los valores del formulario según el paciente seleccionado
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setAlta(paciente.alta);
      setEmail(paciente.email);
      setServicios(paciente.servicios);
    } else {
      // Si no hay paciente seleccionado, imprimir un mensaje de consola
      console.log("no hay nada ");
    }
  }, [paciente]); // Dependencia del efecto: 'paciente'

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    // Prevenir el evento por defecto del formulario
    e.preventDefault();
    // Validación del formulario: comprobar si hay campos vacíos
    if ([nombre, propietario, email, alta, servicios].includes('')) {
      console.log('hay al menos un campo vacío');
      setError(true); // Establecer el estado de error a true
      return;
    }
    setError(false); // Establecer el estado de error a false

    // Crear objeto 'objetoPaciente' con los datos del formulario
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      servicios,
    };

    // Si hay un ID en 'paciente', significa que se está editando un paciente existente
    if (paciente.id) {
      // Asignar el ID al objetoPaciente
      objetoPaciente.id = paciente.id;
      console.log(objetoPaciente);
      console.log(paciente);

      // Actualizar el paciente en el estado de pacientes
      const pacientesActualizados = pacientes.map(pacienteState =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados); // Actualizar el estado de pacientes
      setPaciente({}); // Limpiar el estado de paciente después de la edición
    } else {
      // Si no hay un ID en 'paciente', significa que se está agregando un nuevo paciente
      // Asignar un nuevo ID utilizando uuidv4
      objetoPaciente.id = uuidv4();
      setPacientes([...pacientes, objetoPaciente]); // Agregar el nuevo paciente al estado de pacientes
      console.log("nuevo registro");
    }

    // Reiniciar los valores del formulario
    setNombre('');
    setPropietario('');
    setAlta('');
    setEmail('');
    setServicios('');
  };

  // Retornar el JSX del componente Formulario
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center mt-5'><span className="text-fuchsia-600">F</span>ormulario <span className="text-fuchsia-600">P</span>acientes</h2>
      <p className=' text-center text-xl mb-10'>
        Añade Pacientes y {''}
        <span className='text-fuchsia-600 font-bold  '>Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit} // Manejar el evento de envío del formulario
        action="" className='bg-white shadow-md rounded-xl pt-10 pb-5 px-5 mb-10 mx-5'>

        {/* Mostrar el componente ErrorH si hay un error */}
        {error && <ErrorH><p>Todos los campos son obligatorios</p></ErrorH>}

        {/* Campos del formulario */}
        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          <input
            id='mascota'
            type="text"
            placeholder=' Nombre de la mascota'
            className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
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
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)} />
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
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label htmlFor="Alta" className='block text-gray-700 uppercase font-bold'>
            Alta
          </label>
          <input
            id='alta'
            type="date"
            className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
            value={alta}
            onChange={(e) => setAlta(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label htmlFor="servicios" className='block text-gray-700 uppercase font-bold'>
            Servicios Prestados
          </label>
          <textarea
            id='servicios'
            type="text"
            className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
            placeholder='Describe los servicios'
            value={servicios}
            onChange={(e) => setServicios(e.target.value)} />
        </div>
        {/* Botón de envío del formulario */}
        <input
          className='bg-fuchsia-600 w-full p-3 mb-0 rounded-lg text-white font-bold uppercase hover:bg-fuchsia-800 cursor-pointer transition-all'
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          type="submit" />
      </form>
    </div>
  );
}

export default Formulario; // Exportar el componente Formulario