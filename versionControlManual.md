# Tag作成手順書

- 方法：コミットログからタグを作成する

- **コミットログからタグを作成する方法は2通りある**
 - [Githubからタグを作成](versionControlManual.md#Github)(過去10件のコミットにまたがってTagを作成することが可能)
 - [Eclipseからタグを作成](versionControlManual.md#eclipse)(全コミットにまたがってTagを作成することが可能)

---

###<a name="Github">Githubからタグを作成

①zaimuリポジトリの[トップページ](https://github.com/occ-corp/zaimu)から「releases」をクリック

<img src="https://cloud.githubusercontent.com/assets/11863596/14132580/5302f64e-f682-11e5-889b-3df173e14cfa.PNG" width="600px">

---

②右上の「Draft a new release」をクリック

<img src="https://cloud.githubusercontent.com/assets/11863596/14132592/7916b578-f682-11e5-9302-df03374d0eda.PNG" width="600px">

---

③「Target: master」をクリック、「Recent Commits」をクリックしてタグを作成したい所でコミットを選択

<img src="https://cloud.githubusercontent.com/assets/11863596/14132601/95cfc86c-f682-11e5-8c3f-725efe2105bb.PNG" width="600px">

---

④「バージョン」、「タイトル」、「説明」を入力して「Publish release」をクリック

- [バージョニングルール参照](versioningRules.md)

<img src="https://cloud.githubusercontent.com/assets/11863596/14132623/da646c8a-f682-11e5-9eb0-179e2c9970a9.PNG" width="600px">

---

⑤新しいタグが作成される

<img src="https://cloud.githubusercontent.com/assets/11863596/14132632/f92f1b7e-f682-11e5-87be-12abf20417a5.PNG" width="600px">

----

###<a name="eclipse">eclipseからタグを作成

①``Git リポジトリー``のパースペクティブを開く

<img src="https://cloud.githubusercontent.com/assets/11863596/13942413/8b393ed6-f035-11e5-94fa-ee8c3c818537.PNG" width="600px">

---

②`zaimu` -> `ブランチ` -> `ローカル` -> `タグを作成したいブランチ`で右クリックし、`表示` -> `ヒストリー`をクリック

<img src="https://cloud.githubusercontent.com/assets/11863596/13942462/0e409cac-f036-11e5-8341-9fb3f4ad1722.png" width="600px">

---

③「ヒストリー」で、タグを作成したい時点を右クリックし、「タグの作成」をクリック

<img src="https://cloud.githubusercontent.com/assets/11863596/14132689/8c23585a-f683-11e5-98cb-ff6e31c765e7.png" width="600px">

---

④「タグ名」、「タグ・メッセージ」を入力して「タグを作成してプッシュ開始」をクリック

<img src="https://cloud.githubusercontent.com/assets/11863596/14072017/64f7d19a-f4f6-11e5-8be0-aee76e429b6f.PNG" width="600px">

---

⑤プッシュするタグを選択して「次へ」をクリック

<img src="https://cloud.githubusercontent.com/assets/11863596/14072213/ddeb67f4-f4f8-11e5-8991-c67d25431329.PNG" width="600px">

---

⑥「完了」をクリック

<img src="https://cloud.githubusercontent.com/assets/11863596/14072523/47b08e64-f4fc-11e5-8c95-c0b90c9354a9.PNG" width="600px">

---

⑦zaimuの「[Releases](https://github.com/occ-corp/zaimu/releases)」を見てタグが作成されているか確認する

<img src="https://cloud.githubusercontent.com/assets/11863596/14132671/5ef2d2d4-f683-11e5-8b7a-79b0873fe52f.PNG" width="600px">

