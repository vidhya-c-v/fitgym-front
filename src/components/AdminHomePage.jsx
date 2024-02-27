import React from 'react'
import AdminNavBar from './AdminNavBar'

const AdminHomePage = () => {
  return (
    <div>
      <AdminNavBar />


      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img height="675px" src="https://rare-gallery.com/uploads/posts/878456-ABS-Fitness-Gym-Workout-Two.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>“The body achieves what the mind believes.” - Napoleon Hill</h5>

            </div>
          </div>
          <div class="carousel-item">
            <img height="675px" src="https://wallpapercave.com/wp/wp2356164.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>“I hated every minute of training, but I said, Don't quit. Suffer now and live the rest of your life as a champion.” - Muhammad Ali</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img height="675px" src="https://wallpapercave.com/wp/wp7597804.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>“The secret of getting ahead is getting started.” — Mark Twain</h5>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>





    </div>

  )
}
export default AdminHomePage