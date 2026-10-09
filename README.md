# URL Shortener

A simple URL Shortener web application developed using Node.js, Express.js, SQLite, and HTML, CSS, and JavaScript.

## Project Overview

This application converts long URLs into short URLs. It stores the original URL and its unique short code in an SQLite database. When a user opens a shortened URL, the application redirects them to the original website.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- SQLite
- Nanoid
- HTML and CSS
- Postman
- Git and GitHub

## Features

- Convert long URLs into short URLs.
- Generate unique short codes.
- Store URL mappings in an SQLite database.
- Redirect users to the original URL.
- Provide a simple and user-friendly interface.
- Test API endpoints using Postman.

## Project Structure

```text
url-shortener/
├── public/
│   └── index.html
├── database.js
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/spratha1989-lgtm/url-shortener.git
```

### 2. Open the project folder

```bash
cd url-shortener
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

### 5. Open the application

Visit:

http://localhost:5000

## API Endpoints

### Create a Short URL

- Method: `POST`
- Endpoint: `/api/shorten`
- Full URL: `http://localhost:5000/api/shorten`

Example request body:

```json
{
  "url": "https://www.google.com"
}
```

Example response:

```json
{
  "originalUrl": "https://www.google.com",
  "shortUrl": "http://localhost:5000/Ab12Xy"
}
```

The short code in the example is illustrative; the application generates a new code for each request.

### Redirect to the Original URL

- Method: `GET`
- Endpoint: `/:shortCode`

Opening a valid short URL redirects the browser to the original URL stored in the database.

## Database

SQLite stores the URL mappings in a table named `urls`, containing:

- `id`
- `short_code`
- `original_url`

The database file is created locally when the application runs.

## Testing

The API can be tested using Postman. Send a POST request with a JSON body containing the long URL, then open the returned short URL in a browser to test the redirect.

## Learning Outcomes

- Building REST APIs using Express.js.
- Working with an SQLite database.
- Generating unique identifiers.
- Handling HTTP requests and redirects.
- Using Git for version control.
- Publishing a project on GitHub.

## Author

Developed as a backend development internship project for practice and learning.
