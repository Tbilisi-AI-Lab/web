import React from 'react';

import { Avatar, Card } from 'antd';
const { Meta } = Card;

const contentStyle = {
  margin: 0,
  height: '560px',
  color: '#fff',
  textAlign: 'center',
};

const CardForCarousel = ({ url }) => (
  <div style={contentStyle}>
    <Card cover={<img alt="example" src={url} className="card-image" />}>
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title="Card title"
        description="This is the description"
      />
    </Card>
  </div>
);
export default CardForCarousel;
