import React, { useState } from 'react';
import classes from './Card.module.css';

type CardProps = {
  header: string;
  description: string;
};

function Card({ header, description }: CardProps): JSX.Element {
  const [applied, setApplied] = useState(false);
  function modifyApply() {
    setApplied(!applied);
  }
  return (
    <section
      className={`${classes.card} ${applied ? classes['card--applied'] : ''}`}
    >
      <h2 className={classes.card__header}>{header}</h2>
      <p className={classes.card__description}>{description}</p>
      <label htmlFor="checkbox">Applied</label>
      <input
        type="checkbox"
        id="checkbox"
        className={classes.checkbox}
        onClick={modifyApply}
      />
    </section>
  );
}

export default Card;
