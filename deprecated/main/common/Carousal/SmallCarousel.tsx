import styles from "./SmallCarousel.module.scss";
import classNames from "classnames/bind";
import { IEventSummary } from "../../../types/event";
import EventThumbnail from "../EventThumbnail/EventThumbnail";

interface Props {
  eventSummaries: IEventSummary[];
}
const cx = classNames.bind(styles);

const SmallCarousel = ({ eventSummaries }: Props) => {
  return (
    <div className={cx("SmallCarousel")}>
      {eventSummaries.map((event) => (
        <EventThumbnail key={event.id} eventSummary={event} />
      ))}
    </div>
  );
};

export default SmallCarousel;
