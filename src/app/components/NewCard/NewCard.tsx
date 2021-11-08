import React, { useState } from 'react';
import classes from './NewCard.module.css';

type FormProps = {
  onSubmit: (company: {
    companyName: string;
    companyDescription: string;
    companyPriority: number;
  }) => void;
};

function NewCard({ onSubmit }: FormProps): JSX.Element {
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyPriority, setCompanyPriority] = useState<number>(0);
  console.log(companyPriority, companyDescription);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ companyName, companyDescription, companyPriority });
    //setting placeholder default values back
    setCompanyName('');
    setCompanyDescription('');
    setCompanyPriority(0);
  }
  return (
    <form action="submit" className={classes.container} onSubmit={handleSubmit}>
      <h2 className={classes.newCardHeader}>Create new Company</h2>
      <label className={classes.label}>
        Company Name
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
        <textarea
          className={classes.inputDescription}
          rows="4"
          placeholder="Description"
          value={companyDescription}
          onChange={(event) => setCompanyDescription(event.target.value)}
        />
      </label>
      <label className={classes.label}>
        Priority
        <input
          type="number"
          className={classes.inputPriority}
          value={companyPriority}
          onChange={(event) => setCompanyPriority(event.target.valueAsNumber)}
        />
      </label>
      <input type="submit" value="Create Company" className={classes.button} />
    </form>
  );
}

export default NewCard;
