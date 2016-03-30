#緊急障害発生時の修正手順

##この手順を行うタイミング

案件などの実装が終わり``master``にマージ後、バグつぶし及びSEテストを行っている途中で緊急障害が起こり実装後の``master``を実装前に戻して緊急障害の対応を行わなければならない時

##前提条件

- あらかじめ実装前のタグが作成されていること
  - [タグ作成の仕方](versionControlManual.md)

##全体の流れ

[1.実装手順](#実装手順)

[2.earファイル作成手順](#earファイル作成手順)

---------

##<a name="実装手順">1.実装手順

①Git リポジトリーのパースペクティブを開く

<img src="https://cloud.githubusercontent.com/assets/11863596/13942413/8b393ed6-f035-11e5-94fa-ee8c3c818537.PNG" width="600px">

②`zaimu` -> `タグ` -> `タグから切りたいブランチ`で右クリックし、`ブランチの作成`をクリック

<img src="https://cloud.githubusercontent.com/assets/11863596/14131860/35494f48-f67a-11e5-9265-6caf1a3c666e.png" width="600px">

③ブランチ名を入力して「完了」をクリック(ここでは例としてブランチ名をtest-branchとする)

<img src="https://cloud.githubusercontent.com/assets/11863596/14074698/f008c32c-f50d-11e5-8b8d-080377a74372.PNG" width="600px">

④障害内容を修正し、プッシュする

##<a name="earファイル作成手順">2.earファイル作成手順

①``zaimu/build/bin/jboss-ant.bat``の``git checkout -b master origin/master``が書いてある行を変更する

- 修正前→ ``git checkout -b master origin/master``

- 修正後→ ``git checkout -b タグから切ったブランチ origin/タグから切ったブランチ``

:warning: 注意！緊急障害対応後は``jboss-ant.bat``ファイルを元に戻すのを忘れないようにする

②earファイルを作成する

③タグから切ったブランチを``master``にマージする

