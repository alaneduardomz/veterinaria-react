import React from 'react'
import Swal from 'sweetalert2';
function Paciente({paciente, setPaciente, eliminarPaciente}) {
  // console.log(paciente, setPaciente);
  const {nombre, propietario, email, fecha, sintomas, id} = paciente;
  // console.log(paciente)
  const handleEliminar = () => {
    Swal.fire({
      title: '¿Estás seguro de eliminar al paciente?',
      text: 'Esta accion no puede ser revertida!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminalo!',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'Tu paciente ha sido eliminado.',
          'success',
          eliminarPaciente(id)
        )
      }
    })
  }
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre de la mascota:<span className='ml-2 font-normal normal-case'>{nombre}</span></p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:<span className='ml-2 font-normal normal-case'>{propietario}</span></p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Email:<span className='ml-2 font-normal normal-case'>{email}</span></p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha:<span className='ml-2 font-normal normal-case'>{fecha}</span></p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:<span className='ml-2 font-normal normal-case'>{sintomas}</span></p>
        <div className='flex justify-between'>
          <button className='bg-sky-500/100 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full'
                  onClick={() => setPaciente(paciente)}
          >Editar</button>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
                  onClick={handleEliminar}> 
          Eliminar &times;</button>
        </div>
    </div>
  )
}

export  {Paciente}