# SELECT(検索)解答

## <a name="1">1.テーブルからデータを取り出す

#### 【解答】

```sql
SELECT * FROM syain_master;
```

#### 【ポイント】
- データを検索する時は、SELECT文を使います。
- SQLを記述する際、語句の間は半角スペースで区切ります。
- アルファベットの大文字と小文字を区別する必要はありません。
- 例えば、下記2つのSQLの実行結果を同じになります。
 - `SELECT * FROM syain_master;`
 - `select * from syain_master;`
 
## 2.カラムを指定してデータを取りだす

#### 【解答】

```sql
SELECT nama,address FROM syain_master;
```

#### 【ポイント】
- 必要なカラムだけを抜き出してデータを取り出すことが出来ます。
- カラム名の並び順は、必ずしもテーブルの並び順と同じである必要はありません。例えば「`SELECT address,name`」でもエラーにはなりません。


## 3.カラムに別名をつける

#### 【解答】

```sql
SELECT
  no AS 社員番号,
  name AS 名前,
  age AS 年齢,
  tel AS 電話番号,
  address AS 住所,
  siten_code AS 支店コード,
FROM syain_master;
```

#### 【ポイント】
- 「AS」を使うことでカラムに別名をつけることが出来ます。
- 別名にはアルファベットの他、日本語も使用出来ます。

## 4.連結演算子でカラムや文字列を連結する

#### 【解答】
```sql
SELECT name || 'と申します。' || age || '歳です。' AS 自己紹介 FROM syain_master;
```

#### 【ポイント】
- 2本の縦棒(||)を使用してカラムや文字列を連結することが出来ます。
- 連結させるカラムや文字列に制限はありません。


## 5.重複行を1行にまとめる

#### 【解答】
```sql
SELECT DISTINCT maker FROM syouhin;
```

#### 【ポイント】
- 「DISTINCT」を使用して重複している行を1つにまとめる事が出来ます。


## 6.レコードを指定してデータを取り出す

#### 【解答】
```sql
SELECT * FROM syain_master WHERE no = 1;
```

#### 【ポイント】
- 必要なレコードだけと指定して、データを取り出すことが出来ます。
- SELECT→FROM→WHEREの順を守らないとエラーになります。


## 7.レコードを指定してデータを取り出す

#### 【解答】
```sql
SELECT * FROM syain_master WHERE no >= 4;
```

または、

```sql
SELECT * FROM syain_master WHERE 4 <= no;
```

#### 【ポイント】
- WHERE句を「no > 3」としても、同様の結果を得ることが出来ます。しかし、問題に「noが4以上のレコード」と書かれているので、「no >= 4」としたほうが分かり易いです。


## 8.範囲を指定してレコードを取り出す

#### 【解答】
```sql
SELECT * FROM syain_master
WHERE age BETWEEN 25 AND 35;
```

#### 【ポイント】
- 「BETWEEN」を使用して、値の範囲指定をすることが出来ます。
- 境界値も含むことに注意して下さい。


## 9.複数の値と一致するレコードを取り出す

#### 【解答】
```sql
SELECT * FROM syain_master
WHERE no IN(1,4,5);
```

#### 【ポイント】
- 「IN」を使用して、指定した値と当てはまる場合にレコードを取り出すことが出来ます。
- NULLの値を指定してもレコードを取り出すことは出来ません。


## <a name="10">10.NULL値のデータを取り出す

#### 【解答】
```sql
SELECT * FROM syain_master WHERE tel IS NULL;
```

#### 【ポイント】
- 特定のカラムに値が入っていないレコードだけを指定して、データを取り出すことが出来ます。
- IS NULLの替わりにIS NOT NULLを使えば、NULLではないレコードだけを取り出すことも可能です。


## 11.パターンマッチング

#### 【解答】
```sql
SELECT * FROM syain_master
WHERE address LIKE '那覇市%';
```

```sql
SELECT * FROM syain_master
WHERE address LIKE '%大名%';
```

#### 【ポイント】
- 文字列が部分的に一致しているレコードを検索することが出来ます。
- メタ文字には「%」と「_」があり、様々な指定が可能です。


## 12.条件の組み合わせ

#### 【解答】
```sql
SELECT * FROM syain_master
WHERE address LIKE '那覇市%' AND siten_code = 2;
```

```sql
SELECT * FROM syain_master
WHERE siten_code = 1 OR siten_code = 3;
```

#### 【ポイント】
- WHERE句の条件文は、論理演算子(AND,OR)で組み合わせることが出来ます。
- 3つ以上の条件を組み合わせることも可能です。
- 「`siten_code = 1 OR siten_code = 3`」を、「`siten_code = 1 OR 3`」と記述するとエラーになるので気を付けて下さい。


## 13.算術演算子で計算を行う

#### 【解答】
```sql
SELECT
  syouhinmei AS 商品名,
  tanka * 1.08 AS 単価
FROM syouhin;
```

