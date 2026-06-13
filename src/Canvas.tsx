import { Offcanvas } from "react-bootstrap"
import { useState } from "react"

function Canvas() {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>

      <span
        className="menu-icon"
        onClick={handleShow}
      >
        ☰
      </span>


      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
      >

        <Offcanvas.Header closeButton>

          <div className="top-bar">

            <h5>Edition</h5>

            <div className="edition-buttons">

              <button>🇮🇳 IND</button>

              <button>🌍 INT</button>

            </div>

          </div>

        </Offcanvas.Header>

        <Offcanvas.Body>


          <button className="full-access-btn">
            SUBSCRIBE FOR FULL ACCESS
          </button>

          <div className="download-box">

            <span>
              Install IE App for better experience
            </span>

            <button className="download-btn">
              Download
            </button>

          </div>


          <h4 className="section-title">
            Featured
          </h4>

          <div className="feature-grid">

            <div className="feature-card">
              My Express
            </div>

            <div className="feature-card">
              Premium
            </div>

            <div className="feature-card">
              UPSC
            </div>

          </div>


          <div className="epaper-card">

            Today's E-paper →

          </div>


          <h4 className="section-title">
            Trending Topics
          </h4>

          <div className="topic-grid">

            <span>UPSC Offer</span>

            <span>Long Reads</span>

            <span>Legal News</span>

            <span>Health</span>

            <span>Research</span>

            <span>Games</span>

            <span>Podcast</span>

          </div>

          <h4 className="section-title">
            News
          </h4>

          <div className="news-links">

            <p>🏠 Home</p>

            <p>🇮🇳 India</p>

            <p>💬 Opinion</p>

            <p>📈 Business</p>

            <p>🏏 Sports</p>

            <p>🌎 World</p>

          </div>

        </Offcanvas.Body>

      </Offcanvas>

    </>
  )
}

export default Canvas