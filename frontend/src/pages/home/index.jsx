import React from "react";

const Home = () => {

    return (
        <div id="__next">
            <div className="Toastify"></div>
            <div id="scrollToTop" className="scrollToTop">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3px" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </div>
            <div className="header">
                <div className="absolute-top">
                    <div className="headerContainer">
                        <div className="inside">
                            <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobilemenubtn">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} className="logo" alt="" />
                            </div>
                            <div style={{opacity: 0}}>
                                <div>
                                    <div className="categories">
                                        <button className="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                                <line x1="3" y1="18" x2="21" y2="18"></line>
                                            </svg>
                                            <p>Бүх ангилал</p>
                                        </button>
                                        <span>Эм</span>
                                        <span>Гоо сайхан</span>
                                        <span>Ээж ба хүүхэд</span>
                                        <span>Жор илгээх</span>
                                        <span>Шинэ</span>
                                        <span>ЭМДаатгалаар авах</span>
                                        <span>Захиалга хянах</span>
                                    </div>
                                </div>
                            </div>
                            <div className="icons">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/headericons/love.svg`} className="svg" alt="" />
                                <img src={`${process.env.PUBLIC_URL}/assets/images/headericons/basket.svg`} className="svg" alt="" />
                                <img src={`${process.env.PUBLIC_URL}/assets/images/headericons/user.svg`} className="svg" alt="" />
                                <button className="formbutton">Нэвтрэх</button>
                            </div>
                        </div>
                    </div>
                    <div className="searcharea">
                        <div className="inputcontainer">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/headericons/search.svg`} alt="" />
                            <input placeholder="Та юу хайж байна вэ?" disabled="" />
                            <div className="anime">
                                <div className="box">
                                    <ul>
                                        <li>Эм</li>
                                        <li>Гоо сайхан</li>
                                        <li>Ээж ба хүүхэд</li>
                                        <li>Эм</li>
                                        <li>Гоо сайхан</li>
                                        <li>Ээж ба хүүхэд</li>
                                    </ul>
                                </div>
                            </div>
                            <button>Хайлт</button>
                        </div>
                    </div>
                    <div className="bottomcategoryContainer">
                        <div>
                            <div className="categories">
                                <button className="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="3" y1="12" x2="21" y2="12"></line>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <line x1="3" y1="18" x2="21" y2="18"></line>
                                    </svg>
                                    <p>Бүх ангилал</p>
                                </button>
                                <span>Эм</span>
                                <span>Гоо сайхан</span>
                                <span>Ээж ба хүүхэд</span>
                                <span>Жор илгээх</span>
                                <span>Шинэ</span>
                                <span>ЭМДаатгалаар авах</span>
                                <span>Захиалга хянах</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header">
                    <div className="headerContainer fixed-top-index" id="afterScroll">
                        <div className="inside">
                            <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobilemenubtn">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} className="logo" alt="" />
                            </div>
                            <div>
                                <div className="categories">
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="3" y1="12" x2="21" y2="12"></line>
                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                            <line x1="3" y1="18" x2="21" y2="18"></line>
                                        </svg>
                                        <p>Бүх ангилал</p>
                                    </button>
                                    <span>Эм</span>
                                    <span>Гоо сайхан</span>
                                    <span>Ээж ба хүүхэд</span>
                                    <span>Жор илгээх</span>
                                    <span>Шинэ</span>
                                    <span>ЭМДаатгалаар авах</span>
                                    <span>Захиалга хянах</span>
                                </div>
                            </div>
                            <div className="icons">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/headericons/search.svg`} className="svg" alt="" />
                                <img src={`${process.env.PUBLIC_URL}/assets/images/headericons/love.svg`} className="svg" alt="" />
                                <img src={`${process.env.PUBLIC_URL}/assets/images/headericons/basket.svg`} className="svg" alt="" />
                                <img src={`${process.env.PUBLIC_URL}/assets/images/headericons/user.svg`} className="svg" alt="" />
                                <button className="formbutton">Нэвтрэх</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainBody" id="mainBodyContainerOfApp">
                <div className="index">
                    <div className="headBanners">
                        <div className="swiper">
                            <div className="swiper-wrapper"></div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                    <div className="indexMain">
                        <div className="circularLoader">
                            <div style={{overflow: "hidden", outline: "none", width: "36px", height: "36px"}}>
                            </div>
                        </div>
                        <div>
                            <p className="title">Түгээмэл асуулт хариулт</p>
                            <div className="faqAccordions">
                                <div className="accordion"></div>
                                <button className="formbuttonwhite">Бүгдийг үзэх</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="row1">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} className="logo" alt="" />
                    <div className="appstores">
                        <div className="RoundedIconButton">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/socialicons/appstore.png`} className="socialicons" />
                        </div>
                        <div className="RoundedIconButton">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/socialicons/playstore.png`} className="socialicons" />
                        </div>
                    </div>
                </div>
                <div className="row2">
                    <span>Бидний тухай</span>
                    <span>Гишүүнчлэл</span>
                    <span>Хүргэлтийн бүс</span>
                    <span>BOPIS үйлчилгээ</span>
                    <span>Ажлын анкет</span>
                    <span>Сурталчилгаа байршуулах</span>
                </div>
                <div className="row3">
                    <div className="RoundedIconButton" style={{opacity: 0}}></div>
                </div>
            </div>
        </div>
    )
}

export default Home;
