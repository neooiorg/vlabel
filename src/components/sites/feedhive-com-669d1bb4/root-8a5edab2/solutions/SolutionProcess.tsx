import { SectionHeading } from '../SectionHeading'

interface Step {
  number: string
  title: string
  desc: string
}

const steps: Step[] = [
  { number: '01', title: 'Khảo sát nhu cầu', desc: 'Hiểu sản phẩm, kênh bán và yêu cầu pháp lý.' },
  { number: '02', title: 'Chuẩn hóa dữ liệu', desc: 'Dựng bộ dữ liệu đúng chuẩn để kết nối được.' },
  { number: '03', title: 'Triển khai', desc: 'Cấp mã, tạo QR và trang hiển thị khi quét.' },
  { number: '04', title: 'Đồng bộ', desc: 'Kết nối dữ liệu lên hệ thống quốc gia.' },
  { number: '05', title: 'Đào tạo', desc: 'Chuyển giao để đội bạn tự vận hành.' },
  { number: '06', title: 'Hỗ trợ dài hạn', desc: 'Bảo trì, theo dõi quy định mới và nâng cấp.' },
]

export function SolutionProcess() {
  return (
    <section id="quy-trinh" className="scroll-mt-24 bg-[#f7f8fb] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="04 · QUY TRÌNH · SÁU BƯỚC"
          title={
            <>
              Sáu bước,
              <br className="hidden lg:block" /> Vlabel làm phần khó.
            </>
          }
          desc="Vlabel lo phần chuẩn hoá và đồng bộ, đội bạn chỉ khai báo dữ liệu."
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[18px] border border-black/[0.06] bg-white px-6 py-5"
            >
              <p className="mb-3 tabular-nums text-[22px] font-bold leading-none text-[#4457ff]">
                {step.number}
              </p>
              <h3
                className="text-[16px] font-semibold leading-[1.3] text-[#20232b]"
                style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
              >
                {step.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-[1.55] text-[#4f5562]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
