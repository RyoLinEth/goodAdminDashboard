import React, { useEffect, useState, useRef } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import OrderTab from './TokenList/OrderTab';
import TradeTab from './TokenList/TradeTab';

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


const TokenList = () => {
    const [data, setData] = useState(
        document.querySelectorAll("#future_wrapper tbody tr")
    );
    const sort = 6;
    const activePag = useRef(0);
    const [test, settest] = useState(0);

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


    return (
        <>
            <div className="row">
                <h1> My Token List </h1>
                <div className="col-12">
                    <div className="card">
                        <Tab.Container defaultActiveKey="All">
                            <div className="card-header border-0 pb-2 flex-wrap">
                                <h4 className="heading">My Token List</h4>
                                {/* <>
                                    <Nav className="order nav nav-tabs">
                                        <Nav.Link as="button" eventKey="All" type="button">Order</Nav.Link>
                                        <Nav.Link as="button" eventKey="Order" type="button">Order History</Nav.Link>
                                        <Nav.Link as="button" eventKey="Trade" type="button">Trade Histroy</Nav.Link>
                                    </Nav>
                                </> */}
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
export default TokenList;