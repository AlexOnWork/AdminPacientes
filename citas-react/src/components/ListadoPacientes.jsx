
import React from 'react';
import Pacientes from './Pacientes'; // Importar el componente Pacientes
import { useEffect } from 'react';

// Definir el componente ListadoPacientes con destructuración de props
const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  // Retornar JSX del componente
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {/* Condicional para renderizar el listado de pacientes */}
      {pacientes && pacientes.length ? (
        <>
          {/* Título y descripción del listado */}
          <h2 className='font-black text-3xl text-center mt-5'><span className="text-fuchsia-600">L</span>istado  <span className="text-fuchsia-600">P</span>acientes</h2>
          <p className=' text-center text-xl mb-10'>
            Admninistra tus  {''}
            <span className='text-fuchsia-600 font-bold '>Pacientes y Citas</span>
          </p>

          {/* Mapear cada paciente y renderizar el componente Pacientes */}
          {pacientes.map((paciente) => {
            return (
              <Pacientes
                pacientes={paciente} // Propiedades del paciente
                key={paciente.id} // Clave única para cada paciente
                setPaciente={setPaciente} // Función para establecer un paciente
                eliminarPaciente={eliminarPaciente} // Función para eliminar un paciente
              />
            );
          })}
        </>
      ) : (
        <>
          {/* Título y descripción si no hay pacientes */}
          <h2 className='font-black text-3xl text-center mt-5'><span className="text-fuchsia-600">L</span>istado <span className="text-fuchsia-600">P</span>acientes</h2>
          <p className=' text-center text-xl mb-10'>
            Admninistra tus  {''}
            <span className='text-fuchsia-600 font-bold '>Pacientes y Citas</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes; // Exportar el componente ListadoPacientes
