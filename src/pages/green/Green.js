import './Green.css';

import map from '../../pages/Asserts/map.jpg';

export default function Green() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 pt-4">
                    <div className="map-container">
                        <img src={map} alt="Not found" className="map-image" />
                        <div className='overlay justify-content-center align-items-center'>
                            <div className="text-center">
                                <div className="row">
                                    <div className="col-md-3 ">
                                        <h1><i className="lni lni-protection large-icon text-white fs"></i></h1>
                                        <h3 style={{ fontSize: '12px' }} className="text-white">Reliability</h3>
                                    </div>
                                    <div className="col-md-3 ">
                                        <h1><i className="lni lni-cog large-icon text-white fs"></i></h1>
                                        <h3 style={{ fontSize: '12px' }} className="text-white">Comprehensive Services</h3>
                                    </div>
                                    <div className="col-md-3 ">
                                        <h1><i className="lni lni-money-protection large-icon text-white fs"></i></h1>
                                        <h3 style={{ fontSize: '12px' }} className="text-white">Competitive<br />Pricing</h3>
                                    </div>
                                    <div className="col-md-3">
                                        <h1><i className="lni lni-world large-icon text-white fs"></i></h1>
                                        <h3 style={{ fontSize: '12px' }} className="text-white">Global Reach and Distribution</h3>
                                    </div>
                                </div>
                                <h1 className="text-white mt-4 pt-4" style={{ fontSize: '22px' }} >The Benefits of Choosing our Expertise</h1>

                                {/* Card section for Experience, Products, Clients, and Team */}
                                <div className="card bg-white text-black mt-4 mx-auto" style={{ maxWidth: '800px' }}>
                                    <div className="card-body">
                                        <div className="row text-center">
                                            <div className="col-md-3">
                                                <h2 className="text-success">5+</h2>
                                                <p className="text-black" style={{ fontSize: '14px' }}>Years of Experience</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h2 className="text-success">40+</h2>
                                                <p className="text-black" style={{ fontSize: '14px' }}>Products</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h2 className="text-success">20+</h2>
                                                <p className="text-black" style={{ fontSize: '14px' }}>Satisfied Clients</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h2 className="text-success">10+</h2>
                                                <p className="text-black" style={{ fontSize: '14px' }}>Team Members</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Card Section */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
