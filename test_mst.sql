-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 07, 2022 at 06:30 PM
-- Server version: 10.5.10-MariaDB-log
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_mst`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `token` varchar(512) NOT NULL,
  `photo` varchar(512) DEFAULT NULL,
  `role` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `token`, `photo`, `role`, `created_at`, `updated_at`) VALUES
(1, 'wawa', '$2a$10$FSqXOigE4MSkhnXs3n7S3uUTyGYIdxYtrleRcPyBv..1Kkcw9Aj5C', 'adi.sa@fd.v', '$2a$10$FSqXOigE4MSkhnXs3n7S3uueGVtO.pLTc/4/ZgKk2uOwjcRhIlnfG', NULL, NULL, '2022-06-06 08:22:19', '2022-06-06 08:22:19'),
(14, 'gogon', '$2a$10$u4eMSMoEgtaaiuju8kHxK.ya7gFqng1uSsEod8bl17NoeATirtZKC', 'gogon@gmail.com', '$2a$10$u4eMSMoEgtaaiuju8kHxK.Lm4qgxwmEEvvBiFe0kyltLH46kcJgia', 'Adi_Alpha.png', 0, '2022-06-06 09:04:58', '2022-06-06 09:04:58'),
(23, 'abdullah', '$2a$10$mvllhkG2AxO1aJ9psBWfhuz1GeKEDF8KP//zFaR7k6QIpQzXFoEju', 'abdullah@gmail.com', 'active', 'Adi_Alpha.png', 1, '2022-06-06 10:08:54', '2022-06-06 10:08:54'),
(32, 'abd', '$2a$10$TGLhKi.PSde6Pe9JURF9SuJkW22tHvNrpmY55tR.1mHrESaULP4q.', 'abd@gmail.com', '$2a$10$TGLhKi.PSde6Pe9JURF9SuekeT9JUGbnE4YJGVzTtT3BLU0BFQuYO', 'Adi_Alpha.png', 0, '2022-06-06 10:23:14', '2022-06-06 10:23:14'),
(33, 'joni', '$2a$10$euOtmDXEMbbzh5Vg8/V/wuzY0WDGkq4vO8zSAXsnmqj1lIjwicF5G', 'joni@gmail.com', '$2a$10$euOtmDXEMbbzh5Vg8/V/wurUytanWqvfz6qjSwLzJsBLf9WSd/cii', 'Adi_Alpha.png', 0, '2022-06-06 13:20:33', '2022-06-06 13:20:33'),
(54, 'jono', '$2a$10$92BLjuzGIiJ5DTnUAU47auUQm9LlYmwSa/QwP.UBCYwCxHNJ0W5fG', 'jono@gmail.com', '$2a$10$92BLjuzGIiJ5DTnUAU47au74If8DDIcF4cvDkY6wX8p08Q0xKS.qO', 'Adi_Alpha.png', 0, '2022-06-06 14:06:43', '2022-06-06 14:06:43'),
(58, 'jone', '$2a$10$WS2A/myluAjm/psHmOwEZOdE6SBMQ8EvV1HTniZCFAEs5PCC7foaa', 'jone@gmail.com', '$2a$10$WS2A/myluAjm/psHmOwEZOKd84I79Mt1ahmin09pX80hT../JOPwu', 'Adi_Alpha.png', 0, '2022-06-06 14:09:40', '2022-06-06 14:09:40'),
(70, 'joney', '$2a$10$L5ZTLqeFPrXHlfF7CKMEcOtK2W6p8movov5oo/jXTtmHRZCCyZcre', 'joney@gmail.com', '$2a$10$L5ZTLqeFPrXHlfF7CKMEcOD/z0bry0CpK628n62Afzy70Zrh4UvTa', 'Adi_Alpha.png', 0, '2022-06-06 14:21:21', '2022-06-06 14:21:21'),
(73, 'jonz', '$2a$10$NMAxzXAZiLwZ0MqW/1x3ke.l9mL/A82Yu6nrFb5XJs/jYM10wxC3i', 'jonz@gmail.com', '$2a$10$NMAxzXAZiLwZ0MqW/1x3keSf4Lb.PFfKwuO5z0JATG8Ibm5w6fXXa', 'Adi_Alpha.png', 0, '2022-06-06 14:27:54', '2022-06-06 14:27:54'),
(79, 'jonzey', '$2a$10$hVos1T.Q.N5lpbYl3fiXfegXqnbuQRSM/Be8bnV/WFxcHCKv7kDAe', 'jonzey@gmail.com', 'active', 'Adi_Alpha.png', 0, '2022-06-06 15:51:00', '2022-06-06 15:51:00'),
(93, 'adi', '$2a$10$s2YBofikhDg.2woKA1tJx..qZqJSPTbCXnN2R.20Am/Vcu0yVQC9O', 'adi.sakti@live.com', 'active', 'cv_adisakti2-1654559224590.png', 0, '2022-06-06 22:57:23', '2022-06-06 22:57:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
