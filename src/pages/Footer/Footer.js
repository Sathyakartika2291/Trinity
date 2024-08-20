import { Link } from 'react-router-dom';
import logo from '../../pages/Asserts/log.jpg';
import './Footer.css' ;
export default function Footer(){
    return(
    <div className="sub-footer">
        <div className="container-fluid footer-01">
            <div className="row">
                <div className="col-md-4 d-flex justify-content-start align-items-around  mt-4">
              <span> <img src={logo} alt="not found" className='ms-5  me-0 w-50 img-fluid'/><br/>
              <i class="fa fa-close fs-3 ms-4 px-3 mt-4 text-secondary"></i>  <i class="fa fa-facebook-square fs-3 text-secondary "></i>
              </span>

             <div> <h4 className='fw-bolder font-monospace text-white'>TRINITY SKY</h4>
              <p className='text-white'>تثلیث آسمان<br/>Trade Simplified</p></div>

                               </div>
                <div className='col-md-4 mt-4'>
                    <ul className='product-items'>
                        <li className='quik text-secondary list-unstyled fs-5 semibold'>
                        Quick Links
                        </li>
                        <li className=' list-unstyled fs-6 fw-semibold pt-3 '>
                        <Link to ="./Product" className="text-secondary text-decoration-none ">Products</Link>
                        </li>
                        <li className='list-unstyled fs-6 fw-semibold pt-3'>
                        <Link to ="./About" className="text-secondary text-decoration-none ">About</Link>
                             </li>
                        <li className='list-unstyled fs-6  fw-semibold pt-3'>
                        <Link to ="./contact" className="text-secondary text-decoration-none ">Contact</Link>
                        </li>
                    </ul>
                    </div>
                    <div className='col-md-4 mt-4'>
                    <ul className='product-items'>
                        <li className='quik list-unstyled fs-5 semibold text-white'>
                      Contact Info
                        </li>
                        <li className=' list-unstyled fs-6 fw-semibold pt-3 '>
                       <p className='text-secondary'>73111 PO box,Business Centre,<br/> Sharjah Publishing City Freezone,<br/>Sharjah UAE</p>
                        </li>
                        <li className='list-unstyled fs-6 fw-semibold '>
                            <p className='text-secondary'>UAE : +971 568669466<br/>
                            IND : +91 6385941787</p>
                        </li>
                        <li className='list-unstyled fs-6  fw-semibold '>
                        <p classname='text-secondary'>sales@trinity-sky.com</p>
                        </li>
                    </ul>
                   
                </div>
       
            </div>
            <div>
                <hr className='text-secondary '/>
      <h6 className='text-center text-secondary pb-2'>Copyright &#169; 2024 by Trinity-Sky</h6>
      </div>
        </div>
    </div>
    );
}
