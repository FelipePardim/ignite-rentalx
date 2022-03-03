import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepostory: CategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepostory.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Categoru already exists!");
    }

    this.categoriesRepostory.create({ name, description });
  }
}

export { CreateCategoryService };
