# Tag管理手順書

- [タグを作成する](versionControlManual.md#タグを作成する)
- [障害発生時の修正手順](versionControlManual.md#障害発生時の修正手順)

##タグを作成する

- 方法：コミットログからタグを作成する

**コミットログからタグを作成する方法は2通りある**

- [Githubからタグを作成](versionControlManual.md#Github)(最新のコミットから10件までまたがってTagを作成することが可能)
- [Eclipseからタグを作成](versionControlManual.md#eclipse)(全コミットにまたがってTagを作成することが可能)

###<a name="Github">Githubからタグを作成

1.zaimuリポジトリの[トップページ](https://github.com/occ-corp/zaimu)から「releases」をクリック

![releases](https://cloud.githubusercontent.com/assets/11863596/14070837/cf8def86-f4e6-11e5-892c-7d8ed69185a7.PNG)

2.右上の「Draft a new release」をクリック

![default](https://cloud.githubusercontent.com/assets/11863596/14070868/69a87dc0-f4e7-11e5-8a1d-1d4c333950e4.PNG)

3.「Target: master」をクリック、「Recent Commits」をクリックしてタグを切りたい所でコミットを選択

![default](https://cloud.githubusercontent.com/assets/11863596/14070950/b05a9284-f4e8-11e5-9302-4e5810512056.PNG)

4.「バージョン」、「タイトル」、「説明」を入力して「Publish release」をクリック

![default](https://cloud.githubusercontent.com/assets/11863596/14071179/2ce2d8b8-f4ec-11e5-86cb-c1ed2715d177.PNG)

5.新しいタグが作成される

![github](https://cloud.githubusercontent.com/assets/11863596/14071183/38c774fe-f4ec-11e5-867a-c2b55d7da3b5.PNG)

###<a name="eclipse">eclipseからタグを作成

1.タグを作成したいブランチに切り替える

2.``Git リポジトリー``のパースペクティブを開く

![default](https://cloud.githubusercontent.com/assets/11863596/13942413/8b393ed6-f035-11e5-94fa-ee8c3c818537.PNG)

3.`zaimu` -> `ブランチ` -> `ローカル` -> `タグを作成したいブランチ`で右クリックし、`表示` -> `ヒストリー`をクリック

![default](https://cloud.githubusercontent.com/assets/11863596/13942462/0e409cac-f036-11e5-8341-9fb3f4ad1722.png)

4.「ヒストリー」で、タグを作成したい時点で右クリックし、「タグの作成」をクリック

![default](https://cloud.githubusercontent.com/assets/11863596/14071923/25fed7fa-f4f5-11e5-8578-d083c6a4a973.png)

5.「タグ名」、「タグ・メッセージ」を入力して「タグを作成してプッシュ開始」をクリック

![default](https://cloud.githubusercontent.com/assets/11863596/14072017/64f7d19a-f4f6-11e5-8be0-aee76e429b6f.PNG)

6.プッシュするタグを選択して「次へ」をクリック

![default](https://cloud.githubusercontent.com/assets/11863596/14072213/ddeb67f4-f4f8-11e5-8991-c67d25431329.PNG)

7.「完了」をクリック

![default](https://cloud.githubusercontent.com/assets/11863596/14072523/47b08e64-f4fc-11e5-8c95-c0b90c9354a9.PNG)

8.zaimuの「[Releases](https://github.com/occ-corp/zaimu/releases)」を見てタグが作成されているか確認する

![default](https://cloud.githubusercontent.com/assets/11863596/14072624/35b9cc38-f4fd-11e5-835f-3d75fcc34d2f.PNG)


以下の手順書は、障害発生時に行う手順書である

##障害発生時の修正手順


1.タグからブランチを切る

2.修正し、プッシュする

3.earファイルを編集する
