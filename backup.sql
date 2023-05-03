-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: timekeeping
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `account_id` varchar(255) DEFAULT NULL,
  `last_used` datetime DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `location` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2tpaww1kt5adx3u9v3wqh3k28` (`location`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'vantu7849',NULL,'$2a$10$93tsTvk207m2UUw8to4e0.IJjN6xanwElmwJeUSaCFJHfJ7TpSZa6',NULL,0,'vantu7849@gmail.com',1),(4,'chitam.tran',NULL,'$2a$10$Cwr1WmNzxM7xSTvDKCW8MuUi3NxQUaiRD4h9SJ8Qgvi9GN9fS9owm',NULL,0,'chitam.tran@tcg-itsystems.de',1),(5,'david.nguyen',NULL,'$2a$10$CzGjOstwBsFJYPnzwqxE/.7SZE.qNcCo3k8ikN2dteArvx7D0XI/6',NULL,0,'david.nguyen@tcg-marketing.de',1),(6,'hieu.cao',NULL,'$2a$10$daVI9W5Yax1AQUFuZUPeT.8IED84yDgakKa3BCeQpN5Hp3dZoLIr6',NULL,2,'hieu.cao@tcg-marketing.de',1),(7,'phuong.vu',NULL,'$2a$10$gd.ZEhhHKgbtFg52fEOzqeHWQf0Nd3W02CC6BGnT64H.3oWkIjZoS',NULL,0,'phuong.vu@tcg-marketing.de',1),(8,'ngoc.dao',NULL,'$2a$10$FdZ/sj6ktXFJUPlOyrlt2.RiBnttzrjX8LJAjPrQI52SEyQ0ZwTGi',NULL,2,'ngoc.dao@tcg-marketing.de',1),(9,'thuan.nguyen',NULL,'$2a$10$gBBw36VBDHxFyf9R1fQ4zOWwb3f6.W/PzGQVxuupdexPHtHbhgItS',NULL,2,'thuan.nguyen@tcg-marketing.de',1),(10,'ngoc.giang',NULL,'$2a$10$xFmAwCncBMNgKH7pEEicRu6vDrs4/G5Dad4FLNEM8wj09U/0lcuTG',NULL,2,'ngoc.giang@tcg-marketing.de',1),(11,'phuong.do',NULL,'$2a$10$.RHeGkeRVYJOSjDWRIbX6.54Xe05GSaWstu6UtjGoz/5UwwIKXsxK',NULL,2,'phuong.do@tcg-marketing.de',1),(13,'tutai787878',NULL,'$2a$10$YMf7/FQ.drSKKFDhAThBEupcOKpzQG96dZLEiiBJAgWcCWzJPMLT2',NULL,2,'tutai787878@gmail.com',1),(14,'ppbao10',NULL,'$2a$10$iuYLa0YF.KWXiq1TeeYRXeVaWFrvTa0zb11EFErjNf.59gS2UoLVa',NULL,2,'ppbao10@gmail.com',1);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_account_detail`
--

