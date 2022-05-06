/* 
UNIT 2:
COLUMNS FUNDAMENTALS 
*/
USE matias_sqlfundamentalscourse;

DROP TABLE contractors;

CREATE TABLE contractors(
  id INT(6) PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(300) NOT NULL,
  last_name VARCHAR(300) NOT NULL,
  hire_date DATE NOT NULL,
  contract_length INT(10) NOT NULL,
  hourly_wage FLOAT(6,2) NOT NULL,
  agency_id INT(6) NOT NULL,
  
  INDEX idx_agencyid (agency_id),
  CHECK (hourly_wage >= 10)
);

SHOW TABLES;
DESCRIBE contractors;

ALTER TABLE contractors
	ADD COLUMN phone_number VARCHAR(20) AFTER last_name;
    
ALTER TABLE contractors
	ADD COLUMN has_cdl BOOLEAN NOT NULL;
    
ALTER TABLE contractors
	CHANGE COLUMN has_cdl has_suscription BOOLEAN NOT NULL; 

ALTER TABLE contractors
  CHANGE COLUMN contract_length contract_length_days INT(10) NOT NULL AFTER hire_date;

ALTER TABLE contractors
  ADD COLUMN name VARCHAR(300) NOT NULL AFTER id;

  DESCRIBE contractors;
