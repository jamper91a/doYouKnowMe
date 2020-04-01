
-- -----------------------------------------------------
-- Table `doyouknowme`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `doyouknowme`.`user` ;

CREATE TABLE IF NOT EXISTS `doyouknowme`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  `name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `uuid` TEXT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `doyouknowme`.`quiz`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `doyouknowme`.`quiz` ;

CREATE TABLE IF NOT EXISTS `doyouknowme`.`quiz` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  `state` INT NULL COMMENT 'To know if the quiz has been finished',
  `user` INT NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `doyouknowme`.`question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `doyouknowme`.`question` ;

CREATE TABLE IF NOT EXISTS `doyouknowme`.`question` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  `question` VARCHAR(255) NULL,
  `image` TEXT NULL,
  `answer1` VARCHAR(255) NULL,
  `image1` TEXT NULL,
  `answer2` VARCHAR(255) NULL,
  `image2` TEXT NULL,
  `answer3` VARCHAR(255) NULL,
  `image3` TEXT NULL,
  `answer4` VARCHAR(255) NULL,
  `image4` TEXT NULL,
  `answer5` VARCHAR(255) NULL,
  `image5` TEXT NULL,
  `answer6` VARCHAR(255) NULL,
  `image6` TEXT NULL,
  `quiz` INT NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `doyouknowme`.`friend`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `doyouknowme`.`friend` ;

CREATE TABLE IF NOT EXISTS `doyouknowme`.`friend` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  `name` VARCHAR(45) NULL,
  `score` INT NULL,
  `questions` TEXT NULL COMMENT 'Questions already answered',
  `quiz` INT NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `doyouknowme`.`options`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `doyouknowme`.`options` ;

CREATE TABLE IF NOT EXISTS `doyouknowme`.`options` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(255) NULL,
  `answer1` VARCHAR(255) NULL,
  `answer2` VARCHAR(255) NULL,
  `answer3` VARCHAR(255) NULL,
  `answer4` VARCHAR(255) NULL,
  `answer5` VARCHAR(255) NULL,
  `answer6` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  `image` TEXT NULL,
  `image1` TEXT NULL,
  `image2` TEXT NULL,
  `image3` TEXT NULL,
  `image4` TEXT NULL,
  `image5` TEXT NULL,
  `image6` TEXT NULL,
  `lang` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Data for table `doyouknowme`.`options`
-- -----------------------------------------------------
START TRANSACTION;
USE `doyouknowme`;
INSERT INTO `doyouknowme`.`options` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answer5`, `answer6`, `createdAt`, `updatedAt`, `image`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `lang`) VALUES (DEFAULT, 'Mother name', NULL, NULL, NULL, NULL, NULL, NULL, '2020-03-31', '2020-03-31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `doyouknowme`.`options` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answer5`, `answer6`, `createdAt`, `updatedAt`, `image`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `lang`) VALUES (DEFAULT, 'Dad name', NULL, NULL, NULL, NULL, NULL, NULL, '2020-03-31', '2020-03-31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `doyouknowme`.`options` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answer5`, `answer6`, `createdAt`, `updatedAt`, `image`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `lang`) VALUES (DEFAULT, 'Favorite color', NULL, 'White', 'Black', 'Red', 'Blue', 'Green', '2020-03-31', '2020-03-31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `doyouknowme`.`options` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answer5`, `answer6`, `createdAt`, `updatedAt`, `image`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `lang`) VALUES (DEFAULT, 'Favorite season', NULL, 'Raining', 'Winter', 'Summer', 'Spring', 'Autum', '2020-03-31', '2020-03-31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `doyouknowme`.`options` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answer5`, `answer6`, `createdAt`, `updatedAt`, `image`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `lang`) VALUES (DEFAULT, 'In which city I was born?', NULL, NULL, NULL, NULL, NULL, NULL, '2020-03-31', '2020-03-31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `doyouknowme`.`options` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answer5`, `answer6`, `createdAt`, `updatedAt`, `image`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `lang`) VALUES (DEFAULT, 'Which is my favorite sport', NULL, 'Tennis', 'Futbol', 'Basketball', 'Beisbol', 'Rugby', '2020-03-31', '2020-03-31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `doyouknowme`.`options` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answer5`, `answer6`, `createdAt`, `updatedAt`, `image`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `lang`) VALUES (DEFAULT, 'Which country I want to travel?', NULL, 'Italy', 'France', 'EE.UU', 'Canada', 'Ireland', '2020-03-31', '2020-03-31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `doyouknowme`.`options` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answer5`, `answer6`, `createdAt`, `updatedAt`, `image`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `lang`) VALUES (DEFAULT, 'Favorite food', NULL, NULL, NULL, NULL, NULL, NULL, '2020-03-31', '2020-03-31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `doyouknowme`.`options` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answer5`, `answer6`, `createdAt`, `updatedAt`, `image`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `lang`) VALUES (DEFAULT, 'Favorite music band', NULL, NULL, NULL, NULL, NULL, NULL, '2020-03-31', '2020-03-31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `doyouknowme`.`options` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answer5`, `answer6`, `createdAt`, `updatedAt`, `image`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `lang`) VALUES (DEFAULT, 'Favorite movie', NULL, NULL, NULL, NULL, NULL, NULL, '2020-03-31', '2020-03-31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

COMMIT;

