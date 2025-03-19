import { Apartment, ApartmentCreationAttributes } from '../models/Apartment';

class ApartmentService {
  public async getAll() {
    return Apartment.findAll();
  }

  public async getById(id: number) {
    return Apartment.findByPk(id);
  }

  public async addApartment(data: ApartmentCreationAttributes) {
    return Apartment.create(data);
  }
}

export default new ApartmentService();
