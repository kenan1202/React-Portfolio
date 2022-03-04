import React from 'react'
import ConnectMe from '../components/ConnectMe'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import classes from './Contact.module.css';

function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <div class={`container-main ${classes.contact}`}>
        <div class='row justify-content-around mt-5'>
          <div class='col-xl-6 col-10 border border-primary bg-dark mb-5'>
            <div class=' line col-12 text-white p-3'>
              <h2>Contact</h2>
            </div>
            <form>
              <div class='form-group my-3'>
                <label for='exampleInputName1' class='text-white pt-3'>
                  Name
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='exampleInputName1'
                />
              </div>
              <div class='form-group my-3'>
                <label for='exampleInputEmail1' class='text-white'>
                  Email address
                </label>
                <input
                  type='email'
                  class='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
                <small id='emailHelp' class='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class='form-group my-3'>
                <label for='exampleFormControlTextarea1' class='text-white'>
                  Message
                </label>
                <textarea
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </div>

              <button type='submit' class='btn btn-primary mb-4'>
                Submit
              </button>
            </form>
          </div>

          <ConnectMe></ConnectMe>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Contact
