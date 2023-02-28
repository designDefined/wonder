import styles from "./BigEventThumbnail.module.scss";
import classNames from "classnames/bind";
import { IEventSummary } from "../../../types/event";
import { useRouter } from "next/router";

interface Props {
  eventSummary: IEventSummary;
}
const cx = classNames.bind(styles);

const BigEventThumbnail = ({ eventSummary }: Props) => {
  const router = useRouter();
  const { id, title, time } = eventSummary;
  return (
    <div
      className={cx("BigEventThumbnail")}
      onClick={() => {
        router.push(`post/${id}`);
      }}
    >
      <div className={cx("info")}>
        <div className={cx("title")}>{title}</div>
        <div className={cx("time")}>{time}</div>
      </div>
    </div>
  );
};

export default BigEventThumbnail;
