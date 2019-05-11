export class Tip {
  constructor(
    public user: string,
    public sportsbook: string,
    public pick: string,
    public odd: number,
    public playAt: Date,
    public comment: string,
    public voteCount: [number, number],
    public tags: []
  ) { }
}
