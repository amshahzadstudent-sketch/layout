import './App.css'

function App() {
  return (
    <div className="container">
      <div className="header">Ahmad Shahzad - BSIT DA 3A</div>

      <div className="content">
        <div className="content1">
          <div className="c1left">
            <div className="hero">Hero</div>
            <div className="sidebar">Sidebar</div>
          </div>

          <div className="c1right">
            <div className="mc">
              Main Content
              <p style={{ fontSize: '12px' }}>
                **If things do not look right, make sure your browser is in "Experimental Mode".
              </p>
            </div>
            <div className="ec">Extra Content</div>
          </div>
        </div>

        <div className="content2">
          <div className="ri">Related Images</div>
          <div className="rp">Related Posts</div>
        </div>
      </div>

      <div className="footer">Footer</div>
    </div>
  )
}

export default App
