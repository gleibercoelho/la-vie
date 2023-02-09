create database la_vie_saude_mental;
use la_vie_saude_mental;
CREATE TABLE `la_vie_saude_mental`.`psicologos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(70) NOT NULL,
  `apresentacao` VARCHAR(255) NOT NULL,
  `createdat` timestamp,
  `updatedat` timestamp,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);


CREATE TABLE `la_vie_saude_mental`.`pacientes` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `idade` DATE NOT NULL,
  `createdat` timestamp,
  `updatedat` timestamp,
  PRIMARY KEY (`id`));


CREATE TABLE `la_vie_saude_mental`.`atendimentos` (
  `id` INT UNSIGNED NOT NULL,
  `data_atendimento` DATETIME NOT NULL,
  `observação` VARCHAR(255) NOT NULL,
  `id_paciente` INT UNSIGNED NOT NULL,  
  `id_psicologo` INT NOT NULL,
  `createdat` timestamp,
  `updatedat` timestamp,
  PRIMARY KEY (`id`),
   CONSTRAINT `fk_id_paciente`
    FOREIGN KEY (`id_paciente`)
    REFERENCES `la_vie_saude_mental`.`pacientes` (`id`),
  CONSTRAINT `fk_id_psicologo`
    FOREIGN KEY (`id_psicologo`)
    REFERENCES `la_vie_saude_mental`.`psicologos` (`id`)
    );