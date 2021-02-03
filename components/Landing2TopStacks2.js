import React, { useRef, useEffect } from 'react';
import styles from './Landing2TopStacks2.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Landing2TopStacks2Rankings from './Landing2TopStacks2Rankings.js';

gsap.registerPlugin(ScrollTrigger);

export default function Landing2TopStacks2() {
  let text2, more2 = useRef(null);

  useEffect(() => {
    /*
    topstacks2 subheader and more => restart
     */
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: text2,
        start: 'top bottom',
        end: 'bottom top',
        markers: false,
        toggleActions: 'restart none restart none'
      }
    });

    tl2.fromTo([text2, more2],
      {y: 50, opacity: 0},
      {duration:1.5, y: 0, opacity: 1}
      )
  },[])


  let topstacks2, header2 = useRef(null);

  useEffect(() => {
    /*
    topstacks2 header
     */
    let tl2_header = gsap.timeline({
      scrollTrigger: {
        trigger: topstacks2,
        start: 'top bottom'
      }
    });

    tl2_header
    .fromTo(header2,
      {y: 50, opacity: 0},
      {duration: 1.5, y: 0, opacity: 1},
      '-=1.5'
      )
  },[])

  return (
    <>
      <section className={styles.topstacks2} ref={el => topstacks2 = el}>
          <div className={styles.wrapper2}>
            <div className={styles.uppper_area}>
              <div className={styles.header2} ref={el => header2 = el}>
                <div><h1>기술스택 랭킹을</h1></div>
                <div><h1>확인하세요</h1></div>
              </div>
              <div className={styles.text2} ref={el => text2 = el}>마음에 드는 기술스택에 좋아요해주세요</div>
              <div className={styles.more2} ref={el => more2 = el}><Link href="/comingSoon"><a>좋아요하러 가기  ></a></Link></div>
              </div>
            <Landing2TopStacks2Rankings />
          </div>
      </section>
    </>

  );
}