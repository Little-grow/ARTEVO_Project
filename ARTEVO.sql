--DROP DATABASE ARTEVO; 

CREATE DATABASE ARTEVO; 

CREATE TABLE Files(
	FileId INT IDENTITY(1,1) PRIMARY KEY,
	FileName VARCHAR(255),
	FileType  VARCHAR(10),
	URL NVARCHAR(255) NOT NULL, 
	Size int
);

ALTER TABLE Files
	ALTER COLUMN Size INT NOT NULL;

CREATE TABLE Artists(
	Bio NVARCHAR(100), 

	UserId INT IDENTITY(1,1) PRIMARY KEY, 
	FirstName Varchar(50) NOT NULL, 
	LastName Varchar(50) NOT NULL, 
	Email NVARCHAR(255) NOT NULL, 
	PhoneNumber VARCHAR(20) NOT NULL, 
	Verified Bit NOT NULL, 
	ProfilePictureId INT FOREIGN KEY(ProfilePictureId) REFERENCES Files(FileId)
);

CREATE TABLE Collectors(
	BillingAddress VARCHAR(255),
	PaymentMethod NVARCHAR(50), 

	UserId INT IDENTITY(1,1) PRIMARY KEY, 
	FirstName Varchar(50) NOT NULL, 
	LastName Varchar(50) NOT NULL, 
	Email NVARCHAR(255) NOT NULL, 
	PhoneNumber VARCHAR(20) NOT NULL, 
	Verified Bit NOT NULL, 
	ProfilePictureId INT FOREIGN KEY(ProfilePictureId) REFERENCES Files(FileId)
);


EXEC sp_rename 'Collectors.UserId', 'Id';
EXEC sp_rename 'Artists.UserId','Id';

CREATE TABLE Collectors_Artists(
	Id INT IDENTITY(1,1) PRIMARY KEY, 
	CollectorId INT FOREIGN KEY(CollectorId) REFERENCES Collectors(Id),
	ArtistId INT FOREIGN KEY(ArtistId) REFERENCES Artists(Id), 
); 

INSERT INTO Artists (Bio, FirstName, LastName, Email, PhoneNumber, Verified, ProfilePictureId)
VALUES
  ('Passionate painter known for vibrant colors.', 'John', 'Doe', 'john.doe@art.com', '+1234567890', 1, 1),
  ('Experienced sculptor specializing in bronze figures.', 'Jane', 'Smith', 'jane.smith@art.com', '+9876543210', 1, 2),
  ('Emerging photographer with a unique perspective.', 'Michael', 'Chen', 'michael.chen@art.com', '+85212345678', 0, 3),
  ('Talented musician known for captivating performances.', 'Sarah', 'Lee', 'sarah.lee@art.com', '+442071234567', 1, 4),
  ('Creative jeweler crafting exquisite pieces.', 'David', 'Young', 'david.young@art.com', '+331234567890', 0, 5),
  ('Skilled graphic designer with a keen eye for detail.', 'Emily', 'Garcia', 'emily.garcia@art.com', '+613456789012', 1, 6),
  ('Innovative ceramic artist pushing the boundaries of the medium.', 'Daniel', 'Kim', 'daniel.kim@art.com', '+813123456789', 0, 7),
  ('Accomplished filmmaker with a powerful storytelling voice.', 'Maria', 'Rodriguez', 'maria.rodriguez@art.com', '+525512345678', 1, 8),
  ('Rising fashion designer creating bold and statement pieces.', 'Antonio', 'Diaz', 'antonio.diaz@art.com', '+349123456789', 0, 9),
  ('Up-and-coming architect known for sustainable designs.', 'Chloe', 'Wang', 'chloe.wang@art.com', '+861012345678', 1, 10);

INSERT INTO Collectors (BillingAddress, PaymentMethod, FirstName, LastName, Email, PhoneNumber, Verified, ProfilePictureId)
VALUES
  ('123 Main Street, Anytown, CA 12345', 'Visa', 'Alice', 'Johnson', 'alice.johnson@collector.com', '+7654321987', 1, 11),
  ('456 Elm Street, Cityville, NY 54321', 'Mastercard', 'Bob', 'Williams', 'bob.williams@collector.com', '+9182736450', 1, 12),
  ('789 Oak Street, Smalltown, TX 78901', 'American Express', 'Charlie', 'Brown', 'charlie.brown@collector.com', '+49876543210', 0, 13),
  ('1011 Maple Street, Bigtown, FL 33333', 'Discover', 'Diana', 'Miller', 'diana.miller@collector.com', '+35312345678', 1, 14),
  ('1213 Pine Street, Suburbville, IL 60606', 'PayPal', 'Emma', 'Garcia', 'emma.garcia@collector.com', '+64987654321', 0, 15),
  ('1415 Spruce Street, Lakecity, WA 98765', 'Debit Card', 'Ethan', 'Moore', 'ethan.moore@collector.com', '+82210987654', 1, 16),
  ('1617 Birch Street, Hilltown, PA 18974', 'Cash', 'Olivia', 'Jones', 'olivia.jones@collector.com', '+43765432198', 0, 17), 
  ('1819 Poplar Street, Oceanside, CA 92054', 'Bank Transfer', 'Sophia', 'Hernandez', 'sophia.hernandez@collector.com', '+57123456789', 1, 18),
  ('2021 Cedar Street, Mountainview, CA 94043', 'Cheque', 'Noah', 'Lopez', 'noah.lopez@collector.com', '+65654321987', 0, 19),
  ('2223 Willow Street, Springville, UT 84019', 'Bitcoin', 'Ava', 'Jackson', 'ava.jackson@collector.com', '+88621098765', 1, 20);


