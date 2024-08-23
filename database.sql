CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE
);

CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    phone TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);
