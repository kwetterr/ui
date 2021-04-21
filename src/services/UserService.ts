import AuthorizeReq from '@/models/request/user/AuthorizeReq';
import CreateReq from '@/models/request/user/CreateReq';
import UpdateReq from '@/models/request/user/UpdateReq';
import AuthorizeRes from '@/models/response/user/AuthorizeRes';
import _UserRes from '@/models/response/user/_UserRes';
import User from '@/models/User';
import { faUsersSlash } from '@fortawesome/free-solid-svg-icons';
import axios, { AxiosError, AxiosResponse } from 'axios';

export default class UserService {
  constructor() {
    axios(process.env.USER_API_URL);
  }

  private defaultErr = new Error("Oeps er ging iets fout.");

  public async Authorize(authReq: AuthorizeReq): Promise<User> {
    await axios.post<AuthorizeRes>(`/authorize`, authReq)
      .then(res => {
        var d = res.data;
        var user = new User();
        user.id = d.id;
        user.name = d.name;
        user.username = d.username;
        user.email = d.email;
        user.country = d.country;
        user.biography = d.biography;
        user.avatar = d.avatar;
        user.role = d.role;
        return user;
      })
      .catch(err => { throw err });
    throw this.defaultErr;
  }

  public async Create(createReq: CreateReq): Promise<User> {
    await axios.post<_UserRes>(`/create`, createReq)
      .then(res => {
        return this.convertUserReqToUser(res.data);
      })
      .catch(err => { throw err });
    throw this.defaultErr;
  }

  public async Get(id: string): Promise<User> {
    await axios.get<_UserRes>(`/${id}`)
      .then(res => { return this.convertUserReqToUser(res.data) })
      .catch(err => { throw err });
    throw this.defaultErr;
  }

  public async Update(req: UpdateReq, id: string): Promise<User> {
    await axios.put<_UserRes>(`/${id}`, req)
      .then(res => { return this.convertUserReqToUser(res.data) })
      .catch(err => { throw err });
    throw this.defaultErr;
  }

  public async Delete(id: string) {
    await axios.delete<_UserRes>(`/${id}`)
      .catch(err => { throw err });
  }

  public async GetAll(): Promise<User[]> {
    await axios.get<_UserRes[]>(`/`)
      .then(res => {
        var users: User[] = [];
        res.data.forEach(r => {
          users.push(this.convertUserReqToUser(r));
        })
        return users;
      })
      .catch(err => { throw err });
    throw this.defaultErr;
  }

  public async UpdateRole() {
    throw this.defaultErr;
  }

  private convertUserReqToUser(req: _UserRes): User {
    var user = new User();
    user.id = req.id;
    user.name = req.name;
    user.username = req.username;
    user.country = req.country;
    user.biography = req.biography;
    user.email = req.email;
    user.role = req.role;
    user.avatar = req.avatar;
    return user;
  }
}
