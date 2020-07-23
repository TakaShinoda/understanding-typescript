class Department {
    name: string

    // class及びclassを元に作られたオブジェクトと紐づく引数
    constructor(n: string) {
        this.name = n
    }

    // メソッド
    // ダミーパラメータを追加して型の安全性を高める
    describe(this: Department) {
        console.log("Department: " + this.name)
    }
}

// 新しいクラス作成
const accounting = new Department('Accounting'); //コンストラクタ呼ばれれる
accounting.describe();

const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
// thisはドットの前
accountingCopy.describe()
