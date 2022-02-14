/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

function Home() {
  return (
    <>
      <div className="site-container">
        <h1 className="text-4xl font-bold  mb-5 text-center">Hakkımda</h1>

        <div className="space-y-10">
          <article>
            <p className="text-xl">Merhaba, ben Teoman Yalçinöz.Yalova'da yaşıyorum.Şuan halen devam etmekte olduğum Yalova Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim.
              Üniversite öğrenimim boyunca siber güvenliğin her alanını merak ettim ve araştırdım.
              Bu merakım siber güvenlik alanında pek çok eğitime ve konferansa katılım sağlamama,siber güvenlik kulüpleri ile iç içe olup aktif rol almama neden oldu.
              Şuanda Yalova Üniversitesi Siber Güvenlik ve Teknoloji Kulübünde yönetim kurulu başkanlığı ve gönüllü eğitmenlik görevini sürdürüyorum.Siber güvenliğin pek çok alanı hakkında araştırıp fikir
              sahibi olduktan sonra kariyerimi siber güvenlik mavi takım alanına yöneltmek istediğime karar verdim.SIEM,SOC,ağ yönetimi ve güvenliği,CCNA 200-301,cyber threat hunting,incident response konularına ilgi duymaktayım.
              Şuanda da kendimi hali hazırda bu alanlarda geliştirmek üzere çalışmalarıma devam ediyorum.Bunların yanısıra Python,Bash ve Vue.js ile ilgileniyorum.Türkçe kaynakların çoğalması adına da bahsettiğim bu alanlarda edindiğim bilgileri sizlerle paylaşmaya çalışacağım.</p>
            <p className="text-xl">

            </p>
            <img className="mt-10" src="/secc.jpg" alt="security"></img>
          </article>
        </div>

      </div>

    </>

  )
}

export default Home