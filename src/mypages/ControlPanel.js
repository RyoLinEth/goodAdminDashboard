import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Col, Table, Card, Button, Modal, } from "react-bootstrap";
import './ControlPanel.css'

export const CanModify = () => {
    return (
        <span style={{ color: 'red' }}>
            *
        </span>
    )
}

const ControlPanel = () => {
    const [isOpen, setIsOpen] = useState([true, true, true, true, true])
    const [modalWithTooltip, setModalWithTooltip] = useState(false);
    const [modifying, setModifying] = useState([]);

    const contractDatas = [
        [
            {
                title: "Basic Info",
                bg: "primary",
                description: 'Basic info of the contract, only marketing wallet can be modified',
            },
            {
                title: "Contract Address",
                text: "0x000000000000000000000000000000000000dEaD",
                bg: "primary",
            },
            {
                title: "Name",
                text: "name",
                bg: "primary",
            },
            {
                title: "Symbol",
                text: "symbol",
                bg: "primary",
            },
            {
                title: "Supply",
                text: "supply",
                bg: "primary",
            },
            {
                title: "Decimal",
                text: "decimal",
                bg: "primary",
            },
            {
                title: "DEX",
                text: "PancakeSwap",
                bg: "primary",
            },
            {
                title: "Currency",
                text: "BNB",
                bg: "primary",
            },
            {
                title: "Reward Token",
                text: "USDT",
                bg: "primary",
            },
            {
                title: "Marketing Wallet",
                text: "0x...",
                bg: "primary",
                canModify: true,
            },
        ],
        [
            {
                title: "Buy Tax Info",
                bg: "primary",
                description: 'Buy taxes of the contract',
            },
            {
                title: "Buy Taxes",
                text: "buy taxes",
                bg: "primary",
            },
            {
                title: "Buy Marketing Tax",
                text: "buy marketing tax",
                bg: "primary",
                canModify: true,
            },
            {
                title: "Buy Liquidity Tax",
                text: "buy Liquidity tax",
                bg: "primary",
                canModify: true,
            },
            {
                title: "Buy Burn Tax",
                text: "buy Burn tax",
                bg: "primary",
                canModify: true,
            },
            {
                title: "Buy Reward Tax",
                text: "buy Reward tax",
                bg: "primary",
                canModify: true,
            },
        ],
        [
            {
                title: "Sell Tax Info",
                bg: "primary",
                description: 'Sell taxes of the contract',
            },
            {
                title: "Sell Taxes",
                text: "sell taxes",
                bg: "primary",
            },
            {
                title: "Sell Marketing Tax",
                text: "sell marketing tax",
                bg: "primary",
                canModify: true,
            },
            {
                title: "Sell Liquidity Tax",
                text: "sell Liquidity tax",
                bg: "primary",
                canModify: true,
            },
            {
                title: "Sell Burn Tax",
                text: "sell Burn tax",
                bg: "primary",
                canModify: true,
            },
            {
                title: "Sell Reward Tax",
                text: "sell Reward tax",
                bg: "primary",
                canModify: true,
            },
        ],
        [
            {
                title: "Max Amounts",
                bg: "primary",
                description: 'Limitation of transactions of the contract',
            },
            {
                title: "Max Wallet Amount",
                text: "Max Wallet Amount",
                bg: "primary",
                canModify: true,
            },
            {
                title: "Max Buy Amount",
                text: "Max Buy Amount",
                bg: "primary",
                canModify: true,
            },
            {
                title: "Max Sell Amount",
                text: "Max Sell Amount",
                bg: "primary",
                canModify: true,
            },
        ],
    ]

    const addressDatas = [
        [
            {
                title: "Blacklist Info",
                bg: "primary",
            },
            {
                title: "Address",
                text: "Input the address you",
                bg: "primary",
                canModify: true,
            },
            {
                title: "Max Buy Amount",
                text: "Max Buy Amount",
                bg: "primary",
                canModify: true,
            },
            {
                title: "Max Sell Amount",
                text: "Max Sell Amount",
                bg: "primary",
                canModify: true,
            },
        ],
    ]

    const handleModifyModal = (index, indexed, title, text) => {
        console.log(index, indexed, title, text);
        setModalWithTooltip(true)
        setModifying([index, indexed, title, text]);
    }
    return (
        <div className="h-80">
            <h1>Token Control Panel</h1>
            <div className="row">

                {/* 合約信息 */}
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Contract Info</Card.Title>
                            <Card.Subtitle>

                                <Button className="me-2" variant="primary">
                                    <i className="fa fa-pencil-square" />
                                    {" "}Edit
                                </Button>
                                <CanModify />
                                <span>
                                    Editable
                                </span>
                            </Card.Subtitle>
                        </Card.Header>
                        {
                            contractDatas.map((data, index) => {
                                return (
                                    <Card.Body key={index}>
                                        <Table responsive>
                                            <thead
                                                className="thead-info"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() =>
                                                    setIsOpen(prevState => {
                                                        const newState = [...prevState];
                                                        newState[index] = !prevState[index];
                                                        return newState;
                                                    })
                                                }>
                                                <tr>
                                                    <th scope='col'>
                                                        {data[0].title}
                                                        <span
                                                            style={{ paddingLeft: '20px' }}
                                                        >{isOpen[index] === true ? "▼" : "▶"}</span>
                                                    </th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    isOpen[index] &&
                                                    data.map((d, i) => {
                                                        if (i === 0) return
                                                        return (
                                                            <tr key={i}>
                                                                <th>
                                                                    <span style={{ paddingLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <span className="d-flex align-items-center max-width-100">{d.title}</span>
                                                                        {
                                                                            d.canModify !== undefined && <CanModify />
                                                                        }
                                                                    </span>
                                                                </th>
                                                                <td className='scrollable-element' style={{ maxWidth: '150px', overflowX: 'scroll' }}>
                                                                    <span>{d.text}</span>
                                                                </td>
                                                                <td>
                                                                    {
                                                                        d.canModify !== undefined &&
                                                                        <div onClick={
                                                                            () => handleModifyModal(index, i, d.title, d.text)
                                                                        }>
                                                                            <Button className="me-2" variant="primary">
                                                                                <i className="fa fa-pencil-square"></i>
                                                                                {" "}Edit
                                                                            </Button>
                                                                        </div>
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                            {
                                                !isOpen[index] &&
                                                <span>{data[0].description}</span>
                                            }
                                        </Table>
                                    </Card.Body>
                                )
                            })
                        }
                        {
                            addressDatas.map((data, index) => {
                                let contractDatasLength = contractDatas.length
                                return (
                                    <Card.Body key={index + contractDatasLength}>
                                        <Table responsive>
                                            <thead
                                                className="thead-info"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() =>
                                                    setIsOpen(prevState => {
                                                        const newState = [...prevState];
                                                        newState[index + contractDatasLength] = !prevState[index + contractDatasLength];
                                                        return newState;
                                                    })
                                                }>
                                                <tr>
                                                    <th scope='col'>
                                                        {data[0].title}
                                                        <span
                                                            style={{ paddingLeft: '20px' }}
                                                        >{isOpen[index + contractDatasLength] === true ? "▼" : "▶"}</span>
                                                    </th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    isOpen[index + contractDatasLength] &&
                                                    data.map((d, i) => {
                                                        if (i === 0) return
                                                        return (
                                                            <tr key={i}>
                                                                <th>
                                                                    <span style={{ paddingLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <span className="d-flex align-items-center">{d.title}</span>
                                                                        {
                                                                            d.canModify !== undefined && <CanModify />
                                                                        }
                                                                    </span>
                                                                </th>
                                                                <td className='scrollable-element' style={{ maxWidth: '200px', overflowX: 'scroll' }}>
                                                                    <span>{d.text}</span>
                                                                </td>
                                                                <td>
                                                                    {
                                                                        d.canModify !== undefined &&
                                                                        <div onClick={() => handleModifyModal(index + contractDatasLength, i)}>
                                                                            <Button className="me-2" variant="primary">
                                                                                <i className="fa fa-pencil-square" />
                                                                            </Button>
                                                                        </div>
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                )
                            })
                        }
                    </Card>
                </Col>
                {/* 合約信息 */}



                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">World Map</h4>
                        </div>
                        <div className="card-body mb-2" style={{ height: "100%" }}>
                            <div id="world-map" style={{ height: "100%" }}>
                                HI
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">USA</h4>
                        </div>
                        <div className="card-body mb-2" style={{ height: "100%" }}>
                            <div id="usa" style={{ height: "100%" }}>
                                Hello
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal className="fade" show={modalWithTooltip}>
                {
                    console.log(modifying)
                }
                <Modal.Header>
                    <Modal.Title>Setting {modifying[2]}</Modal.Title>
                    <Button
                        variant=""
                        className="btn-close"
                        onClick={() => setModalWithTooltip(false)}
                    >

                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <h5>Origin {modifying[2]}</h5>
                    <p>
                        {modifying[3]}
                    </p>
                    <hr />
                    <h5>Input New {modifying[2]}</h5>
                    <input className='form-control' />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="danger light"
                        onClick={() => setModalWithTooltip(false)}
                    >
                        Close
                    </Button>
                    <Button variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default ControlPanel;
