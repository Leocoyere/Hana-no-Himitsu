document.querySelector(".pagination > div:nth-child(2)").addEventListener('click', () => {
    document.querySelector(".pagination > div:nth-child(2)").classList.add("black")
    document.querySelector(".pagination > div:nth-child(1)").classList.remove("black")
    document.querySelector("#us h4").innerHTML = "Uyeno Hanako"
    document.querySelector("#us h5").innerHTML = "ウいぇの ハなこ"
    document.querySelector("#us p:nth-of-type(1)").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iusto error. Voluptate, accusamus tempore. Nesciunt repudiandae commodi libero natus recusandae aspernatur, eum dolores temporibus maiores deleniti sapiente, hic quis quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem illum in nisi aliquam. Fuga molestiae iure est, laboriosam dolorem rem inventore. Dolores soluta nam inventore voluptatibus aliquam quidem vitae temporibus!"
    document.querySelector("#us p:nth-of-type(2)").innerHTML = "いい誕生日を迎えられますように。 インターネットのテクノロジーは日進月歩、いや、秒進分歩で進歩している。 申し訳ないけど長居できないんですよ。 もし電気がないと、私たちの暮らしがどのようなものになるか想像できますか。 「ｐｒｅｔｔｙ」の綴りは？ 彼氏が留置所に入って10日経ちました。 信用して」と彼は言った。 いろいろな意味で、正直が最善の策であることは言うまでもない。 ５月１０日月曜日の午後３時に東京駅八重洲中央口で待ち合わせをしていただけませんか。 孫娘が自分で描いたおじいさんの絵を贈ってくれた日はおじいさんにはうれしい一日だった。"
    document.querySelector("#us figure").innerHTML = "<img src='views/img/team/hanako_flower.jpg' alt=''>"
})

document.querySelector(".pagination > div:nth-child(1)").addEventListener('click', () => {
    document.querySelector(".pagination > div:nth-child(1)").classList.add("black")
    document.querySelector(".pagination > div:nth-child(2)").classList.remove("black")
    document.querySelector("#us h4").innerHTML = "Ogura Toshiaki"
    document.querySelector("#us h5").innerHTML = "おぐら としあき"
    document.querySelector("#us p:nth-of-type(1)").innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, nostrum dicta? Omnis rerum, necessitatibus possimus earum aperiam cumque laborum eligendi eaque temporibus maiores fugiat! Eligendi ea dolore alias quaerat! Veniam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro illo et adipisci minima veritatis! Animi, ea mollitia odit quo velit voluptate distinctio reprehenderit laboriosam neque iste deserunt perspiciatis necessitatibus veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    document.querySelector("#us p:nth-of-type(2)").innerHTML = "イベントが成功したのは貴殿のたゆみ無い努力と献身のおかげです。 「ハムレット」はこれまでで最もおもしろい戯曲だと言われている。 肩慣らしには丁度いいかも。 もっと時間が必要だ。 きょう何を昼食に食べましたか。 いろいろな意味で、正直が最善の策であることは言うまでもない。 ３年前に東京へ来て以来ここに住んでいる。 彼氏が留置所に入って10日経ちました。 日本には美しい都市が多い。例えば京都、奈良だ。 １９８４年の８月、私は仕事でたまたま沖縄に行く事になった。"
    document.querySelector("#us figure").innerHTML = "<img src='views/img/team/toshiaki_portrait.jpg' alt=''>"
})
