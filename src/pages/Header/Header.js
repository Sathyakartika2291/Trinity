import { Link } from 'react-router-dom';
import logo from '../../pages/Asserts/traingle1.png';
import "./Header.css"
export default function Header() {
    return (
        <div className="header">
            <div class="container">
                <div className='row'>
                    <div className="col-md-4">
                        <Link className="navbar-brand text-center" to="">
                            <div className='d-flex justify -content-start align-items-around'>
                                <img src={logo} alt="not found" className=' me-0 w-25 img-fluid' /><br />
                                <div>
                                    <h4 className='fw-bolder font-monospace mt-2'>TRINITY SKY</h4>
                                    <p className='fs-6'>تثلیث آسمان<br />< b className="text-secondary">Trade Simplified</b></p>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="col-md-8 ">
                        <div className="row">
                            <div className="col-sm-8 pt-3  d-flex justify-content-end align-content-between">

                                <i class="lni lni-whatsapp fs-5"> </i>
                                <p className='fw-semibold'> UAE:+971 568669466</p>
                            </div>
                            <div className="col-sm-4 pt-3  d-flex  justify-content-end" >
                                <i class="lni lni-phone fs-5"> </i>
                                <p className='fw-semibold '> UAE:+971 568669466</p>

                            </div>
                         
                        </div>
                        <hr />
                        <div className="row">
                            <div class="col-md-3">
                                <Link className="fs-4 fw-semibold home text-decoration-none" aria-current="page" to="./">Home</Link>
                            </div>
                            <div class="col-md-3">
                                <Link className="fs-4 fw-semibold  text-black text-decoration-none " aria-current="page" to="./">Products</Link>
                            </div>
                            <div class="col-md-3">
                                <Link className="fs-4 fw-semibold  text-black text-decoration-none " aria-current="page" to="./">About</Link>
                            </div>
                            <div class="col-md-3">
                                <Link className=" fs-4 fw-semibold text-black text-decoration-none " aria-current="page" to="./">Contact</Link>
                            </div>
                         

                        </div>
                    </div>




                </div>
            </div>
        </div>




    );
}