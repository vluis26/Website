import React from "react";

function Footer(){
   return(
    <div className='py-5 text-center'>
        <p className='text-sm my-2 opacity-50'>
            &copy; {new Date().getFullYear()} Luis Villa. All rights reserved.
        </p>
    </div>
   )
}
export default Footer;