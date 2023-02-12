import styles from "./MainCarousel.module.scss";
import classNames from "classnames/bind";
import er from "../../../assets/mock/poster/ER_poster.png";
import Image from "next/image";

const cx = classNames.bind(styles);

const MainThumb = () => {
  return (
    <div className={cx("MainThumb")}>
      <div className={cx("poster")}>
        <Image src={er} alt="Poster of E.R." width={340} height={481} />
      </div>
      <div className={cx("info")}></div>
    </div>
  );
};

export default MainThumb;
