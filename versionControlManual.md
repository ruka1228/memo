# バージョン管理手順書

###全体の流れ

コミットログからTagを切る

　　　　　↓

タグからブランチを切る

　　　　　↓

障害内容を修正する

　　　　　↓

jboss-ant.batファイルを修正し、earファイルを作成する
- [事前準備](versionControlManual.md#事前準備)

- [GitHubからTagを切る](versionControlManual.md#GitHubからTagを切る)

####コミットログからTagを切る方法を２通りある
- GitHubからTagを切る(過去10件のコミットまでまたがってTagを作成することが出来る)
- eclipseからTagを切る(全コミットにまたがってTagを作成することが出来る)

##GitHubからTagを切る

1.zaimuリポジトリのトップページに行き「releases」をクリックする

2.右上の「Draft a new release」をクリックする

3.「Tag version」、「Target」、「Title」、「Describe」をそれぞれ入力し、「publish release」をクリックして公開 

## eclipseからTagを切る

## タグからブランチの作成の仕方

## jboss-ant.batファイルを修正し、earファイルを作成する

## 事前準備
