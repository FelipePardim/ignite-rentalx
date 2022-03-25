import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const listSpecificationRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  listSpecificationRepository
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationsUseCase
);

export { listSpecificationController };
