import styles from "./BigCarousel.module.scss";
import classNames from "classnames/bind";
import { IEventSummary } from "../../../../types/event";
import BigEventThumbnail from "../EventThumbnail/BigEventThumbnail";

interface Props {
  eventSummaries: IEventSummary[];
}
const cx = classNames.bind(styles);

const BigCarousel = ({ eventSummaries }: Props) => {
  return (
    <div className={cx("BigCarousel")}>
      {eventSummaries.map((event) => (
        <BigEventThumbnail key={event.id} eventSummary={event} />
      ))}
    </div>
  );
};

export default BigCarousel;
