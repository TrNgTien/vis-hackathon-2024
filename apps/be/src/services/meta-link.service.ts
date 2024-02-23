class MetaLinkService {
  private static instance: MetaLinkService;

  //------------------------------------------------
  static getInstance() {
    if (!this.instance) {
      this.instance = new MetaLinkService();
    }
    return this.instance;
  }
}

export const mlSvcInstance = MetaLinkService.getInstance();
