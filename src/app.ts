class Department {
    name: string

    // class及びclassを元に作られたオブジェクトと紐づく引数
    constructor(n: string) {
        this.name = n
    }
}

// 新しいクラス作成
const accounting = new Department('Accounting'); //コンストラクタ呼ばれれる
console.log(accounting)