import React from "react";
import styles from "./ProfileUser.module.css";

function ProfileUser(props) {
  return (
    <main className={styles.page}>
      <div className={styles.page__profile + " " + styles.profile}>
        <div className={styles.profile__container + " " + styles.container}>
          <table
            className={
              styles.profile__table +
              " " +
              styles.table +
              " " +
              styles["table-primary"]
            }
          >
            <tbody>
              <h1>Your Profile</h1>
              <hr/>
              <tr>
                <th>Name</th>
                <hr/>
                <td>Dmytro Boiko</td>
              </tr>
              <hr/>
              <tr>
                <th>Email</th>
                <hr/>
                <td>dmytroboiko@ukrnet.com</td>
              </tr>
              <hr/>
              <tr>
                <th>Birth Date</th>
                <hr/>
                <td>March 16, 2004</td>
              </tr>
              <hr/>
              <tr>
                <th>Gender</th>
                <hr/>
                <td>Male</td>
              </tr>
              <hr/>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default ProfileUser;
