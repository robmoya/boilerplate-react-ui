import React from "react";
import headerbg from '../../images/header-bg.png';
import AOS from 'aos';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FaIcon from '@fortawesome/react-fontawesome';
import {faCoffee, faPlus} from '@fortawesome/fontawesome-free-solid';

class App extends React.Component {
	constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
			offset: 200,
	    duration: 600,
	    easing: 'ease-in-out-sine',
	    delay: 100,
    })
  }
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-sm-10 m-auto">
							<h1 className='page-header text-white'>Hello App <FaIcon icon={faCoffee} /><FaIcon icon={faPlus} /></h1>
							<div className="row">
								<div className="col-sm-10 m-auto">
									<img src={headerbg} alt="" className='img-fluid' data-aos='fade'/>
								</div>
							</div>
							<div className="row">
								<div className="col text-center">
	                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
	                  Launch demo modal
	                </button>

	                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	                  <div className="modal-dialog" role="document">
	                    <div className="modal-content">
	                      <div className="modal-header">
	                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
	                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
	                          <span aria-hidden="true">&times;</span>
	                        </button>
	                      </div>
	                      <div className="modal-body">
	                        ...
	                      </div>
	                      <div className="modal-footer">
	                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
	                        <button type="button" className="btn btn-primary">Save changes</button>
	                      </div>
	                    </div>
	                  </div>
	                </div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default App;
