import { Controller, Post, Req, Res } from "@nestjs/common";
import AuthService from "./auth.service";
import type { Request, Response } from "express";
import IEffectLogin from "../../dtos/IEffectLogin";

@Controller("auth")
export default class AuthController {
  constructor(private authService: AuthService) {}
  @Post("login")
  login(@Req() req: Request, @Res() res: Response) {
    try {
      const customer = req.body as IEffectLogin;
      const token = this.authService.login(customer);
      return res.status(200).json(token);
    } catch (error: unknown) {
      const err = error instanceof Error ? error : new Error("Unknown error");
      return res.status(401).json({ error: err.message });
    }
  }
}
