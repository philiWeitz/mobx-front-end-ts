
class PostModel {
  id: number;
  title: string;
  votes: number;


  constructor(json) {
    this.id = json.id || -1;
    this.title = json.title || '';
    this.votes = json.votes || 0;
  }
}

export default PostModel;
