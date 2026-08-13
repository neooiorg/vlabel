export function VideoSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1188px]">
        <div className="mb-8 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
            SEE FOR YOURSELF
          </p>
          <h2
            className="text-[40px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#20232b] lg:text-[52px]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            Creating content is this easy.
          </h2>
        </div>
        <div className="overflow-hidden rounded-[24px] border border-black/5 shadow-xl">
          {/* Video placeholder — styled like the real video container */}
          <div className="flex aspect-video items-center justify-center bg-[#17191f]">
            <div className="text-center text-white/40">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <svg className="ml-1 h-7 w-7 fill-white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm">Product Demo Video</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
