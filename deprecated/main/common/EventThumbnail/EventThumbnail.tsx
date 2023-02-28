import styles from "./EventThumbnail.module.scss";
import classNames from "classnames/bind";
import { IEventSummary } from "../../../types/event";
import { useRouter } from "next/router";

interface Props {
  eventSummary: IEventSummary;
}
const cx = classNames.bind(styles);

const EventThumbnail = ({ eventSummary }: Props) => {
  const { id, title, writer } = eventSummary;
  const router = useRouter();

  return (
    <div
      className={cx("EventThumbnail")}
      onClick={() => {
        router.push(`post/${id}`);
      }}
    >
      <div className={cx("info")}>
        <div className={cx("title")}>{title}</div>
        <div className={cx("writer")}>{writer}</div>
      </div>
    </div>
  );
};

export default EventThumbnail;
