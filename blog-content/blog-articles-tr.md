# Blog Yazıları — Türkçe

Her yazı, `mrertugrul.com/tr/blog/[slug]/` gibi bir URL'de bağımsız bir sayfa
olarak düşünülmüştür. Önerilen slug'lar her başlığın altında belirtilmiştir.

---

## 1. IB Bilgisayar Bilimi IA'nızı Nasıl Yapılandırırsınız

**Slug:** `ib-cs-ia-yapilandirma`
**Meta açıklama:** IB DP Bilgisayar Bilimi Internal Assessment'ını öneriden son teslime kadar nasıl yapılandıracağınıza dair adım adım bir rehber.

Çoğu öğrenci IA'da kötü kod yazdığı için değil, yazılı kısım kodun arkasındaki düşünceyi göstermediği için puan kaybediyor. Değerlendiriciler programınızı değil, bir problemi açıklayabilme, tasarım kararlarınızı gerekçelendirebilme ve kendi çözümünüzü dürüstçe değerlendirebilme becerinizi puanlıyor.

**Havalı bir fikirle değil, gerçek bir problemle başlayın.** En güçlü IA'lar, "öğrencilere ders çalışmada yardımcı olan bir uygulama" gibi genel bir şey değil, belirli bir kullanıcı için belirli bir problemi çözer. Tek cümlede tarif edebileceğiniz, kimin nasıl fayda göreceğini net söyleyebileceğiniz bir problem seçin.

**Başarı kriterleri koddan önce gelir.** Bunları erken yazın ve somut tutun. "Sistem kullanıcı dostu olmalı" hiçbir puan getirmez. "Bir koç, oyuncu değişikliğini 10 saniyenin altında kaydedebilmeli" getirir, çünkü test edilebilir.

**Tasarım kararlarınızı verirken belgeleyin, sonradan değil.** Erken prototiplerin ekran görüntüleri, bir veri yapısını neden diğerine tercih ettiğinize dair notlar, müşteri geri bildirimi kayıtları. "Kişisel katılım" puanlarının çoğu buradan geliyor ve bunu sonradan inandırıcı şekilde uydurmak neredeyse imkânsız.

**Genel işlevselliğe değil, kendi başarı kriterlerinize göre test edin.** Sistemin çalıştığını gösterin ve çalışmayan kısımlar hakkında dürüst olun. İyi belgelenmiş bir başarısızlık, net bir açıklamayla birlikte, çoğu zaman "her şey planlandığı gibi çalışıyor" gibi belirsiz bir iddiadan daha yüksek puan alır.

**Değerlendirme bir özet değildir.** Her başarı kriterine tek tek dönün, karşılanıp karşılanmadığını, bunu nasıl bildiğinizi ve daha fazla zamanınız olsa neyi değiştireceğinizi yazın. Bu bölüm çoğu IA'da çok kısa kalıyor.

35 saatlik süre, kodlamaya başladığınızda hızla erir. Yazılı kısım için de gerçek zaman ayırın, sadece geliştirme için değil.

---

## 2. Her AP CS A Öğrencisinin Denemesi Gereken 5 Özyineleme Sorusu

**Slug:** `ap-csa-ozyineleme-sorulari`
**Meta açıklama:** AP Computer Science A için gerçek bir sezgi kazandıran, temel seviyeden sınav seviyesine sıralanmış beş özyineleme sorusu.

Özyineleme, öğrencilerin AP CS A sınavına ne kadar hazır hissederek girdiğine sessizce karar veren konu. Neredeyse her yıl açık uçlu sorularda karşınıza çıkıyor ve bir kalıbı ezberlemenin işe yaramadığı nadir konulardan biri, çünkü her sorunun kendi taban durumu ve özyineleme adımı var.

**1. Basamak toplamı.** Verilen bir tam sayının basamaklarının toplamını özyinelemeli olarak döndürün. Taban durumu belirlemeyi ve her çağrıda problemi küçültmeyi pratik etmek için en basit başlangıç noktası.

**2. Bir string'i ters çevirme.** Döngü kullanmadan bir String'i ters çeviren özyinelemeli bir metot yazın. Bu, sadece aşağı inerken değil, call stack'te geri çıkarken ne olduğunu düşünmeye zorlar.

**3. Üs alma fonksiyonu.** `power(taban, üs)` fonksiyonunu özyinelemeli yazın. Bu kolay geldiğinde, her çağrıda üssü yarıya indiren daha hızlı versiyonu deneyin. İkisini karşılaştırmak, sınavda karşınıza çıkan özyineleme verimliliğini anlamanın iyi bir yolu.

