export class SPRest {
  constructor(private url) {}

  async getSkills() {
    let data = await fetch(this.url).then((response) => response.json());
    return data;
  }
}
