import React from 'react'
import getUser from '../utils/getUser'
import PageHead from '../Components/PageHead'
import Hero from '../Components/Hero'
import Summary from '../Components/Summary'
import Education from '../Components/Education'
import Footer from '../Components/Footer'
import Repos from '../Components/Repos'

const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto bg-network bg-network-left lg:bg-network-right'>
            <PageHead />
            <Hero />
            <Summary />
            <Education />
            <Repos user={user} repos={repos} />
            <Footer />
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