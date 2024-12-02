import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';
import { CategoriesService } from './categories.service';

@Controller('categories')
@UseGuards(JwtAuthGuard)
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories() {
    return this.categoriesService.getAllCategories();
  }

  @Post('/assign')
  async assignCategoriesToUser(
    @Req() req: any,
    @Body() { categoryIds }: { categoryIds: number[] },
  ) {
    const userId = req.user.id; // Получение ID пользователя из JWT
    return this.categoriesService.addCategoryToUser(userId, categoryIds);
  }
}
