# Tag管理手順書

- タグを作成する
- 障害発生時の修正手順

##タグを作成する

方法：コミットログからタグを切る

**コミットログからタグを切る方法は2通りある**

- Githubからタグを切る(最新のコミットから10件までまたがってTagを作成することが可能)
- eclipseからタグを切る(全コミットにまたがってTagを作成することが可能)

###Githubからタグを切る

1.zaimuリポジトリのトップページから「releases」をクリック

![releases](https://cloud.githubusercontent.com/assets/11863596/14070837/cf8def86-f4e6-11e5-892c-7d8ed69185a7.PNG)

2.右上の「Draft a new release」をクリック

![default](https://cloud.githubusercontent.com/assets/11863596/14070868/69a87dc0-f4e7-11e5-8a1d-1d4c333950e4.PNG)

3.「Target: master」をクリック、「Recent Commits」をクリックしてタグを切りたい所でコミットを選択

![default](https://cloud.githubusercontent.com/assets/11863596/14070950/b05a9284-f4e8-11e5-9302-4e5810512056.PNG)

4.「バージョン」、「タイトル」、「説明」を入力して「Publish release」をクリック

![default](https://cloud.githubusercontent.com/assets/11863596/14071179/2ce2d8b8-f4ec-11e5-86cb-c1ed2715d177.PNG)

5.新しいタグが作成される

![github](https://cloud.githubusercontent.com/assets/11863596/14071183/38c774fe-f4ec-11e5-867a-c2b55d7da3b5.PNG)

###eclipseからタグを切る

以下の手順書は、障害発生時に行う手順書である

##障害発生時の修正手順


1.タグからブランチを切る

2.修正し、プッシュする

3.earファイルを編集する
