# JavaScript Form Validation

A browser-based form validation project built as part of The Odin Project’s JavaScript curriculum.

This project focuses on creating a form that uses JavaScript for live inline validation. The form collects an email address, country, postal code, password, and password confirmation. Each field is checked as the user interacts with it, giving immediate feedback when something is missing or incorrectly formatted.

## Overview

The aim of this project is to practise client-side form validation without relying on the browser’s default validation messages.

The form uses the `novalidate` attribute so that validation can be handled manually with JavaScript. This allows for custom validation logic, custom error messages, and clearer feedback for the user.

## Features

- Live inline validation
- Validation as the user types
- Validation when a user leaves a field
- Custom error messages
- Required field checks
- Email validation
- Country field validation
- Postal code validation
- Password validation
- Password confirmation matching
- Error message on submit if the form contains invalid or empty fields
- Success message when all fields are valid
- CSS styling for valid and invalid fields
- Uses `:user-valid` and `:user-invalid` pseudo-classes

## Form Fields

The form includes the following fields:

- Email
- Country
- Postal Code
- Password
- Password Confirmation

Each field has its own validation requirements and gives feedback to help the user correct their input.

## Validation Behaviour

The form validates fields as the user progresses through it.

If a field is invalid, it is highlighted and an error message is shown. The error message is intended to guide the user rather than simply tell them that something is wrong.

If the submit button is pressed while there are active errors or empty required fields, the form does not submit and an error message is displayed.

If all fields are valid, the user receives a success message.

## Purpose

This project was created to practise:

- Working with HTML forms
- Handling user input with JavaScript
- Writing custom validation logic
- Displaying helpful error messages
- Managing form state
- Styling valid and invalid form fields
- Using the Constraint Validation API
- Improving user experience through live feedback

## Tech Stack

- HTML
- CSS
- JavaScript

## Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project folder:

```bash
cd <your-project-folder>
```

Open the project in your browser, or use a local development server if preferred.

## Project Structure

```text
project-folder/
├── index.html
├── styles.css
└── script.js
```

The exact structure may change depending on how the project is organised.

## Future Improvements

Possible future improvements include:

- More detailed password strength feedback
- Country-specific postal code validation
- Improved accessibility for error messages
- Better success and error states
- More responsive styling
- Cleaner separation between validation logic and DOM updates
- Additional tests for edge cases

## Status

This project is part of my JavaScript learning journey through The Odin Project.
