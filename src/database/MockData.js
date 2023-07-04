export const data = [
    {
        id: 1,
        name: 'Bó hoa hồng trắng',
        description: 'Bao gồm 10 cành',
        price: 200000,
        isSale: true,
        salePercentage: 15,
        like: 347,
        image: require('../styles/imgs/products/whiterosebracket.jpg'),
    },

    {
        id: 2,
        name: 'Giỏ hoa',
        description: 'Đầy đủ các loại hoa và màu sắc',
        price: 300000,
        isSale: true,
        salePercentage: 15,
        like: 106,
        image: require('../styles/imgs/products/flowerbracket.jpg'),
    },

    {
        id: 3,
        name: 'Flowers Box',
        description: 'Nhỏ gọn, tiện lợi. Dùng để làm quà tặng.',
        price: 150000,
        isSale: false,
        salePercentage: 0,
        like: 63,
        image: require('../styles/imgs/products/flowerbox.jpg'),
    },

    {
        id: 4,
        name: 'Bó hoa hồng',
        description: 'Bó hoa hồng gồm 15 cành.',
        price: 150000,
        isSale: false,
        salePercentage: 0,
        like: 246,
        image: require('../styles/imgs/products/bohoahong.png'),
    },

    {
        id: 5,
        name: 'Bình hoa',
        description: 'Trang trí cho không gian phòng.',
        price: 100000,
        isSale: true,
        salePercentage: 10,
        like: 286,
        image: require('../styles/imgs/products/flowerJar.jpg'),
    },

    {
        id: 6,
        name: 'Hoa Hướng Dương',
        description: 'Một bó gồm 10 cành lớn.',
        price: 400000,
        isSale: false,
        salePercentage: 0,
        like: 422,
        image: require('../styles/imgs/products/sunflowerbracket.jpg'),
    },

    {
        id: 7,
        name: 'Hoa Lan',
        description: 'Trang trí cho vườn hoa trước nhà.',
        price: 300000,
        isSale: true,
        salePercentage: 10,
        like: 126,
        image: require('../styles/imgs/products/chauhoalan.jpg'),
    },
];

export const user = {
    id: 1,
    username: 'Võ Tiến Khoa',
    address: '03, Sông Thao, phường 2, Quận Tân Bình',
    broughtProducts: [6, 3, 2, 5],
};

export const events = [
    {
        id: 1,
        event: 'spring sale',
        image: require('../styles/imgs/saleSpring.png'),
    },

    {
        id: 2,
        event: 'summer sale',
        image: require('../styles/imgs/salesummer.png'),
    },
];

export const categories = [
    {
        id: 1,
        name: 'Hoa Hồng',
        image: require('../styles/imgs/categories/rose.png'),
    },

    {
        id: 2,
        name: 'Hoa Hồng Trắng',
        image: require('../styles/imgs/categories/whiterose.jpg'),
    },
    {
        id: 3,
        name: 'Hoa Cúc',
        image: require('../styles/imgs/categories/hoacuc.jpg'),
    },
    {
        id: 4,
        name: 'Hoa Hướng Dương',
        image: require('../styles/imgs/categories/sunflower.jpg'),
    },
    {
        id: 5,
        name: 'Hoa Lan',
        image: require('../styles/imgs/categories/hoalan.jpg'),
    },
    {
        id: 6,
        name: 'Giỏ Hoa',
        image: require('../styles/imgs/categories/giohoa.jpg'),
    },

    {
        id: 7,
        name: 'Bó Hoa',
        image: require('../styles/imgs/categories/bohoa.png'),
    },
];
