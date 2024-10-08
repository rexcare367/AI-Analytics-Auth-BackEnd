const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const authController = require('../../controllers/auth.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/register', validate(authValidation.register), authController.register);
router.post('/register-with-google', validate(authValidation.registerWithGoogle), authController.registerWithGoogle);
router.post('/login', validate(authValidation.login), authController.login);
router.post('/login-with-google', validate(authValidation.loginWithGoogle), authController.loginWithGoogle);
router.post('/logout', validate(authValidation.logout), authController.logout);
router.get('/my-account', auth(), validate(authValidation.myAccount), authController.myAccount);
router.post('/refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);
router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword);
router.post('/reset-password', validate(authValidation.resetPassword), authController.resetPassword);
router.post('/send-verification-email', auth(), authController.sendVerificationEmail);
router.get('/verify-email', validate(authValidation.verifyEmail), authController.verifyEmail);

module.exports = router;
