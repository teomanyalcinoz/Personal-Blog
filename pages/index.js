/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

function Home() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-10">
          <h1 className="text-4xl absolute font-bold ml-60 mt-10 text-white">Hakkımda</h1>
          <p className="box-content h-40 w-70 bg-gray-700 "></p>
          <p className="text-2xl">Merhaba, ben Teoman Yalçinöz.</p>
          <p className="text-2xl">Bursa'nın Osmangazi ilçesinde doğdum.Yalova'da yaşıyorum.Yalova Şehit Osman Altınkuyu Anadolu Lisesi mezunuyum
            .Şuan hala devam etmekte olduğum Yalova Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim.</p>
          <p className="text-2xl"> Siber Güvenlik , Network , Adli Bilişim alanlarında araştırmalar ve çalışmalar yapmaktayım.İleride daha çok Ağ Güvenliği
            alanında kariyer yapmak istiyorum.Bu hedefime yönelik ise CCNA 200-301 çalışıyorum.Bunların dışında ise şu sıralar Python,Bash,web programlama üzerinde çalışmalar yapıyorum.
            Türkçe kaynakların çoğalması adına da bahsettiğim bu alanlarda edindiğim bilgileri sizlerle paylaşmaya çalışacağım.
          </p>
        </div>
      </div>
      <div className="site-4xl-container mt-20">
        <img src="/secc.jpg" alt="security"></img>
      </div>
    </>

  )
}

export default Home