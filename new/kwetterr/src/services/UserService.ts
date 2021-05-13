import { UserModel } from '@/types/user/UserModel';
import http from '@/services/http';
import { LoginModel } from '@/types/user/LoginModel';

export default class UserService {

   public async getAll(): Promise<Array<UserModel>> {
      const response = await http.get(`/users`);
      return response.data;
   }
   public async login(loginModel: LoginModel): Promise<UserModel> {
      const response = await http.post(`/authorize`, loginModel);
      return response.data;
   }
  
   public async getbyId(id: string): Promise<UserModel> {
      const response =  await http.get(`/api/packages/${id}`);
      return response.data;
   }
}

export const userService = new UserService();
