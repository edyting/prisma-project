# Prisma Project

This project is built using [Prisma](https://www.prisma.io/), an open-source ORM for Node.js and TypeScript. Prisma makes it easy to work with databases by providing a type-safe and auto-completing query builder.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)
- SQLite (or any other supported database)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/edyting/prisma-project.git
    cd prisma-project
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Set up the database:
    ```sh
    npx prisma migrate dev --name init
    ```

4. Generate Prisma Client:
    ```sh
    npx prisma generate
    ```

### Usage

To start the development server:
```sh
npm run dev
# or
yarn dev

## Running the Application

To run the `index.ts` file and view the output in the console:
```sh
npx ts-node index.ts
```


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Prisma](https://www.prisma.io/)
- [Node.js](https://nodejs.org/)
- [SQLite](https://www.sqlite.org/)

