CREATE TABLE [Titulo]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[Titulo] BINARY NOT NULL
)

CREATE TABLE [Foto]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[Foto] BINARY NOT NULL
)

--Tabla Tipo Clases
CREATE TABLE [TipoClase]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[Tipo] VARCHAR(50)
)

----Tabla Tipo Usuario
CREATE TABLE [TipoUsuario]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[Tipo] VARCHAR (MAX) NOT NULL
)

CREATE TABLE [Titulo]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[Titulo] BINARY NOT NULL
)

go

----Tabla Usuarios
CREATE TABLE [Usuarios]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[TipoUsuario] INT FOREIGN KEY REFERENCES TipoUsuario(ID) NOT NULL,
	[Mail] VARCHAR(50) NOT NULL,
	[Contrasenia] VARCHAR(10) NOT NULL,
	[AddedDate] DATETIME NOT NULL,
	[LastLogin] DATETIME NOT NULL,
	[Nombre] varchar(50) NULL,
	[Apellido] VARCHAR(50) NULL,
	[Telefono1] VARCHAR (15),
	[Telefono1] VARCHAR (15),
	[Habilitado] BIT NOT NULL
)

--Tabla Subcripciones
CREATE TABLE [Subscripcion]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[Nombre] VARCHAR(50) NOT NULL,
	[Descripcion] VARCHAR (MAX) NULL,
	[Precio] INT NOT NULL
)


--Tabla Comentarios
CREATE TABLE [Comentarios]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[IDProfesor] INT FOREIGN KEY REFERENCES Usuarios(ID) NOT NULL,
	[IDAlumno] INT FOREIGN KEY REFERENCES Usuarios(ID) NOT NULL,
	[Comentario] VARCHAR (MAX) NOT NULL,
	[Puntaje] VARCHAR (MAX) NOT NULL
)

go

--Tabla Clases
CREATE TABLE [ClaseProfesor]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[IDCategoriaClase] INT FOREIGN KEY REFERENCES CategoriaClase(ID) NOT NULL,
	[IDTipoClase] INT FOREIGN KEY REFERENCES TipoClase(ID) NOT NULL,
	[Direccion] VARCHAR (MAX),
	[Precio] INT NULL
)


--Tabla Subscripcion Usuario
CREATE TABLE [SubscripcionUsuario]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[IDUsuario] INT FOREIGN KEY REFERENCES Usuarios(ID)NOT NULL,
	[IDSubscripcion] INT FOREIGN KEY REFERENCES [Subscripcion](ID)NOT NULL
)
 
CREATE TABLE [ClaseXUsuario]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[IDUsuario] INT FOREIGN KEY REFERENCES Usuarios(ID) NOT NULL,
	[IDClaseProfesor] INT FOREIGN KEY REFERENCES ClaseProfesor(ID) NOT NULL
)

--Tabla Categorias de Clases 
CREATE TABLE [CategoriaClase]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[NombreCategoria] VARCHAR NOT NULL,
	[Habilitado] BIT NOT NULL
)

--Tabla Tipo Clases -- Presencial individual, presencial grupal,Virtual individual, Virtual Grupal
CREATE TABLE [TipoClase]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[Tipo] VARCHAR(50)
)

--Tabla Tipo Usuario
CREATE TABLE [TituloUsuario]
(
	[ID] INT IDENTITY PRIMARY KEY,
	[IDUsuario] INT FOREIGN KEY REFERENCES Usuarios(ID)NOT NULL,
	[IDTitulo] INT FOREIGN KEY REFERENCES Titulo(ID)NOT NULL
)