class PostService {
  private static instance: PostService;

  //------------------------------------------------
  static getInstance() {
    if (!this.instance) {
      this.instance = new PostService();
    }
    return this.instance;
  }
  isExisted () {
    console.log('TEST')
  }
}

export const postServiceInstance = PostService.getInstance();
