-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 18, 2018 at 08:24 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kingpes`
--

-- --------------------------------------------------------

--
-- Table structure for table `amount`
--

CREATE TABLE `amount` (
  `amountId` int(11) NOT NULL,
  `amountBuy` int(3) NOT NULL,
  `amountSell` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `amount`
--

INSERT INTO `amount` (`amountId`, `amountBuy`, `amountSell`) VALUES
(7, 10, 2),
(8, 2, 2),
(9, 5, 4),
(10, 0, 0),
(14, 30, 1);

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `bannerId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `productId` int(11) NOT NULL,
  `priority` int(3) NOT NULL,
  `start` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `end` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(200) NOT NULL,
  `categoryDesc` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`categoryId`, `categoryName`, `categoryDesc`) VALUES
(1, 'Xe', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `certify`
--

CREATE TABLE `certify` (
  `certifyId` int(11) NOT NULL,
  `session` varchar(50) NOT NULL,
  `notify` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `commentId` int(11) NOT NULL,
  `commentQuestion` text NOT NULL,
  `commentAnswer` text NOT NULL,
  `userId` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `commentId`, `commentQuestion`, `commentAnswer`, `userId`, `date`) VALUES
(1, 7, 'Bao nhiêu tiền vậy bạn?', 'Đây là hàng tặng, không có bán bạn ơi.', 1, '2018-06-13 06:29:29'),
(2, 7, 'Có bảo hành không ad?', 'Tất cả đều có bảo hành bạn ơi.', 2, '2018-06-13 06:29:29'),
(3, 7, 'Giao hàng trong bao lâu vậy ad?', 'Trong vòng 2 ngày làm việc bạn ơi.', 3, '2018-06-13 06:29:29'),
(4, 8, 'Có cho đổi trả không ad?', 'Tất cả đều được 1 đổi 1 ban nhé.', 3, '2018-06-13 06:29:29'),
(5, 7, 'insert cau hoi', '', 3, '2018-06-13 06:29:29'),
(6, 10, '', 'Huynh Chau Trả lời cho Xuân Lan', 2, '2018-06-13 06:29:29'),
(7, 10, 'Trả lời cho Xuân Lan', 'Tra loi cau hoi cho xuan lan', 2, '2018-06-13 06:29:29'),
(8, 7, 'Trả lời cho Xuân Lan', '', 3, '2018-06-13 06:29:29'),
(9, 14, 'Gia bao nhieu ad oi', '', 1, '2018-06-14 07:17:49'),
(10, 10, 'Quoc bao dat can hot the', '', 2, '2018-06-14 11:45:02');

-- --------------------------------------------------------

--
-- Table structure for table `flashsale`
--

CREATE TABLE `flashsale` (
  `flashsaleId` int(11) NOT NULL,
  `flashsaleName` varchar(20) NOT NULL,
  `flashsaleDescription` varchar(200) DEFAULT NULL,
  `flashsaleDiscount` int(7) NOT NULL,
  `start` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `end` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `flashsale`
--

INSERT INTO `flashsale` (`flashsaleId`, `flashsaleName`, `flashsaleDescription`, `flashsaleDiscount`, `start`, `end`) VALUES
(1, 'Supper Sale', NULL, 10000, '2018-06-16 07:31:14', '0000-00-00 00:00:00');

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
('truck-1', 'truck-2', 'truck-3', 'truck-4', NULL, 7),
('airbus-1', 'airbus-2', 'airbus-3', 'dg047_3.jpg', '', 8),
('xebon-1', 'xebon-2', 'xebon-3', 'xebon-4', NULL, 9),
('bupbe-1', NULL, NULL, NULL, NULL, 10),
('1528273870323go', '1528273870325go', 'undefined', 'undefined', 'undefined', 14);

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
(7, 2),
(8, 2);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `loginId` int(11) NOT NULL,
  `platform` int(1) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `country` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `open`
--

CREATE TABLE `open` (
  `openId` int(11) NOT NULL,
  `guestId` varchar(20) NOT NULL,
  `platform` int(1) NOT NULL,
  `notify` varchar(50) DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `point`
--

CREATE TABLE `point` (
  `pointId` int(11) NOT NULL,
  `pointName` varchar(255) NOT NULL,
  `pointValue` int(3) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `point`
--

INSERT INTO `point` (`pointId`, `pointName`, `pointValue`, `time`) VALUES
(1, 'default', 5, '2018-06-16 07:20:08');

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
(10, 190, 230),
(14, 120000, 130000);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productId` int(11) NOT NULL,
  `promotionId` int(11) DEFAULT NULL,
  `flashsaleId` int(11) DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  `shipId` int(11) NOT NULL,
  `pointId` int(11) DEFAULT NULL,
  `voucherId` int(11) DEFAULT NULL,
  `productName` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `productSn` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productId`, `promotionId`, `flashsaleId`, `categoryId`, `shipId`, `pointId`, `voucherId`, `productName`, `description`, `productSn`) VALUES
(7, NULL, NULL, 1, 1, NULL, NULL, 'Xe chạy đà cứu hỏa', 'Xe chạy đà cứu hỏa DG.095', '31300772'),
(8, NULL, NULL, 1, 1, NULL, NULL, 'Đồ chơi xe bus vui vẻ Niniya', 'Đồ chơi xe bus vui vẻ Niniya DG.047', '31300768'),
(9, 1, NULL, 1, 1, NULL, NULL, 'Mô hình xe công trình Bruder ', 'Just a question however:\r\nthe string is a message that is meant to be displayed in a browser or in an email.\r\nBecause the string is not escaped anymore (with <%- %>) does it may cause some security issues?\r\n\r\nI\'m thinking about injection attack (some people trying to send malicious html or javascript code) instead of a regular message?', '2031Cc'),
(10, 2, NULL, 1, 1, NULL, NULL, 'Ô TÔ ĐIỀU KHIỂN TỪ XA 2031C', '<p>\r\nThis paragraph\r\ncontains a lot of lines\r\nin the source code,\r\nbut the browser \r\nignores it.\r\n</p>\r\n\r\n<p>\r\nThis paragraph\r\ncontains      a lot of spaces\r\nin the source     code,\r\nbut the    browser \r\nignores it.\r\n</p>\r\n\r\n<p>\r\nThe number of lines in a paragraph depends on the size of the browser window. If you resize the browser window, the number of lines in this paragraph will change.\r\n</p>', '2031C'),
(14, 1, 1, 1, 1, 1, 1, 'Xe Hoi Bien Hinh', '<p><strong>Danh Gia Chi Tiet</strong></p>', 'A123456');

-- --------------------------------------------------------

--
-- Table structure for table `promotion`
--

CREATE TABLE `promotion` (
  `promotionId` int(11) NOT NULL,
  `promptionName` varchar(20) NOT NULL,
  `promotionDescription` varchar(200) DEFAULT NULL,
  `promotionDiscount` int(7) NOT NULL,
  `end` timestamp NULL DEFAULT NULL,
  `start` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `promotion`
--

INSERT INTO `promotion` (`promotionId`, `promptionName`, `promotionDescription`, `promotionDiscount`, `end`, `start`) VALUES
(1, 'Thương Hiệu', 'Promotion thuong hieu Kingpppes', 30, '2018-04-22 17:00:00', '2018-07-30 17:00:00'),
(2, 'Discount', 'Giam Gia', 100, '2018-04-29 17:00:00', '2018-09-29 17:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `id` int(11) NOT NULL,
  `rateId` int(11) NOT NULL,
  `rate` int(1) NOT NULL,
  `rateQuestion` text NOT NULL,
  `rateAnswer` text NOT NULL,
  `userId` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rate`
--

INSERT INTO `rate` (`id`, `rateId`, `rate`, `rateQuestion`, `rateAnswer`, `userId`, `date`) VALUES
(1, 7, 5, 'Hàng đẹp, cho 5 sao.', '', 1, '2018-06-13 06:28:55'),
(2, 7, 1, 'Đồ lừa đảo.', 'Huynh Chau Trả lời cho Quoc Bao', 2, '2018-06-13 06:28:55'),
(3, 8, 5, 'Dịch vụ tốt', 'Rất cám ơn bạn', 3, '2018-06-13 06:28:55'),
(6, 7, 3, 'Trả lời cho Xuân Lan', 'Huynh Chau Trả lời cho Xuân Lan', 3, '2018-06-13 06:28:55'),
(12, 14, 5, 'Hang chat luong', '', 1, '2018-06-14 07:17:32'),
(14, 10, 4, 'Quoc bao danh gia', '', 2, '2018-06-14 11:44:44');

-- --------------------------------------------------------

--
-- Table structure for table `receiver`
--

CREATE TABLE `receiver` (
  `receiverId` int(11) NOT NULL,
  `receiverName` varchar(200) NOT NULL,
  `receiverAddress` varchar(255) NOT NULL,
  `receiverPhone` varchar(15) NOT NULL,
  `receiverNote` varchar(255) DEFAULT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `receiver`
--

INSERT INTO `receiver` (`receiverId`, `receiverName`, `receiverAddress`, `receiverPhone`, `receiverNote`, `latitude`, `longitude`, `userId`) VALUES
(1, 'Huỳnh Ngọc Châu', 'Lưu Chí Hiếu', '0123456789', NULL, 1, 1, 1),
(2, 'Nguyen Chau', 'Tay Thanh-HCM', '0937590127', NULL, 0, 0, 1),
(3, 'Nguyen Chau', 'Tay Thanh-HCM', '0937590127', NULL, 0, 0, 3),
(5, 'Demo', 'Ho Chi Minh City', '0123000000', 'Dong goi', 0, 0, 1),
(6, 'Kingpes', 'Tien Giang', '999999999', 'Ok', 0, 0, 1),
(7, 'Test', 'Tan Phu', '09999999', 'Good', 0, 0, 1),
(8, 'Kingpes', 'Tay Thanh', '9999999', 'Ok', 0, 0, 1),
(9, 'Kingpes', 'Tay Thanh', '8888888', 'Goog', 0, 0, 1),
(10, 'Kingpes', 'Tay Thanh', '888888', 'GOOG', 0, 0, 1),
(11, 'Kingpes', 'Cong Hoa', '6666666', 'OH', 0, 0, 1),
(12, 'Kingpes', 'Luu Chi Hieu', '77777', 'OD', 0, 0, 1),
(13, 'ffff', 'sss', '43432', 'pdf', 0, 0, 1),
(14, 'sdf', 'pdf', 'sdf', 'pdf', 0, 0, 1),
(15, 'sdfsd', 'fsdf', 'sdf', 'pdf', 0, 0, 1),
(16, 'sdf', 'fads', 'sdf', 'pdf', 0, 0, 1),
(17, 'sdf', 'def', 'sdf', 'pdf', 0, 0, 1),
(18, 'sdf', 'pdf', 'sdf', 'pdf', 0, 0, 1),
(19, 'dsf', 'fascia', 'safd', 'pdf', 0, 0, 1),
(20, 'fsdfas', 'fads', 'fsdf', 'pdf', 0, 0, 1),
(21, 'Demo', 'test', '8895435', 'fjdfkda', 0, 0, 1),
(22, 'Test1', 'Test1', '098458345', 'xxxx', 0, 0, 1),
(23, 'Test2', 'test2', '34324', 'def', 0, 0, 1);

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
-- Table structure for table `ship`
--

CREATE TABLE `ship` (
  `shipId` int(11) NOT NULL,
  `shipName` varchar(255) NOT NULL,
  `shipDesc` varchar(255) DEFAULT NULL,
  `shipValue` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ship`
--

INSERT INTO `ship` (`shipId`, `shipName`, `shipDesc`, `shipValue`) VALUES
(1, 'Giao hang nhanh', NULL, 15000);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `transactionId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `promotionId` int(11) DEFAULT NULL,
  `voucherId` int(11) DEFAULT NULL,
  `pointId` int(11) DEFAULT NULL,
  `flashsaleId` int(11) DEFAULT NULL,
  `pointUse` int(3) DEFAULT NULL,
  `totalFee` int(9) NOT NULL,
  `amount` int(3) NOT NULL,
  `status` int(1) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`transactionId`, `receiverId`, `productId`, `promotionId`, `voucherId`, `pointId`, `flashsaleId`, `pointUse`, `totalFee`, `amount`, `status`, `time`) VALUES
(1, 1, 9, NULL, NULL, NULL, NULL, NULL, 1000, 0, 1, '2018-04-23 15:45:44'),
(1, 1, 7, 1, NULL, NULL, NULL, 10, 160, 0, 0, '2018-04-24 13:52:10'),
(1, 1, 7, 1, 1, NULL, NULL, 15, 195, 0, 0, '2018-04-24 13:56:08'),
(1, 1, 7, NULL, NULL, NULL, NULL, NULL, 100, 0, 0, '2018-04-29 00:19:11'),
(1, 1, 7, NULL, NULL, NULL, NULL, NULL, 100, 0, 0, '2018-04-29 00:20:11'),
(1, 1, 7, NULL, NULL, NULL, NULL, NULL, 100, 0, 0, '2018-06-14 16:42:23'),
(1, 9, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 03:52:14'),
(1, 10, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 03:55:55'),
(1, 11, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:08:52'),
(0, 12, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:22:49'),
(0, 13, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:24:06'),
(0, 14, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:25:53'),
(0, 15, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:27:26'),
(1, 16, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:28:19'),
(1, 17, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:29:52'),
(2, 18, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:30:33'),
(3, 19, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:30:59'),
(4, 20, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:31:47'),
(4, 20, 9, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:31:47'),
(5, 21, 7, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:36:02'),
(5, 21, 14, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:36:02'),
(5, 21, 9, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2018-06-18 04:36:02'),
(6, 22, 14, 1, 1, 1, 1, NULL, 0, 0, 0, '2018-06-18 06:11:44'),
(7, 23, 9, 1, NULL, NULL, NULL, 10, 25970, 1, 0, '2018-06-18 06:15:59');

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
  `email` varchar(100) DEFAULT NULL,
  `point` int(3) NOT NULL DEFAULT '0',
  `timeCreate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `nickname`, `address`, `phone`, `password`, `sex`, `email`, `point`, `timeCreate`) VALUES
(1, 'guest', 'unknow', 'unknow', 'unknow', 0, 'unknow', 0, '2018-04-23 15:24:13'),
(2, 'quocbao', NULL, '6789', '1', NULL, NULL, 0, '2018-04-23 15:24:13'),
(3, 'xuanlan', NULL, '123789', '1', NULL, NULL, 0, '2018-04-23 15:24:13'),
(4, 'Huynh3', 'Luu Chi Hieu', '0937590127', '1', 1, 'adc@gmail.com', 0, '2018-05-02 15:47:55'),
(5, 'Guest', NULL, '', NULL, NULL, NULL, 0, '2018-06-14 16:37:37');

-- --------------------------------------------------------

--
-- Table structure for table `voucher`
--

CREATE TABLE `voucher` (
  `voucherId` int(11) NOT NULL,
  `voucherName` varchar(20) NOT NULL,
  `voucherDescription` varchar(200) DEFAULT NULL,
  `voucherValue` int(7) NOT NULL,
  `type` int(3) NOT NULL,
  `limited` int(7) DEFAULT NULL,
  `start` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `end` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `voucher`
--

INSERT INTO `voucher` (`voucherId`, `voucherName`, `voucherDescription`, `voucherValue`, `type`, `limited`, `start`, `end`) VALUES
(1, 'KINGPES', NULL, 320, 0, NULL, '2018-04-24 13:55:43', NULL);

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
('FYzbCA3hEZc', NULL, NULL, 10),
('youtube', 'undefined', 'undefined', 14);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amount`
--
ALTER TABLE `amount`
  ADD UNIQUE KEY `amountId` (`amountId`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`bannerId`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `certify`
--
ALTER TABLE `certify`
  ADD UNIQUE KEY `certifyId_2` (`certifyId`),
  ADD KEY `certifyId` (`certifyId`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `commentId` (`commentId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `flashsale`
--
ALTER TABLE `flashsale`
  ADD PRIMARY KEY (`flashsaleId`);

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
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD KEY `loginId` (`loginId`);

--
-- Indexes for table `open`
--
ALTER TABLE `open`
  ADD PRIMARY KEY (`openId`);

--
-- Indexes for table `point`
--
ALTER TABLE `point`
  ADD PRIMARY KEY (`pointId`);

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
  ADD UNIQUE KEY `productSn` (`productSn`),
  ADD KEY `promotionId` (`promotionId`),
  ADD KEY `categoryId` (`categoryId`),
  ADD KEY `flashsaleId` (`flashsaleId`),
  ADD KEY `shipId` (`shipId`),
  ADD KEY `pointId` (`pointId`),
  ADD KEY `voucherId` (`voucherId`);

--
-- Indexes for table `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`promotionId`);

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rateId` (`rateId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `receiver`
--
ALTER TABLE `receiver`
  ADD PRIMARY KEY (`receiverId`),
  ADD KEY `deliveryId` (`userId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `ship`
--
ALTER TABLE `ship`
  ADD PRIMARY KEY (`shipId`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD KEY `userId` (`receiverId`),
  ADD KEY `productId` (`productId`),
  ADD KEY `promotionId` (`promotionId`),
  ADD KEY `voucherId` (`voucherId`),
  ADD KEY `transactionId` (`transactionId`),
  ADD KEY `pointId` (`pointId`),
  ADD KEY `flashsaleId` (`flashsaleId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indexes for table `voucher`
--
ALTER TABLE `voucher`
  ADD PRIMARY KEY (`voucherId`);

--
-- Indexes for table `youtube`
--
ALTER TABLE `youtube`
  ADD KEY `ytId` (`ytId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `bannerId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `flashsale`
--
ALTER TABLE `flashsale`
  MODIFY `flashsaleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `open`
--
ALTER TABLE `open`
  MODIFY `openId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `point`
--
ALTER TABLE `point`
  MODIFY `pointId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `promotion`
--
ALTER TABLE `promotion`
  MODIFY `promotionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rate`
--
ALTER TABLE `rate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `receiver`
--
ALTER TABLE `receiver`
  MODIFY `receiverId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `ship`
--
ALTER TABLE `ship`
  MODIFY `shipId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `voucher`
--
ALTER TABLE `voucher`
  MODIFY `voucherId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `amount`
--
ALTER TABLE `amount`
  ADD CONSTRAINT `amount_ibfk_1` FOREIGN KEY (`amountId`) REFERENCES `product` (`productId`);

--
-- Constraints for table `certify`
--
ALTER TABLE `certify`
  ADD CONSTRAINT `certify_ibfk_1` FOREIGN KEY (`certifyId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`commentId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`loginId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `price`
--
ALTER TABLE `price`
  ADD CONSTRAINT `price_ibfk_1` FOREIGN KEY (`priceId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`promotionId`) REFERENCES `promotion` (`promotionId`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `category` (`categoryId`),
  ADD CONSTRAINT `product_ibfk_4` FOREIGN KEY (`flashsaleId`) REFERENCES `flashsale` (`flashsaleId`),
  ADD CONSTRAINT `product_ibfk_5` FOREIGN KEY (`voucherId`) REFERENCES `voucher` (`voucherId`),
  ADD CONSTRAINT `product_ibfk_6` FOREIGN KEY (`shipId`) REFERENCES `ship` (`shipId`),
  ADD CONSTRAINT `product_ibfk_7` FOREIGN KEY (`pointId`) REFERENCES `point` (`pointId`);

--
-- Constraints for table `rate`
--
ALTER TABLE `rate`
  ADD CONSTRAINT `rate_ibfk_1` FOREIGN KEY (`rateId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rate_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `receiver`
--
ALTER TABLE `receiver`
  ADD CONSTRAINT `receiver_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`),
  ADD CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`promotionId`) REFERENCES `promotion` (`promotionId`),
  ADD CONSTRAINT `transactions_ibfk_4` FOREIGN KEY (`voucherId`) REFERENCES `voucher` (`voucherId`),
  ADD CONSTRAINT `transactions_ibfk_5` FOREIGN KEY (`receiverId`) REFERENCES `receiver` (`receiverId`),
  ADD CONSTRAINT `transactions_ibfk_7` FOREIGN KEY (`flashsaleId`) REFERENCES `flashsale` (`flashsaleId`),
  ADD CONSTRAINT `transactions_ibfk_8` FOREIGN KEY (`pointId`) REFERENCES `point` (`pointId`);

--
-- Constraints for table `youtube`
--
ALTER TABLE `youtube`
  ADD CONSTRAINT `youtube_ibfk_1` FOREIGN KEY (`ytId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
