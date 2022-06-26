import React from 'react'

const Index = (props) => {
    return (
        <div>
            <h1>Bem-vindo!</h1>
            <div>{props.currentDate}</div>
            {props.repos.map(repo => {
                return (
                    <div key={repo.id}>
                        <h3>{repo.full_name}</h3>
                        <p>Language: {repo.language} / Starts: {repo.stargazers_count}</p>
                    </div>
                )
            })}
        </div>
    )
}
export async function getServerSideProps(context) {
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
            repos
        }
    }
}
export default Index