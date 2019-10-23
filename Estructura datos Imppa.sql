CREATE TABLE Titulo
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`Titulo` BINARY NOT NULL
);

CREATE TABLE Foto
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`Foto` BINARY NOT NULL
);

-- Tabla Tipo Clases
CREATE TABLE TipoClase
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`Tipo` VARCHAR(50)
);

-- --Tabla Tipo Usuario
CREATE TABLE TipoUsuario
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`Tipo` LONGTEXT  NOT NULL
);


-- --Tabla Usuarios
CREATE TABLE Usuarios
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`TipoUsuario` INT  NOT NULL,
	`Mail` VARCHAR(50) NOT NULL,
	`Contrasenia` VARCHAR(10) NOT NULL,
	`AddedDate` DATETIME NOT NULL,
	`LastLogin` DATETIME NOT NULL,
	`Nombre` varchar(50) NULL,
	`Apellido` VARCHAR(50) NULL,
	`Telefono1` VARCHAR (15),
	`Telefono2` VARCHAR (15),
	`Habilitado` BIT NOT NULL,
    FOREIGN KEY (TipoUsuario) REFERENCES TipoUsuario(ID)
);

-- Tabla Subcripciones
CREATE TABLE Subscripcion
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`Nombre` VARCHAR(50) NOT NULL,
	`Descripcion` LONGTEXT  NULL,
	`Precio` INT NOT NULL
);


-- Tabla Comentarios
CREATE TABLE Comentarios
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`IDProfesor` INT  NOT NULL,
	`IDAlumno` INT  NOT NULL,
	`Comentario` VARCHAR(10000)  NOT NULL,
	`Puntaje` int  NOT NULL,
    FOREIGN KEY (IDProfesor) REFERENCES Usuarios(ID),
    FOREIGN KEY (IDAlumno) REFERENCES Usuarios(ID)
)CHARSET=utf8;

-- Tabla Clases
CREATE TABLE ClaseProfesor
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`IDCategoriaClase` INT  NOT NULL,
	`IDTipoClase` INT  NOT NULL,
	`Direccion` VARCHAR (10000),
	`Precio` INT NULL,
    FOREIGN  KEY (IDCategoriaClase) REFERENCES CategoriaClase(ID),
    FOREIGN  KEY (IDTipoClase) REFERENCES TipoClase(ID)
    )CHARSET=utf8;

CREATE TABLE ClaseXUsuario
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`IDUsuario` INT  NOT NULL,
	`IDClaseProfesor` INT  NOT NULL,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(ID),
    FOREIGN KEY (IDClaseProfesor) REFERENCES ClaseProfesor(ID)
);

-- Tabla Subscripcion Usuario
CREATE TABLE SubscripcionUsuario
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`IDUsuario` INT NOT NULL,
	`IDSubscripcion` INT NOT NULL,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(ID),
    FOREIGN KEY (IDSubscripcion) REFERENCES Subscripcion(ID)
);
 

-- Tabla Categorias de Clases 
CREATE TABLE CategoriaClase
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`NombreCategoria` VARCHAR(10) NOT NULL,
	`Habilitado` TINYINT NOT NULL
);


-- Tabla Tipo Usuario
CREATE TABLE TituloUsuario
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`IDUsuario` INT NOT NULL,
	`IDTitulo` INT NOT NULL,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(ID),
    FOREIGN KEY (IDTitulo) REFERENCES Titulo(ID)
);

-- Log de errores
CREATE TABLE LogErrores
(
	`ID` INT AUTO_INCREMENT PRIMARY KEY,
	`IDUsuario` INT NOT NULL,
	`FechaError` DATETIME NOT NULL,
	`MensajeError` VARCHAR(10000),
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(ID)
)CHARSET=utf8;

