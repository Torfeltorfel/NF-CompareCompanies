import React from 'react';
import classes from './Priority.module.css';

type PriorityProps = {
  priority: number;
};

export default function Priority({ priority }: PriorityProps): JSX.Element {
  console.log(priority);
  return (
    <div>
      <input type="number" value={priority} className={classes.inputfield} />
    </div>
  );
}
