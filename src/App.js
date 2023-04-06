import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

function App() {
    const teams = [
        {
            name: "Programação",
            primaryColor: "#57c278",
            secondaryColor: "#d9f7e9"
        },
        {
            name: "Front-End",
            primaryColor: "#82cffa",
            secondaryColor: "#e8f8ff"
        },
        {
            name: "Data Science",
            primaryColor: "#a6d157",
            secondaryColor: "#f0f8e2"
        },
        {
            name: "Devops",
            primaryColor: "#e06b69",
            secondaryColor: "#fde7e8"
        },
        {
            name: "UX e Design",
            primaryColor: "#db6ebf",
            secondaryColor: "#fae9f5"
        },
        {
            name: "Mobile",
            primaryColor: "#ffba05",
            secondaryColor: "#fff5d9"
        },
        {
            name: "Inovação e Gestão",
            primaryColor: "#ff8a29",
            secondaryColor: "#ffeedf"
        }
    ];

    const inicial = [
        {
            name: 'JULIANA AMOASEI',
            office: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[0].name
        },
        {
            name: 'DANIEL ARTINE',
            office: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[0].name
        },
        {
            name: 'GUILHERME LIMA',
            office: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[0].name
        },
        {
            name: 'PAULO SILVEIRA',
            office: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[0].name
        },
        {
            name: 'JULIANA AMOASEI',
            office: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[1].name
        },
        {
            name: 'DANIEL ARTINE',
            office: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[1].name
        },
        {
            name: 'GUILHERME LIMA',
            office: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[1].name
        },
        {
            name: 'PAULO SILVEIRA',
            office: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[1].name
        },
        {
            name: 'JULIANA AMOASEI',
            office: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[2].name
        },
        {
            name: 'DANIEL ARTINE',
            office: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[2].name
        },
        {
            name: 'GUILHERME LIMA',
            office: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[2].name
        },
        {
            name: 'PAULO SILVEIRA',
            office: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[2].name
        },
        {
            name: 'JULIANA AMOASEI',
            office: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[3].name
        },
        {
            name: 'DANIEL ARTINE',
            office: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[3].name
        },
        {
            name: 'GUILHERME LIMA',
            office: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[3].name
        },
        {
            name: 'PAULO SILVEIRA',
            office: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[3].name
        },
        {
            name: 'JULIANA AMOASEI',
            office: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[4].name
        },
        {
            name: 'DANIEL ARTINE',
            office: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[4].name
        },
        {
            name: 'GUILHERME LIMA',
            office: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[4].name
        },
        {
            name: 'PAULO SILVEIRA',
            office: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[4].name
        },
        {
            name: 'JULIANA AMOASEI',
            office: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[5].name
        },
        {
            name: 'DANIEL ARTINE',
            office: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[5].name
        },
        {
            name: 'GUILHERME LIMA',
            office: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[5].name
        },
        {
            name: 'PAULO SILVEIRA',
            office: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[5].name
        },
    ]

    const [collaborators, setCollaborators] = useState(inicial);

    function deleteCollaborator() {
        console.log("Deleting Collaborator");
    }

    return (
        <div className="App">
            {/* Each component is interpreted by the React like an object */}
            <Banner />

            <Form teams={teams.map(team => team.name)} onRegisterCollaborator={collaborator => setCollaborators([...collaborators, collaborator])} />

            {teams.map(team =>
                <Team
                    key={team.name}
                    name={team.name}
                    primaryColor={team.primaryColor}
                    secondaryColor={team.secondaryColor}
                    collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
                    onDelete={deleteCollaborator}
                />
            )}

            <Footer />
        </div>
    );
}

export default App;
