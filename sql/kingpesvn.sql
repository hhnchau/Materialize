-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2018 at 02:46 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kingpesvn`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(20) NOT NULL,
  `categoryDescription` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`categoryId`, `categoryName`, `categoryDescription`) VALUES
(7, 'Xe ', 'Xe Điều Khiển'),
(8, 'bupbe', 'Búp Bê');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `commentId` int(11) NOT NULL,
  `conmentQuestion` text NOT NULL,
  `commentAnswer` text NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`commentId`, `conmentQuestion`, `commentAnswer`, `userId`) VALUES
(7, 'Bao nhiêu tiền vậy bạn?', 'Đây là hàng tặng, không có bán bạn ơi.', 1),
(7, 'Có bảo hành không ad?', 'Tất cả đều có bảo hành bạn ơi.', 2),
(7, 'Giao hàng trong bao lâu vậy ad?', 'Trong vòng 2 ngày làm việc bạn ơi.', 3),
(8, 'Có cho đổi trả không ad?', 'Tất cả đều được 1 đổi 1 ban nhé.', 3);

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

CREATE TABLE `delivery` (
  `receiverName` varchar(200) NOT NULL,
  `receiverAddress` varchar(255) NOT NULL,
  `receiverPhone` varchar(15) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `deliveryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `delivery`
--

INSERT INTO `delivery` (`receiverName`, `receiverAddress`, `receiverPhone`, `latitude`, `longitude`, `deliveryId`) VALUES
('Huỳnh Ngọc Châu', 'Lưu Chí Hiếu', '0123456789', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `image1` varchar(15) DEFAULT NULL,
  `image2` varchar(15) DEFAULT NULL,
  `image3` varchar(15) DEFAULT NULL,
  `image4` varchar(15) DEFAULT NULL,
  `image5` varchar(15) DEFAULT NULL,
  `imageId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`image1`, `image2`, `image3`, `image4`, `image5`, `imageId`) VALUES
('dg095.jpg', 'dg095_1.jpg', 'dg095_2.jpg', NULL, NULL, 7),
('dg047.jpg', 'dg047_1.jpg', 'dg047_2.jpg', 'dg047_3.jpg', 'dg047_4.jpg', 8),
('xexuc.jpg', 'xexuc_1.jpg', 'xexuc_2.jpg', 'xexuc_3.jpg', NULL, 9),
('2031c.jpg', NULL, NULL, NULL, NULL, 10);

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `likesId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`likesId`, `userId`) VALUES
(7, 1),
(7, 2),
(8, 1),
(8, 2),
(8, 3);

-- --------------------------------------------------------

--
-- Table structure for table `price`
--

CREATE TABLE `price` (
  `priceId` int(11) NOT NULL,
  `buy` int(6) NOT NULL,
  `sell` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `price`
--

INSERT INTO `price` (`priceId`, `buy`, `sell`) VALUES
(7, 35, 40),
(8, 199, 210),
(9, 999, 11000),
(10, 190, 230);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productId` int(11) NOT NULL,
  `promotionId` int(11) DEFAULT NULL,
  `productName` varchar(30) NOT NULL,
  `amount` int(3) NOT NULL,
  `decsription` text NOT NULL,
  `productSn` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productId`, `promotionId`, `productName`, `amount`, `decsription`, `productSn`) VALUES
