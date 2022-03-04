import React from 'react'
import ConnectMe from '../components/ConnectMe'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import classes from './About.module.css'
import aboutPhoto from '../assets/img/AboutPhoto.jpg'

function About() {
  return (
    <div>
      <Navbar> </Navbar>
      <div className={`container-main ${classes.about}`}>
        <div class='row justify-content-around mt-5'>
          <div class='col-xl-6 col-10 border border-primary bg-dark mb-5'>
            <div class=' line col-12 text-white p-3'>
              <h2> About </h2>{' '}
            </div>
            <div class={`${classes.img} col-5 float-start py-4 mx-3`}>
              <img src={aboutPhoto} alt='fsfds' />
            </div>{' '}
            <div class={`${classes['font-p']} col-12 text-white p-3 `}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ullam,
                molestiae quisquam praesentium quasi quaerat aliquid aliquam
                ipsa nobis adipisci assumenda autem veritatis quis inventore
                quae atque similique distinctio placeat.Optio dolores possimus
                debitis aliquid, hic ab veritatis explicabo nobis labore
                reprehenderit doloribus aperiam dolorum!Dolorem libero
                laboriosam voluptate dolor.Officia.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. <br /> <br /> Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.Voluptates, numquam mollitia porro
                sequi fugiat earum voluptatem accusantium perferendis soluta
                magni neque excepturi praesentium incidunt quae aperiam
                repudiandae adipisci sit.Voluptatum.{' '}
              </p>{' '}
            </div>{' '}
            {/* <div class={`${classes['font-p']} col-12 text-white py-3`}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit.Voluptates, numquam mollitia porro sequi fugiat earum
                voluptatem accusantium perferendis soluta magni neque excepturi
                praesentium incidunt quae aperiam repudiandae adipisci
                sit.Voluptatum.{' '}
              </p>{' '}
            </div>{' '} */}
          </div>

          <ConnectMe> </ConnectMe>

          <Footer> </Footer>
        </div>{' '}
      </div>{' '}
    </div>
  )
}

export default About