DROP TABLE IF EXISTS `account_account_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_account_detail` (
  `account_detail_id` bigint DEFAULT NULL,
  `account_id` bigint NOT NULL,
  PRIMARY KEY (`account_id`),
  KEY `FKmfueahccrcvnwxpi0bjneeh86` (`account_detail_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_account_detail`
--

LOCK TABLES `account_account_detail` WRITE;
/*!40000 ALTER TABLE `account_account_detail` DISABLE KEYS */;
INSERT INTO `account_account_detail` VALUES (1,1),(7,4),(9,5),(10,6),(11,7),(12,8),(13,9),(14,10),(15,11),(18,13),(19,14);
/*!40000 ALTER TABLE `account_account_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_account_role`
--

DROP TABLE IF EXISTS `account_account_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_account_role` (
  `account_role_id` bigint DEFAULT NULL,
  `account_id` bigint NOT NULL,
  PRIMARY KEY (`account_id`),
  KEY `FKbov9fqb5m85ugbmgqyhfa28it` (`account_role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_account_role`
--

LOCK TABLES `account_account_role` WRITE;
/*!40000 ALTER TABLE `account_account_role` DISABLE KEYS */;
INSERT INTO `account_account_role` VALUES (1,1),(7,4),(8,5),(9,6),(10,7),(11,8),(12,9),(13,10),(14,11),(16,13),(17,14);
/*!40000 ALTER TABLE `account_account_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_account_token`
--

DROP TABLE IF EXISTS `account_account_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_account_token` (
  `account_token_id` bigint DEFAULT NULL,
  `account_id` bigint NOT NULL,
  PRIMARY KEY (`account_id`),
  KEY `FKhh4bcquy0hlbkvo7a7k8kshuw` (`account_token_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_account_token`
--

LOCK TABLES `account_account_token` WRITE;
/*!40000 ALTER TABLE `account_account_token` DISABLE KEYS */;
INSERT INTO `account_account_token` VALUES (1,1),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(13,13),(14,14);
/*!40000 ALTER TABLE `account_account_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_capability`
--

DROP TABLE IF EXISTS `account_capability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_capability` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `capability_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_capability`
--

LOCK TABLES `account_capability` WRITE;
/*!40000 ALTER TABLE `account_capability` DISABLE KEYS */;
/*!40000 ALTER TABLE `account_capability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_capability_account_roles`
--

DROP TABLE IF EXISTS `account_capability_account_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_capability_account_roles` (
  `account_capability_id` bigint NOT NULL,
  `account_roles_id` bigint NOT NULL,
  PRIMARY KEY (`account_capability_id`,`account_roles_id`),
  KEY `FKsr3l7108d6rltvyocdlcaht4g` (`account_roles_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_capability_account_roles`
--

LOCK TABLES `account_capability_account_roles` WRITE;
/*!40000 ALTER TABLE `account_capability_account_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `account_capability_account_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_card_registered`
--

DROP TABLE IF EXISTS `account_card_registered`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_card_registered` (
  `account_id` bigint DEFAULT NULL,
  `card_registered_id` bigint NOT NULL,
  PRIMARY KEY (`card_registered_id`),
  KEY `FKaj35k8qs3tqjtrhpb6jlnpfil` (`account_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_card_registered`
--

LOCK TABLES `account_card_registered` WRITE;
/*!40000 ALTER TABLE `account_card_registered` DISABLE KEYS */;
INSERT INTO `account_card_registered` VALUES (5,2),(6,3),(7,4),(8,5),(9,6),(10,7),(11,8);
/*!40000 ALTER TABLE `account_card_registered` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_job`
--

DROP TABLE IF EXISTS `account_job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_job` (
  `job_id` bigint DEFAULT NULL,
  `account_id` bigint NOT NULL,
  PRIMARY KEY (`account_id`),
  KEY `FKtiarod6cp8gtcrrv75wnav9yl` (`job_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_job`
--

LOCK TABLES `account_job` WRITE;
/*!40000 ALTER TABLE `account_job` DISABLE KEYS */;
INSERT INTO `account_job` VALUES (1,1),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(13,13),(14,14);
/*!40000 ALTER TABLE `account_job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_role`
--

DROP TABLE IF EXISTS `account_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_role` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `desciption` varchar(255) DEFAULT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_role`
--

LOCK TABLES `account_role` WRITE;
/*!40000 ALTER TABLE `account_role` DISABLE KEYS */;
INSERT INTO `account_role` VALUES (1,NULL,'ADMIN'),(2,NULL,'ADMIN'),(3,NULL,'ADMIN'),(4,NULL,'ADMIN'),(8,NULL,'ADMIN'),(7,NULL,'ADMIN'),(9,NULL,'EMPLOYEE'),(10,NULL,'ADMIN'),(11,NULL,'EMPLOYEE'),(12,NULL,'EMPLOYEE'),(13,NULL,'EMPLOYEE'),(14,NULL,'EMPLOYEE'),(16,NULL,'EMPLOYEE'),(17,NULL,'EMPLOYEE');
/*!40000 ALTER TABLE `account_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_role_capabilities`
--

DROP TABLE IF EXISTS `account_role_capabilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_role_capabilities` (
  `account_role_id` bigint NOT NULL,
  `capabilities_id` bigint NOT NULL,
  PRIMARY KEY (`account_role_id`,`capabilities_id`),
  KEY `FK9hqdfqc7q29moq35a93o8d551` (`capabilities_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_role_capabilities`
--

LOCK TABLES `account_role_capabilities` WRITE;
/*!40000 ALTER TABLE `account_role_capabilities` DISABLE KEYS */;
/*!40000 ALTER TABLE `account_role_capabilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_token`
--

DROP TABLE IF EXISTS `account_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_token` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `access_token` varchar(255) DEFAULT NULL,
  `is_active` bit(1) DEFAULT NULL,
  `token_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_token`
--

LOCK TABLES `account_token` WRITE;
/*!40000 ALTER TABLE `account_token` DISABLE KEYS */;
INSERT INTO `account_token` VALUES (1,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2YW50dTc4NDlAZ21haWwuY29tIiwiaWF0IjoxNjc5MDkzMTg5fQ.cnmxeDKuRJPvsK99RkOHmHhHZwCMeSoyVyQQvqU4gMY',_binary '',NULL),(5,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYXZpZC5uZ3V5ZW5AdGNnLW1hcmtldGluZy5kZSIsImlhdCI6MTY4MTcyMTQ3NH0.Is42zOhMV52tlje7fDPVaoa8KfLYcgoLWzIeYtw8M8I',_binary '',NULL),(6,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaWV1LmNhb0B0Y2ctbWFya2V0aW5nLmRlIiwiaWF0IjoxNjgxNzQxNzUzfQ.dV6w7NCMXUVi56xJmnW0cAEdcdt_y_uKNoQ8_F-Tetg',_binary '',NULL),(4,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGl0YW0udHJhbkB0Y2ctaXRzeXN0ZW1zLmRlIiwiaWF0IjoxNjgwMjA3MzQ3fQ.USzrFa9eRphKxiTgR2l9oPorVms0D-VnIFopSPuqB6Y',_binary '',NULL),(7,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwaHVvbmcudnVAdGNnLW1hcmtldGluZy5kZSIsImlhdCI6MTY4MTgyNTAzM30.HLjbSmPqrnPeJKYzBZhw4hFKSkESfJ5ZebBAJlWuUXg',_binary '',NULL),(8,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuZ29jLmRhb0B0Y2ctbWFya2V0aW5nLmRlIiwiaWF0IjoxNjgxODI1MjQ4fQ.pDV4tewIi84cuBpp74z3ui598G82Z8JNZPLtoxp1ATs',_binary '',NULL),(9,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aHVhbi5uZ3V5ZW5AdGNnLW1hcmtldGluZy5kZSIsImlhdCI6MTY4MTgyNTQyMX0.pBrZ_94z0yIBmvt_BR9eFsdv_4Dg9mR0Gk7wmfhcW7g',_binary '',NULL),(10,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuZ29jLmdpYW5nQHRjZy1tYXJrZXRpbmcuZGUiLCJpYXQiOjE2ODE4MjU4NjN9.SPTg_AkOi2ZU30LHs_Eb6IIseO3bHzisJNfXgz9y_40',_binary '',NULL),(11,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwaHVvbmcuZG9AdGNnLW1hcmtldGluZy5kZSIsImlhdCI6MTY4MjMzNDM0Nn0.cEJFUhZV4BRg-jvFzGFIoegkj3-_xoCPjG9ePSJnMSE',_binary '',NULL),(13,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0dXRhaTc4Nzg3OEBnbWFpbC5jb20iLCJpYXQiOjE2ODI2MjI1OTF9._pN8VoHqN1cQEZ2sY2BpcxkjD7ge9z8Lapk_j7aGCrQ',_binary '',NULL),(14,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcGJhbzEwQGdtYWlsLmNvbSIsImlhdCI6MTY4MjcwNDAzMn0.jWrqxBp23k8Odi8rFldBw0ZLUyc_mANxkGU_1bzSot4',_binary '',NULL);
/*!40000 ALTER TABLE `account_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_waitinglist`
--

DROP TABLE IF EXISTS `account_waitinglist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_waitinglist` (
  `account_id` bigint DEFAULT NULL,
  `card_waiting_id` bigint NOT NULL,
  PRIMARY KEY (`card_waiting_id`),
  KEY `FKjd8kkcp73ttcaodu5pj9eiivm` (`account_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_waitinglist`
--

LOCK TABLES `account_waitinglist` WRITE;
/*!40000 ALTER TABLE `account_waitinglist` DISABLE KEYS */;
INSERT INTO `account_waitinglist` VALUES (1,1),(5,2),(6,3),(7,4),(8,5),(9,6),(10,7),(11,8);
/*!40000 ALTER TABLE `account_waitinglist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_registed`
--

DROP TABLE IF EXISTS `card_registed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_registed` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `card_id` varchar(255) DEFAULT NULL,
  `is_active` bit(1) DEFAULT NULL,
  `type` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_registed`
--

LOCK TABLES `card_registed` WRITE;
/*!40000 ALTER TABLE `card_registed` DISABLE KEYS */;
INSERT INTO `card_registed` VALUES (8,'1138592410',_binary '',0),(2,'1148070010',_binary '',0),(3,'1285445674',_binary '',0),(4,'1148688730',_binary '',0),(5,'1285311594',_binary '',0),(6,'1138653498',_binary '',0),(7,'1139571994',_binary '',0);
/*!40000 ALTER TABLE `card_registed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_waiting_list`
--

DROP TABLE IF EXISTS `card_waiting_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_waiting_list` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_time` datetime DEFAULT NULL,
  `is_active` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_waiting_list`
--

LOCK TABLES `card_waiting_list` WRITE;
/*!40000 ALTER TABLE `card_waiting_list` DISABLE KEYS */;
INSERT INTO `card_waiting_list` VALUES (1,'2023-03-18 11:25:41',_binary '\0'),(2,'2023-04-17 08:54:57',_binary '\0'),(3,'2023-04-17 14:29:42',_binary '\0'),(4,'2023-04-18 13:37:34',_binary '\0'),(5,'2023-04-18 13:41:04',_binary '\0'),(6,'2023-04-18 13:44:06',_binary '\0'),(7,'2023-04-18 13:51:17',_binary '\0'),(8,'2023-04-24 11:06:00',_binary '\0');
/*!40000 ALTER TABLE `card_waiting_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `object_id` bigint DEFAULT NULL,
  `object_type` int DEFAULT NULL,
  `created_by` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn84amaib0wclgo6g2wl9u23ta` (`created_by`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment_media`
--

DROP TABLE IF EXISTS `comment_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_media` (
  `comment_id` bigint NOT NULL,
  `media_id` bigint NOT NULL,
  KEY `FKo9rbilia3iqf41gjmxdql2oei` (`media_id`),
  KEY `FKa621yp9hnl2oh2u355txqk9h8` (`comment_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_media`
--

LOCK TABLES `comment_media` WRITE;
/*!40000 ALTER TABLE `comment_media` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `current_time_log`
--

DROP TABLE IF EXISTS `current_time_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `current_time_log` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `account_id` bigint DEFAULT NULL,
  `done` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `current_time_log`
--

LOCK TABLES `current_time_log` WRITE;
/*!40000 ALTER TABLE `current_time_log` DISABLE KEYS */;
INSERT INTO `current_time_log` VALUES (1,1,_binary ''),(2,5,_binary '\0'),(3,6,_binary '\0'),(4,7,_binary ''),(5,8,_binary '\0'),(6,9,_binary '\0'),(7,10,_binary '\0'),(8,11,_binary '\0');
/*!40000 ALTER TABLE `current_time_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `current_timelog`
--

DROP TABLE IF EXISTS `current_timelog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `current_timelog` (
  `timelog` bigint DEFAULT NULL,
  `current` bigint NOT NULL,
  PRIMARY KEY (`current`),
  KEY `FK1qtwbwn9r5oehbfsav2m49cxb` (`timelog`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `current_timelog`
--

LOCK TABLES `current_timelog` WRITE;
/*!40000 ALTER TABLE `current_timelog` DISABLE KEYS */;
INSERT INTO `current_timelog` VALUES (115,1),(242,2),(240,3),(243,4),(241,5),(239,6),(238,7),(244,8);
/*!40000 ALTER TABLE `current_timelog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_time` datetime DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `object_id` bigint DEFAULT NULL,
  `object_type` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  `created_by` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsbl2302614x9a8brgldqgvfld` (`created_by`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `holiday`
--

DROP TABLE IF EXISTS `holiday`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `holiday` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `is_every_year` bit(1) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `location_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKr3wt7ihjxanqvl85nshoweku8` (`location_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `holiday`
--

LOCK TABLES `holiday` WRITE;
/*!40000 ALTER TABLE `holiday` DISABLE KEYS */;
INSERT INTO `holiday` VALUES (1,'2023-03-17',_binary '\0','Test',2023,1),(2,'2023-03-20',_binary '','Test',2023,1);
/*!40000 ALTER TABLE `holiday` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `from_date` date DEFAULT NULL,
  `max_hours` int DEFAULT NULL,
  `min_hours` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` int DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `working_time_type` int DEFAULT NULL,
  `location_id` bigint DEFAULT NULL,
  `team_id` bigint DEFAULT NULL,
  `min_overtime` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4d9rme1ojqlfdif4jjmmaptp1` (`location_id`),
  KEY `FKuw0152v3ct0ujqw9q3fwq0q0` (`team_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` VALUES (1,NULL,NULL,0,0,'Admin',NULL,NULL,NULL,2,NULL,NULL,30),(4,NULL,NULL,22,0,'Admin',NULL,NULL,NULL,0,NULL,NULL,30),(5,NULL,NULL,20,0,'Test',NULL,NULL,NULL,0,NULL,NULL,NULL),(6,NULL,NULL,0,0,'Test',NULL,NULL,NULL,0,NULL,NULL,NULL),(7,NULL,NULL,0,0,'Test',NULL,NULL,NULL,0,NULL,NULL,NULL),(8,NULL,NULL,0,0,'Test',NULL,NULL,NULL,0,NULL,NULL,NULL),(9,NULL,NULL,0,0,'Test',NULL,NULL,NULL,0,NULL,NULL,NULL),(10,NULL,NULL,0,0,'Test',NULL,NULL,NULL,0,NULL,NULL,NULL),(11,NULL,NULL,0,0,'Test',NULL,NULL,NULL,0,NULL,NULL,NULL),(13,NULL,NULL,20,0,'TEST',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,NULL,NULL,3,0,'Testststs',NULL,NULL,NULL,0,NULL,1,4);
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_capabilities`
--

DROP TABLE IF EXISTS `job_capabilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_capabilities` (
  `job_id` bigint NOT NULL,
  `capabilities_id` bigint NOT NULL,
  PRIMARY KEY (`job_id`,`capabilities_id`),
  KEY `FKdjsowh4bx4xvu13g8h4jm22o0` (`capabilities_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_capabilities`
--

LOCK TABLES `job_capabilities` WRITE;
/*!40000 ALTER TABLE `job_capabilities` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_capabilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `location_key` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,NULL,NULL,'München');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `media` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `link` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `month_log`
--

DROP TABLE IF EXISTS `month_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `month_log` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `account_id` bigint DEFAULT NULL,
  `active` int DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `done` bit(1) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `on_date` date DEFAULT NULL,
  `status` int DEFAULT NULL,
  `time_from` time DEFAULT NULL,
  `time_to` time DEFAULT NULL,
  `total` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `month_log`
--

LOCK TABLES `month_log` WRITE;
/*!40000 ALTER TABLE `month_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `month_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_time` datetime DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `notification_type` int DEFAULT NULL,
  `object_id` bigint DEFAULT NULL,
  `severity` int DEFAULT NULL,
  `sender_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtnwqi152dhvkvlm7kc58pe63p` (`sender_id`)
) ENGINE=MyISAM AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
INSERT INTO `notification` VALUES (1,'2023-03-17 22:49:49','/calendar-admin-request?timeAdjustmentId=1','Van Tu Nguyen requested to edit the calendar on date 2023-03-17',0,0,1,1),(2,'2023-03-18 13:02:29','/calendar-admin-request?timeAdjustmentId=2','Van Tu Nguyen requested to edit the calendar on date 2023-03-18',0,0,1,1),(3,'2023-03-18 20:20:10','/calendar-admin-request?timeAdjustmentId=3','Van Tu Nguyen requested to edit the calendar on date 2023-03-16',0,0,1,1),(4,'2023-03-18 20:39:52','/calendar-admin-request?timeAdjustmentId=4','Van Tu Nguyen requested to edit the calendar on date 2023-03-16',0,0,1,1),(5,'2023-03-18 20:40:33','/calendar-admin-request?timeAdjustmentId=5','Van Tu Nguyen requested to edit the calendar on date 2023-03-24',0,0,1,1),(6,'2023-03-18 20:40:51','/calendar-admin-request?timeAdjustmentId=6','Van Tu Nguyen requested to edit the calendar on date 2023-03-26',0,0,1,1),(7,'2023-03-19 09:30:56','/calendar-admin-request?timeAdjustmentId=7','Van Tu Nguyen requested to edit the calendar on date 2023-03-16',0,0,1,1),(8,'2023-03-19 09:31:14','/calendar-admin-request?timeAdjustmentId=8','Van Tu Nguyen requested to edit the calendar on date 2023-03-19',0,0,1,1),(9,'2023-03-19 09:31:48','/calendar-admin-request?timeAdjustmentId=9','Van Tu Nguyen requested to edit the calendar on date 2023-03-18',0,0,1,1),(10,'2023-03-19 09:34:50','/calendar-admin-request?timeAdjustmentId=10','Van Tu Nguyen requested to edit the calendar on date 2023-03-26',0,0,1,1),(11,'2023-03-19 09:38:11','/calendar-admin-request?timeAdjustmentId=11','Van Tu Nguyen requested to edit the calendar on date 2023-03-17',0,0,1,1),(12,'2023-03-19 10:03:47','/calendar-admin-request?timeAdjustmentId=12','Van Tu Nguyen requested to edit the calendar on date 2023-03-20',0,0,1,1),(13,'2023-04-04 10:42:01','/calendar-admin-request?timeAdjustmentId=13','Chi Tam Tran requested to edit the calendar on date 2023-04-01',0,0,1,4),(14,'2023-04-04 10:42:04','/calendar-admin-request?timeAdjustmentId=14','Chi Tam Tran requested to edit the calendar on date 2023-04-01',0,0,1,4),(15,'2023-04-04 10:42:06','/calendar-admin-request?timeAdjustmentId=15','Chi Tam Tran requested to edit the calendar on date 2023-04-01',0,0,1,4),(16,'2023-04-04 10:42:17','/calendar-admin-request?timeAdjustmentId=16','Chi Tam Tran requested to edit the calendar on date 2023-04-01',0,0,1,4),(17,'2023-04-04 10:42:27','/calendar-admin-request?timeAdjustmentId=17','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(18,'2023-04-04 10:42:28','/calendar-admin-request?timeAdjustmentId=18','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(19,'2023-04-04 10:42:28','/calendar-admin-request?timeAdjustmentId=19','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(20,'2023-04-04 10:42:28','/calendar-admin-request?timeAdjustmentId=20','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(21,'2023-04-04 10:42:28','/calendar-admin-request?timeAdjustmentId=21','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(22,'2023-04-04 10:42:29','/calendar-admin-request?timeAdjustmentId=22','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(23,'2023-04-04 10:42:29','/calendar-admin-request?timeAdjustmentId=23','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(24,'2023-04-04 10:42:29','/calendar-admin-request?timeAdjustmentId=24','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(25,'2023-04-04 10:42:31','/calendar-admin-request?timeAdjustmentId=25','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(26,'2023-04-04 10:42:59','/calendar-admin-request?timeAdjustmentId=26','Chi Tam Tran requested to edit the calendar on date 2023-04-06',0,0,1,4),(27,'2023-04-12 15:00:18','/calendar-admin-request?timeAdjustmentId=27','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(28,'2023-04-12 15:00:22','/calendar-admin-request?timeAdjustmentId=28','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(29,'2023-04-12 15:00:27','/calendar-admin-request?timeAdjustmentId=29','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(30,'2023-04-12 15:00:35','/calendar-admin-request?timeAdjustmentId=30','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(31,'2023-04-12 15:00:45','/calendar-admin-request?timeAdjustmentId=31','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(32,'2023-04-12 15:00:45','/calendar-admin-request?timeAdjustmentId=32','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(33,'2023-04-12 15:00:46','/calendar-admin-request?timeAdjustmentId=33','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(34,'2023-04-12 15:00:46','/calendar-admin-request?timeAdjustmentId=34','Chi Tam Tran requested to edit the calendar on date 2023-04-07',0,0,1,4),(35,'2023-04-25 07:25:17','/calendar-admin-request?timeAdjustmentId=35','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(36,'2023-04-25 07:25:18','/calendar-admin-request?timeAdjustmentId=36','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(37,'2023-04-25 07:25:19','/calendar-admin-request?timeAdjustmentId=37','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(38,'2023-04-25 07:25:21','/calendar-admin-request?timeAdjustmentId=38','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(39,'2023-04-25 07:25:21','/calendar-admin-request?timeAdjustmentId=39','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(40,'2023-04-25 07:25:22','/calendar-admin-request?timeAdjustmentId=40','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(41,'2023-04-25 07:25:22','/calendar-admin-request?timeAdjustmentId=41','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(42,'2023-04-25 07:25:22','/calendar-admin-request?timeAdjustmentId=42','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(43,'2023-04-25 07:25:22','/calendar-admin-request?timeAdjustmentId=43','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(44,'2023-04-25 07:25:22','/calendar-admin-request?timeAdjustmentId=44','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(45,'2023-04-25 07:25:23','/calendar-admin-request?timeAdjustmentId=45','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(46,'2023-04-25 07:25:24','/calendar-admin-request?timeAdjustmentId=46','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(47,'2023-04-25 07:25:24','/calendar-admin-request?timeAdjustmentId=47','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(48,'2023-04-25 07:25:24','/calendar-admin-request?timeAdjustmentId=48','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(49,'2023-04-25 07:25:24','/calendar-admin-request?timeAdjustmentId=49','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(50,'2023-04-25 07:25:25','/calendar-admin-request?timeAdjustmentId=50','Phuong Vu requested to edit the calendar on date 2023-04-02',0,0,1,7),(51,'2023-04-25 07:25:38','/calendar-admin-request?timeAdjustmentId=51','Phuong Vu requested to edit the calendar on date 2023-04-03',0,0,1,7),(52,'2023-04-25 07:25:38','/calendar-admin-request?timeAdjustmentId=52','Phuong Vu requested to edit the calendar on date 2023-04-03',0,0,1,7),(53,'2023-04-25 07:25:38','/calendar-admin-request?timeAdjustmentId=53','Phuong Vu requested to edit the calendar on date 2023-04-03',0,0,1,7),(54,'2023-04-25 07:50:55','/calendar-admin-request?timeAdjustmentId=54','Phuong Vu requested to edit the calendar on date 2023-04-03',0,0,1,7),(55,'2023-04-25 07:50:55','/calendar-admin-request?timeAdjustmentId=55','Phuong Vu requested to edit the calendar on date 2023-04-03',0,0,1,7),(56,'2023-04-25 07:50:55','/calendar-admin-request?timeAdjustmentId=56','Phuong Vu requested to edit the calendar on date 2023-04-03',0,0,1,7),(57,'2023-04-25 07:50:55','/calendar-admin-request?timeAdjustmentId=57','Phuong Vu requested to edit the calendar on date 2023-04-03',0,0,1,7),(58,'2023-04-25 07:54:03','/calendar-admin-request?timeAdjustmentId=58','Phuong Vu requested to edit the calendar on date 2023-04-04',0,0,1,7),(59,'2023-04-25 07:55:56','/calendar-admin-request?timeAdjustmentId=59','Phuong Vu requested to edit the calendar on date 2023-04-05',0,0,1,7),(60,'2023-04-25 07:57:22','/calendar-admin-request?timeAdjustmentId=60','Phuong Vu requested to edit the calendar on date 2023-04-06',0,0,1,7),(61,'2023-04-25 07:57:34','/calendar-admin-request?timeAdjustmentId=61','Phuong Vu requested to edit the calendar on date 2023-04-07',0,0,1,7),(62,'2023-04-25 07:57:40','/calendar-admin-request?timeAdjustmentId=62','Phuong Vu requested to edit the calendar on date 2023-04-08',0,0,1,7),(63,'2023-04-25 07:57:48','/calendar-admin-request?timeAdjustmentId=63','Phuong Vu requested to edit the calendar on date 2023-04-09',0,0,1,7),(64,'2023-04-25 07:58:44','/calendar-admin-request?timeAdjustmentId=64','Phuong Vu requested to edit the calendar on date 2023-04-10',0,0,1,7),(65,'2023-04-25 08:00:32','/calendar-admin-request?timeAdjustmentId=65','Phuong Vu requested to edit the calendar on date 2023-04-07',0,0,1,7),(66,'2023-04-25 08:02:58','/calendar-admin-request?timeAdjustmentId=66','Phuong Vu requested to edit the calendar on date 2023-04-11',0,0,1,7),(67,'2023-04-25 08:03:05','/calendar-admin-request?timeAdjustmentId=67','Phuong Vu requested to edit the calendar on date 2023-04-12',0,0,1,7),(68,'2023-04-25 08:03:11','/calendar-admin-request?timeAdjustmentId=68','Phuong Vu requested to edit the calendar on date 2023-04-13',0,0,1,7),(69,'2023-04-25 08:03:37','/calendar-admin-request?timeAdjustmentId=69','Phuong Vu requested to edit the calendar on date 2023-04-14',0,0,1,7),(70,'2023-04-25 08:04:25','/calendar-admin-request?timeAdjustmentId=70','Phuong Vu requested to edit the calendar on date 2023-04-17',0,0,1,7),(71,'2023-04-25 08:04:33','/calendar-admin-request?timeAdjustmentId=71','Phuong Vu requested to edit the calendar on date 2023-04-18',0,0,1,7),(72,'2023-04-25 08:04:40','/calendar-admin-request?timeAdjustmentId=72','Phuong Vu requested to edit the calendar on date 2023-04-19',0,0,1,7),(73,'2023-04-25 08:04:46','/calendar-admin-request?timeAdjustmentId=73','Phuong Vu requested to edit the calendar on date 2023-04-20',0,0,1,7),(74,'2023-04-25 08:05:12','/calendar-admin-request?timeAdjustmentId=74','Phuong Vu requested to edit the calendar on date 2023-04-21',0,0,1,7),(80,'2023-04-27 18:24:32','/calendar-admin-request?timeAdjustmentId=80','Test 2 Nguyen requested to edit the calendar on date 2023-04-01',0,0,1,13),(81,'2023-04-27 18:26:27','/calendar-admin-request?timeAdjustmentId=81','Test 2 Nguyen requested to edit the calendar on date 2023-04-01',0,0,1,13),(82,'2023-04-27 18:27:11','/calendar-admin-request?timeAdjustmentId=82','Test 2 Nguyen requested to edit the calendar on date 2023-04-01',0,0,1,13),(83,'2023-04-27 18:42:20','/calendar-admin-request?timeAdjustmentId=83','Test 2 Nguyen requested to edit the calendar on date 2023-04-01',0,0,1,13),(84,'2023-04-27 18:43:56','/calendar-admin-request?timeAdjustmentId=84','Test 2 Nguyen requested to edit the calendar on date 2023-04-01',0,0,1,13),(85,'2023-04-27 18:45:59','/calendar-admin-request?timeAdjustmentId=85','Test 2 Nguyen requested to edit the calendar on date 2023-04-01',0,0,1,13),(86,'2023-04-27 19:12:36','/calendar-admin-request?timeAdjustmentId=86','Test 2 Nguyen requested to edit the calendar on date 2023-04-02',0,0,1,13),(87,'2023-04-27 19:13:08','/calendar-admin-request?timeAdjustmentId=87','Test 2 Nguyen requested to edit the calendar on date 2023-04-02',0,0,1,13),(88,'2023-04-27 19:13:50','/calendar-admin-request?timeAdjustmentId=88','Van Tu Nguyen requested to edit the calendar on date 2023-04-02',0,0,1,1),(89,'2023-04-27 19:25:44','/calendar-admin-request?timeAdjustmentId=89','Van Tu Nguyen requested to edit the calendar on date 2023-04-02',0,0,1,1),(90,'2023-04-27 19:40:50','/calendar-admin-request?timeAdjustmentId=90','Test 2 Nguyen requested to edit the calendar on date 2023-04-01',0,0,1,13),(91,'2023-04-27 19:40:58','/calendar-admin-request?timeAdjustmentId=91','Test 2 Nguyen requested to edit the calendar on date 2023-04-01',0,0,1,13),(92,'2023-04-27 19:42:43','/calendar-admin-request?timeAdjustmentId=92','Test 2 Nguyen requested to edit the calendar on date 2023-04-01',0,0,1,13),(93,'2023-04-27 19:48:50','/calendar-admin-request?timeAdjustmentId=93','Test 2 Nguyen requested to edit the calendar on date 2023-04-04',0,0,1,13),(94,'2023-04-28 18:55:38','/calendar-admin-request?timeAdjustmentId=94','Test3 Nguyen requested to edit the calendar on date 2023-04-01',0,0,1,14),(95,'2023-04-29 07:50:50','/calendar-admin-request?timeAdjustmentId=95','Test3 Nguyen requested to edit the calendar on date 2023-04-03',0,0,1,14),(96,'2023-05-02 07:18:51','/calendar-admin-request?timeAdjustmentId=96','Phuong Vu requested to edit the calendar on date 2023-04-27',0,0,1,7),(97,'2023-05-02 07:19:34','/calendar-admin-request?timeAdjustmentId=97','Phuong Vu requested to edit the calendar on date 2023-04-28',0,0,1,7);
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification_receiver`
--

DROP TABLE IF EXISTS `notification_receiver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification_receiver` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_time` datetime DEFAULT NULL,
  `is_read` bit(1) DEFAULT NULL,
  `notification_id` bigint NOT NULL,
  `receiver_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmkh5n7otyogidkltg6oh64psj` (`notification_id`),
  KEY `FK6mlo0kl6ln9j0cx6qhqjk77ss` (`receiver_id`)
) ENGINE=MyISAM AUTO_INCREMENT=184 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification_receiver`
--

LOCK TABLES `notification_receiver` WRITE;
/*!40000 ALTER TABLE `notification_receiver` DISABLE KEYS */;
INSERT INTO `notification_receiver` VALUES (1,'2023-03-17 22:49:49',_binary '',1,1),(2,'2023-03-18 13:02:29',_binary '',2,1),(3,'2023-03-18 13:02:29',_binary '\0',2,NULL),(4,'2023-03-18 20:20:10',_binary '',3,1),(5,'2023-03-18 20:20:10',_binary '\0',3,NULL),(6,'2023-03-18 20:39:52',_binary '',4,1),(7,'2023-03-18 20:39:52',_binary '\0',4,NULL),(8,'2023-03-18 20:40:33',_binary '',5,1),(9,'2023-03-18 20:40:33',_binary '\0',5,NULL),(10,'2023-03-18 20:40:51',_binary '',6,1),(11,'2023-03-18 20:40:51',_binary '\0',6,NULL),(12,'2023-03-19 09:30:56',_binary '',7,1),(13,'2023-03-19 09:30:56',_binary '\0',7,NULL),(14,'2023-03-19 09:31:14',_binary '',8,1),(15,'2023-03-19 09:31:14',_binary '\0',8,NULL),(16,'2023-03-19 09:31:48',_binary '',9,1),(17,'2023-03-19 09:31:48',_binary '\0',9,NULL),(18,'2023-03-19 09:34:50',_binary '',10,1),(19,'2023-03-19 09:34:50',_binary '\0',10,NULL),(20,'2023-03-19 09:38:11',_binary '',11,1),(21,'2023-03-19 09:38:11',_binary '\0',11,NULL),(22,'2023-03-19 10:03:47',_binary '',12,1),(23,'2023-03-19 10:03:47',_binary '\0',12,NULL),(24,'2023-04-04 10:42:01',_binary '',13,1),(25,'2023-04-04 10:42:01',_binary '\0',13,NULL),(26,'2023-04-04 10:42:04',_binary '',14,1),(27,'2023-04-04 10:42:04',_binary '\0',14,NULL),(28,'2023-04-04 10:42:06',_binary '',15,1),(29,'2023-04-04 10:42:06',_binary '\0',15,NULL),(30,'2023-04-04 10:42:17',_binary '',16,1),(31,'2023-04-04 10:42:17',_binary '\0',16,NULL),(32,'2023-04-04 10:42:27',_binary '',17,1),(33,'2023-04-04 10:42:27',_binary '\0',17,NULL),(34,'2023-04-04 10:42:28',_binary '',18,1),(35,'2023-04-04 10:42:28',_binary '\0',18,NULL),(36,'2023-04-04 10:42:28',_binary '',19,1),(37,'2023-04-04 10:42:28',_binary '\0',19,NULL),(38,'2023-04-04 10:42:28',_binary '',20,1),(39,'2023-04-04 10:42:28',_binary '\0',20,NULL),(40,'2023-04-04 10:42:28',_binary '',21,1),(41,'2023-04-04 10:42:28',_binary '\0',21,NULL),(42,'2023-04-04 10:42:29',_binary '',22,1),(43,'2023-04-04 10:42:29',_binary '\0',22,NULL),(44,'2023-04-04 10:42:29',_binary '',23,1),(45,'2023-04-04 10:42:29',_binary '\0',23,NULL),(46,'2023-04-04 10:42:29',_binary '',24,1),(47,'2023-04-04 10:42:29',_binary '\0',24,NULL),(48,'2023-04-04 10:42:31',_binary '',25,1),(49,'2023-04-04 10:42:31',_binary '\0',25,NULL),(50,'2023-04-04 10:42:59',_binary '',26,1),(51,'2023-04-04 10:42:59',_binary '\0',26,NULL),(52,'2023-04-12 15:00:18',_binary '',27,1),(53,'2023-04-12 15:00:18',_binary '\0',27,NULL),(54,'2023-04-12 15:00:22',_binary '',28,1),(55,'2023-04-12 15:00:22',_binary '\0',28,NULL),(56,'2023-04-12 15:00:27',_binary '',29,1),(57,'2023-04-12 15:00:27',_binary '\0',29,NULL),(58,'2023-04-12 15:00:35',_binary '',30,1),(59,'2023-04-12 15:00:35',_binary '\0',30,NULL),(60,'2023-04-12 15:00:45',_binary '',31,1),(61,'2023-04-12 15:00:45',_binary '\0',31,NULL),(62,'2023-04-12 15:00:45',_binary '',32,1),(63,'2023-04-12 15:00:45',_binary '\0',32,NULL),(64,'2023-04-12 15:00:46',_binary '',33,1),(65,'2023-04-12 15:00:46',_binary '\0',33,NULL),(66,'2023-04-12 15:00:46',_binary '',34,1),(67,'2023-04-12 15:00:46',_binary '\0',34,NULL),(68,'2023-04-25 07:25:17',_binary '',35,1),(69,'2023-04-25 07:25:17',_binary '\0',35,NULL),(70,'2023-04-25 07:25:18',_binary '',36,1),(71,'2023-04-25 07:25:18',_binary '\0',36,NULL),(72,'2023-04-25 07:25:19',_binary '',37,1),(73,'2023-04-25 07:25:19',_binary '\0',37,NULL),(74,'2023-04-25 07:25:21',_binary '',38,1),(75,'2023-04-25 07:25:21',_binary '\0',38,NULL),(76,'2023-04-25 07:25:21',_binary '',39,1),(77,'2023-04-25 07:25:21',_binary '\0',39,NULL),(78,'2023-04-25 07:25:22',_binary '',40,1),(79,'2023-04-25 07:25:22',_binary '\0',40,NULL),(80,'2023-04-25 07:25:22',_binary '',41,1),(81,'2023-04-25 07:25:22',_binary '\0',41,NULL),(82,'2023-04-25 07:25:22',_binary '',42,1),(83,'2023-04-25 07:25:22',_binary '\0',42,NULL),(84,'2023-04-25 07:25:22',_binary '',43,1),(85,'2023-04-25 07:25:22',_binary '\0',43,NULL),(86,'2023-04-25 07:25:22',_binary '',44,1),(87,'2023-04-25 07:25:22',_binary '\0',44,NULL),(88,'2023-04-25 07:25:23',_binary '',45,1),(89,'2023-04-25 07:25:23',_binary '\0',45,NULL),(90,'2023-04-25 07:25:24',_binary '',46,1),(91,'2023-04-25 07:25:24',_binary '\0',46,NULL),(92,'2023-04-25 07:25:24',_binary '',47,1),(93,'2023-04-25 07:25:24',_binary '\0',47,NULL),(94,'2023-04-25 07:25:24',_binary '',48,1),(95,'2023-04-25 07:25:24',_binary '\0',48,NULL),(96,'2023-04-25 07:25:24',_binary '',49,1),(97,'2023-04-25 07:25:24',_binary '\0',49,NULL),(98,'2023-04-25 07:25:25',_binary '',50,1),(99,'2023-04-25 07:25:25',_binary '\0',50,NULL),(100,'2023-04-25 07:25:38',_binary '',51,1),(101,'2023-04-25 07:25:38',_binary '\0',51,NULL),(102,'2023-04-25 07:25:38',_binary '',52,1),(103,'2023-04-25 07:25:38',_binary '\0',52,NULL),(104,'2023-04-25 07:25:38',_binary '',53,1),(105,'2023-04-25 07:25:38',_binary '\0',53,NULL),(106,'2023-04-25 07:50:55',_binary '',54,1),(107,'2023-04-25 07:50:55',_binary '\0',54,NULL),(108,'2023-04-25 07:50:55',_binary '',55,1),(109,'2023-04-25 07:50:55',_binary '\0',55,NULL),(110,'2023-04-25 07:50:55',_binary '',56,1),(111,'2023-04-25 07:50:55',_binary '\0',56,NULL),(112,'2023-04-25 07:50:55',_binary '',57,1),(113,'2023-04-25 07:50:55',_binary '\0',57,NULL),(114,'2023-04-25 07:54:03',_binary '',58,1),(115,'2023-04-25 07:54:03',_binary '\0',58,NULL),(116,'2023-04-25 07:55:56',_binary '',59,1),(117,'2023-04-25 07:55:56',_binary '\0',59,NULL),(118,'2023-04-25 07:57:22',_binary '',60,1),(119,'2023-04-25 07:57:22',_binary '\0',60,NULL),(120,'2023-04-25 07:57:34',_binary '',61,1),(121,'2023-04-25 07:57:34',_binary '\0',61,NULL),(122,'2023-04-25 07:57:40',_binary '',62,1),(123,'2023-04-25 07:57:40',_binary '\0',62,NULL),(124,'2023-04-25 07:57:48',_binary '',63,1),(125,'2023-04-25 07:57:48',_binary '\0',63,NULL),(126,'2023-04-25 07:58:44',_binary '',64,1),(127,'2023-04-25 07:58:44',_binary '\0',64,NULL),(128,'2023-04-25 08:00:32',_binary '',65,1),(129,'2023-04-25 08:00:32',_binary '\0',65,NULL),(130,'2023-04-25 08:02:58',_binary '',66,1),(131,'2023-04-25 08:02:58',_binary '\0',66,NULL),(132,'2023-04-25 08:03:05',_binary '',67,1),(133,'2023-04-25 08:03:05',_binary '\0',67,NULL),(134,'2023-04-25 08:03:11',_binary '',68,1),(135,'2023-04-25 08:03:11',_binary '\0',68,NULL),(136,'2023-04-25 08:03:37',_binary '',69,1),(137,'2023-04-25 08:03:37',_binary '\0',69,NULL),(138,'2023-04-25 08:04:25',_binary '',70,1),(139,'2023-04-25 08:04:25',_binary '\0',70,NULL),(140,'2023-04-25 08:04:33',_binary '',71,1),(141,'2023-04-25 08:04:33',_binary '\0',71,NULL),(142,'2023-04-25 08:04:40',_binary '',72,1),(143,'2023-04-25 08:04:40',_binary '\0',72,NULL),(144,'2023-04-25 08:04:46',_binary '',73,1),(145,'2023-04-25 08:04:46',_binary '\0',73,NULL),(146,'2023-04-25 08:05:12',_binary '',74,1),(147,'2023-04-25 08:05:12',_binary '\0',74,NULL),(148,'2023-04-27 18:19:15',_binary '\0',75,1),(149,'2023-04-27 18:19:15',_binary '\0',75,NULL),(150,'2023-04-27 18:19:33',_binary '\0',76,1),(151,'2023-04-27 18:19:33',_binary '\0',76,NULL),(152,'2023-04-27 18:20:04',_binary '\0',77,1),(153,'2023-04-27 18:20:04',_binary '\0',77,NULL),(154,'2023-04-27 18:20:07',_binary '\0',78,1),(155,'2023-04-27 18:20:07',_binary '\0',78,NULL),(156,'2023-04-27 18:20:27',_binary '\0',79,1),(157,'2023-04-27 18:20:27',_binary '\0',79,NULL),(158,'2023-04-27 18:24:32',_binary '\0',80,1),(159,'2023-04-27 18:24:32',_binary '\0',80,NULL),(160,'2023-04-27 18:26:27',_binary '\0',81,1),(161,'2023-04-27 18:26:27',_binary '\0',81,NULL),(162,'2023-04-27 18:27:11',_binary '\0',82,1),(163,'2023-04-27 18:27:11',_binary '\0',82,NULL),(164,'2023-04-27 18:42:20',_binary '\0',83,1),(165,'2023-04-27 18:42:20',_binary '\0',83,NULL),(166,'2023-04-27 18:43:56',_binary '\0',84,1),(167,'2023-04-27 18:43:56',_binary '\0',84,NULL),(168,'2023-04-27 18:45:59',_binary '\0',85,1),(169,'2023-04-27 18:45:59',_binary '\0',85,NULL),(170,'2023-04-27 19:12:36',_binary '\0',86,1),(171,'2023-04-27 19:12:36',_binary '\0',86,NULL),(172,'2023-04-27 19:13:08',_binary '\0',87,1),(173,'2023-04-27 19:13:08',_binary '\0',87,NULL),(174,'2023-04-27 19:13:50',_binary '\0',88,1),(175,'2023-04-27 19:13:50',_binary '\0',88,NULL),(176,'2023-04-27 19:25:44',_binary '\0',89,1),(177,'2023-04-27 19:25:44',_binary '\0',89,NULL),(178,'2023-04-27 19:40:50',_binary '\0',90,1),(179,'2023-04-27 19:40:50',_binary '\0',90,NULL),(180,'2023-04-27 19:40:58',_binary '\0',91,1),(181,'2023-04-27 19:40:58',_binary '\0',91,NULL),(182,'2023-04-27 19:42:43',_binary '\0',92,1),(183,'2023-04-27 19:42:43',_binary '\0',92,NULL);
/*!40000 ALTER TABLE `notification_receiver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `once_token`
--

DROP TABLE IF EXISTS `once_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `once_token` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `status` bit(1) DEFAULT NULL,
  `time_expired` datetime DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `type` int DEFAULT NULL,
  `account_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKr0wmdd8yu537m9aysns1jaui5` (`account_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `once_token`
--

LOCK TABLES `once_token` WRITE;
/*!40000 ALTER TABLE `once_token` DISABLE KEYS */;
INSERT INTO `once_token` VALUES (1,_binary '','2023-03-19 17:05:50','U36Tcy5y0G71Um1p5P',0,1),(2,_binary '','2023-03-19 17:16:08','jK46v7m7938P7tPsVK',0,1),(3,_binary '','2023-03-19 18:03:14','s8CnK28rwJ933d0SR6',0,1),(4,_binary '','2023-03-19 18:10:28','82UA2eUrMf38Fgt665',0,1),(5,_binary '','2023-03-30 20:28:32','Xr9EuOY798851c5jGm',0,1),(6,_binary '\0','2023-03-30 20:30:17','6E028bNg6x10oPM3iB',0,4);
/*!40000 ALTER TABLE `once_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paid_absence`
--

DROP TABLE IF EXISTS `paid_absence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paid_absence` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `enable` bit(1) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paid_absence`
--

LOCK TABLES `paid_absence` WRITE;
/*!40000 ALTER TABLE `paid_absence` DISABLE KEYS */;
/*!40000 ALTER TABLE `paid_absence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_time` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `done_time` datetime DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `short_description` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_by` bigint NOT NULL,
  `team_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgg8k22yxaswiues3vknpm2fho` (`created_by`),
  KEY `FK99hcloicqmg95ty11qht49n8x` (`team_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_accounts`
--

DROP TABLE IF EXISTS `project_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_accounts` (
  `project_id` bigint NOT NULL,
  `accounts_id` bigint NOT NULL,
  KEY `FKimjt28e9vgj8rins5j3k1o1g7` (`accounts_id`),
  KEY `FKsvi7chh22mgh9bxscon2gn6yb` (`project_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_accounts`
--

LOCK TABLES `project_accounts` WRITE;
/*!40000 ALTER TABLE `project_accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_comments`
--

DROP TABLE IF EXISTS `project_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_comments` (
  `project_id` bigint NOT NULL,
  `comments_id` bigint NOT NULL,
  UNIQUE KEY `UK_g3d9r6ubaxwhp29avg4egoxyk` (`comments_id`),
  KEY `FK2suxkk8n9md2txpxfvi89209g` (`project_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_comments`
--

LOCK TABLES `project_comments` WRITE;
/*!40000 ALTER TABLE `project_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_histories`
--

DROP TABLE IF EXISTS `project_histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_histories` (
  `project_id` bigint NOT NULL,
  `histories_id` bigint NOT NULL,
  UNIQUE KEY `UK_rflxpbk69r1y879swrvf3h307` (`histories_id`),
  KEY `FK9vwc6876yojwmqnx1ksr084py` (`project_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_histories`
--

LOCK TABLES `project_histories` WRITE;
/*!40000 ALTER TABLE `project_histories` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_histories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_media`
--

DROP TABLE IF EXISTS `project_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_media` (
  `project_id` bigint NOT NULL,
  `media_id` bigint NOT NULL,
  KEY `FKcd705bgwqrqj0rkw6m6ce3bu5` (`media_id`),
  KEY `FKn7ab1o4kjuyp6iweelhxqxf4f` (`project_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_media`
--

LOCK TABLES `project_media` WRITE;
/*!40000 ALTER TABLE `project_media` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scan_device`
--

DROP TABLE IF EXISTS `scan_device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scan_device` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `is_active` bit(1) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `type` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scan_device`
--

LOCK TABLES `scan_device` WRITE;
/*!40000 ALTER TABLE `scan_device` DISABLE KEYS */;
INSERT INTO `scan_device` VALUES (1,_binary '','München','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMDIzLTAzLTE4VDExOjIwOjUxLjI5ODU3NiIsImlhdCI6MTY3OTEzODQ1MX0.rI1cYXOKUmT8Pudf5o7jYaRTcFFITm853nSxRv0QFHk',0);
/*!40000 ALTER TABLE `scan_device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scandevice_waitinglist`
--

DROP TABLE IF EXISTS `scandevice_waitinglist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scandevice_waitinglist` (
  `scan_device_id` bigint DEFAULT NULL,
  `card_waiting_id` bigint NOT NULL,
  PRIMARY KEY (`card_waiting_id`),
  KEY `FK7w36f588e1ss7n67i0ju089ck` (`scan_device_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scandevice_waitinglist`
--

LOCK TABLES `scandevice_waitinglist` WRITE;
/*!40000 ALTER TABLE `scandevice_waitinglist` DISABLE KEYS */;
INSERT INTO `scandevice_waitinglist` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8);
/*!40000 ALTER TABLE `scandevice_waitinglist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settingkv`
--

DROP TABLE IF EXISTS `settingkv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `settingkv` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `label` varchar(255) DEFAULT NULL,
  `scope` varchar(255) DEFAULT NULL,
  `setting_key` varchar(255) DEFAULT NULL,
  `setting_value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settingkv`
--

LOCK TABLES `settingkv` WRITE;
/*!40000 ALTER TABLE `settingkv` DISABLE KEYS */;
INSERT INTO `settingkv` VALUES (1,NULL,'GLOBAL','businessName','TCG Web & Marketing'),(2,NULL,'GLOBAL','notifyText','Hello, I\'m notifierrrr!!'),(3,NULL,'GLOBAL','showNotify','true'),(4,NULL,'GLOBAL','logo','/media/download/20230401154032_Schwarz200.png'),(5,NULL,'GLOBAL','checkInColor','rgb(6,155,242)'),(6,NULL,'GLOBAL','checkOutColor','rgb(220,8,8)'),(7,NULL,'GLOBAL','masterUsername','tcg'),(8,NULL,'GLOBAL','masterPassword','123456'),(9,NULL,'GLOBAL','standByColor','rgb(255,255,255)'),(10,NULL,'GLOBAL','businessPhone','030 2630 6913'),(11,NULL,'GLOBAL','businessAddress','Hamburger Platz 6, 13086 Berlin '),(12,NULL,'GLOBAL','dateSendCalendar','3'),(13,NULL,'GLOBAL','adminEmails','vantu7849@gmail.com\nchitam.tran@tcg-itsystems.de\ndavid.nguyen@tcg-marketing.de\nphuong.vu@tcg-marketing.de');
/*!40000 ALTER TABLE `settingkv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_time` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `done_time` datetime DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `severity` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  `created_by` bigint NOT NULL,
  `project_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlfkjmdwpu3e9696jcw6rbkbyy` (`created_by`),
  KEY `FKk8qrwowg31kx7hp93sru1pdqa` (`project_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_accounts`
--

DROP TABLE IF EXISTS `task_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_accounts` (
  `task_id` bigint NOT NULL,
  `accounts_id` bigint NOT NULL,
  KEY `FK4on3a3m1yeexonyegtaphid68` (`accounts_id`),
  KEY `FKn8oxb1cqb3gt2m25ggcavbtl4` (`task_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_accounts`
--

LOCK TABLES `task_accounts` WRITE;
/*!40000 ALTER TABLE `task_accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_comments`
--

DROP TABLE IF EXISTS `task_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_comments` (
  `task_id` bigint NOT NULL,
  `comments_id` bigint NOT NULL,
  UNIQUE KEY `UK_2ai2rh4v34oftvibvlpfnc74b` (`comments_id`),
  KEY `FK57giy29i5nak139pefvyvhj9h` (`task_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_comments`
--

LOCK TABLES `task_comments` WRITE;
/*!40000 ALTER TABLE `task_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_histories`
--

DROP TABLE IF EXISTS `task_histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_histories` (
  `task_id` bigint NOT NULL,
  `histories_id` bigint NOT NULL,
  UNIQUE KEY `UK_piuwo99aunkyomfhipurg7v93` (`histories_id`),
  KEY `FKr07vfga2obytwf9w1q63o8g5b` (`task_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_histories`
--

LOCK TABLES `task_histories` WRITE;
/*!40000 ALTER TABLE `task_histories` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_histories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_media`
--

DROP TABLE IF EXISTS `task_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_media` (
  `task_id` bigint NOT NULL,
  `media_id` bigint NOT NULL,
  KEY `FK7tjyxlmopvyi8lk4do8g8796d` (`media_id`),
  KEY `FK2holfagm0mkpvyc08jm6ksnxy` (`task_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_media`
--

LOCK TABLES `task_media` WRITE;
/*!40000 ALTER TABLE `task_media` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `parent_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKatdo6973ess2mh3w9co3t8m0t` (`parent_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (1,NULL,'Team1','test',NULL);
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_capabilities`
--

DROP TABLE IF EXISTS `team_capabilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_capabilities` (
  `team_id` bigint NOT NULL,
  `capabilities_id` bigint NOT NULL,
  PRIMARY KEY (`team_id`,`capabilities_id`),
  KEY `FKddqcuwjlxgp5hec7l9q0bstns` (`capabilities_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_capabilities`
--

LOCK TABLES `team_capabilities` WRITE;
/*!40000 ALTER TABLE `team_capabilities` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_capabilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time_adjustment`
--

DROP TABLE IF EXISTS `time_adjustment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `time_adjustment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `account_id` bigint DEFAULT NULL,
  `checked_by` varchar(255) DEFAULT NULL,
  `checked_time` datetime DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `is_accept` bit(1) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `on_date` date DEFAULT NULL,
  `re_note` varchar(255) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `type` int DEFAULT NULL,
  `time_log_type` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_adjustment`
--

LOCK TABLES `time_adjustment` WRITE;
/*!40000 ALTER TABLE `time_adjustment` DISABLE KEYS */;
INSERT INTO `time_adjustment` VALUES (1,1,'Van Tu Nguyen','2023-03-17 22:49:54','Van Tu Nguyen','2023-03-17 22:49:49',_binary '','Test','2023-03-17','',_binary '','2023-03-21',1,NULL),(2,1,'Van Tu Nguyen','2023-03-18 13:02:32','Van Tu Nguyen','2023-03-18 13:02:29',_binary '',NULL,'2023-03-18','',_binary '',NULL,0,NULL),(3,1,'Van Tu Nguyen','2023-03-18 20:20:15','Van Tu Nguyen','2023-03-18 20:20:10',_binary '',NULL,'2023-03-16','',_binary '','2023-03-18',2,NULL),(4,1,'Van Tu Nguyen','2023-03-18 20:39:55','Van Tu Nguyen','2023-03-18 20:39:52',_binary '',NULL,'2023-03-16','',_binary '','2023-03-21',1,NULL),(5,1,'Van Tu Nguyen','2023-03-18 20:40:37','Van Tu Nguyen','2023-03-18 20:40:33',_binary '',NULL,'2023-03-24','',_binary '',NULL,1,NULL),(6,1,'Van Tu Nguyen','2023-03-18 20:40:53','Van Tu Nguyen','2023-03-18 20:40:51',_binary '',NULL,'2023-03-26','',_binary '','2023-03-27',1,NULL),(7,1,'Van Tu Nguyen','2023-03-19 09:31:21','Van Tu Nguyen','2023-03-19 09:30:56',_binary '',NULL,'2023-03-16','',_binary '',NULL,0,NULL),(8,1,'Van Tu Nguyen','2023-03-19 09:31:21','Van Tu Nguyen','2023-03-19 09:31:14',_binary '',NULL,'2023-03-19','',_binary '',NULL,0,NULL),(9,1,'Van Tu Nguyen','2023-03-19 09:32:25','Van Tu Nguyen','2023-03-19 09:31:48',_binary '',NULL,'2023-03-18','',_binary '',NULL,0,NULL),(10,1,'Van Tu Nguyen','2023-03-19 09:34:55','Van Tu Nguyen','2023-03-19 09:34:50',_binary '',NULL,'2023-03-26','',_binary '',NULL,0,NULL),(11,1,'Van Tu Nguyen','2023-03-19 09:38:16','Van Tu Nguyen','2023-03-19 09:38:11',_binary '',NULL,'2023-03-17','',_binary '',NULL,0,NULL),(12,1,NULL,NULL,'Van Tu Nguyen','2023-03-19 10:03:47',_binary '\0',NULL,'2023-03-20',NULL,_binary '\0','2023-03-24',1,NULL),(13,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:01',_binary '\0','Lam Them','2023-04-01',NULL,_binary '\0',NULL,0,NULL),(14,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:04',_binary '\0','Lam Them','2023-04-01',NULL,_binary '\0',NULL,0,NULL),(15,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:06',_binary '\0','Lam Them','2023-04-01',NULL,_binary '\0',NULL,0,NULL),(16,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:17',_binary '\0','','2023-04-01',NULL,_binary '\0',NULL,0,NULL),(17,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:27',_binary '\0','','2023-04-07',NULL,_binary '\0',NULL,0,NULL),(18,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:28',_binary '\0','','2023-04-07',NULL,_binary '\0',NULL,0,NULL),(19,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:28',_binary '\0','','2023-04-07',NULL,_binary '\0',NULL,0,NULL),(20,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:28',_binary '\0','','2023-04-07',NULL,_binary '\0',NULL,0,NULL),(21,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:28',_binary '\0','','2023-04-07',NULL,_binary '\0',NULL,0,NULL),(22,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:29',_binary '\0','','2023-04-07',NULL,_binary '\0',NULL,0,NULL),(23,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:29',_binary '\0','','2023-04-07',NULL,_binary '\0',NULL,0,NULL),(24,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:29',_binary '\0','','2023-04-07',NULL,_binary '\0',NULL,0,NULL),(25,4,NULL,NULL,'Chi Tam Tran','2023-04-04 10:42:31',_binary '\0','','2023-04-07',NULL,_binary '\0',NULL,0,NULL),(26,4,'Chi Tam Tran','2023-04-04 10:43:55','Chi Tam Tran','2023-04-04 10:42:59',_binary '','','2023-04-06','',_binary '',NULL,0,NULL),(27,4,NULL,NULL,'Chi Tam Tran','2023-04-12 15:00:18',_binary '\0',NULL,'2023-04-07',NULL,_binary '\0',NULL,0,NULL),(28,4,NULL,NULL,'Chi Tam Tran','2023-04-12 15:00:22',_binary '\0',NULL,'2023-04-07',NULL,_binary '\0',NULL,0,NULL),(29,4,NULL,NULL,'Chi Tam Tran','2023-04-12 15:00:27',_binary '\0',NULL,'2023-04-07',NULL,_binary '\0',NULL,0,NULL),(30,4,NULL,NULL,'Chi Tam Tran','2023-04-12 15:00:35',_binary '\0',NULL,'2023-04-07',NULL,_binary '\0',NULL,0,NULL),(31,4,NULL,NULL,'Chi Tam Tran','2023-04-12 15:00:45',_binary '\0',NULL,'2023-04-07',NULL,_binary '\0',NULL,0,NULL),(32,4,NULL,NULL,'Chi Tam Tran','2023-04-12 15:00:45',_binary '\0',NULL,'2023-04-07',NULL,_binary '\0',NULL,0,NULL),(33,4,NULL,NULL,'Chi Tam Tran','2023-04-12 15:00:46',_binary '\0',NULL,'2023-04-07',NULL,_binary '\0',NULL,0,NULL),(34,4,NULL,NULL,'Chi Tam Tran','2023-04-12 15:00:46',_binary '\0',NULL,'2023-04-07',NULL,_binary '\0',NULL,0,NULL),(35,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:17',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(36,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:18',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(37,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:19',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(38,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:21',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(39,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:21',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(40,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:22',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(41,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:22',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(42,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:22',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(43,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:22',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(44,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:22',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(45,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:23',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(46,7,'Phuong Vu','2023-04-25 07:51:32','Phuong Vu','2023-04-25 07:25:24',_binary '\0',NULL,'2023-04-02','',_binary '',NULL,0,NULL),(47,7,'Phuong Vu','2023-04-25 07:51:30','Phuong Vu','2023-04-25 07:25:24',_binary '',NULL,'2023-04-02','',_binary '',NULL,0,NULL),(48,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:24',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(49,7,NULL,NULL,'Phuong Vu','2023-04-25 07:25:24',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(50,7,'Phuong Vu','2023-04-25 07:51:34','Phuong Vu','2023-04-25 07:25:25',_binary '\0',NULL,'2023-04-02','',_binary '',NULL,0,NULL),(51,7,'Phuong Vu','2023-04-25 07:51:36','Phuong Vu','2023-04-25 07:25:38',_binary '\0',NULL,'2023-04-03','',_binary '',NULL,0,NULL),(52,7,'Phuong Vu','2023-04-25 07:51:37','Phuong Vu','2023-04-25 07:25:38',_binary '\0',NULL,'2023-04-03','',_binary '',NULL,0,NULL),(53,7,'Phuong Vu','2023-04-25 07:51:35','Phuong Vu','2023-04-25 07:25:38',_binary '\0',NULL,'2023-04-03','',_binary '',NULL,0,NULL),(54,7,'Phuong Vu','2023-04-25 07:51:38','Phuong Vu','2023-04-25 07:50:55',_binary '\0',NULL,'2023-04-03','',_binary '',NULL,0,NULL),(55,7,'Phuong Vu','2023-04-25 07:51:25','Phuong Vu','2023-04-25 07:50:55',_binary '',NULL,'2023-04-03','',_binary '',NULL,0,NULL),(56,7,'Phuong Vu','2023-04-25 07:51:37','Phuong Vu','2023-04-25 07:50:55',_binary '\0',NULL,'2023-04-03','',_binary '',NULL,0,NULL),(57,7,'Phuong Vu','2023-04-25 07:51:39','Phuong Vu','2023-04-25 07:50:55',_binary '\0',NULL,'2023-04-03','',_binary '',NULL,0,NULL),(58,7,'Phuong Vu','2023-04-25 07:54:13','Phuong Vu','2023-04-25 07:54:03',_binary '',NULL,'2023-04-04','',_binary '',NULL,0,NULL),(59,7,'Phuong Vu','2023-04-25 07:56:01','Phuong Vu','2023-04-25 07:55:56',_binary '',NULL,'2023-04-05','',_binary '',NULL,0,NULL),(60,7,'Phuong Vu','2023-04-25 07:59:48','Phuong Vu','2023-04-25 07:57:22',_binary '',NULL,'2023-04-06','',_binary '',NULL,0,NULL),(61,7,'Phuong Vu','2023-04-25 07:59:47','Phuong Vu','2023-04-25 07:57:34',_binary '',NULL,'2023-04-07','',_binary '',NULL,0,NULL),(62,7,'Phuong Vu','2023-04-25 07:59:44','Phuong Vu','2023-04-25 07:57:40',_binary '\0',NULL,'2023-04-08','',_binary '',NULL,0,NULL),(63,7,'Phuong Vu','2023-04-25 07:59:45','Phuong Vu','2023-04-25 07:57:48',_binary '\0',NULL,'2023-04-09','',_binary '',NULL,0,NULL),(64,7,'Phuong Vu','2023-04-25 07:59:46','Phuong Vu','2023-04-25 07:58:44',_binary '',NULL,'2023-04-10','',_binary '',NULL,0,NULL),(65,7,'Phuong Vu','2023-04-25 08:00:41','Phuong Vu','2023-04-25 08:00:32',_binary '',NULL,'2023-04-07','',_binary '',NULL,0,NULL),(66,7,'Phuong Vu','2023-04-25 08:03:48','Phuong Vu','2023-04-25 08:02:58',_binary '',NULL,'2023-04-11','',_binary '',NULL,0,NULL),(67,7,'Phuong Vu','2023-04-25 08:03:48','Phuong Vu','2023-04-25 08:03:05',_binary '',NULL,'2023-04-12','',_binary '',NULL,0,NULL),(68,7,'Phuong Vu','2023-04-25 08:03:49','Phuong Vu','2023-04-25 08:03:11',_binary '',NULL,'2023-04-13','',_binary '',NULL,0,NULL),(69,7,'Phuong Vu','2023-04-25 08:03:50','Phuong Vu','2023-04-25 08:03:37',_binary '',NULL,'2023-04-14','',_binary '',NULL,0,NULL),(70,7,'Phuong Vu','2023-04-25 08:05:22','Phuong Vu','2023-04-25 08:04:25',_binary '',NULL,'2023-04-17','',_binary '',NULL,0,NULL),(71,7,'Phuong Vu','2023-04-25 08:05:23','Phuong Vu','2023-04-25 08:04:33',_binary '',NULL,'2023-04-18','',_binary '',NULL,0,NULL),(72,7,'Phuong Vu','2023-04-25 08:05:24','Phuong Vu','2023-04-25 08:04:40',_binary '',NULL,'2023-04-19','',_binary '',NULL,0,NULL),(73,7,'Phuong Vu','2023-04-25 08:05:25','Phuong Vu','2023-04-25 08:04:46',_binary '',NULL,'2023-04-20','',_binary '',NULL,0,NULL),(74,7,'Phuong Vu','2023-04-25 08:05:26','Phuong Vu','2023-04-25 08:05:12',_binary '',NULL,'2023-04-21','',_binary '',NULL,0,NULL),(87,13,NULL,NULL,'Test 2 Nguyen','2023-04-27 19:13:08',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(86,13,NULL,NULL,'Test 2 Nguyen','2023-04-27 19:12:36',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(85,13,NULL,NULL,'Test 2 Nguyen','2023-04-27 18:45:59',_binary '\0',NULL,'2023-04-01',NULL,_binary '\0',NULL,0,NULL),(84,13,NULL,NULL,'Test 2 Nguyen','2023-04-27 18:43:56',_binary '\0',NULL,'2023-04-01',NULL,_binary '\0',NULL,0,NULL),(88,1,NULL,NULL,'Van Tu Nguyen','2023-04-27 19:13:50',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(89,1,NULL,NULL,'Van Tu Nguyen','2023-04-27 19:25:44',_binary '\0',NULL,'2023-04-02',NULL,_binary '\0',NULL,0,NULL),(90,13,NULL,NULL,'Test 2 Nguyen','2023-04-27 19:40:50',_binary '\0',NULL,'2023-04-01',NULL,_binary '\0',NULL,0,NULL),(91,13,'Test 2 Nguyen','2023-04-27 19:42:20','Test 2 Nguyen','2023-04-27 19:40:58',_binary '\0',NULL,'2023-04-01','',_binary '',NULL,0,NULL),(92,13,NULL,NULL,'Test 2 Nguyen','2023-04-27 19:42:43',_binary '\0',NULL,'2023-04-01',NULL,_binary '\0',NULL,0,NULL),(93,13,NULL,NULL,'Test 2 Nguyen','2023-04-27 19:48:50',_binary '\0',NULL,'2023-04-04',NULL,_binary '\0',NULL,0,NULL),(94,14,NULL,NULL,'Test3 Nguyen','2023-04-28 18:55:38',_binary '\0',NULL,'2023-04-01',NULL,_binary '\0',NULL,0,NULL),(95,14,'Van Tu Nguyen','2023-04-29 07:59:26','Test3 Nguyen','2023-04-29 07:50:50',_binary '',NULL,'2023-04-03','',_binary '',NULL,0,NULL),(96,7,'Phuong Vu','2023-05-02 07:19:50','Phuong Vu','2023-05-02 07:18:51',_binary '',NULL,'2023-04-27','',_binary '',NULL,0,NULL),(97,7,'Phuong Vu','2023-05-02 07:19:48','Phuong Vu','2023-05-02 07:19:34',_binary '',NULL,'2023-04-28','',_binary '',NULL,0,NULL);
/*!40000 ALTER TABLE `time_adjustment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time_adjustment_time_logs`
--

DROP TABLE IF EXISTS `time_adjustment_time_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `time_adjustment_time_logs` (
  `time_adjustment_id` bigint NOT NULL,
  `time_logs_id` bigint NOT NULL,
  UNIQUE KEY `UK_nsa08wj4fokrmmahkqw6b7g9` (`time_logs_id`),
  KEY `FK8givdqt04uwheok5646r6iew1` (`time_adjustment_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_adjustment_time_logs`
--

LOCK TABLES `time_adjustment_time_logs` WRITE;
/*!40000 ALTER TABLE `time_adjustment_time_logs` DISABLE KEYS */;
INSERT INTO `time_adjustment_time_logs` VALUES (1,1),(2,24),(3,28),(4,32),(5,39),(6,40),(12,46),(13,75),(14,76),(15,77),(16,78),(17,79),(18,80),(19,81),(20,82),(21,83),(22,84),(23,85),(24,86),(25,87),(26,88),(26,89),(27,93),(28,94),(29,95),(30,96),(31,97),(32,98),(33,99),(34,100),(35,151),(36,152),(37,153),(38,154),(39,155),(40,156),(41,157),(42,158),(43,159),(44,160),(45,161),(46,162),(47,163),(48,164),(49,165),(50,166),(51,167),(52,168),(53,169),(54,170),(55,171),(56,172),(57,173),(58,174),(59,175),(60,176),(61,177),(62,178),(63,179),(64,180),(65,181),(66,182),(67,183),(68,184),(69,185),(70,186),(71,187),(72,188),(73,189),(74,190),(75,204),(76,205),(77,206),(79,207),(87,215),(86,214),(85,213),(84,212),(88,216),(89,217),(90,218),(91,219),(92,220),(93,221),(94,228),(95,229),(96,236),(97,237);
/*!40000 ALTER TABLE `time_adjustment_time_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time_log`
--

DROP TABLE IF EXISTS `time_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `time_log` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `account_id` bigint DEFAULT NULL,
  `active` int DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `done` bit(1) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `on_date` date DEFAULT NULL,
  `status` int DEFAULT NULL,
  `time_from` time DEFAULT NULL,
  `time_to` time DEFAULT NULL,
  `total` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=245 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_log`
--

LOCK TABLES `time_log` WRITE;
/*!40000 ALTER TABLE `time_log` DISABLE KEYS */;
INSERT INTO `time_log` VALUES (1,1,0,'vantu7849@gmail.com','2023-03-17 22:49:49',_binary '','FULLDAY','2023-03-17',1,NULL,NULL,480,1),(2,1,0,'vantu7849@gmail.com','2023-03-17 22:49:49',_binary '','FULLDAY','2023-03-17',1,NULL,NULL,480,1),(3,1,0,'vantu7849@gmail.com','2023-03-17 22:49:49',_binary '','FULLDAY','2023-03-18',1,NULL,NULL,480,1),(4,1,0,'vantu7849@gmail.com','2023-03-17 22:49:49',_binary '','FULLDAY','2023-03-19',1,NULL,NULL,480,1),(5,1,0,'vantu7849@gmail.com','2023-03-17 22:49:49',_binary '','FULLDAY','2023-03-20',1,NULL,NULL,480,1),(6,1,0,'vantu7849@gmail.com','2023-03-17 22:49:49',_binary '','FULLDAY','2023-03-21',1,NULL,NULL,480,1),(7,1,0,'RFID-1147786202','2023-03-18 11:26:00',_binary '','','2023-03-18',1,'12:25:00','12:32:00',7,0),(8,1,0,'RFID-1147786202','2023-03-18 11:36:49',_binary '','','2023-03-18',1,'12:36:00','12:40:00',4,0),(9,1,0,'RFID-1147786202','2023-03-18 11:42:15',_binary '','','2023-03-18',1,'12:42:00','12:44:00',2,0),(10,1,0,'RFID-1147786202','2023-03-18 11:45:36',_binary '','','2023-03-18',1,'12:45:00','12:45:00',0,0),(11,1,0,'RFID-1147786202','2023-03-18 11:49:49',_binary '','','2023-03-18',1,'12:49:00','12:56:00',7,0),(12,1,0,'RFID-1147786202','2023-03-18 12:01:20',_binary '','','2023-03-18',1,'13:01:00','13:02:00',1,0),(13,1,0,'RFID-1147786202','2023-03-18 12:03:29',_binary '','','2023-03-18',1,'13:03:00','13:08:00',5,0),(14,1,0,'RFID-1147786202','2023-03-18 12:10:31',_binary '','','2023-03-18',1,'13:10:00','13:12:00',2,0),(15,1,0,'RFID-1147786202','2023-03-18 12:21:12',_binary '','','2023-03-18',1,'13:21:00','13:21:00',0,0),(25,1,0,'RFID-1147786202','2023-03-18 13:02:39',_binary '','','2023-03-18',1,'14:02:00','14:02:00',0,0),(16,1,0,'RFID-1147786202','2023-03-18 12:23:07',_binary '','','2023-03-18',1,'13:23:00','13:26:00',3,0),(17,1,0,'RFID-1147786202','2023-03-18 12:33:05',_binary '','','2023-03-18',1,'13:33:00','13:34:00',1,0),(18,1,0,'RFID-1147786202','2023-03-18 12:36:42',_binary '','','2023-03-18',1,'13:36:00','13:37:00',1,0),(19,1,0,'RFID-1147786202','2023-03-18 12:44:10',_binary '','','2023-03-18',1,'13:44:00','13:44:00',0,0),(33,1,0,'vantu7849@gmail.com','2023-03-18 20:39:52',_binary '','FULLDAY','2023-03-16',1,NULL,NULL,480,1),(20,1,0,'RFID-1147786202','2023-03-18 12:45:26',_binary '','','2023-03-18',1,'13:45:00','13:48:00',3,0),(21,1,0,'RFID-1147786202','2023-03-18 12:49:05',_binary '','','2023-03-18',1,'13:49:00','13:50:00',1,0),(22,1,0,'RFID-1147786202','2023-03-18 12:52:09',_binary '','','2023-03-18',1,'13:52:00','13:53:00',1,0),(23,1,0,'RFID-1147786202','2023-03-18 13:00:56',_binary '','','2023-03-18',1,'14:00:00','14:01:00',1,0),(24,1,0,'vantu7849@gmail.com','2023-03-18 13:02:29',_binary '',NULL,'2023-03-18',1,'01:00:00','06:00:00',300,0),(26,1,0,'RFID-1147786202','2023-03-18 13:03:21',_binary '','','2023-03-18',1,'14:03:00','14:04:00',1,0),(27,1,0,'RFID-1147786202','2023-03-18 13:07:20',_binary '\0','','2023-03-18',0,'14:07:00',NULL,0,0),(28,1,0,'vantu7849@gmail.com','2023-03-18 20:20:10',_binary '','HALFDAY','2023-03-16',1,NULL,NULL,240,1),(29,1,0,'vantu7849@gmail.com','2023-03-18 20:20:10',_binary '','HALFDAY','2023-03-16',1,NULL,NULL,240,1),(30,1,0,'vantu7849@gmail.com','2023-03-18 20:20:10',_binary '','HALFDAY','2023-03-17',1,NULL,NULL,240,1),(31,1,0,'vantu7849@gmail.com','2023-03-18 20:20:10',_binary '','HALFDAY','2023-03-18',1,NULL,NULL,240,1),(32,1,0,'vantu7849@gmail.com','2023-03-18 20:39:52',_binary '','FULLDAY','2023-03-16',1,NULL,NULL,480,1),(34,1,0,'vantu7849@gmail.com','2023-03-18 20:39:52',_binary '','FULLDAY','2023-03-17',1,NULL,NULL,480,1),(35,1,0,'vantu7849@gmail.com','2023-03-18 20:39:52',_binary '','FULLDAY','2023-03-18',1,NULL,NULL,480,1),(36,1,0,'vantu7849@gmail.com','2023-03-18 20:39:52',_binary '','FULLDAY','2023-03-19',1,NULL,NULL,480,1),(37,1,1,'vantu7849@gmail.com','2023-03-18 20:39:52',_binary '','FULLDAY','2023-03-20',1,NULL,NULL,480,1),(38,1,1,'vantu7849@gmail.com','2023-03-18 20:39:52',_binary '','FULLDAY','2023-03-21',1,NULL,NULL,480,1),(39,1,1,'vantu7849@gmail.com','2023-03-18 20:40:33',_binary '','FULLDAY','2023-03-24',1,NULL,NULL,480,1),(40,1,0,'vantu7849@gmail.com','2023-03-18 20:40:51',_binary '','FULLDAY','2023-03-26',1,NULL,NULL,480,1),(41,1,0,'vantu7849@gmail.com','2023-03-18 20:40:51',_binary '','FULLDAY','2023-03-26',1,NULL,NULL,480,1),(43,1,1,'RFID-1147786202','2023-03-19 09:47:44',_binary '','','2023-03-19',1,'10:47:00','10:47:00',0,0),(42,1,1,'vantu7849@gmail.com','2023-03-18 20:40:51',_binary '','FULLDAY','2023-03-27',1,NULL,NULL,480,1),(44,1,1,'RFID-1147786202','2023-03-19 09:48:05',_binary '','','2023-03-19',1,'10:48:00','10:48:00',0,0),(45,1,1,'RFID-1147786202','2023-03-19 09:49:24',_binary '','','2023-03-19',1,'10:49:00','11:06:00',17,0),(46,1,0,'vantu7849@gmail.com','2023-03-19 10:03:47',_binary '','FULLDAY','2023-03-20',1,NULL,NULL,480,1),(47,1,1,'RFID-1147786202','2023-03-19 10:07:12',_binary '','','2023-03-19',1,'11:07:00','11:07:00',0,0),(48,1,1,'RFID-1147786202','2023-03-19 10:21:25',_binary '','','2023-03-19',1,'11:21:00','21:03:00',582,0),(49,1,1,'RFID-1147786202','2023-03-19 20:03:44',_binary '','','2023-03-19',1,'21:03:00','21:04:00',1,0),(50,1,1,'RFID-1147786202','2023-03-19 20:06:18',_binary '','','2023-03-19',1,'21:06:00','21:06:00',0,0),(51,1,1,'RFID-1147786202','2023-03-19 20:06:39',_binary '\0','','2023-03-19',0,'21:06:00',NULL,0,0),(52,1,1,'RFID-1147786202','2023-03-25 20:11:48',_binary '','','2023-03-25',1,'21:11:00','21:11:00',0,0),(53,1,1,'RFID-1147786202','2023-03-25 20:12:03',_binary '','','2023-03-25',1,'21:12:00','21:12:00',0,0),(54,1,1,'RFID-1147786202','2023-03-25 20:12:27',_binary '','','2023-03-25',1,'21:12:00','21:12:00',0,0),(55,1,1,'RFID-1147786202','2023-03-25 20:22:20',_binary '','','2023-03-25',1,'21:22:00','21:22:00',0,0),(56,1,1,'RFID-1147786202','2023-03-25 20:34:58',_binary '','','2023-03-25',1,'21:34:00','21:35:00',1,0),(57,1,1,'RFID-1147786202','2023-03-25 21:41:11',_binary '','','2023-03-25',1,'22:41:00','22:41:00',0,0),(58,1,1,'RFID-1147786202','2023-03-25 21:41:26',_binary '','','2023-03-25',1,'22:41:00','22:41:00',0,0),(59,1,1,'RFID-1147786202','2023-03-25 21:42:04',_binary '','','2023-03-25',1,'22:42:00','22:42:00',0,0),(60,1,1,'RFID-1147786202','2023-03-25 21:42:12',_binary '\0','','2023-03-25',0,'22:42:00',NULL,0,0),(61,1,1,'RFID-1147786202','2023-03-27 10:38:09',_binary '','','2023-03-27',1,'12:38:00','12:53:00',15,0),(62,1,1,'RFID-1147786202','2023-03-31 11:29:11',_binary '','','2023-03-31',1,'13:29:00','22:17:00',528,0),(63,1,1,'RFID-1147786202','2023-03-31 20:17:47',_binary '','','2023-03-31',1,'22:17:00','22:18:00',1,0),(64,1,1,'RFID-1147786202','2023-03-31 20:29:45',_binary '','','2023-03-31',1,'22:29:00','22:31:00',2,0),(65,1,1,'RFID-1147786202','2023-03-31 20:33:21',_binary '','','2023-03-31',1,'22:33:00','22:34:00',1,0),(66,1,1,'RFID-1147786202','2023-03-31 20:35:27',_binary '','','2023-03-31',1,'22:35:00','22:38:00',3,0),(67,1,1,'RFID-1147786202','2023-03-31 20:39:46',_binary '','','2023-03-31',1,'22:39:00','22:42:00',3,0),(68,1,1,'RFID-1147786202','2023-03-31 20:42:26',_binary '','','2023-03-31',1,'22:42:00','22:43:00',1,0),(69,1,1,'RFID-1147786202','2023-03-31 20:59:19',_binary '','','2023-03-31',1,'22:59:00','23:00:00',1,0),(70,1,1,'RFID-1147786202','2023-04-01 15:34:56',_binary '','','2023-04-01',1,'17:34:00','17:35:00',1,0),(71,1,1,'RFID-1147786202','2023-04-01 15:35:37',_binary '','','2023-04-01',1,'17:35:00','17:35:00',0,0),(72,1,1,'RFID-1147786202','2023-04-01 15:36:32',_binary '','','2023-04-01',1,'17:36:00','17:36:00',0,0),(73,1,1,'RFID-1147786202','2023-04-01 15:36:58',_binary '','','2023-04-01',1,'17:36:00','17:37:00',1,0),(74,1,1,'RFID-1147786202','2023-04-01 15:37:15',_binary '','','2023-04-01',1,'17:37:00','17:37:00',0,0),(75,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:01',_binary '',NULL,'2023-04-01',1,'08:00:00','12:00:00',240,0),(76,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:04',_binary '',NULL,'2023-04-01',1,'08:00:00','12:00:00',240,0),(77,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:06',_binary '',NULL,'2023-04-01',1,'08:00:00','12:00:00',240,0),(78,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:17',_binary '',NULL,'2023-04-01',1,'08:00:00','12:00:00',240,0),(79,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:27',_binary '',NULL,'2023-04-07',1,'08:00:00','12:04:00',244,0),(80,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:28',_binary '',NULL,'2023-04-07',1,'08:00:00','12:04:00',244,0),(81,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:28',_binary '',NULL,'2023-04-07',1,'08:00:00','12:04:00',244,0),(82,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:28',_binary '',NULL,'2023-04-07',1,'08:00:00','12:04:00',244,0),(83,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:28',_binary '',NULL,'2023-04-07',1,'08:00:00','12:04:00',244,0),(84,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:29',_binary '',NULL,'2023-04-07',1,'08:00:00','12:04:00',244,0),(85,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:29',_binary '',NULL,'2023-04-07',1,'08:00:00','12:04:00',244,0),(86,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:29',_binary '',NULL,'2023-04-07',1,'08:00:00','12:04:00',244,0),(87,4,0,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:31',_binary '',NULL,'2023-04-07',1,'08:00:00','12:04:00',244,0),(88,4,1,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:59',_binary '',NULL,'2023-04-06',1,'08:00:00','12:04:00',244,0),(89,4,1,'chitam.tran@tcg-itsystems.de','2023-04-04 10:42:59',_binary '',NULL,'2023-04-06',1,'01:00:00','07:00:00',360,0),(90,1,1,'RFID-1147786202','2023-04-04 10:45:47',_binary '','','2023-04-04',1,'12:45:00','12:45:00',0,0),(91,1,1,'RFID-1147786202','2023-04-04 10:46:03',_binary '','','2023-04-04',1,'12:46:00','12:46:00',0,0),(92,1,1,'RFID-1147786202','2023-04-04 10:48:08',_binary '','','2023-04-04',1,'12:48:00','12:48:00',0,0),(93,4,0,'chitam.tran@tcg-itsystems.de','2023-04-12 15:00:18',_binary '',NULL,'2023-04-07',1,'04:00:00','11:00:00',420,0),(94,4,0,'chitam.tran@tcg-itsystems.de','2023-04-12 15:00:22',_binary '',NULL,'2023-04-07',1,'04:00:00','11:00:00',420,0),(95,4,0,'chitam.tran@tcg-itsystems.de','2023-04-12 15:00:27',_binary '',NULL,'2023-04-07',1,'04:00:00','11:00:00',420,0),(96,4,0,'chitam.tran@tcg-itsystems.de','2023-04-12 15:00:35',_binary '',NULL,'2023-04-07',1,'04:00:00','11:00:00',420,0),(97,4,0,'chitam.tran@tcg-itsystems.de','2023-04-12 15:00:45',_binary '',NULL,'2023-04-07',1,'04:00:00','11:00:00',420,0),(98,4,0,'chitam.tran@tcg-itsystems.de','2023-04-12 15:00:45',_binary '',NULL,'2023-04-07',1,'04:00:00','11:00:00',420,0),(99,4,0,'chitam.tran@tcg-itsystems.de','2023-04-12 15:00:46',_binary '',NULL,'2023-04-07',1,'04:00:00','11:00:00',420,0),(100,4,0,'chitam.tran@tcg-itsystems.de','2023-04-12 15:00:46',_binary '',NULL,'2023-04-07',1,'04:00:00','11:00:00',420,0),(101,1,1,'RFID-1147786202','2023-04-17 08:27:27',_binary '','','2023-04-17',1,'10:27:00','10:27:00',0,0),(102,1,1,'RFID-1147786202','2023-04-17 08:28:15',_binary '','','2023-04-17',1,'10:28:00','10:37:00',9,0),(103,1,1,'RFID-1147786202','2023-04-17 08:40:38',_binary '','','2023-04-17',1,'10:40:00','10:40:00',0,0),(104,1,1,'RFID-1147786202','2023-04-17 08:43:28',_binary '','','2023-04-17',1,'10:43:00','10:48:00',5,0),(105,5,1,'RFID-1148070010','2023-04-17 08:55:56',_binary '','','2023-04-17',1,'10:55:00','10:57:00',2,0),(106,1,1,'RFID-1147786202','2023-04-17 09:21:12',_binary '','','2023-04-17',1,'11:21:00','11:21:00',0,0),(107,1,1,'RFID-1147786202','2023-04-17 09:22:19',_binary '','','2023-04-17',1,'11:22:00','11:22:00',0,0),(108,5,1,'RFID-1148070010','2023-04-17 10:01:18',_binary '','','2023-04-17',1,'12:01:00','12:01:00',0,0),(109,5,1,'RFID-1148070010','2023-04-17 10:01:54',_binary '','','2023-04-17',1,'12:01:00','12:02:00',1,0),(110,5,1,'RFID-1148070010','2023-04-17 11:11:06',_binary '','','2023-04-17',1,'13:11:00','13:11:00',0,0),(111,5,1,'RFID-1148070010','2023-04-17 11:26:44',_binary '','','2023-04-17',1,'13:26:00','13:27:00',1,0),(112,5,1,'RFID-1148070010','2023-04-17 11:28:39',_binary '','','2023-04-17',1,'13:28:00','13:28:00',0,0),(113,5,1,'RFID-1148070010','2023-04-17 11:29:31',_binary '','','2023-04-17',1,'13:29:00','13:29:00',0,0),(114,5,1,'RFID-1148070010','2023-04-17 14:26:07',_binary '','','2023-04-17',1,'16:26:00','16:26:00',0,0),(115,1,1,'RFID-1147786202','2023-04-17 14:31:33',_binary '','','2023-04-17',1,'16:31:00','16:31:00',0,0),(116,6,1,'RFID-1285445674','2023-04-17 14:32:09',_binary '','','2023-04-17',1,'16:32:00','16:32:00',0,0),(117,5,1,'RFID-1148070010','2023-04-18 07:00:49',_binary '','','2023-04-18',1,'09:00:00','15:53:00',413,0),(118,7,0,'RFID-1148688730','2023-04-18 13:37:49',_binary '\0','','2023-04-18',0,'15:37:00',NULL,0,0),(119,8,1,'RFID-1285311594','2023-04-18 13:41:12',_binary '','','2023-04-18',1,'15:41:00','15:41:00',0,0),(120,9,1,'RFID-1138653498','2023-04-18 13:47:14',_binary '','','2023-04-18',1,'15:46:00','15:47:00',1,0),(121,10,1,'RFID-1139571994','2023-04-18 13:51:26',_binary '','','2023-04-18',1,'15:51:00','15:51:00',0,0),(122,5,1,'RFID-1148070010','2023-04-18 15:38:58',_binary '','','2023-04-18',1,'17:38:00','17:39:00',1,0),(123,9,1,'RFID-1138653498','2023-04-19 06:58:34',_binary '','','2023-04-19',1,'08:58:00','17:56:00',538,0),(124,10,1,'RFID-1139571994','2023-04-19 06:58:39',_binary '','','2023-04-19',1,'08:58:00','16:23:00',445,0),(125,5,1,'RFID-1148070010','2023-04-19 06:58:45',_binary '','','2023-04-19',1,'08:58:00','17:51:00',533,0),(126,6,1,'RFID-1285445674','2023-04-19 06:59:06',_binary '','','2023-04-19',1,'08:59:00','17:54:00',535,0),(127,8,1,'RFID-1285311594','2023-04-19 07:05:21',_binary '','','2023-04-19',1,'09:05:00','16:39:00',454,0),(128,7,0,'RFID-1148688730','2023-04-19 07:24:27',_binary '','','2023-04-19',1,'09:24:00','09:24:00',0,0),(129,7,0,'RFID-1148688730','2023-04-19 07:24:41',_binary '','','2023-04-19',1,'09:24:00','16:01:00',397,0),(130,10,1,'RFID-1139571994','2023-04-20 07:00:29',_binary '','','2023-04-20',1,'09:00:00','16:04:00',424,0),(131,6,1,'RFID-1285445674','2023-04-20 07:00:46',_binary '\0','','2023-04-20',0,'09:00:00',NULL,0,0),(132,5,1,'RFID-1148070010','2023-04-20 07:18:17',_binary '','','2023-04-20',1,'09:18:00','17:50:00',512,0),(133,7,0,'RFID-1148688730','2023-04-20 07:19:24',_binary '','','2023-04-20',1,'09:19:00','15:26:00',367,0),(134,8,1,'RFID-1285311594','2023-04-20 08:41:31',_binary '','','2023-04-20',1,'10:41:00','18:41:00',480,0),(135,5,1,'RFID-1148070010','2023-04-21 07:01:30',_binary '','','2023-04-21',1,'09:01:00','18:07:00',546,0),(136,8,1,'RFID-1285311594','2023-04-21 07:01:48',_binary '','','2023-04-21',1,'09:01:00','16:36:00',455,0),(137,6,1,'RFID-1285445674','2023-04-21 07:02:06',_binary '','','2023-04-21',1,'09:02:00','09:02:00',0,0),(138,6,1,'RFID-1285445674','2023-04-21 07:02:23',_binary '','','2023-04-21',1,'09:02:00','18:07:00',545,0),(139,7,0,'RFID-1148688730','2023-04-21 07:14:52',_binary '','','2023-04-21',1,'09:14:00','14:00:00',286,0),(140,8,1,'RFID-1285311594','2023-04-24 06:58:29',_binary '','','2023-04-24',1,'08:58:00','17:15:00',497,0),(141,5,1,'RFID-1148070010','2023-04-24 06:58:38',_binary '','','2023-04-24',1,'08:58:00','17:51:00',533,0),(142,6,1,'RFID-1285445674','2023-04-24 06:58:55',_binary '','','2023-04-24',1,'08:58:00','17:52:00',534,0),(143,7,1,'RFID-1148688730','2023-04-24 07:08:01',_binary '','','2023-04-24',1,'09:08:00','16:00:00',412,0),(144,9,1,'RFID-1138653498','2023-04-24 07:11:23',_binary '','','2023-04-24',1,'09:11:00','17:55:00',524,0),(145,10,1,'RFID-1139571994','2023-04-24 07:11:37',_binary '','','2023-04-24',1,'09:11:00','16:25:00',434,0),(146,11,1,'RFID-1138592410','2023-04-24 11:06:45',_binary '\0','','2023-04-24',0,'13:06:00',NULL,0,0),(147,5,1,'RFID-1148070010','2023-04-25 07:00:52',_binary '','','2023-04-25',1,'09:00:00','17:46:00',526,0),(148,7,1,'RFID-1148688730','2023-04-25 07:02:24',_binary '','','2023-04-25',1,'09:02:00','16:00:00',418,0),(149,9,1,'RFID-1138653498','2023-04-25 07:03:41',_binary '','','2023-04-25',1,'09:03:00','17:56:00',533,0),(150,6,1,'RFID-1285445674','2023-04-25 07:11:58',_binary '','','2023-04-25',1,'09:11:00','17:52:00',521,0),(151,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:17',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(152,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:18',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(153,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:19',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(154,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:21',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(155,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:21',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(156,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:22',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(157,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:22',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(158,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:22',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(159,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:22',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(160,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:22',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(161,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:23',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(162,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:24',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(163,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:24',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(164,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:24',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(165,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:24',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(166,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:25',_binary '',NULL,'2023-04-02',1,'09:30:00','16:00:00',390,0),(167,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:38',_binary '',NULL,'2023-04-03',1,'09:30:00','16:00:00',390,0),(168,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:38',_binary '',NULL,'2023-04-03',1,'09:30:00','16:00:00',390,0),(169,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:25:38',_binary '',NULL,'2023-04-03',1,'09:30:00','16:00:00',390,0),(170,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:50:55',_binary '',NULL,'2023-04-03',1,'09:30:00','16:00:00',390,0),(171,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 07:50:55',_binary '',NULL,'2023-04-03',1,'09:30:00','16:00:00',390,0),(172,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:50:55',_binary '',NULL,'2023-04-03',1,'09:30:00','16:00:00',390,0),(173,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:50:55',_binary '',NULL,'2023-04-03',1,'09:30:00','16:00:00',390,0),(174,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 07:54:03',_binary '',NULL,'2023-04-04',1,'09:30:00','16:00:00',390,0),(175,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 07:55:56',_binary '',NULL,'2023-04-05',1,'09:30:00','16:00:00',390,0),(176,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 07:57:22',_binary '',NULL,'2023-04-06',1,'09:30:00','16:00:00',390,0),(177,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:57:34',_binary '',NULL,'2023-04-07',1,'09:30:00','16:00:00',390,0),(178,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:57:40',_binary '',NULL,'2023-04-08',1,'09:30:00','16:00:00',390,0),(179,7,0,'phuong.vu@tcg-marketing.de','2023-04-25 07:57:48',_binary '',NULL,'2023-04-09',1,'09:30:00','16:00:00',390,0),(180,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 07:58:44',_binary '',NULL,'2023-04-10',1,'09:30:00','16:00:00',390,0),(181,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 08:00:32',_binary '',NULL,'2023-04-07',1,'09:30:00','14:00:00',270,0),(182,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 08:02:58',_binary '',NULL,'2023-04-11',1,'09:30:00','16:00:00',390,0),(183,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 08:03:05',_binary '',NULL,'2023-04-12',1,'09:30:00','16:00:00',390,0),(184,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 08:03:11',_binary '',NULL,'2023-04-13',1,'09:30:00','16:00:00',390,0),(185,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 08:03:37',_binary '',NULL,'2023-04-14',1,'09:30:00','13:30:00',240,0),(186,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 08:04:25',_binary '',NULL,'2023-04-17',1,'09:30:00','16:00:00',390,0),(187,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 08:04:33',_binary '',NULL,'2023-04-18',1,'09:30:00','16:00:00',390,0),(188,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 08:04:40',_binary '',NULL,'2023-04-19',1,'09:30:00','16:00:00',390,0),(189,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 08:04:46',_binary '',NULL,'2023-04-20',1,'09:30:00','16:00:00',390,0),(190,7,1,'phuong.vu@tcg-marketing.de','2023-04-25 08:05:12',_binary '',NULL,'2023-04-21',1,'09:30:00','14:00:00',270,0),(191,8,1,'RFID-1285311594','2023-04-25 09:59:21',_binary '','','2023-04-25',1,'11:59:00','18:31:00',392,0),(192,10,1,'RFID-1139571994','2023-04-26 06:58:45',_binary '','','2023-04-26',1,'08:58:00','16:04:00',426,0),(193,5,1,'RFID-1148070010','2023-04-26 06:58:58',_binary '','','2023-04-26',1,'08:58:00','18:00:00',542,0),(194,6,1,'RFID-1285445674','2023-04-26 06:59:49',_binary '','','2023-04-26',1,'08:59:00','18:00:00',541,0),(195,9,1,'RFID-1138653498','2023-04-26 07:02:21',_binary '','','2023-04-26',1,'09:02:00','18:01:00',539,0),(196,8,1,'RFID-1285311594','2023-04-26 07:08:53',_binary '','','2023-04-26',1,'09:08:00','16:57:00',469,0),(197,7,1,'RFID-1148688730','2023-04-26 07:14:03',_binary '','','2023-04-26',1,'09:14:00','16:00:00',406,0),(198,10,1,'RFID-1139571994','2023-04-27 06:58:22',_binary '','','2023-04-27',1,'08:58:00','16:37:00',459,0),(199,5,1,'RFID-1148070010','2023-04-27 06:58:33',_binary '','','2023-04-27',1,'08:58:00','17:56:00',538,0),(200,6,1,'RFID-1285445674','2023-04-27 06:58:42',_binary '','','2023-04-27',1,'08:58:00','17:57:00',539,0),(201,8,1,'RFID-1285311594','2023-04-27 07:03:40',_binary '','','2023-04-27',1,'09:03:00','17:01:00',478,0),(202,9,1,'RFID-1138653498','2023-04-27 07:03:54',_binary '','','2023-04-27',1,'09:03:00','17:57:00',534,0),(203,7,0,'RFID-1148688730','2023-04-27 07:14:48',_binary '\0','','2023-04-27',0,'09:14:00',NULL,0,0),(215,13,0,'tutai787878@gmail.com','2023-04-27 19:13:08',_binary '',NULL,'2023-04-02',1,'00:00:00','05:00:00',300,0),(214,13,0,'tutai787878@gmail.com','2023-04-27 19:12:36',_binary '',NULL,'2023-04-02',1,'00:00:00','00:00:00',0,0),(213,13,0,'tutai787878@gmail.com','2023-04-27 18:45:59',_binary '',NULL,'2023-04-01',1,'07:00:00','13:00:00',360,0),(212,13,0,'tutai787878@gmail.com','2023-04-27 18:43:56',_binary '',NULL,'2023-04-01',1,'07:00:00','13:00:00',360,0),(216,1,0,'vantu7849@gmail.com','2023-04-27 19:13:50',_binary '',NULL,'2023-04-02',1,'00:00:00','07:00:00',420,0),(217,1,0,'vantu7849@gmail.com','2023-04-27 19:25:44',_binary '',NULL,'2023-04-02',1,'00:00:00','07:00:00',420,0),(218,13,0,'tutai787878@gmail.com','2023-04-27 19:40:50',_binary '',NULL,'2023-04-01',1,'00:00:00','06:00:00',360,0),(219,13,0,'tutai787878@gmail.com','2023-04-27 19:40:58',_binary '',NULL,'2023-04-01',1,'00:00:00','06:00:00',360,0),(220,13,0,'tutai787878@gmail.com','2023-04-27 19:42:43',_binary '',NULL,'2023-04-01',1,'06:00:00','09:00:00',180,0),(221,13,0,'tutai787878@gmail.com','2023-04-27 19:48:50',_binary '',NULL,'2023-04-04',1,'09:00:00','13:00:00',240,0),(222,6,1,'RFID-1285445674','2023-04-28 06:57:00',_binary '','','2023-04-28',1,'08:56:00','17:57:00',541,0),(223,5,1,'RFID-1148070010','2023-04-28 07:00:38',_binary '','','2023-04-28',1,'09:00:00','17:57:00',537,0),(224,9,1,'RFID-1138653498','2023-04-28 07:00:47',_binary '','','2023-04-28',1,'09:00:00','17:58:00',538,0),(225,8,1,'RFID-1285311594','2023-04-28 07:03:23',_binary '\0','','2023-04-28',0,'09:03:00',NULL,0,0),(226,7,0,'RFID-1148688730','2023-04-28 07:14:14',_binary '','','2023-04-28',1,'09:14:00','09:14:00',0,0),(227,7,0,'RFID-1148688730','2023-04-28 07:14:31',_binary '','','2023-04-28',1,'09:14:00','15:03:00',349,0),(228,14,0,'ppbao10@gmail.com','2023-04-28 18:55:38',_binary '',NULL,'2023-04-01',1,'00:00:00','07:00:00',420,0),(229,14,1,'ppbao10@gmail.com','2023-04-29 07:50:50',_binary '',NULL,'2023-04-03',1,'07:00:00','14:00:00',420,0),(230,5,1,'RFID-1148070010','2023-05-02 06:58:49',_binary '','','2023-05-02',1,'08:58:00','17:58:00',540,0),(231,9,1,'RFID-1138653498','2023-05-02 06:58:57',_binary '','','2023-05-02',1,'08:58:00','17:59:00',541,0),(232,6,1,'RFID-1285445674','2023-05-02 06:59:44',_binary '','','2023-05-02',1,'08:59:00','17:59:00',540,0),(233,7,1,'RFID-1148688730','2023-05-02 07:12:48',_binary '','','2023-05-02',1,'09:12:00','16:04:00',412,0),(234,8,1,'RFID-1285311594','2023-05-02 07:15:17',_binary '','','2023-05-02',1,'09:15:00','09:15:00',0,0),(235,8,1,'RFID-1285311594','2023-05-02 07:15:30',_binary '','','2023-05-02',1,'09:15:00','16:52:00',457,0),(236,7,1,'phuong.vu@tcg-marketing.de','2023-05-02 07:18:51',_binary '',NULL,'2023-04-27',1,'09:14:00','16:00:00',406,0),(237,7,1,'phuong.vu@tcg-marketing.de','2023-05-02 07:19:34',_binary '',NULL,'2023-04-28',1,'09:14:00','15:03:00',349,0),(238,10,1,'RFID-1139571994','2023-05-03 06:58:58',_binary '\0','','2023-05-03',0,'08:58:00',NULL,0,0),(239,9,1,'RFID-1138653498','2023-05-03 06:59:07',_binary '\0','','2023-05-03',0,'08:59:00',NULL,0,0),(240,6,1,'RFID-1285445674','2023-05-03 06:59:36',_binary '\0','','2023-05-03',0,'08:59:00',NULL,0,0),(241,8,1,'RFID-1285311594','2023-05-03 07:00:09',_binary '\0','','2023-05-03',0,'09:00:00',NULL,0,0),(242,5,1,'RFID-1148070010','2023-05-03 07:05:50',_binary '\0','','2023-05-03',0,'09:05:00',NULL,0,0),(243,7,1,'RFID-1148688730','2023-05-03 07:13:43',_binary '','','2023-05-03',1,'09:13:00','16:04:00',411,0),(244,11,1,'RFID-1138592410','2023-05-03 07:25:26',_binary '\0','','2023-05-03',0,'09:25:00',NULL,0,0);
/*!40000 ALTER TABLE `time_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_detail`
--

DROP TABLE IF EXISTS `user_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_detail` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `insurance_number` varchar(255) DEFAULT NULL,
  `insurance_provider` varchar(255) DEFAULT NULL,
  `passport` varchar(255) DEFAULT NULL,
  `renten_number` varchar(255) DEFAULT NULL,
  `residence_permit` varchar(255) DEFAULT NULL,
  `residence_permit_date` varchar(255) DEFAULT NULL,
  `tax_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_detail`
--

LOCK TABLES `user_detail` WRITE;
/*!40000 ALTER TABLE `user_detail` DISABLE KEYS */;
INSERT INTO `user_detail` VALUES (1,'','',NULL,NULL,'vantu7849@gmail.com','Van Tu',NULL,'Nguyen',NULL,'123','AOK','123','123','LIMIT','01.10.2023','123'),(2,'','','','','adasa','adasdasdasd','','aaaa','2222',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'','','','','waas','aaa','','aaa','222',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'','','','','waas','aaa','','aaa','222',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'','','','','david.nguyen@tcg-marketing.de','David','','Nguyen','0000',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'','','','','chitam.tran@tcg-itsystems.de','Chi Tam','','Tran','22222',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'','','','','david.nguyen@tcg-marketing.de','David','','Nguyen','0000',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'','','','','hieu.cao@tcg-marketing.de','Hieu','','Cao','015904893356',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,'','','','','phuong.vu@tcg-marketing.de','Phuong','','Vu','0000',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,'','','','','ngoc.dao@tcg-marketing.de','Ngoc','','Dao','0000',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,'Bornitzstr. 80D, 10365 Berlin','',NULL,NULL,'thuan.nguyen@tcg-marketing.de','Phuc Thuan',NULL,'Nguyen','01639884037',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,'','','','','ngoc.giang@tcg-marketing.de','Bich Ngoc','','Giang','0000',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,'','','','','phuong.do@tcg-marketing.de','Phuong ','','Do','0000',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'','','','','tutai787878@gmail.com','Test 2','','Nguyen',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'','','','','tutai787878@gmail.com','Test 2','','Nguyen',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,'1212','',NULL,NULL,'ppbao10@gmail.com','Test3',NULL,'Nguyen','123',NULL,NULL,NULL,NULL,NULL,NULL,'1212');
/*!40000 ALTER TABLE `user_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `white_list`
--

DROP TABLE IF EXISTS `white_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `white_list` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ipv4` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `white_list`
--

LOCK TABLES `white_list` WRITE;
/*!40000 ALTER TABLE `white_list` DISABLE KEYS */;
INSERT INTO `white_list` VALUES (31,'89.204.138.184','10369, Berlin, Land Berlin, Germany','vantu7849@gmail.com'),(30,'80.135.122.84','80796, Munich, Bavaria, Germany','vantu7849@gmail.com'),(28,'84.163.190.22','84347, Pfarrkirchen, Bavaria, Germany','vantu7849@gmail.com'),(29,'62.216.209.244','90571, Schwaig, Bavaria, Germany','chitam.tran@tcg-itsystems.de'),(34,'2.202.71.23','null, null, null, Germany','phuong.vu@tcg-marketing.de'),(32,'82.113.99.5','60389, Frankfurt am Main, Hesse, Germany','vantu7849@gmail.com'),(33,'138.246.3.251','80796, Munich, Bavaria, Germany','vantu7849@gmail.com'),(36,'46.114.149.103','null, null, null, Germany',NULL),(35,'138.246.3.248','80796, Munich, Bavaria, Germany',NULL);
/*!40000 ALTER TABLE `white_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `working_time`
--

DROP TABLE IF EXISTS `working_time`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `working_time` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `account_id` bigint DEFAULT NULL,
  `break_time` int DEFAULT NULL,
  `day_of_week` int DEFAULT NULL,
  `time_from` time DEFAULT NULL,
  `time_to` time DEFAULT NULL,
  `total` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `working_time`
--

LOCK TABLES `working_time` WRITE;
/*!40000 ALTER TABLE `working_time` DISABLE KEYS */;
INSERT INTO `working_time` VALUES (1,1,30,1,'07:00:00','12:00:00',330),(2,2,30,1,'00:00:00','07:00:00',450),(3,2,33,2,'02:00:00','12:00:00',633),(4,3,10,1,'03:00:00','08:00:00',310),(5,4,30,1,'00:00:00','13:00:00',810),(6,5,60,1,'09:00:00','18:00:00',600),(7,5,60,2,'09:00:00','18:00:00',600),(8,5,60,3,'09:00:00','18:00:00',600),(9,5,60,4,'09:00:00','18:00:00',600),(10,5,60,5,'09:00:00','18:00:00',600),(11,6,60,1,'09:00:00','18:00:00',600),(12,6,60,2,'09:00:00','18:00:00',600),(13,6,60,3,'09:00:00','18:00:00',600),(14,6,60,4,'09:00:00','18:00:00',600),(15,6,60,5,'09:00:00','18:00:00',600),(16,7,30,1,'09:30:00','16:00:00',420),(17,7,30,2,'09:30:00','16:00:00',420),(18,7,30,3,'09:30:00','16:00:00',420),(19,7,30,4,'09:30:00','16:00:00',420),(20,7,30,5,'09:30:00','13:30:00',270),(21,8,60,1,'09:00:00','16:30:00',510),(22,8,60,2,'09:00:00','16:30:00',510),(23,8,60,3,'09:00:00','16:30:00',510),(24,8,60,4,'09:00:00','16:30:00',510),(25,8,60,5,'09:00:00','16:30:00',510),(26,9,60,1,'09:00:00','18:00:00',600),(27,9,60,2,'09:00:00','18:00:00',600),(28,9,60,3,'09:00:00','18:00:00',600),(29,9,60,4,'09:00:00','18:00:00',600),(30,9,60,5,'09:00:00','18:00:00',600),(31,10,60,1,'09:00:00','16:00:00',480),(32,10,60,2,'09:00:00','16:00:00',480),(33,10,60,3,'09:00:00','16:00:00',480),(34,10,60,4,'09:00:00','16:00:00',480),(35,10,60,5,'09:00:00','16:00:00',480),(36,11,60,1,'09:00:00','18:00:00',600),(37,11,60,2,'09:00:00','18:00:00',600),(38,11,60,3,'09:00:00','18:00:00',600),(39,11,60,4,'09:00:00','18:00:00',600),(40,11,60,5,'09:00:00','18:00:00',600);
/*!40000 ALTER TABLE `working_time` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-03 14:16:30
