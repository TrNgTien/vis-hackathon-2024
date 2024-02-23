class UserService {
  private static instance: UserService;

  //------------------------------------------------
  static getInstance() {
    if (!this.instance) {
      this.instance = new UserService();
    }
    return this.instance;
  }


  isExisted () {
    console.log('TEST')
  }
}

export const userServiceInstance = UserService.getInstance();
