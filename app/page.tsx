"use client";

import { useState } from "react";

const zodiacSigns = [
  { sign: "牡羊座", emoji: "♈", period: "3/21〜4/19", element: "火" },
  { sign: "牡牛座", emoji: "♉", period: "4/20〜5/20", element: "土" },
  { sign: "双子座", emoji: "♊", period: "5/21〜6/21", element: "風" },
  { sign: "蟹座", emoji: "♋", period: "6/22〜7/22", element: "水" },
  { sign: "獅子座", emoji: "♌", period: "7/23〜8/22", element: "火" },
  { sign: "乙女座", emoji: "♍", period: "8/23〜9/22", element: "土" },
  { sign: "天秤座", emoji: "♎", period: "9/23〜10/23", element: "風" },
  { sign: "蠍座", emoji: "♏", period: "10/24〜11/22", element: "水" },
  { sign: "射手座", emoji: "♐", period: "11/23〜12/21", element: "火" },
  { sign: "山羊座", emoji: "♑", period: "12/22〜1/19", element: "土" },
  { sign: "水瓶座", emoji: "♒", period: "1/20〜2/18", element: "風" },
  { sign: "魚座", emoji: "♓", period: "2/19〜3/20", element: "水" },
];

const fortunes = [
  {
    overall: "⭐⭐⭐⭐⭐",
    love: "⭐⭐⭐⭐⭐",
    work: "⭐⭐⭐⭐",
    money: "⭐⭐⭐⭐⭐",
    message: "今日はあなたに宇宙の祝福が降り注ぐ絶好の日！チャンスを積極的につかみましょう。",
    color: "金色",
    number: 8,
  },
  {
    overall: "⭐⭐⭐⭐",
    love: "⭐⭐⭐⭐⭐",
    work: "⭐⭐⭐",
    money: "⭐⭐⭐⭐",
    message: "愛情運が急上昇！大切な人との時間を優先することで、運気がさらに高まります。",
    color: "ピンク",
    number: 3,
  },
  {
    overall: "⭐⭐⭐",
    love: "⭐⭐⭐",
    work: "⭐⭐⭐⭐⭐",
    money: "⭐⭐⭐",
    message: "仕事運が絶好調！努力が認められる予感。コツコツと積み上げてきたことが花開く日です。",
    color: "青",
    number: 7,
  },
  {
    overall: "⭐⭐⭐⭐",
    love: "⭐⭐⭐",
    work: "⭐⭐⭐⭐",
    money: "⭐⭐⭐⭐⭐",
    message: "金運上昇中！思わぬ収入や素敵な出会いが待っています。直感を信じて行動しましょう。",
    color: "緑",
    number: 5,
  },
  {
    overall: "⭐⭐⭐",
    love: "⭐⭐⭐⭐",
    work: "⭐⭐⭐",
    money: "⭐⭐⭐",
    message: "内なる声に耳を傾ける日。無理せず自分のペースで進むことで良い結果を引き寄せます。",
    color: "白",
    number: 1,
  },
];

const tarotCards = [
  { name: "魔術師", emoji: "🎩", meaning: "意志と創造力。あなたの中に秘められた才能が今こそ輝く時。" },
  { name: "女教皇", emoji: "🌙", meaning: "直感と内なる知恵。静かに瞑想し、宇宙のメッセージを受け取って。" },
  { name: "女帝", emoji: "👑", meaning: "豊かさと愛情。物質的にも精神的にも恵まれた時期が訪れます。" },
  { name: "皇帝", emoji: "⚔️", meaning: "安定と権威。あなたのリーダーシップが周囲を導く力になります。" },
  { name: "太陽", emoji: "☀️", meaning: "喜びと成功。明るいエネルギーに満ちた最高の運勢です！" },
  { name: "月", emoji: "🌕", meaning: "神秘と変化。見えないものに目を向けることで真実が見えてくる。" },
  { name: "星", emoji: "⭐", meaning: "希望と癒し。未来への希望を持ち続けることで道は開かれます。" },
  { name: "世界", emoji: "🌍", meaning: "完成と達成。長い旅が実を結び、新たなサイクルが始まります。" },
  { name: "恋人", emoji: "💕", meaning: "選択と愛。真心を持って選択することで幸せが訪れます。" },
  { name: "力", emoji: "🦁", meaning: "内なる強さ。困難に立ち向かう勇気があなたの中に宿っています。" },
];

