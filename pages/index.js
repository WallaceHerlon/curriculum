import React from 'react'

const Index = ({repos, user}) => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl'>Olá, eu sou o Wallace Herlon!</h1>
            <h2 className='font-bold text-3xl'>Meus repositórios no Github</h2>
            <p>Github stats: public repos: {user.public_repos} / public gists: {user.public_gists} / followers {user.followers}</p>
            {repos.map(repo => {
                return (
                    <div key={repo.id} className='rounded bg-gray-200 mx-8 my-8 p-4 hover:shadow-md'>
                        <h3 className='font-bold'>{repo.full_name}</h3>
                        <p>Language: {repo.language} / Starts: {repo.stargazers_count}</p>
                    </div>
                )
            })}
        </div>
    )
}
export async function getServerSideProps(context) {
    const resUser = await fetch('https://api.github.com/users/wallaceherlon')
    const user = await resUser.json()
    const resRepos = await fetch('https://api.github.com/users/wallaceherlon/repos?sort=updated')
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
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
export default Index