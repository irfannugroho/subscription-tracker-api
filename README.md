
SubDub (subscription-tracker-api) is a subscription management API built with Express.js. It allows users to manage their subscriptions, receive email reminders, and more.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/adrianhajdin/subdub.git
    cd subdub
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Copy [`.env.development.local`](.env.development.local ) and [`.env.production.local`](.env.production.local ) files and update the values as needed.

## Usage

### Development

To start the development server, run:
```sh
npm run dev
```

### Production

To start the production server, run:
```sh
npm start
```

## API Endpoints

### Authentication

- `POST /api/v1/auth/sign-up` - Sign up a new user
- `POST /api/v1/auth/sign-in` - Sign in an existing user
- `POST /api/v1/auth/sign-out` - Sign out the user

### Users

- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get a specific user

### Subscriptions

- `POST /api/v1/subscription` - Create a new subscription
- `GET /api/v1/subscription/user/:id` - Get subscriptions for a specific user

### Workflows

- `POST /api/v1/workflows/subscription/reminder` - Trigger subscription reminders

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements

This project is a copy from Adrian Hajdin's GitHub repository. For more information, visit [JavaScript Mastery](https://www.youtube.com/@javascriptmastery).