export default function HomePage() {
  const [selectedZodiac, setSelectedZodiac] = useState<number | null>(null);
  const [fortune, setFortune] = useState<typeof fortunes[0] | null>(null);
  const [selectedTarot, setSelectedTarot] = useState<typeof tarotCards[0] | null>(null);
  const [tarotRevealed, setTarotRevealed] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<typeof tarotCards>([]);

  const handleZodiacSelect = (index: number) => {
    setSelectedZodiac(index);
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
  };

  const shuffleTarot = () => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5).slice(0, 3);
    setShuffledCards(shuffled);
    setSelectedTarot(null);
    setTarotRevealed(false);
  };

  const selectTarotCard = (card: typeof tarotCards[0]) => {
    setSelectedTarot(card);
    setTarotRevealed(true);
  };

  return (
    <main className="min-h-screen" style={{ background: "linear-gradient(135deg, #0a0015 0%, #1a0030 50%, #0a0015 100%)" }}>
      {/* Stars decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white twinkle"
            style={{
              width: (((i * 7) % 3) + 1) + "px",
              height: (((i * 7) % 3) + 1) + "px",
              top: ((i * 2.1) % 100) + "%",
              left: ((i * 1.9) % 100) + "%",
              animationDelay: ((i * 0.08) % 4) + "s",
              animationDuration: ((i * 0.06) % 3 + 2) + "s",
              opacity: 0.3 + ((i * 0.014) % 0.7),
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-12 px-4">
        <div className="float-animation inline-block mb-4">
          <span style={{ fontSize: "4rem" }}>🔮</span>
        </div>
        <h1 className="text-5xl font-bold mb-3 text-shimmer">占いカツ</h1>
        <p className="text-purple-300 text-lg">星が導く、あなただけの運命</p>
        <div className="mt-4 flex justify-center gap-4 text-sm text-purple-400">
          <span>✨ 星座占い</span>
          <span>🃏 タロット</span>
          <span>🌙 今日の運勢</span>
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-20">

        {/* Zodiac Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-2 text-purple-200">🌟 星座占い</h2>
          <p className="text-center text-purple-400 mb-8 text-sm">あなたの星座を選んでください</p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {zodiacSigns.map((z, i) => (
              <button
                key={i}
                onClick={() => handleZodiacSelect(i)}
                className="rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background: selectedZodiac === i
                    ? "linear-gradient(135deg, rgba(147, 51, 234, 0.6), rgba(79, 13, 161, 0.6))"
                    : "rgba(255,255,255,0.05)",
                  border: selectedZodiac === i ? "1px solid rgba(180, 80, 255, 0.8)" : "1px solid rgba(255,255,255,0.1)",
                  boxShadow: selectedZodiac === i ? "0 0 20px rgba(147, 51, 234, 0.4)" : "none",
                }}
              >
                <div style={{ fontSize: "1.5rem" }}>{z.emoji}</div>
                <div className="text-xs font-medium text-purple-100 mt-1">{z.sign}</div>
                <div className="text-xs text-purple-400 mt-0.5">{z.element}属性</div>
              </button>
            ))}
          </div>

          {/* Fortune Result */}
          {fortune && selectedZodiac !== null && (
            <div
              className="mt-8 rounded-2xl p-6"
              style={{
                background: "rgba(147, 51, 234, 0.1)",
                border: "1px solid rgba(180, 80, 255, 0.3)",
                boxShadow: "0 0 40px rgba(147, 51, 234, 0.15)",
              }}
            >
              <div className="text-center mb-6">
                <span style={{ fontSize: "2rem" }}>{zodiacSigns[selectedZodiac].emoji}</span>
                <h3 className="text-xl font-bold text-purple-200 mt-2">
                  {zodiacSigns[selectedZodiac].sign} 今日の運勢
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "総合運", value: fortune.overall },
                  { label: "恋愛運", value: fortune.love },
                  { label: "仕事運", value: fortune.work },
                  { label: "金運", value: fortune.money },
                ].map((item, i) => (
                  <div key={i} className="text-center rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="text-xs text-purple-400 mb-1">{item.label}</div>
                    <div className="text-xs">{item.value}</div>
                  </div>
                ))}
              </div>

              <p className="text-purple-100 text-center leading-relaxed mb-4">{fortune.message}</p>

              <div className="flex justify-center gap-6 text-sm text-purple-400">
                <span>🎨 ラッキーカラー：<span className="text-purple-200">{fortune.color}</span></span>
                <span>🔢 ラッキーナンバー：<span className="text-purple-200">{fortune.number}</span></span>
              </div>
            </div>
          )}
        </section>

        {/* Tarot Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-2 text-purple-200">🃏 タロット占い</h2>
          <p className="text-center text-purple-400 mb-8 text-sm">心を静めてカードを引いてください</p>

          <div className="text-center mb-6">
            <button
              onClick={shuffleTarot}
              className="px-8 py-3 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f0da1)",
                boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)",
              }}
            >
              ✨ カードをシャッフルする
            </button>
          </div>

          {shuffledCards.length > 0 && (
            <div>
              <p className="text-center text-purple-400 text-sm mb-4">3枚からカードを選んでください</p>
              <div className="flex justify-center gap-4">
                {shuffledCards.map((card, i) => (
                  <button
                    key={i}
                    onClick={() => selectTarotCard(card)}
                    className="relative rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{
                      width: "100px",
                      height: "160px",
                      background: tarotRevealed && selectedTarot === card
                        ? "linear-gradient(135deg, rgba(147, 51, 234, 0.6), rgba(79, 13, 161, 0.8))"
                        : "linear-gradient(135deg, #1a0030, #2d0050)",
                      border: tarotRevealed && selectedTarot === card
                        ? "2px solid rgba(180, 80, 255, 0.8)"
                        : "1px solid rgba(180, 80, 255, 0.3)",
                      boxShadow: tarotRevealed && selectedTarot === card
                        ? "0 0 30px rgba(147, 51, 234, 0.5)"
                        : "0 0 10px rgba(147, 51, 234, 0.2)",
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {tarotRevealed && selectedTarot === card ? (
                        <>
                          <span style={{ fontSize: "2rem" }}>{card.emoji}</span>
                          <span className="text-xs text-purple-200 mt-2 font-bold">{card.name}</span>
                        </>
                      ) : (
                        <>
                          <span style={{ fontSize: "2rem" }}>🌟</span>
                          <span className="text-xs text-purple-400 mt-2">タップ</span>
                        </>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {tarotRevealed && selectedTarot && (
                <div
                  className="mt-6 rounded-2xl p-6 text-center"
                  style={{
                    background: "rgba(147, 51, 234, 0.1)",
                    border: "1px solid rgba(180, 80, 255, 0.3)",
                  }}
                >
                  <span style={{ fontSize: "3rem" }}>{selectedTarot.emoji}</span>
                  <h3 className="text-xl font-bold text-purple-200 mt-3 mb-3">「{selectedTarot.name}」</h3>
                  <p className="text-purple-100 leading-relaxed">{selectedTarot.meaning}</p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Daily Fortune Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-2 text-purple-200">🌙 今日の宇宙メッセージ</h2>
          <p className="text-center text-purple-400 mb-8 text-sm">宇宙があなたに送るメッセージ</p>

          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(79, 13, 161, 0.3), rgba(147, 51, 234, 0.1))",
              border: "1px solid rgba(180, 80, 255, 0.2)",
              boxShadow: "0 0 60px rgba(147, 51, 234, 0.1)",
            }}
          >
            <div className="float-animation inline-block mb-6">
              <span style={{ fontSize: "4rem" }}>🌌</span>
            </div>
            <blockquote className="text-xl text-purple-100 italic leading-relaxed mb-6">
              「今この瞬間を大切に生きる人に、<br />宇宙は無限の可能性を与える」
            </blockquote>
            <p className="text-purple-400 text-sm">
              ✨ あなたの内なる光は、どんな暗闇をも照らす力を持っています
            </p>
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8 text-purple-200">占いカツの特徴</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🔮", title: "本格的な占い", desc: "伝統的な占術に基づいた精度の高い鑑定" },
              { icon: "💫", title: "毎日更新", desc: "毎朝更新される今日の運勢で1日をスタート" },
              { icon: "🎯", title: "完全無料", desc: "全ての占いコンテンツが無料で楽しめます" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ fontSize: "2rem" }}>{item.icon}</span>
                <h3 className="text-purple-200 font-bold mt-3 mb-2">{item.title}</h3>
                <p className="text-purple-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <p className="text-purple-400 text-sm">© 2026 占いカツ | uranai-katu.com</p>
        <p className="text-purple-600 text-xs mt-2">占い結果はエンターテインメント目的です</p>
      </footer>
    </main>
  );
}
