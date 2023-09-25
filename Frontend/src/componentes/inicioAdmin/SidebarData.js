import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Alumnos',
    path: '/inicio/alumnos',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Docentes',
    path: '/inicio/profesores',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Pagos',
    path: '/inicio/pagos',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Materias',
    path: '/inicio/materias',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Inscripciones',
    path: '/inscripciones',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Cronograma',
    path: '/horarios',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }
];