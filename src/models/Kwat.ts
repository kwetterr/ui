export default class Kwat {
  id: string;
  user_name: string;
  user_tagname: string;
  user_profile: string;
  created_at: number;
  likes: number;
  content: string;
  
  constructor(_id: string, _user_name: string, _user_tagname: string, _created_at: number, _likes: number, _content: string, _user_profile: string) {
    this.id = _id;
    this.user_name = _user_name;
    this.user_tagname = _user_tagname;
    this.created_at = _created_at;
    this.likes = _likes;
    this.content = _content;
    this.user_profile = _user_profile;
  }
}