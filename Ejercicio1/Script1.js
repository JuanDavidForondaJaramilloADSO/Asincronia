const filtrar = x => x.name === "Evaluacion"; // Definimos una función arrow  que filtra elementos que el nombre sea "Evaluacion"

(async () => { // Creamos una función asíncrona autoejecutable
  let response = await fetch('user.json'); // Hacemos la peticicion(fetch) para obtener el archivo 'user.json'
  let user = await response.json(); // asignamos el response(que es la respuesta de el fetch) a la variable user 

  let respuestGitHub = await fetch(`https://api.github.com/users/${user.name}/repos`); // Hacemos una peticion al link de github y lo asignamos a respuestGithub
  //arriba la variable user lo que hace es tomar el usario del json para ingresar a la api de githuib
  let usuariogithub = await respuestGitHub.json();   // asignamos la respuesta de github a usuario para que luego se haga un proceso

  usuariogithub.forEach(element => { // Iteramos sobre cada repositorio
    if (element.name === "Evaluacion") { // Si el nombre del repositorio es "Evaluacion"
      console.log(element); // Imprimimos el repositorio
    }
  });

  let data = usuariogithub.filter(filtrar); // Filtramos los repositorios cuyo nombre sea "Evaluacion"
  console.log(data); // Imprimimos los repositorios filtrados
  console.log(usuariogithub); // Imprimimos todos los repositorios

})(); // Ejecutamos la función asíncrona
