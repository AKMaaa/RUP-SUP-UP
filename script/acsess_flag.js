if (window.innerWidth < 500) {/*スマホ時のみの処理*/
    const keyName = 'visited';
    const keyValue = true;

    if (!sessionStorage.getItem(keyName)) {
        //sessionStorageにキーと値を追加
        sessionStorage.setItem(keyName, keyValue);

        //ここに初回アクセス時の処理
        console.log("初めての訪問です");

    } else {
        //ここに通常アクセス時の処理
        console.log("訪問済みです");
        document.getElementById("tutorial").style.display ="none";
    }

}