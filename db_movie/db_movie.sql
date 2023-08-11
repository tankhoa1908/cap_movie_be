-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: db_movie
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner` (
  `ma_banner` int NOT NULL AUTO_INCREMENT,
  `ma_phim` int DEFAULT NULL,
  `hinh_anh` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ma_banner`),
  KEY `ma_phim` (`ma_phim`),
  CONSTRAINT `banner_ibfk_1` FOREIGN KEY (`ma_phim`) REFERENCES `phim` (`ma_phim`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (1,6,'banner1.jpg'),(2,2,'banner2.jpg'),(3,4,'banner3.jpg'),(4,5,'banner4.jpg'),(5,3,'banner5.jpg');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cumRap`
--

DROP TABLE IF EXISTS `cumRap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cumRap` (
  `ma_cum_rap` int NOT NULL AUTO_INCREMENT,
  `ten_cum_rap` varchar(100) NOT NULL,
  `dia_chi` varchar(100) NOT NULL,
  `ma_he_thong_rap` int DEFAULT NULL,
  PRIMARY KEY (`ma_cum_rap`),
  KEY `ma_he_thong_rap` (`ma_he_thong_rap`),
  CONSTRAINT `cumRap_ibfk_1` FOREIGN KEY (`ma_he_thong_rap`) REFERENCES `heThongRap` (`ma_he_thong_rap`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cumRap`
--

LOCK TABLES `cumRap` WRITE;
/*!40000 ALTER TABLE `cumRap` DISABLE KEYS */;
INSERT INTO `cumRap` VALUES (1,'Cineplex Downtown','123 Main St, Cityville',1),(2,'AMC Theatre Central','456 Oak Ave, Townsville',2),(3,'Regal Cinemas Northside','789 Elm St, Villagetown',3),(4,'Cinemark Westside','321 Maple Ave, Hamlet City',4),(5,'Odeon Cinemas South','987 Pine St, Townsville',5),(6,'Vue Cinemas Eastside','654 Cedar Ave, Villagetown',6),(7,'Gaumont Pathé City Center','132 Walnut St, Metroville',7),(8,'PVR Cinemas North Central','876 Birch Ave, Hamlet City',8),(9,'Cineplex Central Plaza','543 Oak St, Cityville',1),(10,'AMC Theatre West Plaza','210 Elm Ave, Townsville',2);
/*!40000 ALTER TABLE `cumRap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datVe`
--

DROP TABLE IF EXISTS `datVe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datVe` (
  `tai_khoan` int DEFAULT NULL,
  `ma_lich_chieu` int DEFAULT NULL,
  `ma_ghe` int DEFAULT NULL,
  KEY `tai_khoan` (`tai_khoan`),
  KEY `ma_lich_chieu` (`ma_lich_chieu`),
  KEY `ma_ghe` (`ma_ghe`),
  CONSTRAINT `datVe_ibfk_1` FOREIGN KEY (`tai_khoan`) REFERENCES `nguoiDung` (`tai_khoan`),
  CONSTRAINT `datVe_ibfk_2` FOREIGN KEY (`ma_lich_chieu`) REFERENCES `lichChieu` (`ma_lich_chieu`),
  CONSTRAINT `datVe_ibfk_3` FOREIGN KEY (`ma_ghe`) REFERENCES `ghe` (`ma_ghe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datVe`
--

LOCK TABLES `datVe` WRITE;
/*!40000 ALTER TABLE `datVe` DISABLE KEYS */;
INSERT INTO `datVe` VALUES (1,1,1),(2,1,2),(3,2,3),(1,2,4),(2,3,5),(3,3,6),(1,4,7),(2,4,8),(6,2,2),(6,2,2),(6,1,2),(1,1,20),(1,6,20),(1,6,27),(1,1,21),(1,1,22),(1,1,23);
/*!40000 ALTER TABLE `datVe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ghe`
--

DROP TABLE IF EXISTS `ghe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ghe` (
  `ma_ghe` int NOT NULL AUTO_INCREMENT,
  `ten_ghe` varchar(100) NOT NULL,
  `loai_ghe` varchar(100) NOT NULL,
  `ma_rap` int DEFAULT NULL,
  PRIMARY KEY (`ma_ghe`),
  KEY `ma_rap` (`ma_rap`),
  CONSTRAINT `ghe_ibfk_1` FOREIGN KEY (`ma_rap`) REFERENCES `rapPhim` (`ma_rap`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ghe`
--

LOCK TABLES `ghe` WRITE;
/*!40000 ALTER TABLE `ghe` DISABLE KEYS */;
INSERT INTO `ghe` VALUES (1,'A1','Standard',1),(2,'A2','Standard',1),(3,'A3','Standard',1),(4,'A4','VIP',1),(5,'B1','Standard',1),(6,'B2','Standard',1),(7,'B3','VIP',1),(8,'B4','VIP',1),(9,'C1','Standard',2),(10,'C2','Standard',2),(11,'C3','Standard',2),(12,'C4','Standard',2),(13,'D1','VIP',2),(14,'D2','VIP',2),(15,'D3','VIP',2),(16,'D4','Standard',2),(17,'E1','Standard',2),(18,'E2','Standard',2),(19,'E3','Standard',3),(20,'E4','Standard',3),(21,'F1','Standard',3),(22,'F2','Standard',3),(23,'F3','Standard',3),(24,'F4','Standard',3),(25,'G1','VIP',3),(26,'G2','VIP',3),(27,'G3','Standard',3),(28,'G4','Standard',3),(29,'H1','Standard',3),(30,'H2','Standard',3);
/*!40000 ALTER TABLE `ghe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `heThongRap`
--

DROP TABLE IF EXISTS `heThongRap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heThongRap` (
  `ma_he_thong_rap` int NOT NULL AUTO_INCREMENT,
  `ten_he_thong_rap` varchar(100) NOT NULL,
  `logo` varchar(100) NOT NULL,
  PRIMARY KEY (`ma_he_thong_rap`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heThongRap`
--

LOCK TABLES `heThongRap` WRITE;
/*!40000 ALTER TABLE `heThongRap` DISABLE KEYS */;
INSERT INTO `heThongRap` VALUES (1,'Cineplex','cineplex_logo.jpg'),(2,'AMC Theatres','amc_logo.jpg'),(3,'Regal Cinemas','regal_logo.jpg'),(4,'Cinemark','cinemark_logo.jpg'),(5,'Odeon Cinemas','odeon_logo.jpg'),(6,'Vue Cinemas','vue_logo.jpg'),(7,'Gaumont Pathé','gaumont_pathe_logo.jpg'),(8,'PVR Cinemas','pvr_logo.jpg');
/*!40000 ALTER TABLE `heThongRap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lichChieu`
--

DROP TABLE IF EXISTS `lichChieu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lichChieu` (
  `ma_lich_chieu` int NOT NULL AUTO_INCREMENT,
  `ma_rap` int DEFAULT NULL,
  `ma_phim` int DEFAULT NULL,
  `ngay_gio_chieu` datetime NOT NULL,
  `gia_ve` int NOT NULL,
  PRIMARY KEY (`ma_lich_chieu`),
  KEY `ma_rap` (`ma_rap`),
  KEY `ma_phim` (`ma_phim`),
  CONSTRAINT `lichChieu_ibfk_1` FOREIGN KEY (`ma_rap`) REFERENCES `rapPhim` (`ma_rap`),
  CONSTRAINT `lichChieu_ibfk_2` FOREIGN KEY (`ma_phim`) REFERENCES `phim` (`ma_phim`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lichChieu`
--

LOCK TABLES `lichChieu` WRITE;
/*!40000 ALTER TABLE `lichChieu` DISABLE KEYS */;
INSERT INTO `lichChieu` VALUES (1,1,1,'2023-08-01 09:00:00',100),(2,5,2,'2023-08-01 11:30:00',120),(3,4,5,'2023-08-01 13:00:00',90),(4,6,3,'2023-08-01 15:30:00',110),(5,7,5,'2023-08-01 18:00:00',80),(6,3,7,'2023-08-01 20:30:00',100),(7,8,4,'2023-08-01 12:00:00',95),(8,4,2,'2023-08-01 14:30:00',115),(55,2,1,'2023-09-30 17:00:00',129000);
/*!40000 ALTER TABLE `lichChieu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoiDung`
--

DROP TABLE IF EXISTS `nguoiDung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguoiDung` (
  `tai_khoan` int NOT NULL AUTO_INCREMENT,
  `ho_ten` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `so_dt` varchar(100) NOT NULL,
  `mat_khau` varchar(100) NOT NULL,
  `loai_nguoi_dung` varchar(100) NOT NULL,
  PRIMARY KEY (`tai_khoan`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoiDung`
--

LOCK TABLES `nguoiDung` WRITE;
/*!40000 ALTER TABLE `nguoiDung` DISABLE KEYS */;
INSERT INTO `nguoiDung` VALUES (1,'John Doe','john.doe@example.com','1234567890','password123','customer'),(2,'hong han','honghanasdasd@gmail.com','082623233408','$2a$10$lT7IlArbZPO2eT9qAWqhHu1KbOhdoS.tcJOz2lnNC1Axv1VHPE5RK','Admin'),(3,'Admin User','admin@example.com','9876543210','admin123','admin'),(6,'Manager User','manager@example.com','6543210987','manager123','manager'),(11,'John Doe','john.doe@example.com','1234567890','password123','customer'),(13,'Admin User','admin@example.com','9876543210','admin123','admin'),(14,'Sarah Johnson','sarah.johnson@example.com','4567890123','password789','customer'),(15,'Michael Brown','michael.brown@example.com','3216549870','passwordabc','customer'),(16,'Manager User','manager@example.com','6543210987','manager123','manager'),(17,'vuong','vuong@gmail.com','83830423','$2a$10$kbt5Ke0M.rsQHymeajkHA.YB4iMpvkfg2KH9xSSlLG7w5NhhEhbMC','customer');
/*!40000 ALTER TABLE `nguoiDung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phim`
--

DROP TABLE IF EXISTS `phim`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phim` (
  `ma_phim` int NOT NULL AUTO_INCREMENT,
  `ten_phim` varchar(100) NOT NULL,
  `trailer` varchar(100) NOT NULL,
  `hinh_anh` varchar(100) NOT NULL,
  `mo_ta` varchar(1000) NOT NULL,
  `ngay_khoi_chieu` date NOT NULL,
  `danh_gia` int NOT NULL,
  `hot` tinyint(1) NOT NULL,
  `dang_chieu` tinyint(1) NOT NULL,
  `sap_chieu` tinyint(1) NOT NULL,
  PRIMARY KEY (`ma_phim`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phim`
--

LOCK TABLES `phim` WRITE;
/*!40000 ALTER TABLE `phim` DISABLE KEYS */;
INSERT INTO `phim` VALUES (1,'Inception','https://inception-trailer.com','inception.jpg','A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.','2010-07-16',4,1,1,0),(2,'The flash','https://www.youtube.com/watch?v=fY_WCvxJNKU','1691580883260_the_flash.jpg','Flash (tên tiếng Anh: The Flash) là một phim siêu anh hùng của Mỹ dựa trên nhân vật cùng tên của DC Comics. Được sản xuất bởi DC Studios, Double Dream, và Disco Factory, và được phát hành bởi Warner Bros. Pictures','2022-07-22',6,0,1,1),(3,'The Shawshank Redemption','https://shawshankredemption-trailer.com','shawshankredemption.jpg','Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.','1994-09-23',5,0,1,0),(4,'Pulp Fiction','https://pulpfiction-trailer.com','pulpfiction.jpg','The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.','1994-10-14',4,0,1,0),(5,'The Godfather','https://thegodfather-trailer.com','thegodfather.jpg','The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.','1972-03-24',5,1,1,1),(6,'Schindlers List','https://schindlerslist-trailer.com','schindlerslist.jpg','German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned his Jewish workforce  witnessing their persecution  the Nazis.','1993-12-15',4,1,1,1),(7,'Fight Club','https://fightclub-trailer.com','fightclub.jpg','An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.','1999-10-15',5,1,1,1),(8,'Forrest Gump','https://forrestgump-trailer.com','forrestgump.jpg','The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.','1994-07-06',4,0,1,1),(9,'The Matrix','https://thematrix-trailer.com','thematrix.jpg','A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.','1999-03-31',5,1,1,1),(10,'Goodfellas','https://goodfellas-trailer.com','goodfellas.jpg','The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.','1990-09-19',5,1,1,1),(26,'the flash','https://www.youtube.com/watch?v=fY_WCvxJNKU','1691568568212_the_flash.jpg','Flash (tên tiếng Anh: The Flash) là một phim siêu anh hùng của Mỹ dựa trên nhân vật cùng tên của DC Comics. Được sản xuất bởi DC Studios, Double Dream, và Disco Factory, và được phát hành bởi Warner Bros. Pictures','2022-07-22',4,1,1,1),(27,'the flash','https://www.youtube.com/watch?v=fY_WCvxJNKU','1691569371224_the_flash.jpg','Flash (tên tiếng Anh: The Flash) là một phim siêu anh hùng của Mỹ dựa trên nhân vật cùng tên của DC Comics. Được sản xuất bởi DC Studios, Double Dream, và Disco Factory, và được phát hành bởi Warner Bros. Pictures','2022-07-22',4,0,1,1);
/*!40000 ALTER TABLE `phim` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rapPhim`
--

DROP TABLE IF EXISTS `rapPhim`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rapPhim` (
  `ma_rap` int NOT NULL AUTO_INCREMENT,
  `ten_rap` varchar(100) NOT NULL,
  `ma_cum_rap` int DEFAULT NULL,
  PRIMARY KEY (`ma_rap`),
  KEY `ma_cum_rap` (`ma_cum_rap`),
  CONSTRAINT `rapPhim_ibfk_1` FOREIGN KEY (`ma_cum_rap`) REFERENCES `cumRap` (`ma_cum_rap`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rapPhim`
--

LOCK TABLES `rapPhim` WRITE;
/*!40000 ALTER TABLE `rapPhim` DISABLE KEYS */;
INSERT INTO `rapPhim` VALUES (1,'AMC Empire 25',1),(2,'Regal Union Square ScreenX & 4DX',2),(3,'Pacific Theatres at The Grove',5),(4,'AMC Century City 15',6),(5,'AMC River East 21',7),(6,'Regal City North 4DX & IMAX',3),(7,'AMC South Bay Galleria 16',8),(8,'Cinemark Playa Vista and XD',4);
/*!40000 ALTER TABLE `rapPhim` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_movie'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-10 13:07:44
