import React from 'react'
import { Paciente } from './Paciente'
// import {useEffect} from 'react'
Paciente
function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {
  // console.log(pacientes);
  // useEffect(() => {
  //   if(pacientes.length === 0) return;
  //   console.log('Se agrego un nuevo paciente');
  // }, [pacientes])
  const id = Math.random().toString(36).substr(2);
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes.length === 0 ? 
      (
        <>
          <h2 className='font-black text-center text-3xl'>No hay pacientes para mostrar</h2>
          <p className='text-lg mt-5 text-center mb-10 font-bold'>
          Comienza agregando pacientes<span className='text-indigo-600'> y apareceran en este lugar</span>
          </p>
        </>
      ):
      (
      <>
        <h2 className='font-black text-center text-3xl'>ListadoPacientes</h2>
        <p className='text-lg mt-5 text-center mb-10 font-bold'>
          Administra tus <span className='text-indigo-600'>Pacientes y citas</span>
        </p>
      </>
      )}
      { pacientes.map( paciente =>{
        return(
          <Paciente
              key = {paciente.id} 
              paciente = {paciente}
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente}
          />
        )
      })}
    </div>
    
  )
}

export {ListadoPacientes}