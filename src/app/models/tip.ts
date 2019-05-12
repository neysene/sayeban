export class Tip {
  constructor(
    public userID: string,
    public sportsbook: string,
    public pick: string,
    public odd: number,
    public playAt: Date,
    public comment: string,
    public voteCount: [number, number],
    public tags: []
  ) { }
}
