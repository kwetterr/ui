export default class User {
  id: string;
  username: string;
  tag_name: string;
  avatar_link: string;
  
  constructor(_id: string, _user_name: string, _user_tagname: string, _avatar_link: string) {
    this.id = _id;
    this.username = _user_name;
    this.tag_name = _user_tagname;
    this.avatar_link = _avatar_link;
  }
}