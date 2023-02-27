import React, { useEffect, useState, useRef } from 'react';
import { Dropdown, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

import OrderTab from './Future/OrderTab';
import TradeTab from './Future/TradeTab';


const BitCoinChart = loadable(() =>
    pMinDelay(import("./../Crypto/Coin/BitCoinChart"), 1000)
);

const tableData = [
    { price: '19972.43', Size: '0.0488', total: '6.8312', },
    { price: '20972.43', Size: '0.0588', total: '5.8312', },
    { price: '16572.43', Size: '0.0488', total: '7.8312', },
    { price: '20972.43', Size: '0.0114', total: '8.1212', },
    { price: '19972.43', Size: '0.0216', total: '6.9852', },
    { price: '20972.43', Size: '0.0325', total: '3.1232', },
    { price: '19972.43', Size: '0.0434', total: '4.8122', },
    { price: '20972.43', Size: '0.0543', total: '5.6542', },
    { price: '19972.43', Size: '0.0651', total: '4.1232', },
    { price: '20972.43', Size: '0.0762', total: '2.1232', },

];
const tabDataBlog = [
    { Name: "Tiger Nixon", Trade: "System Architect", Side: "Edinburgh", Number: "61", Date: "2022/04/25", Amount: "$320,800" },
    { Name: "Ashton Cox", Trade: "Junior Technical Author", Side: "San Francisco", Number: "66", Date: "2022/01/12", Amount: "$86,000" },
    { Name: "Brielle Williamson", Trade: "Integration Specialist", Side: "New York", Number: "71", Date: "2022/12/02", Amount: "$372,000" },
    { Name: "Cedric Kelly", Trade: "Senior Developer", Side: "Edinburgh", Number: "75", Date: "2022/05/29", Amount: "$433,060" },
    { Name: "Garrett Winters", Trade: "Accountant", Side: "Tokyo", Number: "63", Date: "2022/07/25", Amount: "$170,750" },
    { Name: "Tiger Nixon", Trade: "System Architect", Side: "Edinburgh", Number: "36", Date: "2022/12/25", Amount: "$170,750" },
];


const Future = () => {
    const [data, setData] = useState(
        document.querySelectorAll("#future_wrapper tbody tr")
    );
    const sort = 6;
    const activePag = useRef(0);
    const [test, settest] = useState(0);
    const [selectedModuleValue, setSelectedModuleValue] = useState(0)
    const [selectedSwapValue, setSelectedSwapValue] = useState(0)
    const [selectedBaseValue, setSelectedBaseValue] = useState(0)
    const [selectedRewardValue, setSelectedRewardValue] = useState(0)

    const [showRewardContent, setShowRewardContent] = useState(true)
    const [isOpen, setIsOpen] = useState([true, true, true, true, true])
    const [isBoxChecked, setIsBoxChecked] = useState([false, false, false, false, false, false, false])

    const [name, setName] = useState(null);
    const [symbol, setSymbol] = useState(null);
    const [supply, setSupply] = useState(0);
    const [decimal, setDecimal] = useState(0);


    // Active data
    const chageData = (frist, sec) => {
        for (var i = 0; i < data.length; ++i) {
            if (i >= frist && i < sec) {
                data[i].classList.remove("d-none");
            } else {
                data[i].classList.add("d-none");
            }
        }
    };
    // use effect
    useEffect(() => {
        setData(document.querySelectorAll("#future_wrapper tbody tr"));
        //chackboxFun();
    }, [test]);


    // Active pagginarion
    activePag.current === 0 && chageData(0, sort);
    // paggination
    let paggination = Array(Math.ceil(data.length / sort))
        .fill()
        .map((_, i) => i + 1);

    // Active paggination & chage data
    const onClick = (i) => {
        activePag.current = i;
        chageData(activePag.current * sort, (activePag.current + 1) * sort);
        settest(i);
    };

    const moduleDatas = [
        {
            text: '0 Tax Basic',
            description: `This template doens't contains any tax and has the lowest transaction fee`,
            fee: '0.05 BNB',
        },
        {
            text: 'Market & Liquidity',
            description: `This template contains marketing and liquidity fee. The liquidity fee would enlarge the liquidity pool, and the marketing fee would make profits to the project owner.`,
            fee: '0.2 BNB',
        },
        {
            text: 'Reward, Market & Liquidity',
            description: `This template contains reflection, marketing and liquidity fee. The liquidity fee would enlarge the liquidity pool, the marketing fee would make profits to the project owner, and the reflection fee rewards the holders.`,
            fee: '0.2 BNB',
        },
    ]
    const basicDatas = [
        {
            text: 'Name',
            placeholder: 'Ex: Ethereum',
            mustFill: true,
            function: (e) => setName(e.target.value),
            type: "text",
        },
        {
            text: 'Symbol',
            placeholder: 'Ex: ETH',
            mustFill: true,
            function: (e) => setSymbol(e.target.value),
            type: "text",
        },
        {
            text: 'Supply',
            placeholder: 'Ex: 1000000',
            mustFill: true,
            function: (e) => setSupply(e.target.value),
            type: "number",
            step: (1),
        },
        {
            text: 'Decimal',
            placeholder: 'Number between 0 and 18',
            mustFill: true,
            function: (e) => setDecimal(e.target.value),
            type: "number",
            step: (1),
        },
    ]
    const advancedDatas = [
        {
            text: 'Marketing Wallet',
            placeholder: 'Ex: 0x000000000000000000000000000000000000dEaD',
            mustFill: true,
        },
    ]

    const valuesForDropdowns = {
        0: [
            {
                texts: "PancakeSwap"
            },
            {
                texts: "FstSwap"
            },
            {
                texts: "BabySwap"
            },
            {
                texts: "Other"
            },
        ],
        1: [
            {
                texts: "BNB"
            },
            {
                texts: "USDT"
            },
            {
                texts: "BUSD"
            },
            {
                texts: "Other"
            },
        ],
        2: [
            {
                texts: "BNB"
            },
            {
                texts: "USDT"
            },
            {
                texts: "BUSD"
            },
            {
                texts: "Other"
            },
        ],
    }


    const advancedDropdowns = [
        {
            text: 'DEX',
            mustFill: true,
            content: [
                {
                    texts: "PancakeSwap"
                },
                {
                    texts: "FstSwap"
                },
                {
                    texts: "BabySwap"
                },
                {
                    texts: "Other"
                },
            ],
            selected: selectedSwapValue
        },
        {
            text: 'Currency',
            mustFill: true,
            content: [
                {
                    texts: "BNB"
                },
                {
                    texts: "USDT"
                },
                {
                    texts: "BUSD"
                },
                {
                    texts: "Other"
                },
            ],
            selected: selectedBaseValue
        },
        {
            text: 'Reward Token',
            mustFill: true,
            content: [
                {
                    texts: "BNB"
                },
                {
                    texts: "USDT"
                },
                {
                    texts: "BUSD"
                },
                {
                    texts: "Other"
                },
            ],
            selected: selectedRewardValue
        },
    ]

    const buyTaxes = [
        {
            text: 'Buy Marketing Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
        },
        {
            text: 'Buy Liquidity Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
        },
        {
            text: 'Buy Burn Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
        },
        {
            text: 'Buy Reward Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
        },
    ]
    const SellTaxes = [
        {
            text: 'Sell Marketing Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
        },
        {
            text: 'Sell Liquidity Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
        },
        {
            text: 'Sell Burn Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
        },
        {
            text: 'Sell Reward Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
        },
    ]

    const functionControls = [
        {
            text: 'Open Trade',
            selected: false,
            description: `
            With this function, you can manually open the trade in the console.
            The transaction cannot be stopped once started trading.`
        },
        {
            text: 'Kill Block',
            selected: false,
            description: `
            With this function, buyers buy within the blocks since the open trading block would be automatically blacklisted.`
        },
    ]

    const selectModuleValue = (value) => {
        console.log(value)
        setSelectedModuleValue(value)
        if (value === 2)
            setShowRewardContent(true)
        else
            setShowRewardContent(false)
    }

    const handleDropdownSelection = (index, indexed) => {
        console.log(index, indexed)
        if (index === 0) {
            setSelectedSwapValue(indexed);
        }
        if (index === 1) {
            setSelectedBaseValue(indexed);
        }
        if (index === 2) {
            setSelectedRewardValue(indexed);
        }
    }

    const handleCheckBox = (index) => {
        console.log(index)
        setIsBoxChecked(prevState => {
            const newState = [...prevState];
            newState[index] = !prevState[index];
            return newState;
        })
    }

    const deployContract = () => {
        if (
            name === null || name === ""
            || symbol === null || symbol === ""
            || supply <= 0 || supply === "" || Number(supply.length) + Number(decimal) > 38
            || decimal < 0 || decimal > 18 || decimal === null || decimal === ""
        ) console.log("error")
        console.log(isBoxChecked);
        console.log(`
        ${name}
        ${symbol}
        ${supply}
        ${decimal}`)
    }
    return (
        <>
            <div className="row">
                <div className="col-xxl-4">
                    <h1> Token Creator </h1>
                    <div className="card">
                        <div className="card-header border-0 pb-0">
                            <h4 className="heading mb-0">Token Type</h4>
                        </div>
                        <div className="card-body mb-12">
                            {/* <div className="d-flex align-items-center justify-content-between my-3">
                                <span className="small text-muted">Avbl Balance</span>
                                <span className="">210.800 USDT</span>
                            </div> */}
                            <form>
                                {/* <div className="input-group mb-3">
                                    <span className="input-group-text">Token Type</span>
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text">USDT</span>
                                </div> */}


                                {/* 選擇合約模板 */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Token Type</span>
                                    <span className="form-control" style={{ color: 'lightblue' }}> Fee : {moduleDatas[selectedModuleValue].fee}</span>
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn btn-primary btn-outline-primary left-radius">{moduleDatas[selectedModuleValue].text}</Dropdown.Toggle>
                                        <Dropdown.Menu align="end">
                                            {
                                                moduleDatas.map((moduleData, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <Dropdown.Item >
                                                                <div onClick={() => selectModuleValue(index)}>{moduleData.text}</div>
                                                            </Dropdown.Item>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <span style={{
                                        marginLeft: '20px',
                                        marginRight: '20px',
                                        fontSize: '16px',
                                        paddingTop: '20px'
                                    }}>{moduleDatas[selectedModuleValue].description}</span>
                                </div>
                                {/* 選擇合約模板 */}

                                {/* 填寫合約模板內容 */}
                                {/* 基本內容 - Name, Symbol, Supply, Decimal */}
                                <div className="mb-3 mt-4">
                                    <h4 className="form-label">
                                        Basic Info
                                        <span
                                            style={{ paddingLeft: '20px', cursor: 'pointer', fontSize: '20px' }}
                                            onClick={() => setIsOpen(prevState => [!prevState[0], ...prevState.slice(1)])}
                                        >
                                            {
                                                isOpen[0] === true ? "▼" : "▶"
                                            }
                                        </span>
                                    </h4>
                                    {
                                        isOpen[0] === true &&
                                        basicDatas.map((data, index) => {
                                            return (
                                                <div key={index} className="input-group mb-3 align-items-center" style={{ paddingLeft: '20px' }}>
                                                    <span className="col-4">{data.text}
                                                        {
                                                            data.mustFill === true && <span className="text-danger">*</span>
                                                        }
                                                    </span>

                                                    <div className='col-8'>
                                                        <input
                                                            type={data.type}
                                                            className="form-control"
                                                            placeholder={data.placeholder}
                                                            onChange={data.function}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {/* 基本內容 - Name, Symbol, Supply, Decimal */}


                                {/* 進階內容 - 營銷錢包 / 交易所 / 底池 / 分紅幣種 */}
                                {
                                    selectedModuleValue !== 0 &&
                                    <div className="mb-3 mt-4">
                                        <h4 className="form-label">
                                            Advanced Info
                                            <span
                                                style={{ paddingLeft: '20px', cursor: 'pointer', fontSize: '20px' }}
                                                onClick={() =>
                                                    setIsOpen(prevState => {
                                                        const newState = [...prevState];
                                                        newState[1] = !prevState[1];
                                                        return newState;
                                                    })
                                                }
                                            >
                                                {
                                                    isOpen[1] === true ? "▼" : "▶"
                                                }
                                            </span>
                                        </h4>
                                        {
                                            isOpen[1] === true &&
                                            advancedDatas.map((data, index) => {
                                                if (index === 3 && showRewardContent === false) return;
                                                return (
                                                    <div key={index} className="input-group mb-3 align-items-center" style={{ paddingLeft: '20px' }}>
                                                        <span className="col-4">{data.text}
                                                            {
                                                                data.mustFill === true && <span className="text-danger">*</span>
                                                            }
                                                        </span>

                                                        <div className='col-8'>
                                                            <input type="text" className="form-control" placeholder={data.placeholder} />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        {
                                            isOpen[1] === true &&
                                            advancedDropdowns.map((data, index) => {
                                                if (index === 3 && showRewardContent === false) return;
                                                return (
                                                    <div key={index} className="input-group mb-3 align-items-center" style={{ paddingLeft: '20px' }}>
                                                        <span className="col-4">{data.text}</span>

                                                        <div className='col-8'>
                                                            <Dropdown>
                                                                <Dropdown.Toggle className="btn btn-primary btn-outline-primary left-radius">
                                                                    {
                                                                        data.content !== undefined &&
                                                                        data.content[data.selected].texts
                                                                    }
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu align="end">
                                                                    {
                                                                        data.content !== undefined &&
                                                                        data.content.map((moduleData, indexed) => {
                                                                            return (
                                                                                <div key={indexed}>
                                                                                    <Dropdown.Item >
                                                                                        <div onClick={() => {
                                                                                            handleDropdownSelection(index, indexed)
                                                                                        }
                                                                                        }>{moduleData.texts}</div>
                                                                                    </Dropdown.Item>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                        {
                                                            data.selected === 3 &&
                                                            <div className='col-12 d-flex flex-direction-row align-items-center' >
                                                                <div className='col-4'>
                                                                </div>
                                                                <div className='col-8'>
                                                                    <input className='form-control' placeholder='Please input the contract address' />
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                }

                                {/* 進階內容 - 買稅 */}
                                {
                                    selectedModuleValue !== 0 &&
                                    <div className="mb-3 mt-4">
                                        <h4 className="form-label">
                                            Buy Taxes
                                            <span
                                                style={{ paddingLeft: '20px', cursor: 'pointer', fontSize: '20px' }}
                                                onClick={() =>
                                                    setIsOpen(prevState => {
                                                        const newState = [...prevState];
                                                        newState[2] = !prevState[2];
                                                        return newState;
                                                    })
                                                }
                                            >
                                                {
                                                    isOpen[2] === true ? "▼" : "▶"
                                                }
                                            </span>
                                        </h4>
                                        {
                                            isOpen[2] === true &&
                                            buyTaxes.map((data, index) => {
                                                if (index === 3 && showRewardContent === false) return;
                                                return (
                                                    <div key={index} className="input-group mb-3 align-items-center" style={{ paddingLeft: '20px' }}>
                                                        <span className="col-4">{data.text}
                                                            {
                                                                data.mustFill === true && <span className="text-danger">*</span>
                                                            }
                                                        </span>

                                                        <div className='col-8'>
                                                            <input type="text" className="form-control" placeholder={data.placeholder} />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                }
                                {/* 進階內容 - 買稅 */}

                                {/* 進階內容 - 賣稅 */}
                                {
                                    selectedModuleValue !== 0 &&
                                    <div className="mb-3 mt-4">
                                        <h4 className="form-label">
                                            Sell Taxes
                                            <span
                                                style={{ paddingLeft: '20px', cursor: 'pointer', fontSize: '20px' }}
                                                onClick={() =>
                                                    setIsOpen(prevState => {
                                                        const newState = [...prevState];
                                                        newState[3] = !prevState[3];
                                                        return newState;
                                                    })
                                                }
                                            >
                                                {
                                                    isOpen[3] === true ? "▼" : "▶"
                                                }
                                            </span>
                                        </h4>
                                        {
                                            isOpen[3] === true &&
                                            SellTaxes.map((data, index) => {
                                                if (index === 3 && showRewardContent === false) return;
                                                return (
                                                    <div key={index} className="input-group mb-3 align-items-center" style={{ paddingLeft: '20px' }}>
                                                        <span className="col-4">{data.text}
                                                            {
                                                                data.mustFill === true && <span className="text-danger">*</span>
                                                            }
                                                        </span>

                                                        <div className='col-8'>
                                                            <input type="text" className="form-control" placeholder={data.placeholder} />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                }
                                {/* 進階內容 - 賣稅 */}
                                {/* 進階內容 - 功能開關 */}
                                {
                                    selectedModuleValue !== 0 &&
                                    <div className="mb-3 mt-4">
                                        <h4 className="form-label">
                                            Function Switch
                                            <span
                                                style={{ paddingLeft: '20px', cursor: 'pointer', fontSize: '20px' }}
                                                onClick={() =>
                                                    setIsOpen(prevState => {
                                                        const newState = [...prevState];
                                                        newState[4] = !prevState[4];
                                                        return newState;
                                                    })
                                                }
                                            >
                                                {
                                                    isOpen[4] === true ? "▼" : "▶"
                                                }
                                            </span>
                                        </h4>
                                        {
                                            isOpen[4] === true &&
                                            functionControls.map((functions, index) => {
                                                return (
                                                    <div key={index} style={{ paddingLeft: '20px',}}>
                                                        <div className='col-12 d-flex flex-direction-row'>
                                                            <div className='col-2 align-items-center'>
                                                                <p>{functions.text}</p>
                                                            </div>
                                                            <div className='switch'>
                                                                <input
                                                                    id="checkbox1"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    onClick={() => handleCheckBox(index)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='col-12 d-flex flex-direction-row align-items-center'>
                                                            <div className='col-2'>
                                                            </div>
                                                            <div className='col-8'>
                                                                <p>{functions.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                }
                                {/* 進階內容 - 功能開關 */}


                                {/* 部署合約 */}
                                <div className="mt-3 d-flex justify-content-center align-items-center" style={{ paddingTop: '20px' }}>
                                    <span className="btn btn-success py-2 text-uppercase"
                                        onClick={deployContract}
                                        style={{ cursor: 'pointer' }}>Deploy</span>

                                    <span style={{ marginLeft: '20px' }}> {moduleDatas[selectedModuleValue].fee}</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" style={{ paddingTop: '50px' }}>
                <div className="col-xl-8">
                    <div className="card">
                        <Tab.Container defaultActiveKey="All">
                            <div className="card-header border-0 pb-2 flex-wrap">
                                <h4 className="heading">My Token List</h4>
                                <>
                                    <Nav className="order nav nav-tabs">
                                        <Nav.Link as="button" eventKey="All" type="button">Order</Nav.Link>
                                        <Nav.Link as="button" eventKey="Order" type="button">Order History</Nav.Link>
                                        <Nav.Link as="button" eventKey="Trade" type="button">Trade Histroy</Nav.Link>
                                    </Nav>
                                </>
                            </div>
                            <div className="card-body pt-0 pb-0">
                                <Tab.Content >
                                    <Tab.Pane eventKey="All">
                                        <div className="table-responsive dataTabletrade ">
                                            <div id="future_wrapper" className="dataTables_wrapper no-footer">
                                                <table id="example" className="table display dataTable no-footer" style={{ minWidth: "845px" }}>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Symbol</th>
                                                            <th>Supply</th>
                                                            <th>Decimal</th>
                                                            <th>Time</th>
                                                            <th className="text-end">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tabDataBlog.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{item.Name}</td>
                                                                <td>{item.Trade}</td>
                                                                <td>{item.Side}</td>
                                                                <td>{item.Number}</td>
                                                                <td>{item.Date}</td>
                                                                <td className="text-end">{item.Amount}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
                                                    <div className="dataTables_info">
                                                        Showing {activePag.current * sort + 1} to{" "}
                                                        {data.length > (activePag.current + 1) * sort
                                                            ? (activePag.current + 1) * sort
                                                            : data.length}{" "}
                                                        of {data.length} entries
                                                    </div>
                                                    <div
                                                        className="dataTables_paginate paging_simple_numbers mb-0"
                                                        id="application-tbl1_paginate"
                                                    >
                                                        <Link
                                                            className="paginate_button previous "
                                                            to="/future"
                                                            onClick={() =>
                                                                activePag.current > 0 &&
                                                                onClick(activePag.current - 1)
                                                            }
                                                        >
                                                            <i className="fa fa-angle-double-left" ></i>
                                                        </Link>
                                                        <span>
                                                            {paggination.map((number, i) => (
                                                                <Link
                                                                    key={i}
                                                                    to="/future"
                                                                    className={`paginate_button  ${activePag.current === i ? "current" : ""
                                                                        } `}
                                                                    onClick={() => onClick(i)}
                                                                >
                                                                    {number}
                                                                </Link>
                                                            ))}
                                                        </span>

                                                        <Link
                                                            className="paginate_button next"
                                                            to="/future"
                                                            onClick={() =>
                                                                activePag.current + 1 < paggination.length &&
                                                                onClick(activePag.current + 1)
                                                            }
                                                        >
                                                            <i className="fa fa-angle-double-right" ></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Order">
                                        <OrderTab />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Trade">
                                        <TradeTab />
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Future;