export class Item {
  public name: string;
  public position: string;
  public phone: string;
  public email: string;
  public performance: number;
  public retention: number;
  public score: number;
  public thumbsUp?: boolean;

  constructor(name: string, pos: string, phone: string, email: string, perf: number, ret: number, score: number, thumbsUp?: boolean) {
    this.name = name;
    this.position = pos;
    this.phone = phone;
    this.email = email;
    this.performance = perf;
    this.retention = ret;
    this.score = score;
    this.thumbsUp = thumbsUp;
  }
}