import React from 'react';
 import Footer from './Footer/Footer'

import Header from './Header/Header';
import { BrowserRouter} from 'react-router-dom';
 import Content from './Content/Content';
import Green from './green/Green';

const Routing = () => {
    return (
        <div className="container">
         
            <BrowserRouter>
         {<Header/>} 
         {<Content/>}
            
             {<Green/>} 

        
                  {<Footer/>} 
            </BrowserRouter>

            </div>
    );
}
export default Routing;