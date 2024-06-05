import React from "react";
import Header from "../components/Header/Header";
import Alarms  from "../components/Alarms/Alarms";
import styles from "./Style.module.css";
import { useState } from "react";

function MainForm({ Info, createAlarm}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const addAlarm = () => {
    console.log(date, time);
    createAlarm(date, time);
  };
  return (
    <div className={styles.MainForm}>
      <Header />
      <div className={styles.main}>
        {Info.dateTime.map((postNum, index) => (
          <Alarms
            key={index}
            Info={Info}
            index={index}
          />
        ))}
      </div>
      <div className={styles.types}>
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <input
          type="time"
          placeholder="Time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
      <div className={styles.main_buttons}>
        <div className={styles["manage-main__buttons"]}>
          <button
            type="button"
            id="openModal"
            className={`${styles["manage-main__button"]} ${styles["button-add"]} btn btn-success`}
            onClick={addAlarm}
          >
            Додати
          </button>
          <button
            type="button"
            className={`${styles["manage-main__button"]} ${styles["button-edit"]} btn btn-primary`}
          >
            Редагувати
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
