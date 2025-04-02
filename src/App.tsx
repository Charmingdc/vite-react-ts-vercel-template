import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [getMessage, setGetMessage] = useState("");
  const [postResponse, setPostResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch message from Vercel serverless function (GET request) on load
  useEffect(() => {
    fetch("/api/handler")
      .then((res) => res.json())
      .then((data) => setGetMessage(data.message))
      .catch(() => setGetMessage("Failed to fetch from serverless function."));
  }, []);

  // Function to send a POST request
  const sendPostRequest = () => {
    setLoading(true);
    fetch("/api/handler", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: "Hello from Charmingdc's React Template!" }),
    })
      .then((res) => res.json())
      .then((data) => setPostResponse(data.message))
      .catch(() => setPostResponse("POST request failed."))
      .finally(() => setLoading(false));
  };

  return (
    <main className="container">
      <header>
        <div className="logos">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <h1>Vite + React + TypeScript + Vercel</h1>
        <p className="subtitle">A modern template with serverless functions</p>
      </header>

      <section className="card">
        <h3>GET Request Response:</h3>
        <p>{getMessage || "Loading..."}</p>
      </section>

      <section className="card">
        <h3>POST Request Response:</h3>
        <p>{postResponse || "Click the button to send a POST request."}</p>
        <button onClick={sendPostRequest} disabled={loading}>
          {loading ? "Sending..." : "Send POST Request"}
        </button>
      </section>
    </main>
  );
}

export default App;