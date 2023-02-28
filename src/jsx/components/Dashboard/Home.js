import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
//import {NavLink} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import swal from "sweetalert";
import { Dropdown, Nav, Tab } from 'react-bootstrap';

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import BalanceCardSlider from './Dashboard/BalanceCardSlider';
//import MorrisDonught from './Dashboard/MorrisDonught';
import OrderForm from './Dashboard/OrderForm';
//import ServerStatusBar from './Dashboard/ServerStatusBar';
import { LtcIcon, BtcIcon, XtzIcon, EthIcon } from './SvgIcon';



const DashboardComboChart = loadable(() =>
	pMinDelay(import("./Dashboard/DashboardComboChart"), 1000)
);
const AssetsChart = loadable(() =>
	pMinDelay(import("./Dashboard/AssetsChart"), 1000)
);

const ServerStatusBar = loadable(() =>
	pMinDelay(import("./Dashboard/ServerStatusBar"), 1000)
);


const pickerData = [
	{ fillcolor: 'var(--primary)', datatitle: 'XTZ(40%)', price: '763' },
	{ fillcolor: '#2A353A', datatitle: 'BTC(20%)', price: '321' },
	{ fillcolor: '#C0E192', datatitle: 'BNB(10%)', price: '69' },
	{ fillcolor: '#E085E4', datatitle: 'ETH(10%)', price: '154' },
];


const marketBlog = [
	{ icon: LtcIcon, classBg: 'bg-success', Name: 'LTC', },
	{ icon: BtcIcon, classBg: 'bg-warning', Name: 'BTC', },
	{ icon: XtzIcon, classBg: 'bg-primary', Name: 'XTZ', },
	{ icon: EthIcon, classBg: 'bg-pink', Name: 'ETH', },
	{ icon: XtzIcon, classBg: 'bg-primary', Name: 'XTZ', },
];

const tooksList = [
	{ icon: LtcIcon, classBg: 'bg-success', Name: 'Create Token', to: '../create-token' },
	{ icon: BtcIcon, classBg: 'bg-warning', Name: 'My Token List', to: '../token-list', },
	{ icon: XtzIcon, classBg: 'bg-primary', Name: 'Batch Tool', },
	{ icon: EthIcon, classBg: 'bg-pink', Name: 'Send Tokens Via Webpage', },
	// { icon: XtzIcon, classBg: 'bg-primary', Name: 'XTZ', },
];

const listData = [
	{}, {}, {},
	{}, {}, {},
	{}, {}, {},
	{}, {},
];

const Home = () => {
	const { changeBackground } = useContext(ThemeContext);
	const [isPlatFormToken, setIsPlatFormToken] = useState(false);

	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
	}, []);

	return (
		<>
			<div className="row">
				<div className="col-xl-12">
					<div className="row">
						<div className="col-xl-12">
							<div className="card bubles">
								<div className="card-body">
									<div className="buy-coin  bubles-down col-12">
										<div className='col-12' style={{ paddingLeft: '20px' }}>
											<h2>Web 3 Tools</h2>
											<p style={{ paddingLeft: '20px' }}>
												The Best Web3 Tool Website.<br />
												Visulize Web3 Transactions.
											</p>
											{/* <p>Send Tokens Via Website</p> */}
											<Link to={"/exchange"} className="btn btn-primary">Create Token</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="col-xl-12">
							<BalanceCardSlider />
						</div> */}
				<div className="col-12">
					<div className="card col-12">
						<div className="card-header border-0 pb-0">
							<div>
								<h2 className="heading">Our Tools</h2>
							</div>
						</div>
						<div className="card-body pt-0 px-0">
							{tooksList.map((data, ind) => (
								<Link to={data.to} key={ind}>
									<div className="previews-info-list">
										<div className="pre-icon">
											<span className={`icon-box icon-box-sm ${data.classBg}`}>
												{data.icon}
											</span>
											<div className="ms-2">
												<h6>{data.Name}</h6>
											</div>
										</div>
										<div className="count">
											<span> → Go </span>
											{/* <h6>120.45</h6>
										<span className={ind % 2 == 0 ? "text-success" : ""}>1,24%</span> */}
										</div>
									</div>
								</Link>
							))}

						</div>
					</div>
				</div>

				{/* <div className="col-12">
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Platform token?</h4>
						</div>
						<div className="card-body">
							<div className="basic-form">
								<form
									className="d-flex align-items-center flex-wrap justify-content-center"
									onSubmit={(e) => {
										e.preventDefault()

										let caValue = document.getElementById('contractAddress').value
										console.log(caValue)
										document.getElementById('contractAddress').value = null
										if (caValue.length != 42)
											swal("Wrong!!",`${caValue} is not a contract deployed by our platform`, "error")
										else
											swal("You're right!!", `${caValue} is a contract deployed by our platform`, "success")
									}}
								>
									<div className="mb-3 mb-2">
										<label className="sr-only">Contract Address</label>
										<input type="text" readOnly className="form-control-plaintext" value="Contract Address" />
									</div>
									<div className="mb-2 mx-sm-3">
										<label className="sr-only">Contract Address</label>
										<input
											type="text"
											className="form-control"
											placeholder="Contract Address"
											id="contractAddress"
										/>
									</div>
									<button type="submit" className="btn btn-primary mb-2">
										Check
									</button>
								</form>
							</div>
						</div>
					</div>
				</div> */}
				{/*
					Swap Function
				*/}
				{/* <div className="col-xl-6">
					<div className="row">
						<div className="col-xl-12 col-sm-12">
							<div className="card h-auto">
								<div className="card-body px-0 pt-1">
									<Tab.Container defaultActiveKey="Navbuy">
										<div className="">
											<div className="buy-sell">
												<Nav className="nav nav-tabs" eventKey="nav-tab2" role="tablist">
													<Nav.Link as="button" className="nav-link" eventKey="Navbuy" type="button">buy</Nav.Link>
													<Nav.Link as="button" className="nav-link" eventKey="Navsell" type="button">sell</Nav.Link>
												</Nav>
											</div>
											<Tab.Content  >
												<Tab.Pane eventKey="Navbuy" >
													<Tab.Container defaultActiveKey="Navbuymarket">
														<Tab.Content id="nav-tabContent1">
															<Tab.Pane eventKey="Navbuymarket"></Tab.Pane>
														</Tab.Content>
														<div className="sell-element">
															<OrderForm />
														</div>
													</Tab.Container>
												</Tab.Pane>
												<Tab.Pane eventKey="Navsell">
													<Tab.Container defaultActiveKey="Navsellmarket">
														<Tab.Content id="nav-tabContent2">
															<Tab.Pane id="Navsellmarket" ></Tab.Pane>
														</Tab.Content>
														<div className="sell-element">
															<OrderForm />
														</div>
													</Tab.Container>
												</Tab.Pane>
											</Tab.Content>
										</div>
									</Tab.Container>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</>
	)
}
export default Home;