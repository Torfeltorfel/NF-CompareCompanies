import React, { useState } from 'react';
import Title from './components/Title/Title';
import Card from './components/Card/Card';

function App(): JSX.Element {
  const [companies, setCompanies] = useState([
    {
      title: 'Neue Fische',
      description: 'puhhh, ich weiß nicht, was ich schreiben soll',
    },
    {
      title: 'Alte Fische',
      description: 'das sind alte Fische',
    },
    {
      title: 'Neue Fische',
      description: 'puhhh, ich weiß nicht, was ich schreiben soll',
    },
  ]);

  return (
    <>
      <Title></Title>
      <main>
        {companies.map((company) => (
          <Card header={company.title} description={company.description}></Card>
        ))}
      </main>
    </>
  );
}

export default App;
