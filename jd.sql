-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-10-16 17:51:04
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `jd`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `num` int(11) NOT NULL COMMENT '商品数量',
  `picture` text NOT NULL COMMENT '商品图片',
  `details` text NOT NULL COMMENT '商品详情',
  `type` text NOT NULL COMMENT '商品分类'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `picture`, `details`, `type`) VALUES
(100015, '（全新未拆封）索尼同款入耳式有线控耳机XB705S重低音带麦TYPEC高音质k歌游戏耳塞', 25, 998, '[ {\"src\":\"../img/shop_index_ej1.jpg\",\"alt\":\"details-0\" }, {\"src\":\"../img/shop_index_ej2.jpg\",\"alt\":\"details-1\" }, {\"src\":\"../img/shop_index_ej3.jpg\",\"alt\":\"details-2\" }, {\"src\":\"../img/shop_index_ej4.jpg\",\"alt\":\"details-3\" }, {\"src\":\"../img/shop_index_ej5.jpg\",\"alt\":\"details-4\" },{\"src\":\"../img/shop_index_ejsmall1.jpg\",\"alt\":\"details-5\" },{\"src\":\"../img/shop_index_ejsmall2.jpg\",\"alt\":\"details-6\" } ]', '<img src=\"https://img30.360buyimg.com/sku/jfs/t1/179023/7/10674/423979/60d189a8Eeae98274/812299335479119f.jpgg\">', '[ {\"color\":\"黑色\",\"type\": [\"有线\",\"无线\",\"运动款\"],\"price\": [25, 95, 135] }, {\"color\":\"白色\",\"type\": [\"有线\",\"无线\",\"运动款\"],\"price\": [25, 95, 135] }]'),
(100014, '荣耀50 Pro 1亿像素超清影像 5G 6.72英寸超曲屏 100W超级快充 前置视频双摄 全网通版8GB+256GB 墨玉青', 3619, 998, '[ {\"src\":\"../img/shop_index_sj1.jpg\",\"alt\":\"details-0\" }, {\"src\":\"../img/shop_index_sj2.jpg\",\"alt\":\"details-1\" }, {\"src\":\"../img/shop_index_sj3.jpg\",\"alt\":\"details-2\" }, {\"src\":\"../img/shop_index_sj4.jpg\",\"alt\":\"details-3\" }, {\"src\":\"../img/shop_index_sj5.jpg\",\"alt\":\"details-4\" },{\"src\":\"../img/shop_index_sjsmall1.jpg\",\"alt\":\"details-5\" },{\"src\":\"../img/shop_index_sjsmall2.jpg\",\"alt\":\"details-6\" } ]', '<img src=\"	https://img30.360buyimg.com/sku/jfs/t1/175571/1/19348/547733/60ec05cdE4f27eac3/eb47a93655b518b7.jpg\">', '[ {\"color\":\"墨玉青\",\"type\": [\"16GB+256GB\",\"16GB+512GB\",\"8GB+256GB\"],\"price\": [4499, 7499, 3499] }, {\"color\":\"初雪水晶\",\"type\": [\"16GB+256GB\",\"16GB+512GB\",\"8GB+256GB\"],\"price\": [4499, 7499, 3499] }\r\n]'),
(100013, '手机散热器降温神器吃鸡游戏充电无线制冷小风扇主播不求人便捷式散热支架黑鲨苹果小米通用 【H15散热器充电款黑色', 45, 998, '[ {\"src\":\"../img/shop_index_fs1.jpg\",\"alt\":\"details-0\" }, {\"src\":\"../img/shop_index_fs2.jpg\",\"alt\":\"details-1\" }, {\"src\":\"../img/shop_index_fs3.jpg\",\"alt\":\"details-2\" }, {\"src\":\"../img/shop_index_fs4.jpg\",\"alt\":\"details-3\" }, {\"src\":\"../img/shop_index_fs5.jpg\",\"alt\":\"details-4\" },{\"src\":\"../img/shop_index_fssmall1.jpg\",\"alt\":\"details-5\" },{\"src\":\"../img/shop_index_fssmall2.jpg\",\"alt\":\"details-6\" } ]', '<img src=\"https://img30.360buyimg.com/sku/jfs/t1/197139/11/4282/540062/612164d3E6e556a09/522e336f0e0dbe90.jpg\">', '[ {\"color\":\"黑色\",\"type\": [\"【H15散热器插电款黑色】\",\"【H15散热器充电款黑色】\",\"【M1插电版基础款风冷散热器】\"],\"price\": [31, 41, 81] }, {\"color\":\"银色\",\"type\": [\"【H15散热器插电款银色】\",\"【H15散热器充电款银色】\",\"【M1插电版基础款风冷散热器】\"],\"price\": [31, 41, 81] } ]'),
(100011, '【二手95新】佳能80D/70D/60D单反相机套机高清数码翻转屏入门级旅游便携摄影家用90D 官方标配 佳能60D+18-55ISII', 1979, 998, '[ {\"src\":\"../img/shop_index_xj1.jpg\",\"alt\":\"details-0\" }, {\"src\":\"../img/shop_index_xj2.jpg\",\"alt\":\"details-1\" }, {\"src\":\"../img/shop_index_xj3.jpg\",\"alt\":\"details-2\" }, {\"src\":\"../img/shop_index_xj4.jpg\",\"alt\":\"details-3\" }, {\"src\":\"../img/shop_index_xj5.jpg\",\"alt\":\"details-4\" },{\"src\":\"../img/shop_index_xjsmall1.jpg\",\"alt\":\"details-5\" },{\"src\":\"../img/shop_index_xjsmall2.jpg\",\"alt\":\"details-6\" } ]', '<img src=\"https://img10.360buyimg.com/imgzone/jfs/t1/93541/22/18282/158510/5e916d52E5c777b19/233e80874dff2e8c.jpg\">', '[ {\"color\":\"官方标配\",\"type\": [\"佳能70D含腾龙18-200VC\",\"99新佳能60D单机身\",\"95新佳能90D套机含18-135 STM镜头\"],\"price\": [3999, 4999, 8999] }, {\"color\":\"尊贵套餐\",\"type\": [\"佳能70D含腾龙18-200VC\",\"99新佳能60D单机身\",\"95新佳能90D套机含18-135 STM镜头\"],\"price\": [3999, 4999, 8999] } ]'),
(100012, '【二手99新】英特尔i5i7高配GTX1060台式电脑主机全套LOL吃鸡电竞网咖游戏型家用组装机整机 配置四/i5/16G/GTX960 2G中效吃鸡 单主机', 3199, 998, '[ {\"src\":\"../img/shop_index_zj1.jpg\",\"alt\":\"details-0\" }, {\"src\":\"../img/shop_index_zj2.jpg\",\"alt\":\"details-1\" }, {\"src\":\"../img/shop_index_zj3.jpg\",\"alt\":\"details-2\" }, {\"src\":\"../img/shop_index_zj4.jpg\",\"alt\":\"details-3\" }, {\"src\":\"../img/shop_index_zj5.jpg\",\"alt\":\"details-4\" },{\"src\":\"../img/shop_index_zjsmall1.jpg\",\"alt\":\"details-5\" },{\"src\":\"../img/shop_index_zjsmall2.jpg\",\"alt\":\"details-6\" } ]', '<img src=\"https://img14.360buyimg.com/cms/jfs/t1/52320/40/14892/598058/61401b8fE879d68e5/e2158ee420cac272.jpg\">', '[ {\"color\":\"黑色\",\"type\": [\"配置一/四核/8G/网课商务办公款\",\"配置二/六核/16G/电商美工设计主机\",\"配置三/八核/16G/GTX750TI主流网游畅\"],\"price\": [3199, 4199, 8199] }, {\"color\":\"灰色\",\"type\": [\"配置一/四核/8G/网课商务办公款\",\"配置二/六核/16G/电商美工设计主机\",\"配置三/八核/16G/GTX750TI主流网游畅\"],\"price\": [3199, 4199, 8199] } ]');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(8) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `phone`, `email`) VALUES
(100001, '张三', '123', '13899997777', '13133559988@123.com'),
(100002, '李四', '123', '13899997777', '13133559988@123.com'),
(100003, '王哥', '123', '13133559988', '13133559988@123.com'),
(100004, '王六', '123', '13133559988', '13133559988@123.com'),
(100005, '222', '123', '13133559988', '13133559988@123.com'),
(100006, 'lisi', 'aA1@236', '13133559988', '13133559988@123.com'),
(100007, 'qwer', 'aA1@236', '13133559988', '13133559988@123.com'),
(100008, 'asdf', 'aA1@236', '13133559988', '13133559988@123.com');

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=100016;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100009;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
