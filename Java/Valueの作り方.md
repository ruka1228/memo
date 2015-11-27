#Valueの作り方

1.定数や変数の定義

2.ActionからValueクラスに値をセットする

例）↓
```java
/**
     * ここにこのメソッドの説明を分かりやすく書く
     * @param 
     * @param 
     * @return
     */
    private ここにバリューのクラス名 getTestValue(ここにフォームのクラスForm 引数（全部の変数が入っている変数）) {
        ここにバリューのクラス名 ここにバリューのクラス変数 = new ここにバリューのクラス名();　//インスタンス化
        
        //上がやり方、２行めからはやりかた。
        ここにバリューのクラス変数.setバリュークラスにセット(引数（全部の変数が入っている変数）.ここにフォームのクラスのゲット());
        test.setNumber(from.getTxtNumber());
        test.setName(from.getTxtName());
        test.setTime(from.getTime());
        ・
        ・
        ・
        ・
        ・
        
        return ここにバリューのクラス変数;
    }
}
```
