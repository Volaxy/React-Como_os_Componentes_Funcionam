import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

function App() {
    const [teams, setTeams] = useState([
        {
            name: "Programação",
            color: "#57c278",
        },
        {
            name: "Front-End",
            color: "#82cffa",
        },
        {
            name: "Data Science",
            color: "#a6d157",
        },
        {
            name: "Devops",
            color: "#e06b69",
        },
        {
            name: "UX e Design",
            color: "#db6ebf",
        },
        {
            name: "Mobile",
            color: "#ffba05",
        },
        {
            name: "Inovação e Gestão",
            color: "#ff8a29",
        }
    ]);

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

    // Every time a component changes its state, React compares the real DOM to the Virtual DOM, checking what exactly needs to be changed in the DOM
    function changeTeamColor(color, teamName) {
        setTeams(teams.map(team => {
            if(team.name === teamName) {
                team.color = color;
            }

            return team;
        }));
    }

    return (
        <div className="App">
            <Banner />

            <Form teams={teams.map(team => team.name)} onRegisterCollaborator={collaborator => setCollaborators([...collaborators, collaborator])} />

            {teams.map(team =>
                <Team
                    key={team.name}
                    name={team.name}
                    teamColor={team.color}
                    collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
                    onDelete={deleteCollaborator}
                    onChangeTeamColor={changeTeamColor}
                />
            )}

            <Footer />
        </div>
    );
}

export default App;
