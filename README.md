![IMG_20240602_125956598_HDR~2](https://github.com/Ashutosh1702/cardekho-app/assets/128836160/8e649236-9aa9-4e91-a412-c7c2eaa6461d)

# CarDekho

The "cardekho-app" is a project aimed at creating a web application inspired by the functionality and features of CarDekho, an Indian online platform for buying and selling cars. The app serves as a simplified clone or prototype that allows users to explore car listings, view car details, and possibly perform other related actions such as comparing models, checking prices, and more.

## Deployment Links:

- **Front-end:** https://cardekho-app2.vercel.app
- **Back-end:** https://cardekho-steel.vercel.app
<!-- - **API Documentation:**  -->

## Features:

> The CarDekho web application is designed to provide a comprehensive and user-friendly platform for car buyers and sellers. Here are some of the prominent features of the CarDekho web app:

### 1. **Car Listings**

- **New Cars:** Detailed listings of new cars with specifications, features, prices, and images.
- **Used Cars:** Extensive listings of used cars, including detailed descriptions, mileage, condition, and price.

### 2. **Advanced Search and Filters**

- **Search:** Allows users to search for cars by make, model, price range, year, and other criteria.
- **Filters:** Advanced filtering options to narrow down search results based on specific preferences like fuel type, transmission, body type, etc.

### 3. **Car Comparison**

- Users can compare different car models side by side to evaluate their features, specifications, prices, and user reviews.

### 4. **Car Reviews and Ratings**

- **Expert Reviews:** Professional reviews and ratings of cars based on various criteria.
- **User Reviews:** Reviews and ratings from actual car owners to provide real-world insights.

### 5. **Price Calculator**

- Tools to estimate the on-road price of new cars, including taxes, insurance, and additional costs.
- **Loan EMI Calculator:** Helps users calculate the monthly installment amount for car loans.

### 6. **Sell Your Car**

- **Listing Service:** Allows users to list their used cars for sale on the platform.
- **Instant Quotes:** Provides instant quotes for used cars based on market trends and car condition.
- **Dealership Connections:** Connects sellers with authorized dealerships for a smooth selling process.

### 7. **Detailed Car Profiles**

- Comprehensive profiles for each car model, including specifications, features, images, videos, and price details.
- **360-Degree Views:** Interactive 360-degree views of car interiors and exteriors.

### 8. **Financial Services**

- **Car Loans:** Assistance with car loans, including comparisons of loan offers from different banks and financial institutions.
- **Insurance:** Options for car insurance, including comparisons of different insurance plans.

### 9. **News and Articles**

- Latest news and updates from the automobile industry.
- Articles and guides on car maintenance, buying tips, and industry trends.

### 10. **Dealer Locator**

- Helps users find authorized car dealerships in their area.
- **Showroom Details:** Provides details of car showrooms, including contact information and addresses.

### 11. **Special Offers and Discounts**

- Information on ongoing promotions, discounts, and special offers from car manufacturers and dealerships.

### 12. **Car Maintenance and Tips**

- Articles and videos on car maintenance, DIY tips, and expert advice on keeping cars in good condition.

### 13. **Interactive Tools**

- **Virtual Car Assistant:** AI-powered assistant to help users with their queries and provide personalized recommendations.
- **Car Configurator:** Allows users to customize car models with different features and accessories.

### 14. **Mobile App Integration**

- Seamless integration with CarDekho’s mobile app for a consistent experience across devices.
- **Push Notifications:** Alerts for price drops, new listings, and promotional offers.

### 15. **Customer Support**

- Dedicated customer support for assistance with buying, selling, and using the platform.
- **Live Chat:** Real-time support through live chat with customer service representatives.

### Conclusion

The CarDekho web app is a feature-rich platform aimed at simplifying the car buying and selling process. It provides users with extensive information, tools, and services to make informed decisions, ensuring a seamless and efficient experience.

## 🌐 `Languages and Tools used`

- React:-Javasript library which used to make Ui.
- Redux:-Redux is state management tool for manage state.
- React-Router:- for Routing go to different pages
- Tailwind Css:- Utility Css frameWork which used for styling the webapge of the wishWebApp and make responsive Project.
- React icons: we use react-icons because for icons.
- Firebase Authentication : we use firebass for data store for Signup and Email.

# Technologies Used

Frontend: React, Tailwind CSS
Build Tool: Vite
Package Management: npm
API Requests: Axios
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.

# Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
This project is licensed under the MIT License. See the LICENSE file for more information.

## Main page of this project

![IMG_20240602_134617708_HDR](https://github.com/Ashutosh1702/cardekho-app/assets/128836160/6a3d930b-c9f7-464e-9ba8-57b1e28045b4)

## Login Page

![IMG_20240602_125916082_HDR~2](https://github.com/Ashutosh1702/cardekho-app/assets/128836160/c00f8833-96fa-4145-b89a-c78cc86d5293)

## Logout Page

![IMG_20240602_125956598_HDR~2](https://github.com/Ashutosh1702/cardekho-app/assets/128836160/f3e98e7f-c6b3-4f0f-a9a4-7c2d46f70e8e)

## Backend

````markdown
# Car Portal API

This project is a backend application for a Car Portal. It is built using Node.js, Express, and MongoDB. The application supports user authentication and various car-related operations.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Features

- User authentication (login, registration)
- Car management (CRUD operations)
- Middleware for authentication
- CORS enabled
- Cookie parsing

## Prerequisites

Make sure you have the following installed on your local development machine:

- Node.js (>= 14.x)
- npm or yarn
- MongoDB (local or cloud instance)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/car-portal-api.git
   cd car-portal-api
   ```

2. Install the dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
````

## Running the Application

1. Start the development server:

   ```sh
   npm start
   # or
   yarn start
   ```

2. The server will start on the port specified in the `.env` file (default is 8000).

## API Endpoints

### User Routes

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user
- `GET /api/verify-auth` - Verify authentication status

### Car Routes

- `GET /api/cars` - Get all cars
- `POST /api/cars` - Add a new car
- `GET /api/cars/:id` - Get a specific car by ID
- `PUT /api/cars/:id` - Update a specific car by ID
- `DELETE /api/cars/:id` - Delete a specific car by ID

## Project Structure

```plaintext
.
├── src
│   ├── config
│   │   └── db.js
│   ├── middlewares
│   │   └── user.middleware.js
│   ├── models
│   │   ├── user.model.js
│   │   └── car.model.js
│   ├── routes
│   │   ├── user.routes.js
│   │   └── car.route.js
│   └── controllers
│       ├── user.controller.js
│       └── car.controller.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

Make sure to replace placeholders like `yourusername` with your actual GitHub username and adjust the environment variables section according to your setup.

# Contact
For any questions or feedback, please contact:

Name: Ashutosh Kumar
Email: ashucreater06@gmail.com
GitHub: Ashutosh1702/cardekho
Thank you for using the CarDekho WebApp!
```
