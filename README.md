# firebase-crud

## why
面談で紙の業務置き換えたいなら評論家やってないで実際作れよ
って言われたり，twitterで就活の倍率たけぇよって愚痴ってたら
まず小さいものでも作って(公開しろ)って言われたので重い腰を上げた

https://twitter.com/huequica/status/1235159194690449408

## result
ほぼコピペだがlocalhost3kでは完全に動いた
logic的にcakeの方がシンプルに見える．Routerは分かりやすそう？

https://www.djamware.com/post/5bc50ea680aca7466989441d/reactjs-firebase-tutorial-building-firestore-crud-web-application

## create project
create firebase project
https://console.firebase.google.com/u/0/

create firestore database

create collection boards, 
document with auto id, 
add column auther, desc, title,

Install React and make React App

Install npm firebase module


Add Firebase to your web app
のconfig{}とfirebase initを
firebase.jsにpaste

Install router DOM, Bootstrap

Touch src/(Create, Show, Edit).js

index.jsのcodeをそのままpaste!w

```
import Edit from './components/Edit';
...
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
```
とかになる

App.jsも丸々paste!w
Show.jsも
Createも
Editも
特に警告もなく，簡単にnpm startしたらcrudになってしまった

だがこのままfirebase init してdeployしてもそのままweb公開は
できなかった，当たり前か....明日やろう．
