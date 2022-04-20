-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2021 at 04:06 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tour`
--

-- --------------------------------------------------------

--
-- Table structure for table `abouts`
--

CREATE TABLE `abouts` (
  `id` int(5) NOT NULL,
  `about` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `abouts`
--

INSERT INTO `abouts` (`id`, `about`) VALUES
(1, '<h1>About Us</h1>\r\n				<hr>\r\n\r\n				<p><b>Ketabkhana</b> is an online marketplace for books. Millions of brand new books, rare books, and out-of-print books are offered for sale through the Ketabkhana websites from thousands of booksellers around the whole country.  Readers can find bestsellers, collectors can find rare books, students can find new textbooks, and treasure hunters can find long-lost books.\r\n					<br>\r\n					<br>\r\n\r\n				Our mission is to help people find and buy any book from any bookseller and our business stretches around the county. The unique inventory of books for sale from booksellers includes the country’s and world’s finest antiquarian books dating back to the 15th century, countless out-of-print gems, millions of signed books, millions of used copies, a vast selection of college textbooks and new books too.\r\n				<br>\r\n				<br>\r\n\r\n	 \r\n\r\n				Ketabkhana remains a company with a passion for books. Booksellers love Ketabkhana for helping them to sell books to buyers around the globe – 24 hours a day, 365 days a year.  Buyers love Ketabkhana for helping them to find and purchase books from the vast online inventory.</p>\r\n				<br>\r\n\r\n				<h2>Why Buy from Ketabkhana?</h2>\r\n				<hr>\r\n\r\n				<ul type=\"disc\">\r\n					\r\n					<li>Here are a number of reasons why you might place your order with Ketabkhana.</li>\r\n\r\n					<li>Our reputation with our customers. You can read some reviews on the testimonial page.</li>\r\n\r\n					<li>Our awards and industry recognition is second to none.</li>\r\n\r\n					<li>The size of our warehouse and us in-stock titles.</li>\r\n\r\n					<li>Our Call Centre is ready to take your calls and answer emails.</li>\r\n\r\n					<li>We are 100% Bangladeshi owned and operated.</li>\r\n\r\n				</ul>\r\n				<br>\r\n\r\n				<h2>How do Ketabkhana’s competitors compare?</h2>\r\n				<hr>\r\n\r\n				<p>You can choose one or all of the above reasons, it is up to you, either way, we would love to take your order and impress you with our service.</p>\r\n				<br>\r\n				<br>');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(50) NOT NULL,
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `type` varchar(15) NOT NULL DEFAULT 'Admin'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `firstname`, `lastname`, `image`, `gender`, `email`, `username`, `password`, `type`) VALUES
(1, 'Shatin', 'Nobobi', 'admin1.jpg', 'male', 'shatin@gmail.com', 'admin1', '1111', 'Admin'),
(2, 'Mufrad', 'Mustavi', 'admin2.jpg', 'male', 'mufrad@gmail.com', 'admin2', '2222', 'Admin'),
(3, 'Jubaer', 'Abu', 'admin3.jpg', 'male', 'jubaer@gmail.com', 'admin3', '3333', 'Admin'),
(16, 'Nobobi', 'Hasan', 'admin5.jpg', 'male', 'a5@gmail.com', 'admin5', '5555', 'Admin'),
(17, 'Khayrul', 'Hasan', 'admin6.jpg', 'male', 'a6@gmail.com', 'admin6', '6666', 'Admin'),
(18, 'Selina', 'Akter', 'admin7.jpg', 'female', 'a7@gmail.com', 'admin7', '7777', 'Admin'),
(20, 'aaaa', 'bbb', 'admin9.jpg', 'male', 'a9@gmail.com', 'admin9', '9999', 'Admin'),
(21, 'aaaa', 'vvv', 'admin8.jpg', 'male', 'a8@gmail.com', 'admin8', '8888', 'Admin'),
(22, NULL, NULL, 'guest.jpg', NULL, 'shatin.hasan73@gmail.com', 'shatin hasan', NULL, 'Admin'),
(25, NULL, NULL, 'guest.jpg', NULL, 'nobobi.shatin@gmail.com', 'Nobobi Shatin', NULL, 'Admin'),
(27, 'Arosh', 'Hasan', 'admin4.jpg', 'male', 'a4@gmail.com', 'admin4', '4444', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `ads`
--

CREATE TABLE `ads` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ads`
--

