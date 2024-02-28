import React, { useEffect } from 'react';
import UserNavBar from './UserNavBar';

const UserHomePage = () => {
  
  return (
    <div>
      <UserNavBar />
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img height="670px" src="https://wallpapercave.com/wp/wp9971696.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img height="670px"  src="https://wallpapercave.com/wp/wp2482996.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img height="670px"  src="https://wallpapercave.com/wp/wp2861304.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default UserHomePage;
