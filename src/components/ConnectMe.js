import React from 'react'
import classes from './ConnectMe.module.css';

function ConnectMe() {
  return (
    <div class={`${classes.content} col-xl-3 col-lg-4 col-sm-5 col-8   border border-primary bg-dark`}>
      <div class= {`${classes.line}line col-12 text-center text-white p-3`}>
        <h2>Connect with me</h2>
      </div>
      <div class='row justify-content-center py-3'>
        <div class={`${classes.icon} col-xl-3 col-4`}>
          <a href ='https://www.instagram.com/' target = "_blank">
            <i class='fab fa-instagram'></i>
          </a>
        </div>
        <div class={`${classes.icon} col-xl-3 col-4`}>
          <a href='https://github.com/kenan1202' target="_blank">
            <i class='fab fa-github-square'></i>
          </a>
        </div>
        <div class={`${classes.icon} col-xl-3 col-4`}>
          <a href='https://stackoverflow.com/' target="_blank">
            <i class='fab fa-staylinked'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ConnectMe
