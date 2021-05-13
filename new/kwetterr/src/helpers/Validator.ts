import router from '@/router';

class Validator {
  RedirectIfInvalid() : void {
    const user = localStorage.getItem("user");
    if(!user) {
      router.push("/login");
    }
  }
}

export default Validator;