import styles from "./MyPage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MyPage = () => {
  return <div className={cx("MyPage")}>MyPage</div>;
};

export default MyPage;
