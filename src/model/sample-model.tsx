
class SampleModel {
  name: string;
  rand: number;

  constructor(json) {
    this.name = json.name || '';
    this.rand = Math.random();
  }
}

export default SampleModel;
