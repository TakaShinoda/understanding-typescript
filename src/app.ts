class Department {
  name: string
//   publicデフォルト
  private employees: string[] = []

  // class及びclassを元に作られたオブジェクトと紐づく引数
  constructor(n: string) {
    this.name = n
  }

  // メソッド
  // ダミーパラメータを追加して型の安全性を高める
  describe(this: Department) {
    console.log('Department: ' + this.name)
  }

  addEmployees(employees: string) {
    this.employees.push(employees)
  }

  printEmployeeInfomatiion() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

// 新しいクラス作成
const accounting = new Department('Accounting') //コンストラクタ呼ばれれる
accounting.addEmployees('Max')
accounting.addEmployees('Manu')

// 外部からclassの中にアクセスさせたくない
// accounting.employees[2] = 'Anna'

accounting.describe()
accounting.printEmployeeInfomatiion()

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
// thisはドットの前
// accountingCopy.describe()
