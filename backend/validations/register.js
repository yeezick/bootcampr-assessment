const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateRegisterInput = [
  check('firstName')
    .exists({ checkFalsy: true })
    .matches(/^[a-zA-Z]+$/)
    .withMessage('First name must only contain letters'),

  check('lastName')
    .exists({ checkFalsy: true })
    .matches(/^[a-zA-Z]+$/)
    .withMessage('Last name must only contain letters'),

  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Email is invalid'),
    
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter')
    .matches(/[@$!%*?&]/)
    .withMessage('Password must contain at least one symbol'),
  handleValidationErrors
];

module.exports = validateRegisterInput;