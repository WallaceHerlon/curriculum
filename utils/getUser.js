const getUser = async (username) => {
    const resUser = await fetch('https://api.github.com/users/' + username)
    const user = await resUser.json()
    const resRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    const originalRepos = await resRepos.json()

    //repositório que não deseja mostrar 
    const dontShowRepos = ['WallaceHerlon/Banco-de-dados', 'WallaceHerlon/WallaceHerlon']
    const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
    //repositório fork para não mostrar
    const isNotFork = repo => !repo.fork
    //Não mandar os dados no final da página, limpando os dados
    const extractData = repo => ({
        id: repo.id,
        full_name: repo.full_name,
        language: repo.language,
        stargazers_count: repo.stargazers_count
    })

    const repos = originalRepos
        .filter(isNotFork)
        .filter(dontShowFilter)
        .map(extractData)
    return {
        repos, user
    }
}
export default getUser