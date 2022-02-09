/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

function Home() {
  return (
    <>
      <div className="site-container">
        <h1 className="text-4xl font-bold  mb-5 text-center">Hakkımda</h1>

        <div className="space-y-10">
          <article>
            <p className="text-2xl">Merhaba, ben Teoman Yalçinöz.</p>
            <p className="text-2xl">Bursa'nın Osmangazi ilçesinde doğdum.Yalova'da yaşıyorum.Yalova Şehit Osman Altınkuyu Anadolu Lisesi mezunuyum
              .Şuan hala devam etmekte olduğum Yalova Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim.</p>
            <p className="text-2xl"> Siber Güvenlik , Network , Web Programlama alanlarında araştırmalar ve çalışmalar yapmaktayım.İleride daha çok Ağ Güvenliği
              alanında kariyer yapmak istiyorum.Bu hedefime yönelik ise CCNA 200-301 çalışıyorum.Bunların dışında ise şu sıralar Python,Bash ve Vue.js üzerinde çalışmalar yapıyorum.
              Türkçe kaynakların çoğalması adına da bahsettiğim bu alanlarda edindiğim bilgileri sizlerle paylaşmaya çalışacağım.
            </p>
            <img className="mt-10" src="/secc.jpg" alt="security"></img>
          </article>
        </div>

      </div>

    </>

  )
}

export default Home