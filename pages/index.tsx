import styles from "./Main.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <article className={cx("Main")}>
      <div className={cx("container")}></div>
    </article>
  );
};

export default Main;
