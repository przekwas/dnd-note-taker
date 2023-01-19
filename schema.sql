CREATE SCHEMA dnd_note_taker;
USE dnd_note_taker;

CREATE TABLE users (
	id CHAR(36) NOT NULL,
    email VARCHAR(60) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);

CREATE TABLE notes (
	id CHAR(36) NOT NULL,
    userid CHAR(36) NOT NULL,
    body VARCHAR(2000) NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES users (id)
);

# 5.x with mysql
CREATE USER 'dnd_note_taker'@'localhost' IDENTIFIED BY 'dnd_note_taker';

# 8.0.x with mysql
CREATE USER 'dnd_note_taker'@'localhost' IDENTIFIED WITH mysql_native_password BY 'dnd_note_taker';

# 8.1.x with mysql2
CREATE USER 'dnd_note_taker'@'localhost' IDENTIFIED BY 'dnd_note_taker';

# grant privileges
GRANT ALL PRIVILEGES ON dnd_note_taker.* TO 'dnd_note_taker'@'localhost';
FLUSH PRIVILEGES;

# test data
INSERT INTO users (id, email, password, first_name, last_name) VALUE 
('d7e7ac46-72ab-40be-bbf5-9eb1b98decc7', 'guest@test.com', '$2b$12$KrE8DFzREYNkiDpQKOhrzetmB85ua39V2j3iE2749XzVtrdw.8.JG', 'Guest', 'User');

INSERT INTO notes (id, userid, body) VALUE
('8786518e-7cbf-4e47-be11-aac9c1382474', 'd7e7ac46-72ab-40be-bbf5-9eb1b98decc7', 'Ability drained action animal type base attack bonus calling subschool compulsion dodge bonus earth domain energy drained extraordinary ability falling objects heat dangers inherent bonus lawful manufactured weapons melee weapon ooze type rend repose domain shapechanger subtype skill rank spell-like ability strength telepathy water domain will save.');
INSERT INTO notes (id, userid, body) VALUE
('6466b0b2-220e-45eb-bd1a-99811d221b51', 'd7e7ac46-72ab-40be-bbf5-9eb1b98decc7', 'Acid effects antimagic bonus cold domain cure spell fire subtype glamer subschool melee move action strength domain suffocation. Abjuration damage reduction experience points extraplanar full normal hit points halfling domain miniature figure nauseated shapechanger subtype sonic attack surprise.');

# testing selects
SELECT * FROM users;

SELECT * FROM notes;

