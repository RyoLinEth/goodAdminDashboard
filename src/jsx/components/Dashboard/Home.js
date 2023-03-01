import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from "sweetalert";
import { Carousel, Col, Card } from 'react-bootstrap';

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import { LtcIcon, BtcIcon, XtzIcon, EthIcon } from './SvgIcon';

import img5 from '../../../images/banner/Banner01.png'
import img6 from '../../../images/banner/Banner02.png'
import img7 from '../../../images/banner/Banner03.png'

export const englishContent = {
	title: "Web3 Tools",
	content1:
		'The Best Web3 Tool Website',
	content2:
		'Visulize Web3 Experience.',
	tooltitle:
		'Our Tool',
	toolcontent1:
		'Create Token',
	toolcontent2:
		'My Token List',
	toolcontent3:
		'Batch Tool',
	toolcontent4:
		'Create NFT',
	platformtitle:
		'Platform token or not',
	platformplaceholder:
		'Contract Address',
	check:
		'Check',
}
export const chineseContent = {
	title: "Web3 工具",
	content1:
		'最好的 Web3 工具网站',
	content2:
		'视觉化您的 Web3 体验',
	tooltitle:
		'工具列表',
	toolcontent1:
		'创建代币',
	toolcontent2:
		'我的代币列表',
	toolcontent3:
		'批量工具',
	toolcontent4:
		'创建NFT',
	platformtitle:
		'查询是否为平台代币',
	platformplaceholder:
		'合约地址',
	check:
		'检查',
}
export const traditionalchineseContent = {
	title: "Web3 工具",
	content1:
		'最好的 Web3 工具網站',
	content2:
		'視覺化您的 Web3 體驗',
	tooltitle:
		'工具列表',
	toolcontent1:
		'創建代幣',
	toolcontent2:
		'我的代幣列表',
	toolcontent3:
		'批量工具',
	toolcontent4:
		'創建NFT',
	platformtitle:
		'查詢是否為平台代幣',
	platformplaceholder:
		'合約地址',
	check:
		'檢查',
}

const Home = () => {
	const { changeBackground, language } = useContext(ThemeContext);
	const [isPlatFormToken, setIsPlatFormToken] = useState(false);
	const [content, setContent] = useState(englishContent);

	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
	}, []);

	useEffect(() => {
		switch (language.value) {
			case "english":
				setContent(englishContent)
				break;
			case "chinese":
				setContent(chineseContent)
				break;
			case "traditionalchinese":
				setContent(traditionalchineseContent)
				break;
			default:
				setContent(englishContent)
		}
	}, [language.value])

	const tooksList = [
		{ icon: LtcIcon, classBg: 'bg-success', Name: content.toolcontent1, to: '../create-token' },
		{ icon: BtcIcon, classBg: 'bg-warning', Name: content.toolcontent2, to: '../token-list', },
		{ icon: XtzIcon, classBg: 'bg-primary', Name: content.toolcontent3, },
		{ icon: EthIcon, classBg: 'bg-pink', Name: content.toolcontent4, },
		// { icon: XtzIcon, classBg: 'bg-primary', Name: 'XTZ', },
	];

	const carousel5 = [
		{ img: img5, text: 'The Best Web3 Tool Platform' },
		{ img: img6, text: 'Token, NFT Deployed By One Click' },
		{ img: img7, text: 'Have Fun' },
	]

	return (
		<>
			<div className="row">
				<Col xl={12}>
					<Card xl={8}>
						<Card.Body style={{ display: 'flex', justifyContent: 'center' }}>
							<Carousel>
								{carousel5.map((carousel, i) => (
									<Carousel.Item key={i}>
										<img
											className='d-block'
											src={carousel.img}
											alt={`${carousel.text} slide`}
											style={{
												maxWidth: '90vw'
											}}
										/>
									</Carousel.Item>
								))}
							</Carousel>
						</Card.Body>
					</Card>
				</Col>
				<div className="col-xl-12">
					<div className="row">
						<div className="col-xl-12">
							<div className="card bubles">
								<div className="card-body">
									<div className="buy-coin  bubles-down col-12">
										<div className='col-12' style={{ paddingLeft: '20px' }}>
											<h2>{content.title}</h2>
											<p style={{ paddingLeft: '20px' }}>
												{content.content1}<br />
												{content.content2}
											</p>
											{/* <p>Send Tokens Via Website</p> */}
											<Link to={"/create-token"} className="btn btn-primary">Create Token</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card col-12">
						<div className="card-header border-0 pb-0">
							<div>
								<h2 className="heading">{content.tooltitle}</h2>
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

				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">{content.platformtitle}</h4>
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
											swal("Wrong!!", `${caValue} is not a contract deployed by our platform`, "error")
										else
											swal("You're right!!", `${caValue} is a contract deployed by our platform`, "success")
									}}
								>
									<div className="mb-2 mx-sm-3">
										<label className="sr-only">Contract Address</label>
										<input
											type="text"
											className="form-control"
											placeholder={content.platformplaceholder}
											id="contractAddress"
										/>
									</div>
									<button type="submit" className="btn btn-primary mb-2">
										{content.check}
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
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