import styles from "./Greeting.module.scss";
import classNames from "classnames/bind";
import { useUser } from "../../../stores/user";

const cx = classNames.bind(styles);

const Greeting = () => {
  const isUser = useUser((state) => state.isLoaded);
  const username = useUser((state) => state.username);

  return (
    <div className={cx("Greeting", { hide: !isUser })}>
      {username}님, 좋은 오후에요!
    </div>
  );
};

export default Greeting;
