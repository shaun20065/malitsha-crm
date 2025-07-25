# Malitsha Holdings and Logistics CRM System

This project is a Customer Relationship Management (CRM) system designed for Malitsha Holdings and Logistics. It includes features for creating and managing quotations and invoices.

## Features

- Create and manage quotations
- Create and manage invoices
- Currency set to ZAR (South African Rand)
- Tax rate of 15%
- VAT not registered

## Project Structure

```
malitsha-crm
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── config
│   │   └── settings.ts         # Configuration settings
│   ├── controllers
│   │   ├── quotationsController.ts # Handles quotations logic
│   │   └── invoicesController.ts   # Handles invoices logic
│   ├── models
│   │   ├── quotation.ts         # Quotation model
│   │   └── invoice.ts           # Invoice model
│   ├── routes
│   │   ├── quotations.ts        # Routes for quotations
│   │   └── invoices.ts          # Routes for invoices
│   └── types
│       └── index.ts            # Type definitions
├── package.json                 # NPM package configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd malitsha-crm
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm start
   ```

## Usage Guidelines

- Use the API endpoints defined in the routes to create and retrieve quotations and invoices.
- Ensure that all monetary values are in ZAR and that the tax rate is applied correctly.

## License

This project is licensed under the MIT License.