# DevOps To-Do List

## Objective

Sample project for studying and practicing DevOps fundamentals, focusing on building a simple API for task management (CRUD), deployment automation, containerization with Docker, continuous integration, and automated testing.

## Main Technologies

- Node.js
- Express.js
- MongoDB
- Docker
- Jest for automated testing

## How to clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/devops-todo-list.git
cd devops-todo-list
```

## Project Structure

src/      # Main API source code  
tests/    # Automated tests  
docs/     # Additional documentation  
.env.example # Example of environment variables  
Dockerfile   # Docker container configuration  

## API Routes

| Method | Endpoint      | Description                |
|--------|--------------|----------------------------|
| GET    | `/`          | Health check               |
| GET    | `/tasks`     | List all tasks             |
| GET    | `/tasks/:id` | Get a task by ID           |
| POST   | `/tasks`     | Create a new task          |
| PUT    | `/tasks/:id` | Update a task by ID        |
| DELETE | `/tasks/:id` | Delete a task by ID        |

## How to run locally

1. Install dependencies:
```bash
npm install
```

2. Create a .env file based on .env.example.

3. Start the application:
```bash
npm install
```

## How to run with Docker

```bash
docker build -t devops-todo-list .
docker run -p 3000:3000 --env-file .env devops-todo-list
```

## Contribution
Pull requests are welcome! Please follow the branching pattern and keep the README updated.

## Author

Developed by Nathan Santos ([santos.nna](https://github.com/santos.nna)).
