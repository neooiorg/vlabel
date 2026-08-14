import { SectionHeading } from './SectionHeading'

interface Role {
  code: string
  name: string
  responsibility: string
  scope: string
}

const roles: Role[] = [
  {
    code: 'KK',
    name: 'Kê khai',
    responsibility: 'Nhập dữ liệu cho các Sự kiện được phân quyền.',
    scope: 'Sự kiện được giao',
  },
  {
    code: 'QL',
    name: 'Quản lý',
    responsibility: 'Cấu hình Luồng/Sự kiện, người dùng và phân quyền trong tổ chức.',
    scope: 'Trong tổ chức',
  },
  {
    code: 'AD',
    name: 'Admin',
    responsibility: 'Toàn quyền; cấu hình tổ chức từ cấp 2 trở xuống.',
    scope: 'Cấp 2 trở xuống',
  },
  {
    code: 'SA',
    name: 'Superadmin',
    responsibility: 'Toàn quyền; cấu hình cả tổ chức cấp 1.',
    scope: 'Toàn khách hàng',
  },
]

export function SupportedSocials() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-[82px]">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="04 · CHO MỌI VAI TRÒ · PHÂN QUYỀN"
          title={
            <>
              Mỗi vai trò
              <br className="hidden lg:block" /> một phạm vi quyền.
            </>
          }
          desc="Mỗi vai trò chỉ thao tác trong phạm vi được giao — không hơn, không kém."
        />

        <div className="overflow-hidden rounded-[18px] border border-black/5">
          {/* Header row */}
          <div className="hidden grid-cols-[1.2fr_2fr_1.2fr] gap-4 bg-[#f7f7f9] px-6 py-4 lg:grid">
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#767b84]">Vai trò</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#767b84]">Trách nhiệm</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#767b84]">Phạm vi</span>
          </div>
          <div className="divide-y divide-black/5">
            {roles.map((role) => (
              <div
                key={role.code}
                className="grid grid-cols-1 gap-3 px-6 py-5 lg:grid-cols-[1.2fr_2fr_1.2fr] lg:items-center lg:gap-4"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#eef0ff] text-[14px] font-bold text-[#4457ff]"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                  >
                    {role.code}
                  </span>
                  <span
                    className="text-[16px] font-bold text-[#20232b]"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                  >
                    {role.name}
                  </span>
                </div>
                <p className="text-[14px] leading-[1.5] text-[#4f5562]">{role.responsibility}</p>
                <span className="inline-flex w-fit items-center rounded-full border border-black/[0.08] bg-white px-3 py-1 text-[13px] font-medium text-[#20232b]">
                  {role.scope}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
