import styles from "./New.module.scss";
import Header from "../../components/common/Header";
import classNames from "classnames/bind";
import { useReducer } from "react";
import {
  createWonderAdaptor,
  createWonderExtractor,
  CreateWonderState,
} from "../../states/createWonder/createWonderState";
import { postCreateWonder } from "../../APIs/wonder/wonder";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

const New = () => {
  const router = useRouter();
  const [state, dispatch] = useReducer<
    (
      state: CreateWonderState,
      partial: Partial<CreateWonderState>,
    ) => CreateWonderState
  >((state, partial) => ({ ...state, ...partial }), createWonderAdaptor());

  return (
    <main className={cx("New")}>
      <Header />
      <div className={cx("thumbnail")}>
        <input type="file" />
      </div>
      <div className={cx("form")}>
        <section className={cx("basicInformation", "divided")}>
          <h2 className={cx("mainLabel")}>행사 제목</h2>
          <input
            type="text"
            className={cx("textInput")}
            placeholder="예) 이 아이"
            value={state.title}
            onChange={(e) => dispatch({ title: e.target.value })}
          />
          <h2 className={cx("mainLabel")}>행사 태그</h2>
          <input type="text" className={cx("textInput")} />
          <h2 className={cx("mainLabel")}>행사 한 줄 요약</h2>
          <input
            type="text"
            className={cx("textInput")}
            value={state.summary}
            onChange={(e) => dispatch({ summary: e.target.value })}
          />
        </section>
        <section className={cx("content", "divided")}>
          <h2 className={cx("mainLabel")}>행사 내용</h2>
          <textarea
            className={cx("textInput")}
            value={state.content}
            onChange={(e) => dispatch({ content: e.target.value })}
          />
        </section>
        <section className={cx("dateAndLocation", "divided")}>
          <h2 className={cx("mainLabel")}>행사 기간</h2>
          <input type="text" className={cx("textInput")} />
          <h2 className={cx("mainLabel")}>행사 위치</h2>
          <input type="text" className={cx("textInput")} />
        </section>
        <section className={cx("bookInformation", "divided")}>
          <h2 className={cx("mainLabel")}>예약/ 예매자 기본 정보 (선택)</h2>
          <div className={cx("toggle")}> 이름을 받을래요</div>
          <div className={cx("toggle")}> 전화번호를 받을래요</div>
          <div className={cx("toggle")}> 이메일을 받을래요</div>
        </section>
        <button
          className={cx("upload")}
          onClick={() => {
            postCreateWonder(createWonderExtractor(state)).then(
              (res) => {
                if (res.isSuccess) {
                  router.push(`../event/view/${res.eventId}`);
                }
              },
              (err) => {},
            );
          }}
        >
          업로드
        </button>
      </div>
    </main>
  );
};

export default New;
