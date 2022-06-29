import React from 'react'
import getUser from '../utils/getUser'
import { FiUsers } from 'react-icons/fi'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { GoGist, GoStar } from 'react-icons/go'
import PageHead from '../Components/PageHead'
import Hero from '../Hero'

const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto bg-network'>
            <PageHead/> 
            <Hero/>

            <div className='bg-white rounded-lg shadow-lg py-12 px-8 mx-8 md:mx-0 md:px-16 '>
                <h3 className='text-4xl text-center text-orange'>Quem eu sou</h3>
                <p className='text-2xl'>Fullstack Developer</p>
            </div>

            <div>
                <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>Formação</h3>
                <div className='mx-6 md:mx-0 md:grid md:grid-cols-3 leading-none bg-white rounded-lg shadow-lg'>
                    
                    <div className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
                        <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Técnico</h4>
                        <p className='text-2xl uppercase'>Técnico em Eletrônica</p>
                        <span className='text-lg normal-case font-bold'>Sequencial</span>
                    </div>
                    <div className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
                        <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Técnico</h4>
                        <p className='text-2xl uppercase'>Técnico em Eletroeletrônia</p>
                        <span className='text-lg normal-case font-bold'>Senai</span>
                    </div>
                    <div className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
                        <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Técnologo</h4>
                        <p className='text-2xl uppercase'>Análise e desenvolvimento de sistema</p>
                        <span className='text-lg normal-case font-bold'>UNINOVE</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className='text-4xl font-bold text-center uppercase mt-10 text-orange'>Projetos no Github</h3>
                <p className='text-center'>Github stats: <RiGitRepositoryLine className='inline-block' /> {user.public_repos} / <GoGist className='inline-block' /> {user.public_gists} / <FiUsers className='inline-block' /> {user.followers}</p>
                <div className='md:grid md:grid-cols-3 md:gap-2 my-6'>
                    {repos.map(repo => {
                        return (
                            <div key={repo.id} className='rounded bg-white p-4 hover:shadow-md'>
                                <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h3>
                                <p>Language: {repo.language} / <GoStar className='inline-block' /> Stars: {repo.stargazers_count}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <p className='text-center my-8 py-4 border-t-2'>
                    você pode encontrar os código-fontes deste site aqui.
                    <br/>
                    <a href="">https://github.com/WallaceHerlon/wallaceherlon-dev</a>
                </p>
            </div>
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