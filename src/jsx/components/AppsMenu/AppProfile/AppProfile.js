import React, { Fragment, useReducer } from "react";
import { Button, Dropdown, Modal, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

//** Import Image */
//** Import Image */
import profile01 from "../../../../images/profile/1.jpg";
import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile05 from "../../../../images/profile/5.jpg";
import profile06 from "../../../../images/profile/6.jpg";
import profile07 from "../../../../images/profile/7.jpg";
import profile08 from "../../../../images/profile/8.jpg";
import profile09 from "../../../../images/profile/9.jpg";
import profile from "../../../../images/profile/profile.png";
import PageTitle from "../../../layouts/PageTitle";

const galleryBlog = [
	{ image: profile03 }, { image: profile04 },
	{ image: profile02 }, { image: profile04 },
	{ image: profile03 }, { image: profile02 },
];
const initialState = false;
const reducer = (state, action) => {
	switch (action.type) {
		case 'sendMessage':
			return { ...state, sendMessage: !state.sendMessage }
		case 'postModal':
			return { ...state, post: !state.post }
		case 'linkModal':
			return { ...state, link: !state.link }
		case 'cameraModal':
			return { ...state, camera: !state.camera }
		case 'replyModal':
			return { ...state, reply: !state.reply }
		default:
			return state
	}
}

const AppProfile = () => {
	const onInit = () => {
		//console.log('lightGallery has been initialized');
	};
	const options = {
		settings: {
			overlayColor: "#000000",
		},
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Fragment>
			<PageTitle activeMenu="Profile" motherMenu="App" />

			<div className="row">
				<div className="col-lg-12">
					<div className="profile card card-body px-3 pt-3 pb-0">
						<div className="profile-head">
							<div className="photo-content ">
								<div className="cover-photo rounded"></div>
							</div>
							<div className="profile-info">
								<div className="profile-photo">
									<img src={profile} className="img-fluid rounded-circle" alt="NFT_Avatar" />
									{/* <img className="img-fluid rounded-circle" alt="NFT_Avatar" /> */}
								</div>
								<div className="profile-details">
									<div className="profile-name px-3 pt-2">
										<h4 className="text-primary mb-0">Wallet Address</h4>
										{/* <p>UX / UI Designer</p> */}
									</div>
									<div className="profile-email px-2 pt-2">
										<h4 className="text-muted mb-0">hello@email.com</h4>
										{/* <p>Email</p> */}
									</div>
									<Dropdown className="dropdown ms-auto">
										<Dropdown.Toggle
											variant="primary"
											className="btn btn-primary light sharp i-false"
											data-toggle="dropdown"
											aria-expanded="true"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												//    xmlns:xlink="http://www.w3.org/1999/xlink"
												width="18px"
												height="18px"
												viewBox="0 0 24 24"
												version="1.1"
											>
												<g
													stroke="none"
													strokeWidth="1"
													fill="none"
													fillRule="evenodd"
												>
													<rect x="0" y="0" width="24" height="24"></rect>
													<circle fill="#000000" cx="5" cy="12" r="2"></circle>
													<circle fill="#000000" cx="12" cy="12" r="2"></circle>
													<circle fill="#000000" cx="19" cy="12" r="2"></circle>
												</g>
											</svg>
										</Dropdown.Toggle>
										<Dropdown.Menu className="dropdown-menu dropdown-menu-right">
											<Dropdown.Item className="dropdown-item">
												<i className="fa fa-user-circle text-primary me-2" />
												View profile
											</Dropdown.Item>
											<Dropdown.Item className="dropdown-item">
												<i className="fa fa-users text-primary me-2" />
												Add to close friends
											</Dropdown.Item>
											<Dropdown.Item className="dropdown-item">
												<i className="fa fa-plus text-primary me-2" />
												Add to group
											</Dropdown.Item>
											<Dropdown.Item className="dropdown-item">
												<i className="fa fa-ban text-primary me-2" />
												Block
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-xl-4">
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-body">
									<div className="profile-statistics">
										<div className="text-center">
											<div className="row">
												<div className="col">
													<h3 className="m-b-0">150</h3><span>Contracts</span>
												</div>
												<div className="col">
													<h3 className="m-b-0">140</h3> <span>NFT mints</span>
												</div>
												{/* <div className="col">
													<h3 className="m-b-0">45</h3> <span>Reviews</span>
												</div> */}
											</div>
											<div className="mt-4">
												<Link to="/post-details" className="btn btn-primary mb-1 me-1">
													Create New Token
												</Link>
												<Link to="/post-details" className="btn btn-primary mb-1 me-1">
													Token Dashboard
												</Link>
												{/* <Button as="a" href="#" className="btn btn-primary mb-1 ms-1" onClick={() => dispatch({ type: 'sendMessage' })}>Send Message</Button> */}
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default AppProfile;