**4. Dizi arama varyasyonları.** Bir dizideki en büyük değeri bulan ve ayrı olarak, bir değerin kaç kez geçtiğini sayan özyinelemeli metotlar yazın. Diziler ve özyineleme birlikte, sınavda sık görülen bir kombinasyon.

**5. Basit 2D ızgara gezinme.** Bir ızgaranın bir köşesinden diğerine, sadece sağa veya aşağı hareket ederek kaç yol olduğunu sayan özyinelemeli bir metot. Bu daha zor ve en zor açık uçlu özyineleme sorularının seviyesine yakın.

Herhangi bir şey yazmadan önce bunları kâğıt üzerinde çözün. En azından birinde call stack'i elle takip edin. Ne olduğunu çizebilen öğrenciler, sadece kalıbı bilen öğrencilere göre sınav baskısı altında genelde daha iyi performans gösteriyor.

---

## 3. IGCSE'de Puan Kaybettiren Sözde Kod Hataları

**Slug:** `igcse-sozde-kod-hatalari`
**Meta açıklama:** IGCSE Bilgisayar Bilimi'nde sessizce puan kaybettiren küçük sözde kod alışkanlıkları ve her birinin nasıl düzeltileceği.

Cambridge ve Edexcel, sözde kodu belirli bir stile göre değerlendiriyor ve küçük biçimlendirme alışkanlıkları çoğu öğrencinin fark ettiğinden daha fazla puana mal oluyor. Bu hataların hiçbiri mantığı anlamakla ilgili değil. Nasıl yazıldığıyla ilgili.

**Atama sembollerini karıştırmak.** Cambridge sözde kodu atama için `=` değil `←` kullanır. Baştan sona `=` kullanmak küçük bir şey gibi görünse de, değerlendiriciler bunu işaretlemek üzere eğitilmiş ve neredeyse her scriptte karşılarına çıkıyor.

**Döngüleri ve koşulları düzgün kapatmamak.** `IF... THEN... ENDIF`, `FOR... NEXT`, `WHILE... ENDWHILE`. Bunları açık bırakmak ya da yanlış anahtar kelimeyle kapatmak, içindeki mantık doğru olsa bile yapısal bir hata gibi okunur.

**Belirsiz değişken isimleri.** `x`, `temp`, `a1` hiçbir amaç iletmiyor. Değerlendiriciler `studentScore` ya da `totalCount` gibi isimleri çok daha kolay takip eder, ve daha net isimlendirme, mantığınızı takip etmeye çalışırken ilgisiz sorularda bile puan kaybetme ihtimalini azaltır.

**Tutarsız girinti.** Sözde kod, çalışması için girinti gerektiren Python gibi değerlendirilmiyor. Ama tutarlı girinti, değerlendiricilerin iç içe geçmiş döngü ve koşullarınızın yapısını bir bakışta görmesini sağlar. Düz, girintisiz sözde kod, doğru mantığı yanlış gösterir.

**Algoritma tasarım aşamasını tamamen atlamak.** Bazı öğrenciler mantığı anladıkları anda doğrudan koda geçiyor. Ama IGCSE puanlarının büyük bir kısmı sadece son cevaba değil, tasarım sürecinin kendisine ayrılıyor, ve sözde kod bu sürecin gösterildiği yer.

Bu düzeltmelerin hiçbiri öğrenmesi uzun sürmüyor. Sadece sözde kodu, "asıl" programlamaya geçmeden önceki bir ayrıntı gibi değil, ilk günden itibaren resmi bir şekilde yazma alışkanlığı gerektiriyor.

---

## 4. AP CS Principles Create Performance Task'a Nasıl Yaklaşılır

**Slug:** `ap-csp-create-task`
**Meta açıklama:** Program fikri seçmekten gerekli yazılı yanıtları hazırlamaya kadar AP CS Principles Create Performance Task'ın pratik bir açıklaması.

Create Performance Task, çoğu AP CSP öğrencisinin ya öne çıktığı ya da geride kaldığı yer, çünkü programın ne kadar etkileyici göründüğüne göre değerlendirilmiyor. Yazılı yanıtlarınızın programın ne yaptığını ve neden bu şekilde geliştirdiğinizi net şekilde açıklayıp açıklamadığına göre değerlendiriliyor.

