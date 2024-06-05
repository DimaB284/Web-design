import React from "react";
import styles from "./SignInUser.module.css"; // Путь к CSS модулю

function SignInUser(props) {
  return (
    <div className={styles.page__signin + " " + styles.signin}>
      <div className={styles.signin__container + " " + styles.container}>
        <form className={styles["main-login__form"]} action="#">
        <table
            className={
              styles.profile__table +
              " " +
              styles.table +
              " " +
              styles["table-primary"]
            } >
        <tbody>
              <h1>Sign In</h1>
              <hr/>
              <tr>
                <th>Your nickname</th>
                <input type="text" placeholder="Nickname" />
              </tr>
              <hr/>
              <tr>
                <th>Your email</th>
                <input type="email" placeholder="Email" />
              </tr>
              <hr/>
            </tbody>
            </table>
        </form>
      </div>
    </div>
  );
}

export default SignInUser;
