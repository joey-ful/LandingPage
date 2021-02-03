import React, { useRef, useEffect } from 'react';
import styles from './Landing2TopStacks2.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Rankings() {
  let rankings2 = useRef(null);
  let like, like1, like2, like3, like4, like5 = useRef(null);
  let gold_sample, silver_sample, bronze_sample = useRef(null);

  useEffect(() => {
    /*
    topstacks2 silver likes => restart
     */
    let tl2_like = gsap.timeline(
      {
        scrollTrigger: {
          trigger: rankings2,
          start: 'top bottom',
          toggleActions: 'restart none restart none'
        },
      }
    );
    let hearts = [like, like1, like2, like3]
    for (let i = 0; i < 60; i++) {
        let size = Math.random() * 0.9 + 0.1;
        let heart = hearts[i % 4];
        tl2_like
        .fromTo(heart,
          {x: Math.random() * 5 + 10, y: 90, opacity: 1},
          {duration: 1, y: -40, opacity: 0, scale: size}, Math.random() * 2
        )
    }

    /*
    topstacks2 gold likes => restart
     */
    let tl2_like_gold = gsap.timeline(
      {
        scrollTrigger: {
          trigger: rankings2,
          start: 'top bottom',
          toggleActions: 'restart none restart none'
        },
      }
    );
    tl2_like_gold
      .fromTo(like4,
      {x: Math.random() * 15 + 250, y: 50, opacity: 1},
      {duration: 1.5, y: -80, scale: 0.5, opacity: 0},
      )
      .fromTo(like5,
        {x: Math.random() * 15 + 250, y: 50, opacity: 1},
        {duration: 2.5, y: -80, scale: 0.6, opacity: 0}, '-=1.5'
      )
      .fromTo(like4,
      {x: Math.random() * 15 + 250, y: 50, opacity: 1},
      {duration: 3, y: -80, scale: 0.7, opacity: 0}, '-=1.7'
      )

    /*
    topstacks2 rankings & change in rankings => restart
     */
    let tl2_rankings = gsap.timeline({
      scrollTrigger: {
        trigger: rankings2,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'restart none restart none',
      }
    });
    tl2_rankings.fromTo(rankings2,
      {y: 50, opacity: 0},
      {duration: 1.5, y: 0, opacity: 1}
    )
    .add(tl2_like, '-=0.5')
    .add(tl2_like_gold)
    .to(gold_sample, {
      duration: 2,
      motionPath: {
        path: [{x: -130, y: 170}, {x: -263, y: 76}],
      },
      delay: 2
     })
    .to(silver_sample, {
      duration: 2,
      motionPath: {
        path: [{x: 120, y: -70}, {x: 261, y: -1}],
      },
      delay: -2
    })
  },[])

    /*
  topstacks2 one, two, three hanging tween
   */
  let one, two, three = useRef(null);

  useEffect(() => {
    gsap.to(one, {y: -10, duration: 0.5, repeat: -1, yoyo: true});
    gsap.to(two, {y: -10, duration: 0.5, repeat: -1, yoyo: true, delay: 0.2});
    gsap.to(three, {y: -10, duration: 0.5, repeat: -1, yoyo: true, delay: 0.4});
  },[])

  return (
    <div className={styles.rankings} ref={el => rankings2 = el}>
      <div className={styles.silver}>
        <div className={styles.likes}>
          <img ref={el => like = el} src={require('../srcs/Landing2/like.png')}/>
          <img ref={el => like1 = el} src={require('../srcs/Landing2/like.png')}/>
          <img ref={el => like2 = el} src={require('../srcs/Landing2/like.png')}/>
          <img ref={el => like3 = el} src={require('../srcs/Landing2/like.png')}/>
          <img ref={el => like4 = el} src={require('../srcs/Landing2/like.png')}/>
          <img ref={el => like5 = el} src={require('../srcs/Landing2/like.png')}/>
        </div>
        <img className={styles.two} ref={el => two = el} src={require('../srcs/Landing2/2.png')}/>
        <img className={styles.silver_sample} ref={el => silver_sample = el} src={require('../srcs/Landing2/silver_sample.png')}/>
        <img className={styles.silver_frame} src={require('../srcs/Landing2/2frame.png')}/>
      </div>
      <div className={styles.gold}>
       <img className={styles.one} ref={el => one = el} src={require('../srcs/Landing2/1.png')}/>
       <img className={styles.gold_sample} ref={el => gold_sample = el} src={require('../srcs/Landing2/gold_sample.png')}/>
       <img className={styles.gold_frame} src={require('../srcs/Landing2/1frame.png')}/>
      </div>
      <div className={styles.bronze}>
        <img className={styles.three} ref={el => three = el} src={require('../srcs/Landing2/3.png')}/>
        <img className={styles.bronze_sample} ref={el => bronze_sample = el} src={require('../srcs/Landing2/bronze_sample.png')}/>
        <img className={styles.bronze_frame} src={require('../srcs/Landing2/3frame.png')}/>
      </div>
    </div>
  );
}