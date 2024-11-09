import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import swiper image
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const Category = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-8"
            >
            
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 
                    text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 
                    text-white'>Pizza</h3>    
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 
                    text-white'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 
                    text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 
                    text-white'>Salad</h3>
                </SwiperSlide>   
            </Swiper>  
        </>
    );
};

export default Category;