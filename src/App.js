import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

import { v4 as uuidv4 } from 'uuid';

function App() {
    const [teams, setTeams] = useState([
        {
            id: uuidv4(),
            name: "Programação",
            color: "#57c278",
        },
        {
            id: uuidv4(),
            name: "Front-End",
            color: "#82cffa",
        },
        {
            id: uuidv4(),
            name: "Data Science",
            color: "#a6d157",
        },
        {
            id: uuidv4(),
            name: "Devops",
            color: "#e06b69",
        },
        {
            id: uuidv4(),
            name: "UX e Design",
            color: "#db6ebf",
        },
        {
            id: uuidv4(),
            name: "Mobile",
            color: "#ffba05",
        },
        {
            id: uuidv4(),
            name: "Inovação e Gestão",
            color: "#ff8a29",
        }
    ]);

    const inicial = [
        {
            id: uuidv4(),
            name: 'JULIANA AMOASEI',
            office: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[0].name
        },
        {
            id: uuidv4(),
            name: 'DANIEL ARTINE',
            office: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[0].name
        },
        {
            id: uuidv4(),
            name: 'GUILHERME LIMA',
            office: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[0].name
        },
        {
            id: uuidv4(),
            name: 'PAULO SILVEIRA',
            office: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[0].name
        },
        {
            id: uuidv4(),
            name: 'JULIANA AMOASEI',
            office: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[1].name
        },
        {
            id: uuidv4(),
            name: 'DANIEL ARTINE',
            office: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[1].name
        },
        {
            id: uuidv4(),
            name: 'GUILHERME LIMA',
            office: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[1].name
        },
        {
            id: uuidv4(),
            name: 'PAULO SILVEIRA',
            office: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[1].name
        },
        {
            id: uuidv4(),
            name: 'JULIANA AMOASEI',
            office: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[2].name
        },
        {
            id: uuidv4(),
            name: 'DANIEL ARTINE',
            office: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[2].name
        },
        {
            id: uuidv4(),
            name: 'GUILHERME LIMA',
            office: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[2].name
        },
        {
            id: uuidv4(),
            name: 'PAULO SILVEIRA',
            office: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[2].name
        },
        {
            id: uuidv4(),
            name: 'JULIANA AMOASEI',
            office: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[3].name
        },
        {
            id: uuidv4(),
            name: 'DANIEL ARTINE',
            office: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[3].name
        },
        {
            id: uuidv4(),
            name: 'GUILHERME LIMA',
            office: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[3].name
        },
        {
            id: uuidv4(),
            name: 'PAULO SILVEIRA',
            office: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[3].name
        },
        {
            id: uuidv4(),
            name: 'JULIANA AMOASEI',
            office: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[4].name
        },
        {
            id: uuidv4(),
            name: 'DANIEL ARTINE',
            office: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[4].name
        },
        {
            id: uuidv4(),
            name: 'GUILHERME LIMA',
            office: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[4].name
        },
        {
            id: uuidv4(),
            name: 'PAULO SILVEIRA',
            office: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[4].name
        },
        {
            id: uuidv4(),
            name: 'JULIANA AMOASEI',
            office: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[5].name
        },
        {
            id: uuidv4(),
            name: 'DANIEL ARTINE',
            office: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[5].name
        },
        {
            id: uuidv4(),
            name: 'GUILHERME LIMA',
            office: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[5].name
        },
        {
            id: uuidv4(),
            name: 'PAULO SILVEIRA',
            office: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[5].name
        },
    ]

    const [collaborators, setCollaborators] = useState(inicial);

    function deleteCollaborator(collaboratorId) {
        setCollaborators(collaborators.filter(collaborator => collaborator.id !== collaboratorId));
    }

    // Every time a component changes its state, React compares the real DOM to the Virtual DOM, checking what exactly needs to be changed in the DOM
    function changeTeamColor(color, teamId) {
        setTeams(teams.map(team => {
            if(team.id === teamId) {
                team.color = color;
            }

            return team;
        }));
    }

    return (
        <div className="App">
            <Banner />

            <Form
                teams={teams.map(team => team.name)}
                onRegisterCollaborator={collaborator => setCollaborators([...collaborators, collaborator])}
                onRegisterTeam={team => setTeams([...teams, { ...team, id: uuidv4() }])}
            />

            {teams.map(team =>
                <Team
                    key={team.name}
                    teamId={team.id}
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
