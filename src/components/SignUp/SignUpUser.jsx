import React from "react";
import styles from "./SignUpUser.module.css";

function SignUpUser(props) {
  return (
    <main className={styles.page}>
      <section className={`${styles.py5} py-5`}>
        <div className={styles.container}>
          <form>
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
              <tr>
                <th>Your gender</th>
                <input type="input" placeholder="Gender" />
              </tr>
              <hr/>
              <tr>
                <th>Your birth date</th>
                <input type="date" placeholder="Birth date" />
              </tr>
              <hr/>
              
            </tbody>
            </table>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignUpUser;
