import { useState, useEffect} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  //el useState tiene un array porque le voy a pasar  un array
  const [pacientes,setPacientes] = useState( JSON.parse(localStorage.getItem('listaPacientes')) || []);
  const [paciente,setPaciente] =useState({});



  //cada vez que haya un cambio en  pacientes s eejecuta useEffect
  useEffect(()=>{
localStorage.setItem('listaPacientes',JSON.stringify(pacientes));
  },[pacientes]);

  const eliminarPaciente =(id) => {
   
    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id)
    console.log(pacientesActualizados)
    setPacientes(pacientesActualizados)
  }

  return (
    <>
      <div className="container mx-auto mt-16">
        <Header/>
        <div className='mt-12  mx-auto  md:flex'>
          <Formulario 
                pacientes={pacientes}
                setPacientes={setPacientes}
                paciente={paciente}
                setPaciente={setPaciente}
          />
          <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
    </>
  )
}

export default App
