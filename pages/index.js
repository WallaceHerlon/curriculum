import React from 'react'
import Head from 'next/head'
import getUser from '../utils/getUser'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiLink, FiUsers } from 'react-icons/fi'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { GoGist, GoStar } from 'react-icons/go'

const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto bg-network'>
            <Head>
                <title>Wallace Herlon - Fullstack Developer</title>
            </Head>
            <div className='grid grid-cols-2 pt-16 leading-none'>
                <div className='pt-32'>
                    <h1 className='text-4xl uppercase pl-16'>Olá, eu sou o Wallace Herlon!</h1>
                    <h2 className='font-bold text-5xl uppercase pl-16'>Fullstack Developer</h2>
                    <div className='relative border-orange border rounded px-16 pb-4 pt-10 mt-6'>
                        <h3 className='absolute bg-orange text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contato</h3>
                        <p>
                            <FaLinkedin className='text-6xl inline-block mr-6' />
                            <FaGithub className='text-6xl inline-block mr-6' />
                            <FiLink className='text-6xl inline-block mr-6' />
                            <br />
                            <span className='inline-block mt-4'>Email: wherlon@hotmail.com</span>
                        </p>
                    </div>
                </div>

                <div>
                    <img src='/images/wallaceherlon.png' />
                </div>
            </div>

            <div className='bg-white rounded-lg shadow-lg py-12 px-16 '>
                <h3 className='text-4xl text-center text-orange'>Quem eu sou</h3>
                <p className='text-2xl'>Fullstack Developer</p>
            </div>

            <div>
                <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>Formação</h3>
                <div className='grid grid-cols-3 leading-none bg-white rounded-lg shadow-lg py-6'>
                    <div className='border-dashed border-1 px-12'>
                        <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Técnico</h4>
                        <p className='text-2xl uppercase'>Técnico em Eletrônica</p>
                        <span className='text-lg normal-case font-bold'>Sequencial</span>
                    </div>
                    <div className='border-dashed border-1 px-12'>
                        <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Técnico</h4>
                        <p className='text-2xl uppercase'>Técnico em Eletroeletrônia</p>
                        <span className='text-lg normal-case font-bold'>Senai</span>
                    </div>
                    <div className='border-dashed border-1 px-12'>
                        <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Técnologo</h4>
                        <p className='text-2xl uppercase'>Análise e desenvolvimento de sistema</p>
                        <span className='text-lg normal-case font-bold'>UNINOVE</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className='text-4xl font-bold text-center uppercase mt-10 text-orange'>Projetos no Github</h3>
                <p className='text-center'>Github stats: <RiGitRepositoryLine className='inline-block' /> {user.public_repos} / <GoGist className='inline-block' /> {user.public_gists} / <FiUsers className='inline-block' /> {user.followers}</p>
                <div className='grid grid-cols-3 gap-2 my-6 text-lg'>
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