#### 【ポイント】
- テーブルから取得したデータで演算を行うことが出来ます。
- 算術演算子には優先順位があるので注意しましょう。
- 小数点以下を四捨五入する場合はROUND()関数を使います。


## 14.関数で集計を行う

#### 【解答】
```sql
SELECT COUNT(*) AS 社員数 FROM syain_master;
```

```sql
SELECT AVG(age) AS 平均年齢 FROM syain_master;
```

#### 【ポイント】
- 集計を行う際は、集約関数(COUNT(),SUM(),AVG(),MIN(),MAX())を活用しましょう。
- ROUND(AVG(age),2)とすることで、結果は「35.67」(小数点第3位で四捨五入)になります。


## 15.CASEで条件分岐する

#### 【解答】
```sql
SELECT
  name AS 名前,
  age AS 年齢,
  CASE
    WHEN age < 30 THEN '若手'
    WHEN age < 40 THEN '中堅'
    ELSE 'ベテラン'
  END AS キャリア
FROM syain_master;
```

#### 【ポイント】
- ELSEも書いて置きどの条件にも当てはまらなかった場合もしっかりを書いて置きましょう。


## 16.検索結果をソートする

#### 【解答】
```sql
SELECT * FROM syain_master ORDER BY age;
```

または、

```sql
SELECT * FROM syain_master ORDER BY age ASC;
```

#### 【ポイント】
- ORDER BYを用いて、検索結果を昇順/降順に並べ替えることが出来ます。
- WHERE句を書く場合、「SELECT→FROM→WHERE→ORDER BY」の順で記述します。


## 17.検索結果をグループ化する

#### 【解答】
```sql
SELECT 
  maker AS メーカー,
  COUNT(syouhinmei) AS 商品名
FROM syouhin
GROUP BY maker;
```

#### 【ポイント】
- GROUP BYを用いて、検索結果をグループ化することが出来ます。
- 一般的に、GROUP BYは集約関数とセットで使用されます。


## 18.集合化からの絞込み

#### 【解答】
```sql
SELECT 
  maker AS メーカー,
  COUNT(syouhinmei) AS 商品名
FROM syouhin
GROUP BY maker
HAVING COUNT(syouhinmei) >= 3;
```

#### 【ポイント】
- 「HAVING」を使用して、グループ化した結果から絞込みすることが出来ます。
- 集計関数を使用出来ることを除いては「WHERE句」を構文は一緒です。


## 19.複数の検索結果を一つの表にまとめる

#### 【解答】
```sql
SELECT name FROM syain_master
UNION
SELECT name FROM Arbeit;
```

#### 【ポイント】
- 3つ以上のSELECTを連結することも可能です。
- 取得する「カラム数」は、すべてのSELECTで同一でなくてはなりません。
- 取得する「カラムの属性」は、すべてのSELECTで同一でなくてはなりません。
- 取得する「カラム名」は、各SELECTで異なっていても問題ありません。
- ORDER BYは、最後のSELECTにのみ記述することが出来ます。ORDER BYを指定した場合、すべてのSELECTの検索結果が連結された後、まとめてソートされます。


## 20.内部結合でデータを取り出す

#### 【解答】
```sql
SELECT
  syouhin.code AS コード,
  syouhin.syouhinmei AS 商品名,
  syouhin.maker AS メーカー,
  syouhin.tanka AS 単価,
  syouhin.kazu AS 売上数,
  zaiko.kazu AS 在庫数
FROM syouhin INNER JOIN zaiko
ON syouhin.code = zaiko.codo;
```

#### 【ポイント】
- INNER JOINを用いて、複数のテーブルから必要な情報を取り出すことが出来ます。
- 売上数を在庫数のカラム名が同じ「kazu」の為、ASで別名をつけると表がみやすくなります。


## 21.外部結合でデータを取り出す

#### 【解答】
```sql
SELECT
  syouhin.code AS コード,
  syouhin.syouhinmei AS 商品名,
  syouhin.maker AS メーカー,
  syouhin.tanka AS 単価,
  syouhin.kazu AS 売上数,
  zaiko.kazu AS 在庫数
FROM syouhin LEFT JOIN zaiko
ON syouhin.code = zaiko.codo;
```

#### 【ポイント】
- LEFT JOINを用いて、左側のテーブルを優先した情報を取り出すことが出来ます。
- 右側の在庫管理テーブルのレコードを優先したい場合は、RIGHT JOINを指定します。
- 外部結合は、データベースによってはLEFT JOINやRIGHT JOIN以外の書き方でも実現できることがあります。特定のデータベースでのみ通用する書き方、いわゆる方言です。
- 方言で書かれたSQLは。他のデータベースでは使用できないため、移植性が悪くなります。


## 22.副問い合わせ

#### 【解答】
```sql
SELECT name, age FROM syain_master
WHERE age > (SELECT AVG(age)
             FROM syain_master);
```

#### 【ポイント】
- 副問い合わせを使用して、すこし複雑な検索が出来ます。
- 副問い合わせは1行帰ってくる処理と複数行帰ってるく処理があるので注意しましょう。
