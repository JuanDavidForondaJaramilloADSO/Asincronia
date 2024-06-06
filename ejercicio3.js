
const filtrarAprendices = user => user.aprendiz === true;

async function obtenerDatosAprendices() {
  try {

    const response = await fetch('user.json');
    const data = await response.json();


    const aprendices = data.users.filter(filtrarAprendices);

    let todosLosRepos = [];

    for (const aprendiz of aprendices) {
      const respuestaGithub = await fetch(`https://api.github.com/users/${aprendiz.user}/repos`);
      const repos = await respuestaGithub.json();


      console.log(`Repositorios de ${aprendiz.name}`);
      console.log(repos)


      todosLosRepos = todosLosRepos.concat(repos);
    }


    console.log('Todos los repositorios:', todosLosRepos);

  } catch (error) {
    console.error('Error:', error);
  }
}


obtenerDatosAprendices();