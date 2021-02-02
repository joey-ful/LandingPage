import styles from './CoverPage.module.css'

const CoverPage = () => {
  return (
    <>
      <section className={styles.coverpage}>
        <div className={styles.wrapper}>
          <span className={styles.title}>랜딩페이지</span>
          <span className={styles.subtitle}>GSAP 스크롤 애니이션</span>
          <div className={styles.text}>
            GSAP 애니메이션을 적용해 스크롤에 반응하는 랜딩페이지입니다. <br/>예발자닷컴이라는 토이프로젝트의 추가 기능으로 아직 구현 중에 있습니다.
          </div>
        </div>
      </section>
    </>
  );
}

export default CoverPage;