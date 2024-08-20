import './Content.css'
import car1 from '../../pages/Asserts/Hero_Image.jpg';
import ship from '../../pages/Asserts/ship.jpg';
import car3 from '../../pages/Asserts/ani.jpg';

export default function Content() {

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <div id="carouselExampleCaptions4" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active ">
                                <img src={car1} class="d-block w-100 full-width" alt="not found" />
                                <div class="carousel-caption d-none d-md-block text-start bg-opacity-75">
                                    <h2 className="fw-semibold  ">Welcome To</h2>
                                    <h1 className='fw-bold logo'>TRINITY SKY</h1>
                                    <p>Your trusted partner for a complete spectrum of service in<br />the animal husbandry feed,oil drilling fluid and agdi products</p>
                                    <button type="button" className="btn  rounded-3 fw-bold px-3 text-white">CONTACT NOW</button>
                                </div>
                            </div>
                            {/* <div class="carousel-item ">
                 <img src={car2} class="d-block w-100 carouselitem" alt="..." />
                 <div class="carousel-caption d-none d-md-block d-sm-block d-lg-block position-absolute top-50 end-50">
                               </div>
                 </div> */}

                            <div class="carousel-item ">
                                <img src={car3} class="d-block w-100 carouselitem" alt="..." />
                                <div class="carousel-caption d-none d-md-block">

                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div className='row'>

                <div className='col-md-6'>
                    <h1 className=' fw-bold pt-2 text-black'>Who We Are</h1>
                    <p className=' fw-semibold lh-base text-secondary fs-4 mt-2 p-2'>At Trinity Sky, we're more than just an exporter.We are your trusted partner for a complete spectrum of services in the animal husbandry feed, oil drilling fluid and agri products. With a rich history of excellence and a commitment to quality, we offer comprehensive solutions that span the entire supply chain, including upstream, midstream, and downstream services.</p>
                    <p className='fw-semibold  lh-base text-secondary fs-4 mt-2 p-2'>Quality is at the core of our operations. We adhere to strict quality control processes and hold industry-recognized certifications to ensure that every product we deliver meets the highest standards.
                    </p>
                </div>
                <div className='col-md-6'>
                    <img src={ship} alt="Not found" className='img-thumbnail' />
                </div>
            </div>

            

        </div>
    );
}