INSERT INTO `ads` (`id`, `image`) VALUES
(2, 'employeeAdsCoke.png.png'),
(3, 'employeeAdsfairNlovely.png.png'),
(4, 'employeeAdsevaly.jpeg.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `airbooks`
--

CREATE TABLE `airbooks` (
  `id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `air_id` int(5) NOT NULL,
  `fromloc` varchar(20) NOT NULL,
  `toloc` varchar(20) NOT NULL,
  `fromdate` date NOT NULL,
  `todate` date NOT NULL,
  `req` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `airbooks`
--

INSERT INTO `airbooks` (`id`, `user_id`, `air_id`, `fromloc`, `toloc`, `fromdate`, `todate`, `req`) VALUES
(1, 1, 1, 'Chittagong', 'Dhaka', '2021-06-25', '2021-06-26', 'Pending'),
(2, 2, 2, 'Khulna', 'Barisal', '2021-06-29', '2021-06-29', 'Pending'),
(3, 3, 3, 'Chittagong', 'Rajshahi', '2021-06-26', '2021-06-26', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `airs`
--

CREATE TABLE `airs` (
  `id` int(5) NOT NULL,
  `title` varchar(100) NOT NULL,
  `model` varchar(50) NOT NULL,
  `type` varchar(10) NOT NULL,
  `fare` decimal(8,0) NOT NULL,
  `availability` varchar(15) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `airs`
--

INSERT INTO `airs` (`id`, `title`, `model`, `type`, `fare`, `availability`, `image`) VALUES
(4, 'Emirates Airlines', 'Emirates A350', 'airbus', '500000', 'Available', 'flightEmirates Air.jpg'),
(5, 'Singapore Airlines', 'Singapore 776', 'airbus', '450000', 'Available', 'flightSingapore Airlines.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `carbooks`
--

CREATE TABLE `carbooks` (
  `id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `car_id` int(5) NOT NULL,
  `fromloc` varchar(20) NOT NULL,
  `toloc` varchar(20) NOT NULL,
  `fromdate` date NOT NULL,
  `todate` date NOT NULL,
  `req` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `carbooks`
--

INSERT INTO `carbooks` (`id`, `user_id`, `car_id`, `fromloc`, `toloc`, `fromdate`, `todate`, `req`) VALUES
(1, 1, 1, 'Dhaka', 'Chittagong', '2021-06-29', '2021-06-29', 'Pending'),
(2, 2, 2, 'Khulna', 'Barisal', '2021-06-28', '2021-06-28', 'Pending'),
(3, 3, 3, 'Bogura', 'Dhaka', '2021-07-01', '2021-07-02', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(5) NOT NULL,
  `title` varchar(100) NOT NULL,
  `model` varchar(50) NOT NULL,
  `driver` varchar(50) NOT NULL,
  `type` varchar(10) NOT NULL,
  `fare` decimal(5,0) NOT NULL,
  `availability` varchar(15) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `title`, `model`, `driver`, `type`, `fare`, `availability`, `image`) VALUES
(4, 'BMW  X6', 'BMW White X6', 'Driver1', 'Luxury', '15000', 'Available', 'carBMW  X6.jpg'),
(5, 'Toyota Premio', 'Toyota Premio Silver', 'Driver2', 'Standard', '10000', 'Available', 'carToyota Premio.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Employee',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `firstname`, `lastname`, `gender`, `email`, `username`, `password`, `type`, `status`) VALUES
(1, 'abu', 'jub', 'male', 'e1@gmail.com', 'emp1', '1111', 'Employee', 'Active'),
(2, 'mufrad', 'mustavi', 'male', 'e2@gmail.com', 'emp2', '2222', 'Employee', 'Active'),
(3, 'Nobobi', 'Hasan', 'male', 'e3@gmail.com', 'emp3', '3333', 'Employee', 'Active'),
(4, 'Tanvir', 'Siam', 'male', 'e4@gmail.com', 'emp4', '4444', 'Employee', 'Deactive'),
(5, 'Arosh', 'Hasan', 'male', 'e5@gmail.com', 'emp5', '5555', 'Employee', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `facilities`
--

CREATE TABLE `facilities` (
  `id` int(5) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(50) NOT NULL,
  `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `facilities`
--

INSERT INTO `facilities` (`id`, `title`, `description`, `image`, `created`) VALUES
(7, '24-Hour room service', '24-Hour room service availables', 'hotel24-Hour room service.jpg', '2021-07-02 00:15:30.614626'),
(8, 'Free wireless Internet access', 'Free wireless internet access available in room restro area', 'hotelFree wireless Internet access.png', '2021-07-02 00:16:30.279965'),
(9, 'Laundry Service', 'Free Laundry service available for a customer who book queen and king size room', 'hotelLaundry Service.jpg', '2021-07-02 00:16:43.967254'),
(11, 'Babysitting on request', 'Babysitting on request', 'hotelBabysitting on request.jpg', '2021-07-02 00:17:11.744662'),
(12, '24-Hour doctor on call', '24-Hour doctor on call', 'hotel24-Hour doctor on call.jpg', '2021-07-02 00:48:32.816902');

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` int(5) NOT NULL,
  `que` varchar(500) NOT NULL,
  `ans` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `que`, `ans`) VALUES
(1, 'Why do you need travel insurance?', 'A travel medical insurance plan provides emergency health and medical coverage in the event of an accident, injury or sickness beyond your control. Travel insurance can offset the high medical costs associated with being ill while travelling outside of your province. Likewise, trip cancellation and interruption insurance can offset financial loss resulting from your pre-paid, non-refundable trip costs if you have to cancel your travel plans for an insured reason. '),
(2, 'Is Siam Noob?', 'Yes. He is super Noob');

-- --------------------------------------------------------

--
-- Table structure for table `galleries`
--

CREATE TABLE `galleries` (
  `id` int(11) NOT NULL,
  `place` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `galleries`
--

INSERT INTO `galleries` (`id`, `place`, `image`) VALUES
(1, 'khulna', 'employeeGallery1.jpg'),
(3, 'coxs bazar', 'employeeGallerycoxs bazar.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `guidelines`
--

CREATE TABLE `guidelines` (
  `id` int(5) NOT NULL,
  `guideline` varchar(20000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `guidelines`
--

INSERT INTO `guidelines` (`id`, `guideline`) VALUES
(1, '<h1>Travel Guidelines</h1>\r\n				<hr>\r\n\r\n				<b>Safety and security </b><br>\r\n<b>Political violence</b><hr>\r\nBangladesh has a long history of political violence. If you’re currently in Bangladesh, or intend to travel there, even if you’re a regular visitor with family or business links you should monitor the media and regularly consult travel advice. English language news broadcasts can be seen on BTV at 10am, 5pm and 10pm. There are also several online English language newspapers and agencies.<br><br>\r\n\r\nIn Bangladesh protests and demonstrations can quickly turn violent and lead to clashes with law enforcement agencies. In cases of political unrest, incidents of arson, violence and vandalism can suddenly break out across the country, mainly in towns and cities.<br><br>\r\n\r\nIf you see a demonstration developing, or are in a situation in which you feel unsafe, move away to a place of safety. Stay away from large gatherings, and avoid political offices and rallies. If you’re travelling during a hartal (strike) avoid demonstrations and protests as they may quickly turn violent. There could be attacks on property and public transport.<br><br>\r\n\r\n<b>Crime</b><hr>\r\nDhaka police have highlighted the increasing number of criminal gangs operating in the city and reminded people to be aware of potential threats including robbery and violent crime.<br><br>\r\n\r\nArmed robbery, pick pocketing, and purse snatching can occur. Don’t carry large amounts of money with you or wear jewellery in the street. Thieves often work in pairs on motorcycles or motorised rickshaws known as ‘CNGs’. Passengers using rickshaws, or travelling alone in taxis are particularly vulnerable, especially at night. Avoid using public transport if you’re on your own. Cycle rickshaws aren’t safe; they offer little protection for passengers in the event of a crash.<br><br>\r\n\r\nThere have been reports of officials abusing their authority. Make sure you’re accompanied if you visit a police station.<br><br>\r\n\r\nThere have been reports of theft and harassment at Dhaka and Sylhet airports. Beware of touts offering to carry your bags. Arrange transfers in advance. Taxis, including those serving the airport, often overcharge and drivers have been known to rob passengers. Passport theft at Dhaka and Sylhet airports is a particular concern. Be vigilant and make sure your documents and any valuables are kept secure at all times.<br><br>\r\n\r\n<b>Abductions</b><hr>\r\nAbduction of children and businessmen for ransom is not uncommon. Although this does not appear to be particularly directed at foreigners, you should be aware that the long-standing policy of the British government is not to make substantive concessions to hostage takers. The British government considers that paying ransoms and releasing prisoners increase the risk of further hostage taking.<br><br>\r\n\r\n<b>Local travel</b><hr>\r\nConsult a reliable local contact before going into unfamiliar areas or areas where there is a history of trouble.<br><br>\r\n\r\n<b>Chittagong Hill Tracts</b><hr>\r\nThe FCDO advise against all but essential travel to the Chittagong Hill Tracts, which comprise the districts of Rangamati, Khagrachari and Bandarban. This area doesn’t include Chittagong City, or other parts of Chittagong Division.<br><br>\r\n\r\nSecurity in the Chittagong Hill Tracts continues to be a cause for concern. There are regular reports of violence and other criminal activities, particularly in the more remote areas. If you propose to visit the Chittagong Hill Tracts you must give the Bangladesh authorities 10 days’ notice of your travel plans.<br><br>\r\n\r\nFor further information, contact:<br><br>\r\n\r\nChittagong Divisional Commissioner’s Office (tel: 031 615247)<br><br>\r\nChittagong Deputy Commissioner’s Office (tel: 031 619996)<br><br>\r\n\r\n<b>Myanmar border</b><hr>\r\nAs a result of ongoing violence in Myanmar (Burma) since August 2017, hundreds of thousands of Rohingya refugees have arrived in the south-east of Bangladesh, close to the border with Myanmar. They’re concentrated in the sub-districts of Ukhia and Teknaf in the southern part of Cox’s Bazar district. The Bangladesh authorities regulate access to the areas where the Rohingya are accommodated.<br><br>\r\n\r\nThere have been reports of insecurity, protests and some violence in these areas.<br><br>\r\n\r\nTeknaf currently sees the highest level of drug related gang violence across Bangladesh, with frequent murders and shooting incidents between the gangs and law enforcement agencies. Drug seizures are common and Yaba (a mixture of caffeine and methamphetamine) is often found in large quantities. Kidnapping and an increase in violence have also been noted in these areas, and specifically in the camps in the Teknaf and Nhilla area since August 2019. There is no indication that foreign nationals are being targeted.<br><br>\r\n\r\nYou should exercise caution and consult the local authorities about the latest situation before visiting Ukhia and Teknaf. You may need to meet access requirements. We encourage all humanitarian assistance to be coordinated through recognised humanitarian agencies registered with the Bangladesh authorities.<br><br>\r\n\r\n<b>Indian border</b><hr>\r\nAs part of COVID-19 measures the government has closed the border with India.<br><br>\r\n\r\nTake particular care near the border areas. There are regular reports of individuals being killed for illegally crossing the border with India. There are occasional skirmishes between the Indian and Bangladeshi border guards, including exchanges of gunfire.<br><br>\r\n\r\n<b>Road travel</b><hr>\r\nThe Government has said that people should only travel if they have an urgent need.<br><br>\r\n\r\nIf you intend to drive, you should get an International Driving Permit.<br><br>\r\n\r\nBangladesh has a high rate of road accidents. Take great care when travelling by road, including by public transport and when crossing streets. Local driving standards are poor with a large number of drivers not holding the correct licence or road worthiness certificates for their vehicles. Mandatory vehicle safety checks are often ignored. A large number of rickshaws and Compressed Natural Gas (CNG) rickshaws also occupy the roads and will ignore many of the traffic laws.<br><br>\r\n\r\nMaintenance of buses is extremely poor, as are driving standards. Road traffic collisions involving buses are a regular occurrence, with some resulting in fatalities. Crime including rape and sexual assaults have been reported on buses, sometimes committed by the vehicle crew. Travelling at night and alone should be avoided at all times.<br><br>\r\n\r\nPrivate hire vehicles are available, however the police have indicated in local media that they are often unable to verify a driver’s details as driving records are often inaccurate.<br><br>\r\n\r\nDriving at night is especially dangerous as many vehicles are unlit, or travel on full-beam headlights. There is also a risk of banditry if you travel between towns after dark, by train, bus or ferry. You should avoid travelling alone at night.<br><br>\r\n\r\n<b>Air travel</b><hr>\r\nInternational commercial passenger flights are operating with restrictions. Domestic air travel is operating but with a limited service. You should check with airlines to confirm what flight options are available. Flight schedules are subject to change at short notice and you should monitor travel arrangements closely.<br><br>\r\n\r\nBangladesh operates a number of quarantine regimes depending on where passengers are travelling from. Check the ‘Entry requirements’ section for Bangladesh’s current entry restrictions and requirements.<br><br>\r\n\r\nThe Bangladesh authorities will retain passports of any passengers in quarantine and will return them at the end of the quarantine period. In all circumstances, people staying in a government approved hotel, government facility or hospital will need to cover the costs of those stays.<br><br>\r\n\r\nThe FCDO cannot offer advice on the safety of individual airlines. However, the International Air Transport Association publishes a list of registered airlines that have been audited and found to meet a number of operational safety standards and recommended practices. This list isn’t exhaustive and the absence of an airline from this list doesn’t necessarily mean that it’s unsafe.<br><br>\r\n\r\nThe UK Department for Transport (DfT) has carried out assessments of security at Dhaka International Airport and continues to make sure all international aviation security requirements are met. Read more about the DfT assessment.<br><br>\r\n\r\nIn 2012 the International Civil Aviation Organisation carried out an audit of the level of implementation of the critical elements of safety oversight in Bangladesh.<br><br>\r\n\r\nOn 24 February 2019 an attempted hijacking took place of a Biman Bangladesh Airlines flight from Dhaka to Dubai via Chittagong. The Bangladesh Civil Aviation Ministry have completed their investigation into the incident. Additional security measures are in place.<br><br>\r\n\r\nYou can find a list of recent incidents and accidents on the website of the Aviation Safety network.<br><br>\r\n\r\n<b>Rail travel</b><hr>\r\nAs part of additional COVID-19 measures, rail services are operating with limited passenger capacity.<br><br>\r\n\r\nThe rail network is extensive but old and generally considered slow. There are frequent derailments and other incidents, which result in injuries and loss of life. Fifteen people were killed and many more injured on 12 November 2019 when two intercity trains collided at Mandabhag rail station on the Dhaka-Chattogram route. The local press has highlighted a high number of bridges and culverts that are in a dangerous condition following flooding. Crime has been regularly reported on trains with offences ranging from theft to sexual assaults.<br><br>\r\n\r\nOn some trains, first class compartments may be lockable. Make sure the compartment door is locked if you’re travelling overnight. For further information see the Bangladesh railways website.<br><br>\r\n\r\n<b>Sea and river travel</b><hr>\r\nAs part of additional COVID-19 measures, water transport services are operating with limited passenger capacity.<br><br>\r\n\r\nRiver and sea ferries are often dangerously overcrowded, particularly when large numbers of people travel over religious holidays and other festivals. Safety concerns regarding both sea and river vessels exist following a number of vessels sinking with loss of life. Some vessels do not have genuine safety certificates. Vessels are often found without appropriate safety and survival equipment and many do not carry communication equipment in case of an emergency. Local crime gangs are known to target vessels in acts of piracy.<br><br>');

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `location` varchar(200) NOT NULL,
  `address` varchar(100) NOT NULL,
  `image` varchar(50) NOT NULL,
  `phone` int(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `type` varchar(15) NOT NULL DEFAULT 'Hotel',
  `req` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`id`, `name`, `location`, `address`, `image`, `phone`, `email`, `password`, `type`, `req`) VALUES
(7, 'Hotel The Cox Today', 'Cox\'s Bazar', 'Plot-7, Road-02\r\nHotel Motel Zone, Kolatoly Road\r\nCox\'s Bazar', 'hotelregHotel The Cox Today.jpg', 1521408973, 'h1@gmail.com', '1111', 'Hotel', 'Approved'),
(8, 'Hotel Sea Crown', 'Cox\'s Bazar', 'Marine Drive, Kola Toli New Beach, Cox’s Bazar', 'hotelregHotel Sea Crown.jpg', 1521408973, 'h2@gmail.com', '2222', 'Hotel', 'Approved'),
(9, 'Sayeman Beach Resort', 'Cox\'s Bazar', 'Marine Drive, Kola Toli New Beach, Cox’s Bazar', 'hotelregSayeman Beach Resort.jpg', 1521408973, 'h3@gmail.com', '3333', 'Hotel', 'Pending'),
(10, 'Hotel Green Castle', 'Rangamati', 'Hotel Green Castle', 'hotelregHotel Green Castle.jpg', 1521408973, 'h4@gmail.com', '4444', 'Hotel', 'Approved'),
(11, 'Hotel Noorjahan Grand', 'Sylhet', 'Address: Waves 1, Ritz Tower, Dargah Gate, Sylhet, Bangladesh', 'hotelregHotel Noorjahan Grand.jpg', 1521408973, 'h5@gmail.com', '5555', 'Hotel', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `incomes`
--

CREATE TABLE `incomes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `month` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revenue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cost` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `incomes`
--

INSERT INTO `incomes` (`id`, `month`, `revenue`, `cost`, `profit`) VALUES
(1, '2021-07', '2380', '200', '2180'),
(2, '2021-08', '5670', '2230', '3440'),
(3, '2021-09', '3560', '4500', '-940');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2021_07_01_112557_create_admins_table', 1),
(2, '2021_07_01_152346_create_admins_table', 2),
(3, '2021_07_01_154046_create_admins_table', 3),
(4, '2021_07_01_154704_create_admins_table', 4),
(5, '2021_07_01_155633_create_employees_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `packagebooks`
--

CREATE TABLE `packagebooks` (
  `id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `package_id` int(5) NOT NULL,
  `place` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  `status` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `packagebooks`
--

INSERT INTO `packagebooks` (`id`, `user_id`, `package_id`, `place`, `image`, `status`) VALUES
(4, 1, 3, 'Sylhet', 'employeePackage.jpg', 'Upcoming'),
(5, 2, 1, 'Rangamati', 'employeePackage1.jpg', 'Upcoming'),
(6, 4, 1, 'Rangamati', 'employeePackage1.jpg', 'Upcoming'),
(7, 3, 3, 'Sylhet', 'employeePackage.jpg', 'Upcoming');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int(5) NOT NULL,
  `place` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `duration` varchar(100) NOT NULL,
  `transport` varchar(5) NOT NULL,
  `hotel` varchar(20) NOT NULL,
  `cost` decimal(5,0) NOT NULL,
  `status` varchar(15) NOT NULL,
  `req` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `place`, `location`, `image`, `description`, `duration`, `transport`, `hotel`, `cost`, `status`, `req`) VALUES
(1, 'Rangamati', 'Rangamati, CTG', 'employeePackage1.jpg', 'Awesome place', '5 Days', 'Yes', 'Yes', '5500', 'Completed', 'Approved'),
(2, 'Tanguar Haor', 'Sylhet', 'employeePackage2.jpg', 'Amazing tourist spot', '2 night 3 days', 'Yes', 'Yes', '3500', 'Upcoming', 'Pending'),
(3, 'Jaflong, Sylhet', 'Sylhet', 'employeePackage.jpg', 'Amazing tourist spot', '2 night 3 days', 'yes', 'yes', '7400', 'Upcoming', 'Approved');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `places`
--

CREATE TABLE `places` (
  `id` int(5) NOT NULL,
  `place` varchar(50) NOT NULL,
  `district` varchar(20) NOT NULL,
  `image` varchar(50) NOT NULL,
  `req` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `places`
--

INSERT INTO `places` (`id`, `place`, `district`, `image`, `req`) VALUES
(1, 'Nilgiri', 'Bandarban', 'employeePlaceNilgiri.jpg', 'Pending'),
(2, 'coxs bazar', 'Cox\'s Bazar', 'employeePlacecoxs bazar.jpg', 'Approved'),
(3, 'Sundarban', 'Khulna', 'employeePlaceSundarban.jpg', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `policies`
--

CREATE TABLE `policies` (
  `id` int(5) NOT NULL,
  `policy` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `policies`
--

INSERT INTO `policies` (`id`, `policy`) VALUES
(1, '<h1>Privacy Policy</h1>\r\n				<hr>\r\n				<br>\r\n\r\n				<p>\r\n					Journey Travel & Tours, is committed to maintaining the privacy of personal information that you provide to us when using the Journey Travel & Tours web site. This Privacy Policy describes how we treat personal information received about you when you visit www.journeytours.com. We may make content or services from other web sites including our co-branded web sites available to you from links located on https://www.journeytours.com. These other web sites are not subject to this Privacy Policy. We recommend that you review the privacy policy at each such web site to determine how that site protects your privacy.\r\n				</p>\r\n				<br>\r\n\r\n				<h2>Privacy Policy Promise</h2>\r\n				<br>\r\n\r\n				<p>\r\n					While information is the cornerstone of our ability to provide superior service, our most important asset is our clients’ trust. Keeping client information secure, and using it only as our clients would want us to, is a top priority for all of us at Journey Travel & Tours. Here then, is our promise to our individual customers:\r\n				</p>\r\n\r\n				<ul>\r\n					<li>\r\n						We will safeguard, according to strict standards of security and confidentiality, any information our customers share with us.\r\n					</li>\r\n					<li>\r\n						We will limit the collection and use of customer information to the minimum we require to deliver superior service to our customers, which includes advising our customers about our products, services and other opportunities, and to administer our business.\r\n					</li>\r\n					<li>\r\n						We will permit only authorized employees, who are trained in the proper handling of customer information, to have access to that information. Employees who violate our Privacy Promise will be subject to our normal disciplinary process.\r\n					</li>\r\n					<li>\r\n						We will not reveal customer information to any external organization unless we have previously informed the customer in disclosures or agreements, or are required by law.\r\n					</li>\r\n					<li>\r\n						We will always maintain control over the confidentiality of our customer information. We may, however, share customer information with reputable companies when a customer has expressed an interest in their service or product. Please note that this Privacy Policy does not apply to these other companys use of customer information.\r\n					</li>\r\n					<li>\r\n						Whenever we hire other organizations to provide support services, we will require them to conform to our privacy standards and to allow us to audit them for compliance.\r\n					</li>\r\n					<li>\r\n						We will attempt to keep customer files complete, up-to-date, and accurate. We will tell our customers how and where to conveniently access their information (except when we’re prohibited by law) and how to notify us about errors which we will promptly correct.\r\n					</li>\r\n				</ul>\r\n				<br>\r\n				<br>\r\n\r\n				<h2>Information We Collect</h2>\r\n				<br>\r\n				\r\n				<p>\r\n					<b>General:</b>When you register, and at other times, we may collect personally identifiable information from you that may include your name, address, telephone number, e-mail address, and facts about your computer. We do not, however, knowingly collect personal information from children under the age of thirteen. In addition, if a user is under 18, unless consent is obtained from your parent/guardian, you are not allowed to provide us with personal information.\r\n					<br>\r\n					<br>\r\n					<b>Web Site Usage Information:</b>We automatically collect IP addresses and Web site usage information from you when you visit our Web site. This information helps us evaluate how our visitors and customers use and navigate our Web site on an aggregate basis, including the number and frequency of visitors and customers to each Web page, and the length of their visits.\r\n				</p>\r\n				<br>\r\n				<br>\r\n\r\n				<h2>Cookies</h2>\r\n				<br>\r\n\r\n				<p>\r\n					We employ cookie technology to help visitors and customers move faster through our site. When you sign on to our Web site or take advantage of several key features, we may pass cookies to your computer. A cookie is a string of information that is sent by a Web site and stored on your hard drive or temporarily in your computer’s memory.\r\n				</p>\r\n				<br>\r\n				<br>\r\n\r\n				<h2>Security</h2>\r\n				<br>\r\n\r\n				<p>\r\n					The personally identifiable information we collect about you is stored in limited access servers. We will maintain safeguards to protect the security of these servers and your personally identifiable information.\r\n				</p>\r\n				<br>\r\n				<br>\r\n\r\n				<h2>Policy Modifications</h2>\r\n				<br>\r\n\r\n				<p>\r\n					We may change this Privacy Policy from time to time. We will post any changes here, so be sure to check back periodically. However, please be assured that if the Privacy Policy changes in the future, we will not use the personal information you have submitted to us under this Privacy Policy in a manner that is materially inconsistent with this Privacy Policy, without your prior consent.\r\n				</p>\r\n				<br>\r\n				<br>');

-- --------------------------------------------------------

--
-- Table structure for table `promos`
--

CREATE TABLE `promos` (
  `id` int(5) NOT NULL,
  `image` varchar(50) NOT NULL,
  `message` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `promos`
--

INSERT INTO `promos` (`id`, `image`, `message`) VALUES
(4, 'employeePromos.png', '50% off on all flight'),
(5, 'employeePromos.jpg', 'get a flat 10% cashback with bkash');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(5) NOT NULL,
  `service_id` int(5) NOT NULL,
  `service_type` varchar(10) NOT NULL,
  `company` varchar(30) NOT NULL,
  `user_id` int(5) NOT NULL,
  `rating` varchar(5) NOT NULL,
  `msg` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `service_id`, `service_type`, `company`, `user_id`, `rating`, `msg`) VALUES
(1, 5, 'Car', 'KkompANY', 3, '***', 'great service'),
(2, 6, 'Flight', 'ccompany', 2, '*', 'average service'),
(3, 7, 'Hotel', 'Hotel The Cox Today', 2, '****', 'It was good enough'),
(4, 7, 'Hotel', 'Hotel The Cox Today', 3, '*****', 'best best best');

-- --------------------------------------------------------

--
-- Table structure for table `roombooks`
--

CREATE TABLE `roombooks` (
  `id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `room_id` int(5) NOT NULL,
  `fromdate` date NOT NULL,
  `todate` date NOT NULL,
  `req` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roombooks`
--

INSERT INTO `roombooks` (`id`, `user_id`, `room_id`, `fromdate`, `todate`, `req`) VALUES
(1, 1, 2, '2021-06-25', '2021-06-29', 'Approved'),
(2, 2, 3, '2021-06-26', '2021-06-27', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(5) NOT NULL,
  `hotel_id` int(5) DEFAULT NULL,
  `name` varchar(200) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(50) NOT NULL,
  `price` decimal(5,0) NOT NULL,
  `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `availability` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `hotel_id`, `name`, `description`, `image`, `price`, `created`, `availability`) VALUES
(2, 7, 'Single Room for one person', 'A single room for one person and contains a single bed and will usually be quite small.', 'hotelSingle Room for one person.jfif', '2400', '2021-07-02 15:00:51.681117', 'Available'),
(3, 7, 'Double Room', 'A double room is a room intended for two people,usually a couple,to stay in. One person occupying a double room has to pay a suplement.', 'hotelDouble Room.jfif', '5000', '2021-07-02 15:01:10.829732', 'Available'),
(10, 7, 'Triple Room', 'A triple room is a hotel room that is made to comfortably accomodate three people. The triple room, simply called a triple at times, may be configured with different bed sizes to ensure three hotel guests can be accomodated comfortably.', 'hotelTriple Room.jpg', '7000', '2021-07-02 15:01:30.372565', 'Available'),
(11, 7, 'Queen Room', 'A room with a queen-sized bed. It may be occupied by one or more people(Size: 153 x 203 cm).', 'hotelQueen Room.jpg', '9000', '2021-07-02 15:01:53.759809', 'Available');

-- --------------------------------------------------------

--
-- Table structure for table `salaries`
--

CREATE TABLE `salaries` (
  `id` int(5) NOT NULL,
  `employee_id` int(5) NOT NULL,
  `username` varchar(20) NOT NULL,
  `salary` decimal(5,0) NOT NULL,
  `bonus` decimal(5,0) NOT NULL,
  `req` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salaries`
--

INSERT INTO `salaries` (`id`, `employee_id`, `username`, `salary`, `bonus`, `req`) VALUES
(1, 1, 'emp1', '25000', '5000', 'Pending'),
(2, 2, 'emp2', '6000', '2000', 'Pending'),
(3, 3, 'emp3', '50000', '5000', 'Approved'),
(4, 3, 'emp3', '45000', '2500', 'Approved');

-- --------------------------------------------------------

--
-- Table structure for table `supports`
--

CREATE TABLE `supports` (
  `id` int(5) NOT NULL,
  `username` varchar(20) NOT NULL,
  `phone` int(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supports`
--

INSERT INTO `supports` (`id`, `username`, `phone`, `email`, `message`) VALUES
(1, 'emp1', 1722023445, 'mufrad12@gmail.comm', 'I need help'),
(2, 'Hotel The Cox Today', 1757314931, 'h1@gmail.com', 'How do i cancel my hotel?');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `receiver_id` int(11) NOT NULL,
  `receiver` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `date`, `receiver_id`, `receiver`, `username`, `description`, `amount`) VALUES
(1, '2021-07-01 17:30:13.000000', 1, 'BMW', 'JUBAER', 'payment', '500'),
(2, '2021-07-01 17:39:51.000000', 2, 'Hotel The Cox Today', 'amixubaer', 'payment of hotel', '2222'),
(3, '2021-07-01 04:29:10.000000', 5, 'Car', 'user1', 'Travel for 3 days', '2500'),
(4, '2021-07-02 08:08:14.000000', 7, 'Hotel', 'user1', '2 Days for room', '7000'),
(5, '2021-07-02 09:09:21.000000', 6, 'Flight', 'user1', 'Flight Book', '70000');

-- --------------------------------------------------------

--
-- Table structure for table `transports`
--

CREATE TABLE `transports` (
  `id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` int(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `type` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `req` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transports`
--

INSERT INTO `transports` (`id`, `name`, `phone`, `email`, `type`, `password`, `req`) VALUES
(5, 'c1', 1722023445, 'c1@gmail.com', 'Car', 'c111', 'Pending'),
(6, 'f1', 1722023445, 'f1@gmail.com', 'Flight', 'f111', 'Approved'),
(7, 'c2', 1521408973, 'c2@gmail.com', 'Car', 'c2222', 'Approved'),
(11, 'f2', 1521408973, 'f2@gmail.com', 'Flight', 'f2222', 'Pending'),
(16, 'Hotel Sea Crown', 1521408973, 'hasdf2@gmail.com', 'Car', '2222', 'Pending'),
(17, 'f3', 1521408973, 'f3@gmail.com', 'Flight', '3333', 'Approved'),
(18, 'c3', 1521408973, 'c3@gmail.com', 'Car', '3333', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` int(15) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `type` varchar(15) NOT NULL DEFAULT 'User',
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `gender`, `email`, `phone`, `username`, `password`, `type`, `status`) VALUES
(1, 'Nobobi', 'Shatin', 'male', 'u1@gmail.com', 1521408973, 'user1', '1111', 'User', 'Active'),
(2, 'Mufrad', 'Mustavi', 'male', 'mufrad@gmail.com', 19434575, 'user2', '2222', 'User', 'Active'),
(3, 'a', 'a', 'male', 'a@gmail.com', 172202355, 'user3', '2222', 'User', 'Active'),
(4, 'saf', 'sdfsaf', 'male', 'u2@gmail.com', 1521408973, 'user4', '4444', 'User', 'Deactive');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `abouts`
--
ALTER TABLE `abouts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `airbooks`
--
ALTER TABLE `airbooks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `airs`
--
ALTER TABLE `airs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `carbooks`
--
ALTER TABLE `carbooks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `facilities`
--
ALTER TABLE `facilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `galleries`
--
ALTER TABLE `galleries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `guidelines`
--
ALTER TABLE `guidelines`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `incomes`
--
ALTER TABLE `incomes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packagebooks`
--
ALTER TABLE `packagebooks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `policies`
--
ALTER TABLE `policies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `promos`
--
ALTER TABLE `promos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roombooks`
--
ALTER TABLE `roombooks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `salaries`
--
ALTER TABLE `salaries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supports`
--
ALTER TABLE `supports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transports`
--
ALTER TABLE `transports`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `name` (`name`);

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
-- AUTO_INCREMENT for table `abouts`
--
ALTER TABLE `abouts`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `airbooks`
--
ALTER TABLE `airbooks`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `airs`
--
ALTER TABLE `airs`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `carbooks`
--
ALTER TABLE `carbooks`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `facilities`
--
ALTER TABLE `facilities`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `guidelines`
--
ALTER TABLE `guidelines`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `incomes`
--
ALTER TABLE `incomes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `packagebooks`
--
ALTER TABLE `packagebooks`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `places`
--
ALTER TABLE `places`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `policies`
--
ALTER TABLE `policies`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `promos`
--
ALTER TABLE `promos`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `roombooks`
--
ALTER TABLE `roombooks`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `salaries`
--
ALTER TABLE `salaries`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `supports`
--
ALTER TABLE `supports`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `transports`
--
ALTER TABLE `transports`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
