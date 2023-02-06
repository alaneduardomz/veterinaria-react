import React from 'react'
import {useState, useEffect} from 'react'
import {Error} from './Error'

function Formulario({setPacientes, pacientes, paciente, setPaciente}) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }else{
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
    }
  }, [paciente])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Todos los campos son obligatorios');
      setError(true);
      return;
    }else{
      setError(false);
      const objPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        // id: generarId()
      }
      if(paciente.id){
        objPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState);
        setPacientes(pacientesActualizados);
        setPaciente({});
        
        
      }else{
        objPaciente.id = generarId();
        setPacientes([...pacientes, objPaciente])  
      }
      
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
    }
  }

  return (
    
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-center text-3xl'>Seguimiento de pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10 font-bold'>
          Añade Pacientes y <span className='text-indigo-600'>Administralos</span>         
        </p>
        <form
            onSubmit={handleSubmit} 
            action="" 
            className='bg-white shadow-md rounded-lg py-10 px-10'>
            {error &&  <Error 
              mensaje='Todos los campos son obligatorios'
            />}
          <div className='mb-5'>
              <label 
                htmlFor="mascota" 
                className='block text-gray-700 uppercase font-bold'>Nombre de la mascota
              </label>
              <input
                id='mascota' 
                type="text"
                placeholder='Nombre de la mascota'
                className='border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent' 
                value={nombre}
                onChange = {(e) => setNombre(e.target.value) }
              />
          </div>

          <div className='mb-5'>
              <label 
                htmlFor="propietario" 
                className='block text-gray-700 uppercase font-bold'>Nombre del propietario
              </label>
              <input
                id='propietario' 
                type="text"
                placeholder='Nombre del propietario'
                className='border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent' 
                value={propietario}
                onChange = {(e) => setPropietario(e.target.value) }
              />
          </div>

          <div className='mb-5'>
              <label 
                htmlFor="email" 
                className='block text-gray-700 uppercase font-bold'>E-mail de contacto
              </label>
              <input
                id='email' 
                type="email"
                placeholder='E-mail'
                className='border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent' 
                value={email}
                onChange = {(e) => setEmail(e.target.value) }
              />
          </div>

          <div className='mb-5'>
              <label 
                htmlFor="alta" 
                className='block text-gray-700 uppercase font-bold'>Alta
              </label>
              <input
                id='alta' 
                type="date"
                className='border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent' 
                value={fecha}
                onChange = {(e) => setFecha(e.target.value) }
              />
          </div>

          <div className='mb-5'>
              <label 
                htmlFor="text" 
                className='block text-gray-700 uppercase font-bold'>Sintomas
              </label>
              <textarea 
                name="text" 
                id="text" 
                className='border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
                placeholder='Describe los sintomas'
                value={sintomas}
                onChange = {(e) => setSintomas(e.target.value) }
              />
          </div>
          <input 
            type="submit" 
            className='bg-indigo-600 w-full p-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
            value={paciente.id ? 'Guardar cambios' : 'Agregar Paciente'}
          />

        </form>
    </div>
  )
}

export  {Formulario}