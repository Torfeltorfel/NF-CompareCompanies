import React, { useState } from 'react';
import classes from './NewCard.module.css';

type FormProps = {
  onSubmit: (company: {
    companyName: string;
    companyDescription: string;
  }) => void;
};

function NewCard({ onSubmit }: FormProps): JSX.Element {
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ companyName, companyDescription });
    setCompanyName('');
    setCompanyDescription('');
  }
  return (
    <form action="submit" className={classes.container} onSubmit={handleSubmit}>
      <label className={classes.label}>
        Titel
        <input
          type="text"
          className={classes.input}
          placeholder="Company"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />
      </label>
      <label className={classes.label}>
        Description
        <input
          type="text"
          className={classes.input}
          placeholder="Description"
          value={companyDescription}
          onChange={(event) => setCompanyDescription(event.target.value)}
        />
      </label>
      <input type="submit" value="Create Company" className={classes.button} />
    </form>
  );
}

export default NewCard;
