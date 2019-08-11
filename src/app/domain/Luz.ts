export default class Luz {
  id: number = 0;
  intensity: number = 0;

  constructor(){}
  

  // static fromJson(luzJSON) {
  //   const result: Luz = Object.assign(new Luz(), luzJSON)
  //   return result
  // }
  toJSON(): any {
    const result: any = Object.assign({}, this)
    return result
  }
  fromJson(luzJson: Object):any {
    const result: Luz = Object.assign(new Luz(), luzJson)
    return result
  }
}
