import { UserModel } from '@/types/user/UserModel';
import http from '@/services/http';
import { LoginModel } from '@/types/user/LoginModel';
import { RegisterModel } from '@/types/user/RegisterModel';

export default class UserService {

  public async getAll(): Promise<Array<UserModel>> {
    const response = await http.get(`/`);
    return response.data;
  }

  public async login(loginModel: LoginModel): Promise<UserModel> {
    const response = await http.post(`/authorize`, loginModel);
    return response.data;
  }

  public async register(registerModel: RegisterModel): Promise<UserModel> {
    const response = await http.post(`/create`, registerModel);
    return response.data;
  }

  public async getByUsername(username: string): Promise<UserModel> {
    const users = await this.getAll();
    const user: UserModel = users.filter(u => u.username == username)[0];
    const id = user.id;
    const response = await http.get(`/${id}`);
    return response.data;
  }
}

export const userService = new UserService();
