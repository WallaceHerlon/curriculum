import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl'>Meus repositórios, eu sou o Wallace Herlon!</h1>
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

    const { repos, user } = await getUser('WallaceHerlon')
    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
export default Index