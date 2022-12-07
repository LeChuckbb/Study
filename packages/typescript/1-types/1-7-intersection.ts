{
  /**
   * Union의 반대.
   * Intersection Types  = AND
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: "ellie",
    score: 1,
    employeeId: 2,
    work: () => {},
  });
}