INSERT INTO Files (FileName, FileType, URL, Size)
VALUES
  ('profile_picture_john_doe.jpg', 'jpeg', 'https://example.com/images/profile_pictures/john_doe.jpg', 204800),
  ('profile_picture_jane_smith.png', 'png', 'https://example.com/images/profile_pictures/jane_smith.png', 153600),
  ('abstract_painting.jpg', 'jpeg', 'https://example.com/images/artworks/abstract_painting.jpg', 512000),
  ('concert_photo.jpg', 'jpeg', 'https://example.com/images/artworks/concert_photo.jpg', 307200),
  ('jewelry_collection.jpg', 'jpeg', 'https://example.com/images/artworks/jewelry_collection.jpg', 409600),
  ('graphic_design_portfolio.pdf', 'pdf', 'https://example.com/documents/graphic_design_portfolio.pdf', 1024000),
  ('ceramic_sculpture.jpg', 'jpeg', 'https://example.com/images/artworks/ceramic_sculpture.jpg', 256000),
  ('short_film.mp4', 'mp4', 'https://example.com/videos/short_film.mp4', 10485760),
  ('fashion_collection.jpg', 'jpeg', 'https://example.com/images/artworks/fashion_collection.jpg', 614400),
  ('architectural_plans.pdf', 'pdf', 'https://example.com/documents/architectural_plans.pdf', 2048000),
  ('profile_picture_alice_johnson.jpg', 'jpeg', 'https://example.com/images/profile_pictures/alice_johnson.jpg', 128000),
  ('profile_picture_bob_williams.png', 'png', 'https://example.com/images/profile_pictures/bob_williams.png', 96000),
  ('profile_picture_charlie_brown.jpg', 'jpeg', 'https://example.com/images/profile_pictures/charlie_brown.jpg', 76800),
  ('profile_picture_diana_miller.png', 'png', 'https://example.com/images/profile_pictures/diana_miller.png', 115200),
  ('profile_picture_emma_garcia.jpg', 'jpeg', 'https://example.com/images/profile_pictures/emma_garcia.jpg', 89600),
  ('profile_picture_ethan_moore.png', 'png', 'https://example.com/images/profile_pictures/ethan_moore.png', 102400),
  ('profile_picture_olivia_jones.jpg', 'jpeg', 'https://example.com/images/profile_pictures/olivia_jones.jpg', 64000),
  ('profile_picture_sophia_hernandez.png', 'png', 'https://example.com/images/profile_pictures/sophia_hernandez.png', 80000),
  ('profile_picture_noah_lopez.jpg', 'jpeg', 'https://example.com/images/profile_pictures/noah_lopez.jpg', 51200),
  ('profile_picture_ava_jackson.png', 'png', 'https://example.com/images/profile_pictures/ava_jackson.png', 76800);

INSERT INTO Collectors_Artists(ArtistId, CollectorId)
VALUES  
  (7, 11), (2, 11), (3, 11), (4, 11), (5, 11), (6, 11),  -- 6 collectors for artist 1 
  (7, 2), (8, 2), (9, 2), (10, 2),             -- 4 collectors for artist 2 (adjusted to 4)
  (11, 3), (2, 3), (3, 3),                        -- 3 collectors for artist 3 (adjusted to 3)
  (4, 4), (5, 4), (6, 4),                          -- 3 collectors for artist 4 (adjusted to 3)
  (7, 5), (8, 5), (9, 5),                          -- 3 collectors for artist 5 (adjusted to 3)
  (10, 6), (11, 6),                                -- 2 collectors for artist 6 (adjusted to 2, reused collector 1)
  (2, 7), (3, 7), (4, 7),                          -- 3 collectors for artist 7 (adjusted to 3)
  (5, 8), (6, 8), (7, 8),                          -- 3 collectors for artist 8 (adjusted to 3)
  (8, 9), (9, 9), (10, 9),                         -- 3 collectors for artist 9 (adjusted to 3)
  (11, 10);  