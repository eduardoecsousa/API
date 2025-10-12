import { Controller, Post } from "@nestjs/common";
import { SeedService } from "./seed.service";

@Controller("seed")
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post("psychosocial")
  async seedPsychosocial(): Promise<{ message: string }> {
    await this.seedService.seedPsychosocial();
    return { message: "Psychosocial seed completed successfully!" };
  }

  @Post("clear")
  async clearData(): Promise<{ message: string }> {
    await this.seedService.clearData();
    return { message: "Data cleared successfully!" };
  }

  @Post("reset")
  async reset(): Promise<{ message: string }> {
    await this.seedService.clearData();
    await this.seedService.seedPsychosocial();
    return { message: "Database reset and seeded successfully!" };
  }
}
