import React from 'react';

const Banner = () => {
    return (

        <div className='my-8'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/QNT34T2/1000-F-700515350-Wn-GJc-XWw3-S7-Ug-W8-So-Bo-Bg-Khb-Hbg-TJdwi.jpg" className="w-full" />
                    <div className="absolute bottom-5 left-5 bg-opacity-50 bg-gray-900 text-white p-4 rounded text-center">
                        <h2 className="text-xl font-bold">Fresh and Healthy</h2>
                        <p>Experience the vibrancy of fresh vegetables, skillfully tossed into a delightful salad that captures the essence of Bangladeshi cuisine's love for freshness</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/1XFNXPR/1000-F-263461952-s7eu-M2g2-Rk-Vw-Y04krh-Lf-Ie4x-GDFr8-QSr.jpg" className="w-full" />
                    <div className="absolute bottom-5 left-5 bg-opacity-50 bg-gray-900 text-white p-4 rounded text-center">
                        <h2 className="text-xl font-bold">Aromatic Spices</h2>
                        <p>Dive into the rich aroma of Bangladeshi spices. Each spice brings its unique flavor, creating the foundation for a multitude of flavorful dishes</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/wh2bzcr/1000-F-706205892-Syrn-JFOf-WBITXBQXg-F62b-Tc-WP3-K1g5d-Y.jpg" className="w-full" />
                    <div className="absolute bottom-5 left-5 bg-opacity-50 bg-gray-900 text-white p-4 rounded text-center">
                        <h2 className="text-xl font-bold">Traditional Touch</h2>
                        <p>Embrace the authenticity of Bangladeshi cooking with traditional bamboo steamer baskets, perfect for creating steamed delicacies that are both healthy and delicious</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/5M4RD8s/Free-Food-Snacks-Ingredients-Background-Images-Food-Simple-White-Poster-Background-Banner-Photo-Back.jpg" className="w-full" />
                    <div className="absolute bottom-5 left-5 bg-opacity-50 bg-gray-900 text-white p-4 rounded text-center">
                        <h2 className="text-xl font-bold">Sweet Delights</h2>
                        <p>Indulge in the exquisite flavors of traditional Bangladeshi desserts. From creamy rice pudding to sweet syrup-soaked delights, each bite is a celebration of rich culinary heritage</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        
        </div>   
        
    );
};

export default Banner;