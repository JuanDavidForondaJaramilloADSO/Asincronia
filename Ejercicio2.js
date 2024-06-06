const filtrarAprendices = x => x.aprendiz === true;


fetch('user.json')
  .then(response => response.json())
  .then(data => {

    const aprendices = data.users.filter(filtrarAprendices);

    const promesas = aprendices.map(aprendiz => {
      return fetch(`https://api.github.com/users/${aprendiz.user}`)
        .then(response => response.json())
        .then(githubUser => {
          return {
            name: githubUser.name,
            avatar_url: githubUser.avatar_url
          };
        });
    });


    return Promise.all(promesas);
  })
  .then(usersData => {

    console.table(usersData);
  })
  .catch(error => console.error('Error:', error));







// // Definimos una función arrow que filtra elementos que sean aprendices
// const esAprendiz = user => user.aprendiz;

// // Función para obtener los datos del perfil de GitHub
// const obtenerGit = async (username) => {
//   let response = await fetch(`https://api.github.com/users/${username}`);
//   let data = await response.json();
//   return data;
// };

// (async () => {
//   try {
//     let response = await fetch('user1.json'); // Hacemos la peticicion(fetch) para obtener el archivo 'user1.json'
//     let data = await response.json(); // Asignamos el response(que es la respuesta de el fetch) a la variable data

//     let aprendices = data.users.filter(esAprendiz); // Filtramos los usuarios que sean aprendices

//     // Creamos un array de promesas para obtener los datos de GitHub de cada aprendiz
//     let promesas = aprendices.map(async (aprendiz) => {
//       let datosGitHub = await obtenerGit(aprendiz.user);
//       return {
//         name: aprendiz.name,
//         avatar: datosGitHub.avatar_url
//       };
//     });

//     // Esperamos a que todas las promesas se resuelvan
//     let resultados = await Promise.all(promesas);

//     // Imprimimos el resultado en una tabla
//     console.table(resultados);
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// })();