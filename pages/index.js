/* eslint-disable @next/next/no-img-element */

function Home() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-10">
          <h1 className="text-4xl font-bold text-center">TEOMAN YALÇINÖZ</h1>
          <p className="text-xl">Merhaba ben Teoman Yalçınöz Yalova Üniversitesi Bilgisayar Mühendisliği bölümü 3. sınıf öğrencisiyim</p>
          <p className="text-xl">Siber Güvenlik , Network ,Python ve  Web Uygulamalari Geliştirmekle uğraşıyorum . Kariyerimi ise Ağ Güvenliği Uzmanligi alanina yöneltmek istiyorum.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-10">
        <img src="/secc.jpg" alt="security"></img>
      </div>
    </>

  )
}

export default Home