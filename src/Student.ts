export default class Student {
  private static lastId: number = 0
  constructor (
    private name: string,
    private age: number,
    private avgScore: number,
    private email: string,
    private id: number = 0
  ) {
    if(!id || id === 0) {
      this.id = ++Student.lastId
    } else {
      this.id = id
    }
    this.setName(name)
    this.setAge(age)
    this.setAvgScore(avgScore)
    this.setEmail(email)
  }
  getId () {
      return this.id
  }
  setName (name: string) {
    if (/^[A-ZА-Я][a-zа-я]{0,255}$/.test(name)) {
        this.name = name
    } else {
        throw new Error("Wrong name!")
    }
  }
  getName () {
      return this.name
  }
  setAge (age: number) {
    if (age > 3) {
        this.age = age
    } else {
        throw new Error("Wrong age! Must be greather than 3")
    }
  }
  getAge () {
      return this.age
  }
  setAvgScore (score: number) {
    if (score > 4) {
        this.avgScore = score
    } else {
        throw new Error("Wrong score! Must be greather than 4")
    }
  }
  getAvgScore () {
      return this.avgScore
  }
  setEmail (email: string) {
    if (/^[a-z0-9]{1,25}@[a-z]{1,16}(\.[a-z]{2,3}){1,2}$/.test(email)) {
        this.email = email
    } else {
        throw new Error("Incorrect email!")
    }
  }
  getEmail () {
      return this.email
  }
}


class TodoItemModel {
  constructor (title: String, description: String, date: Date, id: number = 0, done: Boolean = false) {

  }
}