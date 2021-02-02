import classNames from 'classnames';
import styles from './StackLogos.module.css';
import { useRef } from 'react';
import React from 'react';

export default function StackLogos() {
  /*
  hover
   */
  let zero, one, two, three, four, five, six, seven = useRef(false);

  return (
    <div className={styles.logos}>
      <div className={styles.logo}>
        <div><img src={require('../srcs/stack_logos/python.png' )} ref={el => zero = el} /></div>
        <div><img src={require('../srcs/stack_logos/php.png' )} ref={el => one = el} /></div>
        <div><img src={require('../srcs/stack_logos/c.png' )} ref={el => two = el} /></div>
        <div><img src={require('../srcs/stack_logos/js.png' )} ref={el => three = el} /></div>
        <div><img src={require('../srcs/stack_logos/r.png' )} ref={el => four = el} /></div>
        <div><img src={require('../srcs/stack_logos/c++.png' )} ref={el => five = el} /></div>
        <div><img src={require('../srcs/stack_logos/java.png' )} ref={el => six = el} /></div>
        <div><img src={require('../srcs/stack_logos/c#.png' )} ref={el => seven = el} /></div>
      </div>
    </div>
  );
}