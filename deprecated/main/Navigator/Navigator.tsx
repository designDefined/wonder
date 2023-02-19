import styles from "./Navigator.module.scss";
import classNames from "classnames/bind";
import { allTabs, Tab } from "../../types/tab";
import { MouseEventHandler, useCallback } from "react";

const cx = classNames.bind(styles);

interface Props {
  currentTab: Tab;
  setTab: (tabs: Tab) => void;
}

const Navigator = ({ currentTab, setTab }: Props) => {
  const onClickTab = useCallback(
    (tab: Tab): MouseEventHandler<HTMLDivElement> =>
      (): void => {
        if (currentTab !== tab) setTab(tab);
      },
    [currentTab],
  );

  return (
    <nav className={cx("Navigator")}>
      {allTabs.map((tab) => (
        <div
          key={tab}
          className={cx("item", { current: tab === currentTab })}
          onClick={onClickTab(tab)}
        >
          {tab}
        </div>
      ))}
    </nav>
  );
};
export default Navigator;
