import styles from "./Main.module.scss";
import classNames from "classnames/bind";
import Header from "../components/common/Header";

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <main className={cx("Main")}>
      <Header />
      <article className={cx("bannerCarousel")}>banner image</article>
      <article className={cx("introduction")}>
        <div>왜 원더여야 할까요?</div>
        <section className={cx("advantage")}>
          귀여운 일러스트 <br />+<br /> 장점1
        </section>
        <section className={cx("advantage")}>
          귀여운 일러스트 <br />+<br /> 장점2
        </section>
        <button className={cx("toSignIn")}>회원가입 하러 가기</button>
      </article>
      <article className={cx("recent")}>
        <div className={cx("label")}>지금 올라온 이벤트</div>
        <ul className={cx("eventList")}>
          <li className={cx("event")}>이벤트 1</li>
        </ul>
      </article>
      <div className={cx("buttons")}>
        <button className={cx("instagram")}>원더 인스타그램 보러 가기</button>
        <button className={cx("guide")}>원더 창작자 가이드</button>
      </div>
      <footer className={cx("footer")}>footer</footer>
    </main>
  );
};

export default Main;
