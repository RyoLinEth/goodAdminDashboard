import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Dropdown, Tab, Nav } from 'react-bootstrap';
import swal from 'sweetalert';

import './CreateToken.css'

const CreateToken = () => {
    const {
        language,
    } = useContext(ThemeContext);

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

    const [marketingWallet, setMarketingWallet] = useState(null)
    const [dex, setDex] = useState(null)
    const [currency, setCurrency] = useState(null)
    const [rewardToken, setRewardToken] = useState(null)

    const [buyMarketing, setBuyMarketing] = useState(0)
    const [buyLiquidity, setBuyLiquidity] = useState(0)
    const [buyBurn, setBuyBurn] = useState(0)
    const [buyReward, setBuyReward] = useState(0)
    const [isBuyInvalid, setIsBuyInvalid] = useState(false)

    const [sellMarketing, setSellMarketing] = useState(0)
    const [sellLiquidity, setSellLiquidity] = useState(0)
    const [sellBurn, setSellBurn] = useState(0)
    const [sellReward, setSellReward] = useState(0)
    const [isSellInvalid, setIsSellInvalid] = useState(false)

    const basicDatas = (language) => [
        {
            text:
                language === 'english'
                    ? 'Name'
                    : language === 'chinese'
                        ? '代币全称'
                        : '代幣全稱',
            placeholder: 'Ex: Ethereum',
            mustFill: true,
            function: (e) => setName(e.target.value),
            type: "text",
            defaultValue: name,
        },
        {
            text:
                language === 'english'
                    ? 'Symbol'
                    : language === 'chinese'
                        ? '代币简称'
                        : '代幣簡稱',
            placeholder: 'Ex: ETH',
            mustFill: true,
            function: (e) => setSymbol(e.target.value),
            type: "text",
            defaultValue: symbol,
        },
        {
            text:
                language === 'english'
                    ? 'Supply'
                    : language === 'chinese'
                        ? '代币总量'
                        : '代幣總量',
            placeholder: 'Ex: 1000000',
            mustFill: true,
            function: (e) => setSupply(e.target.value),
            type: "number",
            defaultValue: supply,
        },
        {
            text:
                language === 'english'
                    ? 'Decimal'
                    : language === 'chinese'
                        ? '代币精度'
                        : '代幣精度',
            placeholder:
                language === 'english'
                    ? 'Number between 0 to 18'
                    : language === 'chinese'
                        ? '0 到 18 的数字'
                        : '0 到 18 的數字',
            mustFill: true,
            function: (e) => {
                if (e.target.value > 18) {
                    swal("Wrong", "You can not set decimal higher than 18", "error")
                    setDecimal(18)
                    return;
                }
                if (e.target.value < 0) {
                    swal("Wrong", "You can not set decimal lower than 0", "error")
                    setDecimal(0)
                    return;
                }
                setDecimal(e.target.value)
            },
            type: "number",
            defaultValue: decimal,
        },
    ]
    const advancedDatas = [
        {
            text: 'Marketing Wallet',
            placeholder: 'Ex: 0x000000000000000000000000000000000000dEaD',
            mustFill: true,
            function: (e) => setMarketingWallet(e.target.value),
            defaultValue: marketingWallet,
        },
    ]

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
                    texts: "USDT"
                },
                {
                    texts: "Doge"
                },
                {
                    texts: "Shib"
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
            function: (e) => setBuyMarketing(e.target.value),
            defaultValue: buyMarketing,
        },
        {
            text: 'Buy Liquidity Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
            function: (e) => setBuyLiquidity(e.target.value),
            defaultValue: buyLiquidity,
        },
        {
            text: 'Buy Burn Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
            function: (e) => setBuyBurn(e.target.value),
            defaultValue: buyBurn,
        },
        {
            text: 'Buy Reward Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
            function: (e) => setBuyReward(e.target.value),
            defaultValue: buyReward,
        },
    ]
    const SellTaxes = [
        {
            text: 'Sell Marketing Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
            function: (e) => setSellMarketing(e.target.value),
            defaultValue: sellMarketing,
        },
        {
            text: 'Sell Liquidity Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
            function: (e) => setSellLiquidity(e.target.value),
            defaultValue: sellLiquidity,
        },
        {
            text: 'Sell Burn Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
            function: (e) => setSellBurn(e.target.value),
            defaultValue: sellBurn,
        },
        {
            text: 'Sell Reward Fee',
            placeholder: 'Ex: 0',
            mustFill: true,
            function: (e) => setSellReward(e.target.value),
            defaultValue: sellReward,
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
        {
            text: 'Blacklist',
            selected: false,
            description: `
            With this function, the addresses that are blacklisted cannot trade anymore.`
        },
        {
            text: 'Tax Adjustment',
            selected: false,
            description: `
            With this function, you can adjust the tax after the token created.
            The tax cannot be set higher than 30%`
        },
        {
            text: 'Transfer Tax',
            selected: false,
            description: `
            With this function, you can decide whether to take tax during transfer or not`
        },
        {
            text: 'Wallet Limitation',
            selected: false,
            description: `
            With this function, you can setup the maximum amount of token that a address can hold`
        },
        {
            text: 'Transaction Limitation',
            selected: false,
            description: `
            With this function, you can setup the maximum amount of token that a address can buy or sell in one transaction`
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

    const TaxSum = (market, lp, burn, reward, isBuy) => {
        if (market + lp + burn + reward > 30) {
            if (isBuy && !isBuyInvalid) setIsBuyInvalid(true)
            if (!isBuy && !isSellInvalid) setIsSellInvalid(true)
        } else {
            if (isBuy && isBuyInvalid) setIsBuyInvalid(false)
            if (!isBuy && isSellInvalid) setIsSellInvalid(false)
        }

        return market + lp + burn + reward;
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
        Name    :${name}
        Symbol  :${symbol}
        Supply  :${supply}
        Decimal :${decimal}
        
        Buy Tax :${isBuyInvalid ? "Invalid" : "Normal"}
        Sell Tax:${isSellInvalid ? "Invalid" : "Normal"}`)
    }
    return (
        <>
            <div className="row">
                <div className="col-xxl-4">
                    <h1> Token Creator </h1>
                    <div className="card d-flex flex-wrap">
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
                                <div className="input-group mb-3 d-flex flex-wrap align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle className="form-control width-200 btn btn-primary btn-outline-primary right-radius">{moduleDatas(language.value)[selectedModuleValue].text}</Dropdown.Toggle>
                                        <Dropdown.Menu align="end">
                                            {
                                                moduleDatas(language.value).map((moduleData, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className='width-200 d-flex align-items-center'
                                                            style={{ padding: '5px' }}
                                                            onClick={() => selectModuleValue(index)}
                                                        >
                                                            <Dropdown.Item >
                                                                <div>{moduleData.text}</div>
                                                            </Dropdown.Item>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <span className="form-control col-6" style={{ color: 'lightblue' }}> {moduleDatas(language.value)[selectedModuleValue].fee}</span>
                                </div>
                                <div style={{
                                    paddingLeft: '20px',
                                    paddingRight: '20px',
                                    fontSize: '16px',
                                    paddingTop: '20px'
                                }}>
                                    <span>{moduleDatas(language.value)[selectedModuleValue].description}</span>
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
                                        basicDatas(language.value).map((data, index) => {
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
                                                            defaultValue={data.defaultValue}
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
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder={data.placeholder}
                                                                defaultValue={data.defaultValue}
                                                                onChange={data.function} />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        {
                                            isOpen[1] === true &&
                                            advancedDropdowns.map((data, index) => {
                                                if (index === 2 && showRewardContent === false) return;
                                                return (
                                                    <div key={index} className="input-group mb-3 align-items-center" style={{ paddingLeft: '20px' }}>
                                                        <span className="col-4">{data.text}</span>

                                                        <div className='col-8'>
                                                            <Dropdown>
                                                                <Dropdown.Toggle className="width-200 btn btn-primary btn-outline-primary left-radius">
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
                                                                                <div
                                                                                    key={indexed}
                                                                                    className='width-200 d-flex align-items-center'
                                                                                    style={{ padding: '5px' }}
                                                                                    onClick={() => {
                                                                                        handleDropdownSelection(index, indexed)
                                                                                    }}
                                                                                >
                                                                                    <Dropdown.Item >
                                                                                        <div>{moduleData.texts}</div>
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
                                            <>
                                                {
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
                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        placeholder={data.placeholder}
                                                                        defaultValue={data.defaultValue}
                                                                        onChange={data.function} />
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div className='d-flex flex-direction-row'>
                                                    <div className='col-4'>
                                                        <span style={{ paddingLeft: '20px', }}>Total Buy Fees</span>
                                                    </div>
                                                    <div className='col-8'>
                                                        <span style={{ paddingLeft: '20px', }}>
                                                            {
                                                                showRewardContent
                                                                    ?
                                                                    `${TaxSum(Number(buyLiquidity), Number(buyMarketing), Number(buyBurn), Number(buyReward), true) <= 30
                                                                        ? (TaxSum(Number(buyLiquidity), Number(buyMarketing), Number(buyBurn), Number(buyReward), true)).toFixed(2)
                                                                        : 'Invalid Tax. Tax should be less than or equal to 30'
                                                                    }`
                                                                    :
                                                                    `${TaxSum(Number(buyLiquidity), Number(buyMarketing), Number(buyBurn), Number(0), true) <= 30
                                                                        ? (TaxSum(Number(buyLiquidity), Number(buyMarketing), Number(buyBurn), Number(0), true)).toFixed(2)
                                                                        : 'Invalid Tax. Tax should be less than or equal to 30'
                                                                    }`
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </>
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
                                            <>
                                                {
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
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder={data.placeholder}
                                                                        defaultValue={data.defaultValue}
                                                                        onChange={data.function} />
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div className='d-flex flex-direction-row'>
                                                    <div className='col-4'>
                                                        <span style={{ paddingLeft: '20px', }}>Total Sell Fees</span>
                                                    </div>
                                                    <div className='col-8'>
                                                        <span style={{ paddingLeft: '20px', }}>
                                                            {
                                                                showRewardContent
                                                                    ?
                                                                    `${TaxSum(Number(sellLiquidity), Number(sellMarketing), Number(sellBurn), Number(sellReward), false) <= 30
                                                                        ? (TaxSum(Number(sellLiquidity), Number(sellMarketing), Number(sellBurn), Number(sellReward), false)).toFixed(2)
                                                                        : 'Invalid Tax. Tax should be less than or equal to 30'
                                                                    }`
                                                                    :
                                                                    `${TaxSum(Number(sellLiquidity), Number(sellMarketing), Number(sellBurn), Number(0), false) <= 30
                                                                        ? (TaxSum(Number(sellLiquidity), Number(sellMarketing), Number(sellBurn), Number(0), false)).toFixed(2)
                                                                        : 'Invalid Tax. Tax should be less than or equal to 30'
                                                                    }`
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </>
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
                                                    <div key={index} style={{ paddingLeft: '20px', paddingTop: '10px' }}>
                                                        <div className='col-12 d-flex flex-direction-row'>
                                                            <div className='col-3 align-items-center'>
                                                                <p>{functions.text}</p>
                                                            </div>

                                                            <div style={{
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                alignItems: 'center',
                                                                fontSize: '20px',
                                                                fontWeight: 'bold',
                                                                justifyContent: 'right',
                                                            }}>
                                                                <label
                                                                    className="switch">
                                                                    <input type="checkbox" onClick={() => handleCheckBox(index)} />
                                                                    <div className={`slider ${isBoxChecked[index] ? "on" : "off"}`}>
                                                                        <span className={`circle ${isBoxChecked[index] ? "right" : "left"}`}></span>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className='col-12 d-flex flex-direction-row align-items-center'>
                                                            <div className='col-3'>
                                                            </div>
                                                            <div className='col-6'>
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

                                    <span style={{ marginLeft: '20px' }}> {moduleDatas(language.value)[selectedModuleValue].fee}</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateToken;

export const moduleDatas = (language) => [
    {
        text:
            language === 'english'
                ? '0 Tax Basic'
                : language === 'chinese'
                    ? '0税基础代币'
                    : '0稅基礎代幣',
        description:
            language === 'english'
                ? `This template doens't contains any tax and has the lowest transaction fee`
                : language === 'chinese'
                    ? '该代币模板没有税率且交易所需要的矿工费为最低'
                    : '該代幣模板沒有稅率且交易所需要的礦工費為最低',
        fee: '0.05 BNB',
    },
    {
        text:
            language === 'english'
                ? 'Market & Liquidity'
                : language === 'chinese'
                    ? '营销回流代币'
                    : '營銷回流代幣',
        description:
            language === 'english'
                ? `This template contains marketing and liquidity fee. The liquidity fee would enlarge the liquidity pool, and the marketing fee would make profits to the project owner.`
                : language === 'chinese'
                    ? '该代币模板提供营销以及回流税率, 回流会使的池子越来越大, 稳定币价, 而营销税率可以为项目拥有者提供收益'
                    : '該代幣模板提供營銷以及回流稅率, 回流會使的池子越來越大, 穩定幣價, 而營銷稅率可以為項目擁有者提供收益',
        fee: '0.2 BNB',
    },
    {
        text:
            language === 'english'
                ? 'Reward, Market & Liquidity'
                : language === 'chinese'
                    ? '分红营销回流代币'
                    : '分紅營銷回流代幣',
        description:

            language === 'english'
                ? `This template contains reflection, marketing and liquidity fee. The liquidity fee would enlarge the liquidity pool, the marketing fee would make profits to the project owner, and the reflection fee rewards the holders.`
                : language === 'chinese'
                    ? '该代币模板提供分红,营销以及回流税率, 回流会使的池子越来越大, 稳定币价, 营销税率可以为项目拥有者提供收益, 分红税率则可为持币者带来收益'
                    : '該代幣模板提供分紅,營銷以及回流稅率, 回流會使的池子越來越大, 穩定幣價, 營銷稅率可以為項目擁有者提供收益, 分紅稅率則可為持幣者帶來收益',
        fee: '0.2 BNB',
    },
]