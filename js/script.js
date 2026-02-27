const quizzes = [
  {
  title: "あなたの「直感タイプ」",
  question: "突然予定が空きました。あなたはどうする？",
  choices: [
    "気になっていたことを試す",
    "家でゆっくりする",
    "誰かに連絡する",
    "その場の気分で決める"
  ],
  results: [
    {
      type: "チャレンジ型直感",
      base: "新しい刺激を求める行動派タイプです。",
      strength: "好奇心が強く、チャンスをつかみやすい。",
      caution: "勢いで動きすぎると疲れてしまうことも。",
      advice: "ときどき立ち止まって振り返る時間を作ると安定します。"
    },
    {
      type: "安定型直感",
      base: "自分のペースを大切にする堅実タイプです。",
      strength: "落ち着いた判断ができる。",
      caution: "変化を避けすぎると機会を逃すことも。",
      advice: "小さな挑戦から取り入れてみましょう。"
    },
    {
      type: "共感型直感",
      base: "人とのつながりを大事にするタイプです。",
      strength: "周囲との調和を作れる。",
      caution: "人に合わせすぎると疲れやすい。",
      advice: "自分の気持ちも同じくらい大切に。"
    },
    {
      type: "感覚型直感",
      base: "理屈よりフィーリング重視の自由人タイプです。",
      strength: "発想が柔軟でクリエイティブ。",
      caution: "気分に左右されやすい。",
      advice: "大事な決断は一晩寝かせてみると◎。"
    }
  ]
},
  {
  title: "あなたの「ストレス対処タイプ」",
  question: "嫌なことがあった日、あなたは？",
  choices: [
    "とことん落ち込む",
    "誰かに話す",
    "趣味に没頭する",
    "すぐ忘れようとする"
  ],
  results: [
    {
      type: "内省型",
      base: "考えることで気持ちを整理するタイプです。",
      strength: "自己理解が深まりやすい。",
      caution: "考えすぎると抜け出しにくい。",
      advice: "紙に書き出すと整理しやすくなります。"
    },
    {
      type: "共有型",
      base: "話すことで回復するタイプです。",
      strength: "人との関係性が強み。",
      caution: "相手に依存しすぎないよう注意。",
      advice: "聞いてくれる人を大切にしましょう。"
    },
    {
      type: "没頭型",
      base: "集中することでリセットするタイプです。",
      strength: "切り替えがうまい。",
      caution: "問題を後回しにしがち。",
      advice: "落ち着いたら少しだけ向き合ってみましょう。"
    },
    {
      type: "切替型",
      base: "気持ちの切り替えが早いタイプです。",
      strength: "前向きさがある。",
      caution: "本音を押し込めやすい。",
      advice: "ときどき立ち止まる時間も大切です。"
    }
  ]
},
  {
  title: "あなたの「決断スピードタイプ」",
  question: "レストランでメニューを選ぶとき、あなたは？",
  choices: [
    "すぐ決める",
    "かなり悩む",
    "店員のおすすめにする",
    "直感で決める"
  ],
  results: [
    {
      type: "即断型",
      base: "判断が早く行動力のあるタイプです。",
      strength: "チャンスを逃しにくい。",
      caution: "深く考えずに決めてしまうことも。",
      advice: "大きな決断だけは一呼吸置くと安定します。"
    },
    {
      type: "熟考型",
      base: "慎重に考える堅実タイプです。",
      strength: "後悔の少ない選択ができる。",
      caution: "決断に時間がかかりやすい。",
      advice: "期限を決めると動きやすくなります。"
    },
    {
      type: "委任型",
      base: "周囲を信頼する協調タイプです。",
      strength: "柔軟性がある。",
      caution: "自分の意思が弱く見られることも。",
      advice: "ときどき自分主導で決めてみましょう。"
    },
    {
      type: "直感型",
      base: "感覚重視のクリエイティブタイプです。",
      strength: "発想力がある。",
      caution: "気分に左右されやすい。",
      advice: "重要な選択は理由も言語化してみましょう。"
    }
  ]
},
 {
  title: "あなたの「人間関係ポジションタイプ」",
  question: "グループに入ったとき、あなたはどんな立ち位置になりやすい？",
  choices: [
    "自然とまとめ役になる",
    "サポートに回ることが多い",
    "盛り上げ担当になる",
    "少し距離をとって様子を見る"
  ],
  results: [
    {
      type: "リーダー素質型",
      base: "全体を見渡せる責任感の強いタイプです。",
      strength: "場をまとめる力がある。",
      caution: "抱え込みすぎることも。",
      advice: "頼ることもリーダーの力です。"
    },
    {
      type: "縁の下型",
      base: "人を支える力が強いタイプです。",
      strength: "信頼を集めやすい。",
      caution: "自分を後回しにしがち。",
      advice: "ときには主役になっても大丈夫。"
    },
    {
      type: "ムードメーカー型",
      base: "場の空気を明るくするタイプです。",
      strength: "人との距離を縮めるのが得意。",
      caution: "無理に明るく振る舞いすぎることも。",
      advice: "疲れたら静かな時間も大切に。"
    },
    {
      type: "観察者型",
      base: "状況を読む慎重タイプです。",
      strength: "冷静な判断ができる。",
      caution: "距離を取りすぎると孤立しやすい。",
      advice: "安心できる人から少しずつ関わってみましょう。"
    }
  ]
},
{
  title: "あなたの「一人時間タイプ」",
  question: "休日、予定が何もないときは？",
  choices: [
    "とにかく外に出たい",
    "家で好きなことをする",
    "誰かとゆるく過ごす",
    "何をするか決めずに流れに任せる"
  ],
  results: [
    {
      type: "刺激補給型",
      base: "外からエネルギーを得るタイプです。",
      strength: "行動力がある。",
      caution: "休息不足になりやすい。",
      advice: "予定を入れない日も作りましょう。"
    },
    {
      type: "内向充電型",
      base: "一人時間で回復するタイプです。",
      strength: "自己調整が上手。",
      caution: "こもりすぎることも。",
      advice: "たまに外の刺激も取り入れてみましょう。"
    },
    {
      type: "共有安定型",
      base: "人とのつながりで安心するタイプです。",
      strength: "関係性を大切にする。",
      caution: "一人時間が不足しがち。",
      advice: "短時間でも一人時間を確保してみて。"
    },
    {
      type: "自由循環型",
      base: "流れに身を任せる柔軟タイプです。",
      strength: "ストレスを溜めにくい。",
      caution: "計画性が弱くなることも。",
      advice: "軽い目標を立てると充実します。"
    }
  ]
},
{
  title: "あなたの「本音の出し方タイプ」",
  question: "意見が対立したとき、あなたは？",
  choices: [
    "はっきり言う",
    "やんわり伝える",
    "相手に合わせる",
    "あとからモヤモヤする"
  ],
  results: [
    {
      type: "率直型",
      base: "思ったことを素直に言葉にできるタイプです。",
      strength: "誤解が少なく、信頼されやすいところ。",
      caution: "言い方が強くなりすぎると誤解を生むこともあります。",
      advice: "一言クッション言葉を添えるだけで、さらに魅力が伝わります。"
    },
    {
      type: "調整型",
      base: "関係を壊さない伝え方ができるタイプです。",
      strength: "空気を読む力が高く、衝突をやわらげます。",
      caution: "本音を後回しにしてしまうことがあります。",
      advice: "小さな本音から出していくと、心が楽になります。"
    },
    {
      type: "協調型",
      base: "衝突を避ける優しさを持つタイプです。",
      strength: "場の空気を安定させる力があります。",
      caution: "我慢が積み重なると疲れやすいです。",
      advice: "自分の意見も大切にしていい、と許可を出してみましょう。"
    },
    {
      type: "内省型",
      base: "その場では言わず、後からじっくり考えるタイプです。",
      strength: "感情を整理する力があります。",
      caution: "言えなかったことがモヤモヤに変わることも。",
      advice: "あとからでもいいので、短く伝えてみる練習をしてみましょう。"
    }
  ]
},
{
  title: "あなたの「安心ポイントタイプ」",
  question: "初めての場所に行くとき、何があると一番安心する？",
  choices: [
    "知っている人がいる",
    "事前に詳しく調べてある",
    "静かな落ち着いた空間",
    "すぐ帰れる選択肢がある"
  ],
  results: [
    {
      type: "対人安心型",
      base: "人とのつながりが心の安定材料になるタイプです。",
      strength: "信頼関係を築きやすい。",
      caution: "一人だと不安になりやすい。",
      advice: "少しずつ単独行動にも挑戦を。"
    },
    {
      type: "準備安心型",
      base: "見通しが立つと落ち着けるタイプです。",
      strength: "計画性がある。",
      caution: "想定外に弱い。",
      advice: "完璧でなくても大丈夫と思ってみて。"
    },
    {
      type: "環境安心型",
      base: "空間の雰囲気に敏感なタイプです。",
      strength: "環境適応力がある。",
      caution: "刺激に疲れやすい。",
      advice: "自分の落ち着ける場所を知っておきましょう。"
    },
    {
      type: "逃げ道確保型",
      base: "いつでも戻れる安心感が大切なタイプです。",
      strength: "無理をしないバランス感覚。",
      caution: "挑戦を避けやすい。",
      advice: "小さな一歩から始めましょう。"
    }
  ]
},
{
  title: "あなたの「疲れやすいポイントタイプ」",
  question: "どんなときに一番どっと疲れやすい？",
  choices: [
    "人に気を使い続けたとき",
    "決断を何度も迫られたとき",
    "予定がびっしり詰まっているとき",
    "何もすることがないとき"
  ],
  results: [
    {
      type: "気配り消耗型",
      base: "周囲をよく見る優しいタイプです。",
      strength: "共感力が高い。",
      caution: "エネルギーを使いすぎる。",
      advice: "一人時間を意識的に作りましょう。"
    },
    {
      type: "責任負担型",
      base: "真剣に考える責任感タイプです。",
      strength: "信頼されやすい。",
      caution: "精神的に消耗しやすい。",
      advice: "決断を分担する勇気を。"
    },
    {
      type: "過密ストレス型",
      base: "余白がないと疲れやすいタイプです。",
      strength: "計画実行力がある。",
      caution: "詰め込みすぎる。",
      advice: "スケジュールに余白を。"
    },
    {
      type: "刺激不足型",
      base: "変化がないとエネルギーが落ちるタイプです。",
      strength: "行動力がある。",
      caution: "飽きやすい。",
      advice: "小さな変化を日常に。"
    }
  ]
},
{
  title: "あなたの「承認されたいポイントタイプ」",
  question: "もし褒められるなら、どんな言葉が一番うれしい？",
  choices: [
    "能力がすごいね",
    "努力してるよね",
    "人柄がいいね",
    "センスあるね"
  ],
  results: [
    {
      type: "実力評価型",
      base: "成果やスキルを認められると自信につながるタイプです。",
      strength: "成長意欲が高い。",
      caution: "結果に縛られやすい。",
      advice: "過程も自分で認めてあげましょう。"
    },
    {
      type: "努力共感型",
      base: "過程を見てもらえると安心できるタイプです。",
      strength: "コツコツ積み上げる力がある。",
      caution: "評価されないと不安になりやすい。",
      advice: "自分でも努力を言葉にしてみましょう。"
    },
    {
      type: "人間性重視型",
      base: "内面を認められることが励みになるタイプです。",
      strength: "関係性を大切にできる。",
      caution: "人間関係に左右されやすい。",
      advice: "自分の良さを自覚しておきましょう。"
    },
    {
      type: "感性評価型",
      base: "個性やセンスを評価されると嬉しいタイプです。",
      strength: "独自の視点を持っている。",
      caution: "理解されないと落ち込みやすい。",
      advice: "分かる人に届けばOKと考えてみましょう。"
    }
  ]
},
{
  title: "あなたの「集中スタイルタイプ」",
  question: "何かに取り組むとき、どんな環境が一番集中できる？",
  choices: [
    "少し音や人の気配がある",
    "完全に静かな空間",
    "カフェなどほどよい雑音",
    "気分で場所を変える"
  ],
  results: [
    {
      type: "気配集中型",
      base: "人の存在があるほうが集中しやすいタイプです。",
      strength: "環境を活かせる。",
      caution: "一人だと集中しにくい。",
      advice: "オンライン作業室などを活用してみましょう。"
    },
    {
      type: "静寂集中型",
      base: "静かな環境で力を発揮するタイプです。",
      strength: "深い集中ができる。",
      caution: "騒音に弱い。",
      advice: "ノイズ対策を準備しておきましょう。"
    },
    {
      type: "雑音活用型",
      base: "適度な音があるほうが落ち着くタイプです。",
      strength: "環境適応力が高い。",
      caution: "静かすぎると逆に落ち着かない。",
      advice: "カフェ音などを流してみましょう。"
    },
    {
      type: "変化活用型",
      base: "環境を変えながら集中を保つタイプです。",
      strength: "気分転換が上手。",
      caution: "移動で疲れやすい。",
      advice: "変化の回数を決めておくと安定します。"
    }
  ]
},
];

