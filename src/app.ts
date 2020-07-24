class Department {
  //   private readonly id: string
  //   name: string
  // publicデフォルト
  private employees: string[] = []

  // class及びclassを元に作られたオブジェクトと紐づく引数 constructorではpublic省略しない
  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = n
  }

  // メソッド
  // ダミーパラメータを追加して型の安全性を高める
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployees(employees: string) {
    // this.id = 'd2'
    this.employees.push(employees)
  }

  printEmployeeInfomatiion() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

// 新しいクラス作成
const accounting = new Department('d1', 'Accounting') //コンストラクタ呼ばれれる
accounting.addEmployees('Max')
accounting.addEmployees('Manu')

// 外部からclassの中にアクセスさせたくない
// accounting.employees[2] = 'Anna'

accounting.describe()
accounting.printEmployeeInfomatiion()

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
// thisはドットの前
// accountingCopy.describe()
