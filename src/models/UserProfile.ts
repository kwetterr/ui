import UserRef from '@/models/UserRef';

export default class UserProfile {
  id: string;
  user: UserRef;
  bio: string;
  location: string;
  website: string;
  followers: UserRef[];
  following: UserRef[];
  
  constructor(
    _id: string, 
    _user: UserRef,
    _bio: string,
    _location: string,
    _website: string,
    _followers: UserRef[],
    _following: UserRef[]
  ) 
  {
    this.id = _id;
    this.user =_user;
    this.bio = _bio;
    this.location = _location;
    this.website = _website
    this.followers = _followers;
    this.following = _following;
  }
}