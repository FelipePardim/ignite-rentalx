import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepostory: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepostory.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
