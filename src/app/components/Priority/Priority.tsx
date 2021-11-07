import React from 'react';
import classes from './Priority.module.css';

type PriorityProps = {
  priority: string;
};

export default function Priority({ priority }: PriorityProps): JSX.Element {
  return (
    <div>
      <input type="string" value={priority} className={classes.inputfield} />
    </div>
  );
}
