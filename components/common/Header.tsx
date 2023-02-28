import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("Header")}>
      <img className={cx("logo")} src={"assets/logo.png"} />
      <div className={cx("search")}>
        <input className={cx("input")} />
        <img className={cx("icon")} src={"assets/icon/search.svg"} />
      </div>
      <button
        className={cx("login")}
        onClick={() => {
          fetch("/login", { method: "POST" }).then((response) =>
            console.log(response),
          );
        }}
      >
        로그인
      </button>
    </header>
  );
};

export default Header;
