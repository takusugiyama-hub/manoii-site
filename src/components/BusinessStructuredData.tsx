const business = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://manoii.jp/#organization",
  name: "まのいいりょうし",
  url: "https://manoii.jp/",
  logo: "https://manoii.jp/images/logo/manoii-logo.png",
  description:
    "岩美町を拠点に、水と空気の流れを整える土地の環境改善と、その場所に合った庭づくりに取り組んでいます。",
  email: "contact@manoii.jp",
  sameAs: ["https://www.instagram.com/manoiiryoshi/"],
  areaServed: [
    { "@type": "City", name: "鳥取県鳥取市" },
    { "@type": "AdministrativeArea", name: "鳥取県岩美町" },
    { "@type": "Place", name: "鳥取県東部" },
    { "@type": "AdministrativeArea", name: "兵庫県新温泉町" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "仕事の相談",
    email: "contact@manoii.jp",
    url: "https://manoii.jp/contact",
    availableLanguage: "ja",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "できること",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "土地の環境改善",
          url: "https://manoii.jp/ground#land-water",
          description: "水はけ・ぬかるみの改善、道や駐車場づくり、排水・小さな造成。",
          provider: { "@id": "https://manoii.jp/#organization" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "その場所に合った庭づくり",
          url: "https://manoii.jp/ground#garden-plants",
          description: "庭づくり・植栽、剪定・庭の管理、樹勢回復・植え替え。",
          provider: { "@id": "https://manoii.jp/#organization" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "家と暮らし",
          url: "https://manoii.jp/ground#home-life",
          description: "古材・廃材を活かした改修、土壁や内装、小さな修繕。",
          provider: { "@id": "https://manoii.jp/#organization" },
        },
      },
    ],
  },
};

export default function BusinessStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(business).replace(/</g, "\\u003c"),
      }}
    />
  );
}