let currentQuiz = 0;

function loadQuiz() {
  const quiz = quizzes[currentQuiz];

  document.getElementById("quiz-title").innerText = quiz.title;
  document.getElementById("quiz-question").innerText = quiz.question;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  quiz.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.innerText = choice;
    button.onclick = () => showResult(index);
    choicesDiv.appendChild(button);
  });

  document.getElementById("result").style.display = "none";
}

function showResult(index) {
  const resultDiv = document.getElementById("result");
  const data = quizzes[currentQuiz].results[index];

  // まだ旧形式の診断がある場合の保険
  if (typeof data === "string") {
    resultDiv.innerText = data;
  } else {
    resultDiv.innerHTML = `
      <h3>【${data.type}】</h3>
      <p><strong>■ 基本タイプ</strong><br>${data.base}</p>
      <p><strong>■ 強み</strong><br>${data.strength}</p>
      <p><strong>■ 気をつけたいこと</strong><br>${data.caution}</p>
      <p><strong>■ ゆるアドバイス</strong><br>${data.advice}</p>
    `;
  }

  resultDiv.style.display = "block";
}

function nextQuiz() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quizzes.length);
  } while (randomIndex === currentQuiz);

  currentQuiz = randomIndex;
  loadQuiz();
}

window.onload = loadQuiz;
