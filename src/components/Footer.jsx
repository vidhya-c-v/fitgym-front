import React from 'react'

const Footer = () => {
    return (
        <div>

            <div class="card bg-dark text-white">
                <div class="card-header">
                    <li>

                        <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="1"
                            width="100%" height="200" allowfullscreen>

                        </iframe>
                    </li>
                    <h2>Contact Us</h2>
                </div>
                <ul class="list-group list-group-flush">
                    <center>
                        <li class="list-group-item bg-dark text-white"><img src="https://cdn.pixabay.com/photo/2021/10/29/21/40/phone-icon-6753051_1280.png" alt="Bootstrap" width="50" height="50" />&nbsp;9826384673
                            &nbsp;&nbsp;&nbsp;<img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Bootstrap" width="50" height="50" />&nbsp;admin@fitgym.co.in
                            &nbsp;&nbsp;&nbsp;<img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75230/location-icon-clipart-xl.png" alt="Bootstrap" width="50" height="50" />&nbsp;Angamaly,Eranakulam
                        </li>
                    </center>


                </ul>
            </div>

        </div>
    )
}

export default Footer