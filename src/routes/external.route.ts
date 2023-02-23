import { Router } from 'express';

// Controller
import AuthController from '@/controllers/auth.controller';

// Middlerware
import ValidatorMiddleware from '@/middlewares/validator.middleware';

// typings validator
import * as authControllerValdators from '@/controllers/validators/auth.controller.validation';

class ExternalRoute {
  public path = '/api/v1/platform';
  public router = Router();
  private validatorMiddleware = new ValidatorMiddleware();
  private authController = new AuthController();

  constructor() {
    this.initailzeAuthRoutesForSignUp(`${this.path}/auth`);
    this.initailzeAuthRoutesForLogin(`${this.path}/auth`);
  }

  private initailzeAuthRoutesForSignUp(prefix: string) {
    this.router.post(
      `${prefix}/signup`,
      this.validatorMiddleware.validateRequestBody(authControllerValdators.createUserOnSignUpRequestBodyParser),
      this.authController.createUserOnSignup,
    );
  }
  private initailzeAuthRoutesForLogin(prefix: string) {
    this.router.post(
      `${prefix}/login`,
      this.validatorMiddleware.validateRequestBody(authControllerValdators.loginUserRequestBodyParse),
      this.authController.loginUser,
    );
  }
}

export default ExternalRoute;