(7, NULL, 'Xe chạy đà cứu hỏa', 7, 'Xe chạy đà cứu hỏa DG.095', '31300772'),
(8, NULL, 'Đồ chơi xe bus vui vẻ Niniya', 15, 'Đồ chơi xe bus vui vẻ Niniya DG.047', '31300768'),
(9, 1, 'Mô hình xe công trình Bruder ', 5, 'Mô hình xe công trình Bruder được làm từ chất liệu an toàn cùng thiết kế mô phỏng sinh động các loại xe chuyên dụng trong thực tế, giúp bé thỏa trí tưởng tượng và tập nhận biết hình dạng các phương tiện giao thông thông thường trong cuộc sống hàng ngày.\r\n\r\nChất liệu nhựa cao cấp, không chứa BPA, an toàn cho sức khỏe\r\nThiết kế mô phỏng mô hình xe xúc đào\r\nSản phẩm với các máy xúc như thật\r\n2 chân chống ổn định giúp máy xúc có thể hoạt động mà vẫn giữ thăng bằng, thân xe nhỏ gọn nên hoạt động linh hoạt\r\nXe trơn nhẵn, không góc cạnh\r\nKích thích sự tưởng tưởng, giúp bé làm quen với thực tế sinh động', 'BRU02445'),
(10, 2, 'Ô TÔ ĐIỀU KHIỂN TỪ XA 2031C', 6, 'GIỚI THIỆU\nĐồ chơi ô tô điều khiển từ xa 2031C được làm từ chất liệu nhựa an toàn, với thiết kế mô phỏng theo mô hình siêu xe, giúp bé có những phút giây vui chơi thoải mái đầy bổ ích. Các chi tiết góc cạnh được bo tròn, không có cạnh sắc nên không làm trầy xước làn da của bé. Oto đồ chơi điều khiển từ xa sẽ là món quà mà các bé trai vô cùng thích thú, bố mẹ hãy dành tặng bé món quà này nhé.\n\nĐiểm nổi bật của chiếc đồ chơi ô tô điều khiển từ xa 2031 :\nChất liệu: nhựa cao cấp đạt chuẩn an toàn, không chứa chất độc hại, không ảnh hưởng đến sức khỏe của bé nên các bậc phụ huynh có thể an tâm.\nDành cho bé từ 3 tuổi trở lên lên\n\nSử dụng Pin AA\n\nQuá trình chơi đùa tạo cho bé yêu của bạn cơ hội được vận động nhiều hơn cả về thể chất lẫn tư duy\n\nĐồ chơi ô tô điều khiển từ xa 2031C với thiết kế mô phỏng giống với những chiếc xe thật, sản phẩm giúp bé thể hiện được bản lĩnh, đồng thời giúp trẻ nhận diện và đọc tên phương tiện giao thông\n\nTính năng hữu ích của sản phẩm :\nSản phẩm được làm từ chất liệu nhựa an toàn, chắc chắn. Xe có màu vàng, được thiết kế mô phỏng theo một chiếc siêu xe thể thao với các góc cạnh bo tròn. Vì thế cha mẹ có thể yên tâm cho bé chơi mà không sợ ảnh hưởng đến sức khỏe của bé.\n\nÔ tô điều khiển 2031C sử dụng pin AA để hoạt động nên rất dễ dàng thay pin, các mẹ có thể đến các cửa hàng tạp hóa để mua. Bé có thể dễ dàng điều khiển xe tiến lùi, quay trái hoặc quay phải.\n\nBé chơi oto dieu khien không những giúp bé tăng cường vận động mà còn phát triển cả thể chất lẫn tư duy khi điều khiển xe để vượt qua các chướng ngại vật.\n\nVới giá bán khá rẻ phù hợp với hầu hết túi tiền của mọi người thì đây thực sự là sản phẩm rất tốt dành cho các bé trai.\n\nMẫu xe ô tô điều khiển từ xa khác cho ba mẹ tham khảo :\n\n--> Xe ô tô điều khiển từ xa Captain America 3269', '2031C');

-- --------------------------------------------------------

--
-- Table structure for table `promotion`
--

