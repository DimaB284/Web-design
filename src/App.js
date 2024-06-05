import "./App.css";
import MainForm from "./pages/MainForm";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    dateTime: [],
    userName: [],
  });

  async function createAlarm(dateTime, timeTime) {
    try {
      const requestData = {
        method: "POST",
        body: JSON.stringify({
          timeTime,
          dateTime,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        "http://localhost:3001/api/createAlarm",
        requestData
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.date);
      setInfo((prevInfo) => ({
        ...prevInfo,
        dateTime: data.date,
        timeTime: data.time,
      }));

      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <MainForm
              Info={info}
              createAlarm={createAlarm}
            />
          }
        />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/myProfile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
