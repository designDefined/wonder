import styles from "./UnivList.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import toggleHandle from "../../../assets/icon/toggleHandle.svg";

const cx = classNames.bind(styles);

const UnivList = () => {
  return (
    <div className={cx("UnivList")}>
      <div className={cx("schoolName")}>서울대학교</div>
      <div className={cx("handle")}>
        <Image
          src={toggleHandle}
          alt="handle button for toggle"
          width={12}
          height={7}
        />
      </div>
    </div>
  );
};

export default UnivList;
