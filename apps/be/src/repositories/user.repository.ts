class UserRepository {
  private static instance: UserRepository;

  //------------------------------------------------
  static getInstance() {
    if (!this.instance) {
      this.instance = new UserRepository();
    }
    return this.instance;
  }

  async isExisted(opts: { username: string }) {
    const { username = '' } = opts;
    return new Promise((resolve, reject) => {
      if (!username) {
        reject('[isExisted] Invalid user!!!');
      }

      resolve(true);
    });
  }
}

export const userRepositoryInstance = UserRepository.getInstance();
