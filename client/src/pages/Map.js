import React from 'react'
function MapPage() {
    return (
        <div>
            <div id={"divMap"}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861.7560549893808!2d24.702397878448867!3d59.41207311699515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294f1bd8cb15b%3A0xc372ff05bb27e9f4!2sTallinna%20T%C3%B6%C3%B6stushariduskeskus!5e0!3m2!1set!2see!4v1652345075246!5m2!1set!2see"
                    width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
export default MapPage;