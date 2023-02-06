import {Header} from './components/Header';
import {Formulario} from './components/Formulario';
import {ListadoPacientes} from './components/ListadoPacientes';
import {useState, useEffect} from 'react';
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
   
  useEffect(() => {
     const obtnerPacientes = JSON.parse(localStorage.getItem('pacientes') ?? []);
      if(obtnerPacientes){
        setPacientes(obtnerPacientes);
      }
   },[]);

   useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
   },[pacientes]);
  
   const eliminarPaciente = (id) => {
    const nuevosPacientes = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(nuevosPacientes);
    
  }
  return (
    <div className='container mx-auto mt-20'>
      <Header
      />
      <div className='mt-12 md:flex'>
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App