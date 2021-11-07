import React, { useState } from 'react';
import classes from './Card.module.css';

type CardProps = {
  header: string;
  description: string;
  priority: number;
};

function Card({ header, description, priority }: CardProps): JSX.Element {
  const [applied, setApplied] = useState(false);

  function modifyApply() {
    setApplied(!applied);
  }
  return (
    <section
      className={`${classes.card} ${applied ? classes['card--applied'] : ''}`}
    >
      <h2
        className={`${classes.card__header} ${
          applied ? classes[`card__header--applied`] : ''
        }`}
      >
        {header}
      </h2>
      <p
        className={`${classes.card__description} ${
          applied ? classes['card__description--applied'] : ''
        }`}
      >
        {description}
      </p>
      <input
        type="checkbox"
        id="checkbox"
        className={classes.checkbox}
        onClick={modifyApply}
      />
      <label htmlFor="checkbox" className={classes.checkboxLabel}>
        Applied
      </label>
      <p onClick={modifyApply}>{priority}</p>
    </section>
  );
}

export default Card;
