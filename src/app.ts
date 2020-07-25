class Department {
  //   private readonly id: string
  //   name: string
  // publicデフォルト
  //   private employees: string[] = []

  // protected: privateのように外部からアクセスはできないが継承したサブクラスからはアクセスできる
  protected employees: string[] = []

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

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    // super：ベースクラスのコンストラクタを呼び出す
    super(id, 'IT')
  }
}

// 継承
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    // super：ベースクラスのコンストラクタを呼び出す
    super(id, 'Accounting')
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports)
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return
    }

    this.employees.push(this.name)
  }
}

// 新しいクラス作成
const it = new ITDepartment('d1', ['Max']) //コンストラクタ呼ばれれる
it.addEmployees('Max')
it.addEmployees('Manu')

// 外部からclassの中にアクセスさせたくない
// it.employees[2] = 'Anna'

it.describe()
it.printEmployeeInfomatiion()

// const itCopy = { name: 'DUMMY', describe: it.describe }
// thisはドットの前
// accountingCopy.describe()

console.log(it)

const accounting = new AccountingDepartment('d2', [])
