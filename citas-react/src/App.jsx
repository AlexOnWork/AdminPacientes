import { useState } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  //el useState tiene un array porque le voy a pasar  un array
  const [pacientes,setPacientes] = useState([])


  return (
    <>
      <div className="container mx-auto mt-16">
        <Header/>
        <div className='mt-12  mx-auto  md:flex'>
          <Formulario 
                pacientes={pacientes}
                setPacientes={setPacientes}
          />
          <ListadoPacientes
          pacientes={pacientes}
          />
        </div>
      </div>
    </>
  )
}

export default App
