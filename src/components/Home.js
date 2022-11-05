import React from 'react';
import '../css/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="amazon prime"
                />
                <div className='home__row'>
                <Product
                        id={'0'}
                        offercode={'soap'} 
                        title={
                            "Keto Soap- 100Gm - Manufactured By: Med Manor Organics Pvt LtdComposition: Ketoconazole (2% W/W)"
                        }
                        price={208.00}
                        image={'https://static-assets.dhani.com/pharmacy/images/product-images/10170993849/1-large.png'}
                        rating={5}
                        >BUY TWO SOAPS AND GET ONE CHOCOLATE FREE</Product>
                        <Product
                        id={'1'} 
                        offercode={'chocolate'}
                        title={
                            "Cadbury Dairy Milk Home Treats Chocolate Bars  (126 g)"
                        }
                        price={90.00}
                        image={'https://rukminim1.flixcart.com/image/416/416/kij6f0w0/chocolate/u/q/s/126-dairy-milk-home-treats-chocolate-cadbury-original-imafyawnaavzgxrg.jpeg?q=70'}
                        rating={4}
                        />
                        <Product
                        id={'2'} 
                        title={
                            "Akshayakalpa Organic Cooking Unsalted Butter  (200 g)"
                        }
                        offercode={''} 
                        price={176.00}
                        image={'https://rukminim1.flixcart.com/image/416/416/kddf6a80/butter/f/h/a/200-organic-cooking-tub-akshayakalpa-original-imafuan42e2stvnd.jpeg?q=70'}
                        rating={4}
                        />
                </div>
                <div className="home__row">
                        <Product
                        id={'3'} 
                        title={
                            "Whirlpool 190 L 2 Star Direct-Cool Single Door Refrigerator (WDE 205 CLS PLUS 2S, Sapphire Fiesta, Toughened Glass Shelves)"
                        }
                        offercode={''} 
                        price={12050.00}
                        image={'https://images-na.ssl-images-amazon.com/images/I/81draxos71L._SX679_.jpg'}
                        rating={4}
                        />
                        <Product 
                        id={'5'}
                        title={
                            "Redmi Note 10 Pro Max (Glacial Blue, 8GB RAM, 128GB Storage) -108MP Quad Camera | 120Hz Super Amoled Display | ICICI Cashback 1500 Off"
                        }
                        offercode={''} 
                        price={21999.00}
                        image={'https://images-na.ssl-images-amazon.com/images/I/719iIpuMQbL._SL1500_.jpg'}
                        rating={5}
                        />
                </div>
                <div className="home__row">
                    <Product 
                    id={'6'}
                    title={
                        "Amazfit GTS2 mini Super-light Smart Watch with SpO2 Level Measurement, 14 Days Battery Life, 70+ Sports Modes, Built-in GPS, Built-in Amazon Alexa"
                    }
                    offercode={''} 
                    price={6999.00}
                    image={'https://images-na.ssl-images-amazon.com/images/I/618MEYCaUQL._SL1500_.jpg'}
                    rating={5}
                    />
                    <Product 
                    id={'7'}
                    offercode={''} 
                    title={"iBall Tarang Classic 2.1 Multimedia Speaker with Bluetooth, USB, FM Radio & Remote Control (Black)"}
                    price={4122.00}
                    image={'https://images-na.ssl-images-amazon.com/images/I/91qRueCWhzL._SL1500_.jpg'}
                    rating={4}
                    />
                    <Product 
                    id={'8'}
                    title={'Mi Neckband Pro (Black) with Powerful Bass, IPX5, Up to 20hrs Playback, ANC & ENC'}
                    offercode={''} 
                    price={1799}
                    image={'https://images-na.ssl-images-amazon.com/images/I/41LoSn8sDoL.jpg'}
                    rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id={'9'}
                    title={'Mi 4X 125.7 cm (50 Inches) 4K Ultra HD Android LED TV (Black)'}
                    offercode={''} 
                    price={33999.00}
                    image={'https://images-na.ssl-images-amazon.com/images/I/71g6MiOiAVL._SL1500_.jpg'}
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
