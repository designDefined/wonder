import styles from "./Home.module.scss";
import {
  allEventSummaries,
  immediateEventSummaries,
} from "../../../mock/allEvents";
import SmallCarousel from "../common/Carousal/SmallCarousel";
import classNames from "classnames/bind";
import BigCarousel from "../common/Carousal/BigCarousel";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("Home")}>
      <header className={cx("header")}>Home</header>
      <section className={cx("section")}>
        <div className={cx("name")}>오늘의 이벤트</div>
        <BigCarousel eventSummaries={immediateEventSummaries} />
      </section>
      <section className={cx("section")}>
        <div className={cx("name")}>친구가 좋아하는 이벤트</div>
        <SmallCarousel eventSummaries={allEventSummaries} />
      </section>
      <section className={cx("section")}>
        <div className={cx("name")}>최근 등록</div>
        <SmallCarousel eventSummaries={allEventSummaries} />
      </section>
      <section className={cx("section")}>
        <div className={cx("name")}>당신이 좋아할만한 이벤트</div>
        <SmallCarousel eventSummaries={allEventSummaries} />
      </section>
    </div>
  );
};

export default Home;
