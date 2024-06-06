const filtrar = x => x.name === "Evaluacion"; // Definimos una función arrow  que filtra elementos que el nombre sea "Evaluacion"

fetch('user.json') // Hacemos la peticicion(fetch) para obtener el archivo 'user.json'
  .then(response => response.json()) //encadenamos promesas para que user tenga la respuesta
  .then(user => {
    return fetch(`https://api.github.com/users/${user.name}/repos`) // Hacemos una peticion al link de github y lo asignamos a respuestGithub
      //arriba la variable user lo que hace es tomar el usario del json para ingresar a la api de githuib
      .then(respuestGitHub => respuestGitHub.json())//encadenamos promesas y hacemos que se obtenga la informacion dentro de la promesa del json
      .then(usuariogithub => { //aqui lo dejamos listo para  que ya tenga la informacion necesaria para iterar
        usuariogithub.forEach(element => { // Iteramos sobre cada repositorio 
          if (element.name === "Evaluacion") { // Si el nombre del repositorio es "Evaluacion"
            console.log(element); // Imprimimos el repositorio
          }
        });

        let data = usuariogithub.filter(filtrar); // Filtramos los repositorios de nombre  "Evaluacion"
        console.log(data); // Imprimimos los repositorios filtrados
        console.log(usuariogithub); // Imprimimos todos los repositorios
      });
  })

