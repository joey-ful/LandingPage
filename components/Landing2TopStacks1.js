import React, { useRef, useEffect } from 'react';
import styles from './Landing2TopStacks1.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StackLogos from './StackLogos';

gsap.registerPlugin(ScrollTrigger);

export default function Landing2TopStacks1() {
  let left1, header1 = useRef(null);
  useEffect(() => {
    let tl1_header = gsap.timeline({
      scrollTrigger: {
        trigger: header1,
        start: 'top bottom',
      }
    });

    tl1_header.fromTo(left1,
      {y: 50, opacity: 0},
      {duration: 1.5, y: 0, opacity: 1}
      )
  },[])

  let job, coding, python, more1 = useRef(null);
  useEffect(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: left1,
        start: 'top bottom',
        end: 'bottom top',
        markers: false,
        toggleActions: 'restart none restart none'
      }
    });
        tl1
      .fromTo(job,
    {x: 100, opacity: 0},
    {duration: 1.5, x: 0, opacity: 1},
      '-=1'
    )
      .fromTo(coding,
      {x: 100, opacity: 0},
      {duration: 1.5, x: 0, opacity: 1},
      '-=1'
    )
      .fromTo(python,
      {x: 100, opacity: 0},
      {duration: 1.5, x: 0, opacity: 1},
      '-=1'
    )
      .fromTo(more1,
      {x: -20, opacity: 0},
      {duration: 1.5, x: 0, opacity: 1},
      '-=1'
    )
  },[])



  return (
    <>
      <section className={styles.topstacks1}>
          <div className={styles.wrapper1}>
              <div className={styles.left1} ref={el => left1 = el}>
                  <h1 ref={el => header1 = el}>무엇을 배울까</h1>
                  <div className={styles.text1}>상황에 맞는 기술스택을 확인해보세요</div>
                  <div className={styles.more1_portrait}><Link href="/comingSoon"><a>자세히 알아보기  ></a></Link></div>
                  <div className={styles.cards}>
                      <div className={styles.job} ref={el => job = el}>
                          <img className={styles.cards_img} src={require('../srcs/Landing2/job.png')}/>
                          <span className={styles.cards_text}>채용시 가장 많이 뽑는 언어는?</span>
                      </div>
                      <div className={styles.coding} ref={el => coding = el}>
                          <img className={styles.cards_img} src={require('../srcs/Landing2/codingtestbadge.png')}/>
                          <span className={styles.cards_text}>코딩테스트에 가장 유리한 언어는?</span>
                      </div>
                      <div className={styles.python} ref={el => python = el}>
                          <img className={styles.cards_img} src={require('../srcs/Landing2/python.png')}/>
                          <span className={styles.cards_text}>파이썬의 용도는?</span>
                      </div>
                      <div className={styles.more1} ref={el => more1 = el}><Link href="/comingSoon"><a>자세히 알아보기  ></a></Link></div>
                  </div>
              </div>
              <div className={styles.right1}>
                <StackLogos />
              </div>
          </div>
      </section>
    </>

  );
}