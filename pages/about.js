import Header from "../components/Header";

export default function About() {
  return (
    <div style={{ margin: 0, fontFamily: "sans-serif", backgroundColor: "#fff", minHeight: "100vh" }}>
      <Header />
      <div style={{ padding: "4rem 1rem", color: "#333", maxWidth: "800px", margin: "0 auto", paddingTop: "6rem" }}>
        <h2>施設紹介</h2>
        <p>
          海辺の古民家をリノベーションした宿で、木の温もりとモダンデザインを融合。
          テラスからの夕陽や波音とともに、窚やかな時間をお過ごしください。
        </p>
        <img src="/IMG_5947.jpeg" alt="施設紹介写真" style={{ width: "100%", marginTop: "2rem", borderRadius: "8px" }} />
      </div>
    </div>
  );
}