**Basitçe açıklayabileceğiniz bir program seçin.** Tek bir amacı ve yönetilebilir sayıda özelliği olan bir program, tam olarak belgeleyemeyeceğiniz iddialı bir programdan neredeyse her zaman daha yüksek puan alır. Değerlendiriciler yazılı yanıtlarınızı dikkatle okuyor, karmaşık bir programın belirsiz açıklaması, basit bir programın net açıklamasından daha düşük puan alır.

**Listenizi erken belirleyin ve anlamlı şekilde kullanın.** Görev, sadece tanımlanıp göz ardı edilen değil, programın mantığında rol oynayan bir liste (ya da benzer bir veri yapısı) gerektiriyor. Listenin neyi sakladığına ve programın onu nasıl kullandığına, geliştirmeye başlamadan önce karar verin.

**Prosedürünüzü, davranışı değiştiren bir parametreyle belgeleyin.** En az bir parametresi olan ve bu parametrenin prosedürün ne yaptığını anlamlı şekilde etkilediği, kendi geliştirdiğiniz bir prosedüre ihtiyacınız var. Bu, görevin en çok yetersiz açıklanan kısımlarından biri.

**Yanıtları geliştirirken yazın, sonradan değil.** Video ve yazılı yanıtlar, algoritmaları, soyutlamayı ve veri kullanımını kendi kelimelerinizle açıklamanızı istiyor. Program bitene kadar beklerseniz, gerekçesini çoktan unuttuğunuz kararları yeniden kurmaya çalışarak saatler harcarsınız.

**Videoyu süre sınırında ve odaklı tutun.** Sadece çalışan programı ve tarif ettiğiniz giriş/çıkış davranışını göstermesi yeterli. Prodüksiyon kalitesi beklenmiyor.

Burada başarılı olan öğrenciler, yazılı bölümü kod kadar önemli görür, sonradan tamamlanacak bir evrak işi olarak değil.

---

## 5. College Board'un En Yeni Dersi AP Cybersecurity'de Sizi Neler Bekliyor

**Slug:** `ap-cybersecurity-genel-bakis`
**Meta açıklama:** College Board'un 2026'da ulusal olarak başlayan en yeni AP dersi AP Cybersecurity'ye genel bir bakış: yapı, beceriler ve sınav takvimi.

AP Cybersecurity, College Board'un yeni AP Career Kickstart programının bir parçası olan en yeni dersi ve 2026-2027 eğitim yılında ulusal olarak başlıyor, ilk sınav Mayıs 2027'de. Önceden kodlama deneyimi gerekmiyor, bu da dersi AP CS A ya da CS Principles almamış öğrenciler için de erişilebilir kılıyor.

**Ders üç temel beceri etrafında kurulu.** Risk analizi, risk azaltma ve saldırı tespiti. Cybersecurity'yi tek bir geniş konu olarak öğretmek yerine, ders her şeyi bu üç eylem etrafında, beş üniteye yayarak yapılandırıyor.

**Birden fazla katmanda savunmayı kapsıyor.** Fiziksel alanlar, ağlar, cihazlar, uygulamalar ve veri, her biri kendi ünitesine sahip; öğrenciler cybersecurity'yi tek bir beceri gibi ele almak yerine, tehditlerin ve savunmanın katmana göre nasıl farklılaştığını öğreniyor.

**Laboratuvarlar sadece teorik değil, uygulamalı.** Öğrenciler gerçekçi saldırı senaryolarını çalışıyor, hem sistemleri savunmayı hem de saldırıların nasıl gerçekleştirildiğini anlamayı pratik ediyor, bu da cybersecurity'nin gerçekte profesyonel olarak nasıl uygulandığına daha yakın.

**Sektör beklentileriyle uyumlu olacak şekilde tasarlanmış.** Ders, birçok işverenin ve sertifikasyon kuruluşunun kullandığı aynı çerçeve olan NICE Workforce Framework'e göre şekillendirilmiş, yani öğretilen beceriler sadece sınav becerileri değil.

**Hem üniversite kredisi hem de sektör sertifikası mümkün.** Diğer AP dersleri gibi, güçlü bir sınav sonucu üniversite kredisi kazandırabilir. Ama ders aynı zamanda giriş seviyesi cybersecurity pozisyonlarına ya da ileri çalışmalara hazır olduğunuzu göstermek üzere de tasarlanmış, bu AP dersleri arasında alışılmadık bir durum.

Ders bomba yeni olduğu için, AP CS A'da olduğu gibi henüz büyük bir geçmiş sınav sorusu havuzu yok. İlk kohortlar, en azından ilk birkaç sınav döngüsünde, sınav kalıplarını ezberlemekten çok ders içeriğinin ve becerilerin önemli olacağını beklemeli.
