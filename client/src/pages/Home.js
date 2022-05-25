import React from 'react'
function Home() {  
    return (
        <div>
            <a href="src/pages/Home#">
                <img src="images/photo.jpg" alt=" " id="main-picture" width="100%"/>
            </a>

            <footer>
                <div id="footer-info">
                    <div>
                        <h3>Contact</h3>
                        <span><img src="images/email.png" alt=" " className="icons"/></span>
                        <span className="info">Info@hairline.ee</span><br/>
                        <span><img src="images/gps.png" alt=" " className="icons"/></span>
                        <span className="info">Roseni 12, Tallinn</span><br/>
                        <span><img src="images/phone.png" alt=" " className="icons"/></span>
                        <span className="info">+372 602 2424</span><br/>
                        <span><img src="images/clock.png" alt=" " className="icons"/></span>
                        <span className="info">E-R 9-18</span>
                    </div>
                    <img src="images/Logo.png" alt=""/>
                </div>
            </footer>
        </div>
    )
}  

export default Home