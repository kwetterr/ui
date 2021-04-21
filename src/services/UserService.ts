import AuthorizeReq from '@/models/request/user/AuthorizeReq';
import CreateReq from '@/models/request/user/CreateReq';
import UpdateReq from '@/models/request/user/UpdateReq';
import AuthorizeRes from '@/models/response/user/AuthorizeRes';
import _UserRes from '@/models/response/user/_UserRes';
import User from '@/models/User';
import { faUsersSlash } from '@fortawesome/free-solid-svg-icons';
import axios, { AxiosError, AxiosResponse } from 'axios';

export default class UserService {
  private base: string = process.env.VUE_APP_USER_API_URL;

  constructor() {
    
  }

  private defaultErr = new Error("Oeps er ging iets fout.");

  public Authorize(authReq: AuthorizeReq, callback: any) {

    axios.post<AuthorizeRes>(`${this.base}/authorize`, authReq)
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
        callback("", user)
      })
      .catch(err => callback(err, null));
  }

  public async Create(createReq: CreateReq): Promise<User> {
    await axios
      .post<_UserRes>(`${this.base}/create`, createReq)
      .then(res => {
        return this.convertUserReqToUser(res.data);
      })
      .catch(err => { throw err });
    throw this.defaultErr;
  }

  public async Get(id: string): Promise<User> {
    await axios.get<_UserRes>(`${this.base}/${id}`)
      .then(res => { return this.convertUserReqToUser(res.data) })
      .catch(err => { throw err });
    throw this.defaultErr;
  }

  public async Update(req: UpdateReq, id: string): Promise<User> {
    await axios.put<_UserRes>(`${this.base}/${id}`, req)
      .then(res => { return this.convertUserReqToUser(res.data) })
      .catch(err => { throw err });
    throw this.defaultErr;
  }

  public async Delete(id: string) {
    await axios.delete<_UserRes>(`${this.base}/${id}`)
      .catch(err => { throw err });
  }

  public async GetAll(): Promise<User[]> {
    await axios.get<_UserRes[]>(`${this.base}/`)
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