CREATE TABLE `promotion` (
  `promotionId` int(11) NOT NULL,
  `promptionName` varchar(20) NOT NULL,
  `promotionDescription` varchar(200) NOT NULL,
  `value` int(7) DEFAULT NULL,
  `percent` int(3) DEFAULT NULL,
  `end` timestamp NULL DEFAULT NULL,
  `start` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `promotion`
--

INSERT INTO `promotion` (`promotionId`, `promptionName`, `promotionDescription`, `value`, `percent`, `end`, `start`) VALUES
(1, 'Thương Hiệu', 'Promotion thuong hieu Kingpppes', 30, NULL, '2018-04-22 17:00:00', '2018-07-30 17:00:00'),
(2, 'Discount', 'Giam Gia', NULL, 50, '2018-04-29 17:00:00', '2018-09-29 17:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `rateId` int(11) NOT NULL,
  `rate` int(1) NOT NULL,
  `rateQuestion` text NOT NULL,
  `rateAnswer` text NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rate`
--

INSERT INTO `rate` (`rateId`, `rate`, `rateQuestion`, `rateAnswer`, `userId`) VALUES
(7, 5, 'Hàng đẹp, cho 5 sao.', '', 1),
(7, 1, 'Đồ lừa đảo.', '', 2),
(8, 5, 'Dịch vụ tốt', 'Rất cám ơn bạn', 3);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `version` varchar(15) NOT NULL,
  `upgrade` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`version`, `upgrade`) VALUES
('0.0.1', 'He thong dang bao tri');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `transactionId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `promotionId` int(11) DEFAULT NULL,
  `totalFee` int(9) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`transactionId`, `userId`, `productId`, `promotionId`, `totalFee`, `date`, `status`) VALUES
(1, 1, 9, NULL, 1000, '2018-04-22 10:35:40', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `address` varchar(200) DEFAULT NULL,
  `phone` varchar(15) NOT NULL,
  `password` varchar(150) DEFAULT NULL,
  `sex` int(1) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `nickname`, `address`, `phone`, `password`, `sex`, `email`) VALUES
(1, 'huynhchau', NULL, '012345678', NULL, NULL, NULL),
(2, 'quocbao', NULL, '6789', NULL, NULL, NULL),
(3, 'xuanlan', NULL, '123789', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `youtube`
--

CREATE TABLE `youtube` (
  `yt1` varchar(15) DEFAULT NULL,
  `yt2` varchar(15) DEFAULT NULL,
  `yt3` varchar(15) DEFAULT NULL,
  `ytId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `youtube`
--

INSERT INTO `youtube` (`yt1`, `yt2`, `yt3`, `ytId`) VALUES
('Wzo33JBQQTY', 'VAbDSWCDUQ8', 'uJbnkxx8Gvw', 7),
('gy-I7tytnKg', 'PhGsuejsBF8', 'LZJCdl7MhX8', 8),
('tSUg0ZLSMgc', '3oeybIqHmKk', 'zEUeBkuoiJ0', 9),
('FYzbCA3hEZc', NULL, NULL, 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD KEY `commentId` (`commentId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `delivery`
--
ALTER TABLE `delivery`
  ADD KEY `deliveryId` (`deliveryId`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD KEY `imageId` (`imageId`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD KEY `likesId` (`likesId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `price`
--
ALTER TABLE `price`
  ADD KEY `priceId` (`priceId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `promotionId` (`promotionId`);

--
-- Indexes for table `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`promotionId`);

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD KEY `rateId` (`rateId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`transactionId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `productId` (`productId`),
  ADD KEY `promotionId` (`promotionId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `youtube`
--
ALTER TABLE `youtube`
  ADD KEY `ytId` (`ytId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `promotion`
--
ALTER TABLE `promotion`
  MODIFY `promotionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `transactionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`commentId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `delivery`
--
ALTER TABLE `delivery`
  ADD CONSTRAINT `delivery_ibfk_1` FOREIGN KEY (`deliveryId`) REFERENCES `transaction` (`transactionId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`imageId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`likesId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `price`
--
ALTER TABLE `price`
  ADD CONSTRAINT `price_ibfk_1` FOREIGN KEY (`priceId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`promotionId`) REFERENCES `promotion` (`promotionId`);

--
-- Constraints for table `rate`
--
ALTER TABLE `rate`
  ADD CONSTRAINT `rate_ibfk_1` FOREIGN KEY (`rateId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rate_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`),
  ADD CONSTRAINT `transaction_ibfk_3` FOREIGN KEY (`promotionId`) REFERENCES `promotion` (`promotionId`);

--
-- Constraints for table `youtube`
--
ALTER TABLE `youtube`
  ADD CONSTRAINT `youtube_ibfk_1` FOREIGN KEY (`ytId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
