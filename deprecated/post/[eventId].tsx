import styles from "./Post.module.scss";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { IEventSummary } from "../../types/event";
import { allEventSummaries } from "../mock/events/allEvents";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Post: NextPage = () => {
  const [event, setEvent] = useState<null | IEventSummary>(null);
  const router = useRouter();
  const id = router.query.eventId;

  useEffect(() => {
    const target = allEventSummaries.find((event) => event.id === Number(id));
    if (target) setEvent(target);
  }, [id]);

  return (
    <article className={cx("Post")}>
      {event && (
        <div>
          <div>
            title: <span>{event.title}</span>
          </div>
          <div>
            writer: <span>{event.writer}</span>
          </div>
          <div>
            time: <span>{event.time}</span>
          </div>
        </div>
      )}
      <button className={cx("toHome")} onClick={() => router.push("/")}>
        {" "}
        돌아가기{">"}
      </button>
    </article>
  );
};

export default Post;
