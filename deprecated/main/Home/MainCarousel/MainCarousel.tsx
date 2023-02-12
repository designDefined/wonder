import styles from "./MainCarousel.module.scss";
import classNames from "classnames/bind";
import MainThumb from "./MainThumb";

const cx = classNames.bind(styles);

const MainCarousel = () => {
  return (
    <div className={cx("MainCarousel")}>
      <MainThumb />
    </div>
  );
};

export default MainCarousel;
