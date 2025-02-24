import React from 'react';
import './MarqueScroller.css';

function MarqueScroller() {
  return (
    <div className="marquee-container">
      <div className="marquees">
        <section className="marquee">
          <div className="marquee--inner" style={{ animationDuration: '17s' }}>
            <p>
              Innerve by CODIAC ✦ CEM Trivandrum ✦ Innerve by CODIAC ✦ CEM
              Trivandrum ✦ Innerve by CODIAC ✦ CEM Trivandrum ✦ Innerve by
              CODIAC ✦ CEM Trivandrum ✦ Innerve by CODIAC ✦ CEM Trivandrum ✦
            </p>
          </div>
        </section>
        <section className="marquee">
          <div className="marquee--inner" style={{ animationDuration: '22s' }}>
            <p style={{ border: '1px solid #fff', backgroundColor: 'black' }}>
              March 6 7 8 ✦ Techno cultural Fest ✦ March 6 7 8 ✦ Techno cultural
              Fest ✦ March 6 7 8 ✦ Techno cultural Fest✦ March 6 7 8 ✦ Techno
              cultural Fest ✦ March 6 7 8 ✦ Techno cultural Fest ✦
            </p>
          </div>
        </section>
        <section className="marquee">
          <div className="marquee--inner" style={{ animationDuration: '27s' }}>
            <p>
              Workshops ✦ Hackathon ✦ Tech Competitions ✦ Expo ✦ Fun Games ✦
              Workshops ✦ Hackathon ✦ Tech Competitions ✦ Expo ✦ Fun Games
              ✦Workshops ✦ Hackathon ✦ Tech Competitions ✦ Expo ✦ Fun Games ✦
            </p>
          </div>
        </section>
        <section className="marquee">
          <div className="marquee--inner" style={{ animationDuration: '32s' }}>
            <p>
              Innerve by CODIAC ✦ CEM Trivandrum ✦ Innerve by CODIAC ✦ CEM
              Trivandrum ✦ Innerve by CODIAC ✦ CEM Trivandrum ✦ Innerve by
              CODIAC ✦ CEM Trivandrum ✦ Innerve by CODIAC ✦ CEM Trivandrum ✦
            </p>
          </div>
        </section>
        {/* <div className="marquee">
          <div className="marquee--inner" style={{ animationDuration: '88s' }}>
            <p>
              Innerve by CODIAC ✦ CEM Trivandrum ✦ Innerve by CODIAC ✦ CEM
              Trivandrum ✦ Innerve by CODIAC ✦ CEM Trivandrum ✦ Innerve by
              CODIAC ✦ CEM Trivandrum ✦ Innerve by CODIAC ✦ CEM Trivandrum ✦
            </p>
          </div>
        </div> */}
        {/* <section className="marquee">
          <div className="marquee--inner" style={{ animationDuration: '90s' }}>
            <p>
              Innerve by CODIAC ✦ CEM Trivandrum ✦ Innerve by CODIAC ✦ CEM
              Trivandrum ✦ Innerve by CODIAC ✦ CEM Trivandrum ✦ Innerve by
              CODIAC ✦ CEM Trivandrum ✦ Innerve by CODIAC ✦ CEM Trivandrum ✦
            </p>
          </div>
        </section> */}
        {/* <section className="marquee">
          <div className="marquee--inner" style={{ animationDuration: '93s' }}>
            <p>
              Innerve by CODIAC ✦ CEM Trivandrum ✦ Innerve by CODIAC ✦ CEM
              Trivandrum ✦ Innerve by CODIAC ✦ CEM Trivandrum ✦ Innerve by
              CODIAC ✦ CEM Trivandrum ✦ Innerve by CODIAC ✦ CEM Trivandrum ✦
            </p>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default MarqueScroller;
