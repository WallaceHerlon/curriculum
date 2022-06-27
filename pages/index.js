import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 pt-16'>
                <div>
                    <h1 className='text-4xl uppercase'>Olá, eu sou o Wallace Herlon!</h1>
                    <h2 className='font-bold text-5xl uppercase'>Fullstack Developer</h2>
                    <h3>Contato</h3>
                    <ul>
                        <li>linkedin</li>
                    </ul>
                    <p>Github stats: public repos: {user.public_repos} / public gists: {user.public_gists} / followers {user.followers}</p>
                </div>
                <div>
                    <img src='/images/wallaceherlon.png'/>
                </div>
            </div>

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