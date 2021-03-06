<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>GIT instructivo</title>
	<style>
		
		.space{
			position: absolute;
			width: 100%;
			height: 20%;

			background-color: #F2E0E0;
			text-align: center;
		}

		.ejemplo1{
			position: absolute;
			display: inline-block;
			background-color: #C24545;
			width: 16%;
			height: 100%;
			left: 0%;
			text-align: center;
			
		}

		.ejemplo2{
			position: absolute;
			display: inline-block;
			background-color: #6951C0;
			width: 21.1%;
			height: 100%;
			left: 16.9%;
			text-align: center;
		}

		.ejemplo3{
			position: absolute;
			display: inline-block;
			background-color: #51C0B1;
			width: 16.1%;
			height: 100%;
			left: 38.3%;
			text-align: center;
		}

		.ejemplo4{
			position: absolute;
			display: inline-block;
			background-color: #88C051;
			width: 21.1%;
			height: 100%;
			left: 55%;
			text-align: center;
		}
		.linea{
			position: absolute;
			display: inline-block;
			width: 0%;
			height: 100%;
			
			border-left: 10px dashed #F84117;
			border-right: 10px dashed #F84117;
			left: 76.5%;

		}
		.ejemplo5{
			position: absolute;
			display: inline-block;
			background-color: #C0A051;
			width: 20.1%;
			height: 100%;
			left: 78.6%;
			text-align: center;
		}
		.ejemplo1:hover,.ejemplo2:hover,.ejemplo3:hover,.ejemplo4:hover,.ejemplo5:hover{
			cursor: pointer;
			border: 2px solid red;
		}
		
		.linea:hover{
			border-color: red;
		}

	</style>
</head>
<body>
<hr>
<hr>
	<div class="header">

		<h1><img height="50" width="50" src="https://git-for-windows.github.io/favicon.ico" alt=""> Comandos GIT/GITHUB</h1><small>www.github.com</small>
		<h2>Ubicación del archivo</h2><span>https://github.com/js-developers/Proyecto1</span>
		<p>Estos son los comandos relevante para la utilizacion de git, para manejo de versionamiento de archivos</p>	
	</div>
	
	<br>
	<hr>
	<div class="content">
		<ol>
		<li><strong><ins>git add name file </ins></strong> <em>"Este nos permite agregar archivos a nuestro repositorio local"</em> </li>
		<li><strong><ins>git status </ins></strong><em>"Este comando sirve para ver el estado de nuestros archivos, debido a que este programa trabaja con varias fases para nuestros archivos, al momento de ingresar un archivo con el <ins>git add</ins> podemos encontrarlo en una seccion llamada index"</em></li>
		<li><strong><ins>git commit -m "mensaje" </ins></strong> <em>"Este comando sirve para enviar por completo nuestro archivo al repositorio local"</em></li>
		<li><strong><ins>git config --global -l </ins></strong> <em>"Este comando lo que hace es visualizar las credenciales registradas en  nuestro git."</em></li>
		<li><strong><ins>git log </ins></strong><em> "Este comando cumple la funcion de mostrar el registro de todos los commit registradops y el usuario que los realizo"</em></li>
		<li><strong><ins>git log oneline </ins></strong><em> "Este comando  muestra un informe de commit un poco menos detallado y en una sola linea"</em></li>
		<li><strong><ins>git remote add "nombre o alias para el remoto" "Direccion del repositorio creado online"</ins></strong> <em> "Este comando conecta nuestro repositorio local con el web generado por githud "</em></li>
		<li><strong><ins>git remote -v</ins></strong><em> "Este comando sirve para listar los repositorios remotos"</em></li>
		<li><strong><ins>git push "alias del remoto agregado" rama del local "maste" </ins></strong><em> "Este comando sirve para subir nuestro proyecto local al servidor, cuando nos referimos a la rama en este caso master equivale a la ubicacion donde tenemos nuestro proyecto en local"</em></li>
		<li><strong><ins>git clone  [url del repositorio creado en github]</ins></strong><em> "Este comando nos permite utilizar un repositorio que hayamos creado inicialmente en github y clonarlo a nuestra maquina, para trabajarlo de forma local</em></li>
		<li><strong><ins>git rename "alias del repositorio"</ins></strong> <em> "Este comando nos permite renombrar o cambiar el alias asignado anteriormente</em></li>

		<li><strong><ins>git reset --hart</ins></strong> <em> "Este comando nos permite regresar a la version anterior de nuestro commit </em></li>

		<li><strong><ins>git rm nombre del archivo</ins></strong> <em> "Este comando nos permitira remover archivos ya guardados anteriormente en el repositorio</em></li>

	</ol>	

	<br>
	<br>
	<hr>
	</div>

	<div class="space">
		<div class="ejemplo1">STASH</div>
		<div class="ejemplo2">WORKSPACE</div>
		<div class="ejemplo3">INDEX</div>
		<div class="ejemplo4">LOCAL REPOSITORIO</div>
		<div class="linea"></div>
		<div class="ejemplo5">UPTREAM REPOSITORY</div>

	</div>


	<hr>
	<hr>
	<hr>
	<hr>
	
	<hr>

	<br>
	<br>
	<br>
	<br>
	<br>
	<hr>
	<div class="footer">
		<h2>Nota!!</h2>
		<ol>
			<li>
				<p>Si en el momento de ingresar el comando git add, nos sale algun error con las credenciales, es necesario ejecutar el comando <strong><ins>git config --global user.email "your email" , git config --global user.name "your name" </ins></strong></p>			
			</li>

			<li>
				<p>Se aconseja crear la carpeta de proyecto en el repositorio web con el mismo nombre que se creo en el repositorio local</p>
			</li>

			<li>
				 <a href="https://github.com/git-for-windows/git/releases/download/v2.8.1.windows.1/Git-2.8.1-64-bit.exe">Puede descargar el programa git aquí </a>
			</li>

			<li>
				<p>La consola de git utiliza una gran parte de los comandos de linux, por lo tanto si no tienes conocimientos de ellos, deberias leer un poco mas al respecto</p>
			</li>

			<li>
				<p>A la hora de crear nuestro repositorio, podemos utilizar tanto github como bitbucket, la unica diferencia es que en el caso de github, no podemos tener repositorios privados y si lo deseamos debemos pagar, en el caso de bitbucket podemos tener repositorios privados pero nos limita a que las personas que participen en el proyecto sean tan solo 5</p>
			</li>

			<li>
				<p>A la hora de tratar de guardar los archivos en el repositorio por primera vez, te pedira las credenciales de la cuenta</p>
			</li>
		</ol>
		
	</div>
	<hr>
</body>
</html>