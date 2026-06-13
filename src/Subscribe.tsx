import { useNavigate } from "react-router-dom"

function Subscribe() {

  const navigate = useNavigate()

  return (

    <div className="subscribe-page">

      {/* Back Button */}

      <button
        className="back-btn"
        onClick={() => navigate("/home")}
      >
        ← Back To Home
      </button>

      {/* Title */}

      <h1 className="subscribe-title">
        Choose the plan that suits you
      </h1>

      {/* Cards */}

      <div className="plans-container">

        {/* Card 1 */}

        <div className="plan-card">

          {/* <div className="popular-badge">
            Popular Choice
          </div> */}

          <h2>Express Edge</h2>

          <p>For news lovers</p>

          <hr />

          <h3>
            ₹3.54<span>/day</span>
          </h3>

          <button className="plan-btn">
            Subscribe Now
          </button>

          <hr />

          <ul>

            <li>✔ Daily E-Paper</li>

            <li>✔ Premium Stories & Archives</li>

            <li>✔ Ad-Lite Experience</li>

            <li>✔ Daily Crossword & Sudoku</li>

            <li className="wrong">
              ✖ UPSC Section + Quiz
            </li>

            <li className="wrong">
              ✖ UPSC Essentials Magazine
            </li>

          </ul>

        </div>

        {/* Card 2 */}

        <div className="plan-card">

          <h2>UPSC Pack</h2>

          <p>For competitive exam aspirants</p>

          <hr />

          <h3>
            ₹4.17<span>/day</span>
          </h3>

          <button className="plan-btn">
            Subscribe Now
          </button>

          <hr />

          <ul>

            <li>✔ Daily E-Paper</li>

            <li>✔ Premium Stories & Archives</li>

            <li>✔ Ad-Lite Experience</li>

            <li>✔ Daily Crossword & Sudoku</li>

            <li>✔ UPSC Section + Quiz</li>

            <li>✔ UPSC Essentials Magazine</li>

          </ul>

        </div>

      </div>

    </div>
  )
}

export default Subscribe