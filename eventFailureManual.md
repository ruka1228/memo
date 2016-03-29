#緊急障害発生時の修正手順

##この手順を行うタイミング

案件などの実装が終わり``master``にマージ後、バグつぶし及びSEテストを行っている途中で緊急障害が起こり実装後の``master``を実装前に戻して緊急障害の対応を行わなければならない時

##前提条件

- あらかじめ実装前のタグが作成されていること
  - [タグ作成の仕方](versionControlManual.md)

---------

1.Git リポジトリーのパースペクティブを開く

![git](https://cloud.githubusercontent.com/assets/11863596/13942413/8b393ed6-f035-11e5-94fa-ee8c3c818537.PNG)

2.`zaimu` -> `タグ` -> `タグから切りたいブランチ`で右クリックし、`ブランチの作成`をクリック

![default](https://cloud.githubusercontent.com/assets/11863596/14074542/aee19cb2-f50c-11e5-86c6-099a05691399.png)

3.ブランチ名を入力して「完了」をクリック(ここでは例としてブランチ名をtest-branchとする)

![default](https://cloud.githubusercontent.com/assets/11863596/14074698/f008c32c-f50d-11e5-8b8d-080377a74372.PNG)

4.障害内容を修正し、プッシュする

5.zaimu/build/bin/jboss-ant.batを編集する

```
・修正前↓
git checkout -b master origin/master
```

```
・修正後↓
git checkout -b test-branch origin/test-branch
```
