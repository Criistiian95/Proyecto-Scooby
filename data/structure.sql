-- MySQL Script generated by MySQL Workbench
-- Thu Mar 23 10:59:49 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema structure
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema structure
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `structure` DEFAULT CHARACTER SET utf8 ;
USE `structure` ;

-- -----------------------------------------------------
-- Table `structure`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `structure`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `description` TEXT(100) NOT NULL,
  `imagen` BLOB NOT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `structure`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `structure`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ofert` TINYINT NOT NULL,
  `more_requests` TINYINT NOT NULL,
  `slider` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `structure`.`productos_has_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `structure`.`productos_has_categories` (
  `products_id` INT NOT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`products_id`, `categories_id`),
  INDEX `fk_products_has_categories_categories1_idx` (`categories_id` ASC),
  INDEX `fk_productos_has_categories_productos_idx` (`products_id` ASC),
  CONSTRAINT `fk_productos_has_categories_productos`
    FOREIGN KEY (`products_id`)
    REFERENCES `structure`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_has_categories_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `structure`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `structure`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `structure`.`Users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` TEXT(100) NOT NULL,
  `password` TEXT NOT NULL,
  `birthdate` DATETIME NOT NULL,
  `tel` INT NOT NULL,
  `pais` TEXT NOT NULL,
  `province` TEXT NOT NULL,
  `city` TEXT NULL,
  `postal_code` TEXT NULL,
  `street` TEXT NULL,
  `number` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;