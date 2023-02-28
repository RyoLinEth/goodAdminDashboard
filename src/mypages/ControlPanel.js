import React, { useState } from "react";
import { Col, Table, Card, Button } from "react-bootstrap";
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

    const contractDatas = [
        [
            {
                title: "Basic Info",
                bg: "primary",
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
    ]

    const handleModifyModal = (index, indexed) => {
        console.log(index, indexed);
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
                                </Button>
                                <CanModify />
                                <span>
                                    Means the data is changeable<br />
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
                                                                        <div onClick={() => handleModifyModal(index, i)}>
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
        </div >
    );
};

export default ControlPanel;
