# Unhandled Error in Express.js Route Parameter

This repository demonstrates a common error in Express.js applications: missing error handling for invalid route parameters.  The `bug.js` file shows the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem

The original code lacks error handling for cases where the `:id` parameter in the `/users/:id` route is invalid (e.g., not a number, or refers to a non-existent user). This can lead to unexpected behavior or application crashes.

## Solution

The corrected code includes checks to validate the `userId` and handle cases where it's invalid.  This prevents unexpected errors and provides a more robust application.