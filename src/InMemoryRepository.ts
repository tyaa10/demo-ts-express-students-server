import Student from './Student'
import studentsStub from './studentsStub.json'

export default class InMemoryRepository {
  // public static students: Student[] = []
  public static students: Student[] =
    studentsStub.students.map(studentStub => new Student(
      studentStub.name,
      studentStub.age,
      studentStub.avgScore,
      studentStub.email
    ))
}