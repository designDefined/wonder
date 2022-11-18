import styles from "./Main.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import Navigator from "../components/main/Navigator/Navigator";
import { allTabs, Tab } from "../types/tab";
import Home from "../components/main/Home/Home";
import MyPage from "../components/main/MyPage/MyPage";
import Social from "../components/main/Social/Social";

const cx = classNames.bind(styles);

const Main = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(allTabs[0]);

  return (
    <article className={cx("Main")}>
      <div className={cx("container", `${currentTab}`)}>
        <Home />
        <Social />
        <MyPage />
      </div>

      <Navigator currentTab={currentTab} setTab={setCurrentTab} />
    </article>
  );
};

export default Main;
