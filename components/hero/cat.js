import "./cat.css";

export default function Cat() {
  return (
    <div id="cat" className="cat-main">
      <div className="cat">
        <div className="body"></div>
        <div className="head">
          <div className="ear"></div>
          <div className="ear"></div>
        </div>
        <div className="face">
          <div className="nose"></div>
          <div className="whisker-container">
            <div className="whisker"></div>
            <div className="whisker"></div>
          </div>
          <div className="whisker-container">
            <div className="whisker"></div>
            <div className="whisker"></div>
          </div>
          <div className="eyes">
            <div className="eye">
              <div className="pupil"></div>
            </div>
            <div className="eye">
              <div className="pupil"></div>
            </div>
          </div>
        </div>
        <div className="tail-container">
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stand">
        <div className="top"></div>
        <div className="pillar">
          <div className="roll"></div>
          <div className="roll"></div>
          <div className="roll"></div>
          <div className="roll"></div>
          <div className="roll"></div>
          <div className="roll"></div>
          <div className="roll"></div>
          <div className="roll"></div>
          <div className="roll"></div>
          <div className="roll"></div>
          <div className="roll"></div>
          <div className="roll"></div>
          <div className="roll"></div>
        </div>
      </div>
    </div>
  );
}
