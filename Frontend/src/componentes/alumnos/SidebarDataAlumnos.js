import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarDataAlumnos = [
  {
    title: 'Cursos a cargo',
    path: '/inicio/profesores/materias',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Asignar notas',
    path: '/inicio/profesores/notas',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }
];