import React from "react";
import styles from "./Alarms.module.css";
import { useEffect } from "react";

function Alarms({ index, Info}) {
  useEffect(() => {
    Info.dateTime.forEach((dateItem, index) => {
      const alarmTime = new Date(`${dateItem}T${Info.timeTime[index]}`);
      const currentTime = new Date();
      const timeUntilAlarm = alarmTime.getTime() - currentTime.getTime();

      if (timeUntilAlarm > 0) {
        const timer = setTimeout(() => {
          alert(`Alarm for ${dateItem} at ${Info.timeTime[index]}!`);
        }, timeUntilAlarm);

        return () => clearTimeout(timer);
      }
    });
  }, [Info.dateTime, Info.timeTime]);
  return (
    <div className={styles.fontCard}>
  <div className={styles.card}>
    <div className={styles.timeContainer}>
      <h1 className={styles.time}>{Info.dateTime[index]}</h1>
      <h1 className={styles.time}>{Info.timeTime[index]}</h1>
    </div>
  </div>
</div>

  );
}

export default Alarms;
