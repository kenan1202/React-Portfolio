import React from 'react'
import ConnectMe from '../components/ConnectMe'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import classes from './Portfolio.module.css';
import photo1 from '../assets/img/photo1.jpg';
import photo2 from '../assets/img/photo2.jpg';
import photo3 from '../assets/img/photo3.jpg';
import photo4 from '../assets/img/photo4.jpg';
import photo5 from '../assets/img/photo5.jpg';

function Portfolio() {
  return (
    <div>
      <Navbar></Navbar>
      <div class={`container-main ${classes.portfolio}`}>
        <div class='row justify-content-around mt-5'>
          <div class='col-xl-6 col-10 border border-primary bg-dark mb-5'>
            <div class=' line col-12 text-white p-3'>
              <h2>Portfolio</h2>
            </div>

            <div class='container-technics d-flex flex-wrap '>
              <div class='img1 position-relative col-md-5 col-10 m-4'>
                <img src={photo1} alt = "Photo1" />
                <div class={`${classes.name1} position-absolute text-center bg-info py-2 text-white`}>
                  Hangman
                </div>
              </div>
              <div class='img2 position-relative col-md-5 col-10 m-4'>
              <img src={photo2} alt = "Photo2" />
                <div class={`${classes.name1} position-absolute text-center bg-info py-2 text-white`}>
                  Rpg Game
                </div>
              </div>
              <div class='img3 position-relative col-md-5 col-10 m-4'>
              <img src={photo3} alt = "Photo3" />
                <div class={`${classes.name1} position-absolute text-center bg-info py-2 text-white`}>
                  Trivia Game
                </div>
              </div>
              <div class='img4 position-relative col-md-5 col-10 m-4'>
              <img src={photo4} alt = "Photo4" />
                <div class={`${classes.name1} position-absolute text-center bg-info py-2 text-white`}>
                  Rutgers Info Widget
                </div>
              </div>
              <div class='img5 position-relative col-md-5 col-10 m-4'>
              <img src={photo5} alt = "Photo5" />
                <div class={`${classes.name1} position-absolute text-center bg-info py-2 text-white`}>
                  Rock Paper Scissors
                </div>
              </div>
            </div>
          </div>

          <ConnectMe></ConnectMe>

        </div>
      </div>

      <Footer></Footer>

      
    </div>
  )
}

export default Portfolio
