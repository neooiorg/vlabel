import Image from 'next/image'

const brands = [
  { src: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/beehiiv.webp', alt: 'Đối tác' },
  { src: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/fauna.webp', alt: 'Đối tác' },
  { src: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/prismic.webp', alt: 'Đối tác' },
  { src: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/rapidapi.webp', alt: 'Đối tác' },
  { src: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/riverside.webp', alt: 'Đối tác' },
  { src: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/thirdweb.webp', alt: 'Đối tác' },
]

export function TrustedByBrands() {
  return (
    <section className="bg-white px-4 py-7 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-[1188px]">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-10">
          <p className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#4f5562]">
            Doanh nghiệp &amp; địa phương tin dùng
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
            {brands.map((b, i) => (
              <Image
                key={i}
                src={b.src}
                alt={b.alt}
                width={120}
                height={32}
                className="h-6 w-auto opacity-60 grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
