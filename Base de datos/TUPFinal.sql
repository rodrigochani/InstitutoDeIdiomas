create table administradores
(Id integer not null auto_increment,
Nombres varchar(50),
Apellidos varchar(50),
DNI integer,
Telefono integer,
Email varchar(50),
Usuario varchar(50),
Contraseña varchar(8),
Ciudad varchar(25),
Provincia varchar(25),
primary key (Id));

create table alumnos
(Id integer not null auto_increment,
Nombres varchar(50),
Apellidos varchar(50),
DNI integer,
Telefono integer,
Email varchar(50),
Usuario varchar(50),
Contraseña varchar(8),
Ciudad varchar(25),
Provincia varchar(25),
primary key (Id));

create table profesores
(Id integer not null auto_increment,
Nombres varchar(50),
Apellidos varchar(50),
DNI integer,
Telefono integer,
Email varchar(50),
Carrera integer,
Usuario varchar(50),
Contraseña varchar(8),
Ciudad varchar(25),
Provincia varchar(25),
foreign key (Carrera) references carreras(id),
primary key (Id));

create table carreras
(Id integer not null auto_increment,
Descripcion varchar(20),
primary key (Id));

create table cursos
(Id integer not null auto_increment,
Descripcion varchar(20),
Carrera integer,
Profesor integer,
primary key (Id),
foreign key (Carrera) references carreras(Id),
foreign key (Profesor) references profesores(Id));

create table alumnos_cursos
(Id integer not null auto_increment,
Alumno integer,
Curso integer,
FechaInsc date,
PrimerParcial float(2.2),
SegundoParcial float(2.2),
Final float(2.2),
Aprobado boolean,
Administrador integer,
primary key (Id),
foreign key (Alumno) references alumnos(Id),
foreign key (Administrador) references administradores(Id),
foreign key (Curso) references cursos(Id));

create table pagos
(Id integer not null auto_increment,
Inscripcion integer,
FechaPago date,
Administrador integer,
primary key (Id),
foreign key (Inscripcion) references alumnos_cursos(Id))



