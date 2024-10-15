

![Screenshot 2024-10-14 120333](https://github.com/user-attachments/assets/8a202fb1-4891-4c26-b283-042b92c7d310)
![Screenshot 2024-10-14 120517](https://github.com/user-attachments/assets/b9d0766f-4432-4123-91b6-5f27285b78ed)
![Screenshot 2024-10-15 124928](https://github.com/user-attachments/assets/c6c54055-b851-4957-957d-4b03e3a45183)![Screenshot 2024-10-15 125007](https://github.com/user-attachments/assets/b3d52b81-ab33-4d3e-bddc-be6d82562d89)
![Screenshot 2024-10-15 130813](https://github.com/user-attachments/assets/78887a3b-7589-403e-ade2-d1876be8ece6)

![Screenshot 2024-10-15 125042](https://github.com/user-attachments/assets/57df4b71-ffb7-487b-bfd6-5ec2ae844c25)
![Screenshot 2024-10-15 130900](https://github.com/user-attachments/assets/489ba934-8893-408f-b29f-47f851c8d219)

# Autospace Workshop
This repository contains the Autospace Workshop project, which includes multiple applications and libraries. This guide will help you set up the project locally and run the applications.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (>= 14.x)
- Yarn (>= 1.22.x)
- Docker
- Git

## Getting Started

### 1. view  the Repository


### 2. Install Dependencies

Install the project dependencies using Yarn.

```
yarn install
```

### 3. Set Up Environment Variables

Create a .env file in the root directory and add the necessary environment variables. Refer to .env.example for the required variables.

### 4. Run the Database with Docker Compose

Start the PostgreSQL database using Docker Compose.

```
docker-compose up -d
```

### 5. Run Prisma Migrations

After the database is running, apply Prisma migrations to set up the database schema.

```
yarn prisma migrate dev
```

### 6. Run the Applications

You can run the individual applications using the following commands:

#### API Application

Navigate to the apps/api directory and start the API server.

```
cd apps/api
yarn dev
```

#### WEB Applications

Navigate to the apps/web directory and start the WEB server.

```
cd apps/web
yarn dev
```

License
This project is licensed under the MIT License.
