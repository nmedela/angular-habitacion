export default class Luz {
    id:number=0;
    intensidad: number=0;
  constructor(_id :number, _intensidad : number){
    this.id=_id
    this.intensidad=_intensidad
  }

    // static fromJson(luzJSON) {
    //   const result: Luz = Object.assign(new Luz(), luzJSON)
    //   return result
    // }
    toJSON(): any {
      const result: any = Object.assign({}, this)
      return result
  }
}
