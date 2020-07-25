class Department {
  //   private readonly id: string
  //   name: string
  // publicデフォルト
  //   private employees: string[] = []

  // 静的プロパティ
  static fiscalYear = 2020

  // protected: privateのように外部からアクセスはできないが継承したサブクラスからはアクセスできる
  protected employees: string[] = []

  // 静的メソッド
  static createEmployee(name: string) {
    return { name: name }
  }

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
  private lastReport: string

  // getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('レポートが見つかりません。')
  }

  // setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('正しい値を設定してください。')
    }
    this.addReport(value)
  }

  constructor(id: string, private reports: string[]) {
    // super：ベースクラスのコンストラクタを呼び出す
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
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

// staticメソッド
const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalYear)

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

// ゲッターはドットでアクセスできる。()は不要
console.log(accounting.mostRecentReport)
// セッター
accounting.mostRecentReport = '通期会計レポート'

accounting.addReport('Something')
accounting.printReports()
