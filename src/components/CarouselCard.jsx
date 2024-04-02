import React from 'react';
import { Carousel } from 'antd';
import CardForCarousel from './ui/Card';

const CarouselCard = () => {
  const onChange = (currentSlide) => {};
  return (
    <div className="car">
      <Carousel afterChange={onChange}>
        <CardForCarousel
          url={'https://4kwallpapers.com/images/walls/thumbs_2t/10707.jpg'}
        />
        <div>
          <CardForCarousel
            url={
              'https://api.lilly021.com/wp-content/uploads/2022/10/professional-programmer-working-late-dark-office-scaled.jpg'
            }
          />
        </div>
        <div>
          <CardForCarousel
            url={
              'https://miro.medium.com/v2/resize:fit:1400/0*hENya-JPKMK7VqPo'
            }
          />
        </div>
        <div>
          <CardForCarousel
            url={'https://wallpaperaccess.com/full/1197809.png'}
          />
        </div>
      </Carousel>
    </div>
  );
};
export default CarouselCard;
