import { Phone, Bell, MapPin } from 'lucide-react'
import { CheckCircle } from 'lucide-react'

export default function LocationPage() {
  return (
    <main>

      {/* ── Map + Emergency ── */}
      <section style={{width:'100%'}} className="pt-8 sm:pt-12 pb-8 sm:pb-12">
        <div className="section-container fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 items-stretch">

            {/* Map panel */}
            <div className="bg-white rounded-2xl overflow-hidden relative shadow-md" style={{minHeight:'360px'}}>
              <iframe
                title="Harley Street Medical District"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6!2d-0.1494!3d51.5229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d4e53c06d5%3A0x9be44f75b3c6ad86!2sHarley%20Street%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                style={{position:'absolute',inset:0,width:'100%',height:'100%',border:0}}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Location badge */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 bg-white/[0.97] backdrop-blur-sm rounded-[14px] px-4 sm:px-[18px] py-3 sm:py-[14px] flex items-center gap-3 sm:gap-[14px] shadow-xl z-10" style={{minWidth:'200px', maxWidth:'calc(100% - 32px)'}}>
                <div className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={16} color="white" />
                </div>
                <div className="min-w-0">
                  <strong className="block text-[13px] sm:text-[14px] font-semibold text-gray-900 truncate">Harley Street Medical District</strong>
                  <span className="text-[11px] sm:text-[12px] text-gray-500">London, UK</span>
                </div>
              </div>
            </div>

            {/* Emergency panel */}
            <div
              className="rounded-2xl flex flex-col shadow-md fade-up-2"
              style={{background:'#1a2332', padding:'28px 24px', gap:'24px'}}
            >
              {/* Header */}
              <div>
                <h2 className="font-display text-[22px] sm:text-[26px] font-bold text-white tracking-[-0.01em] mb-3">
                  Emergency Support
                </h2>
                <p className="text-[13px] sm:text-[14px] text-gray-400 leading-[1.65]">
                  Immediate cardiac support and surgical consultation available 24/7. Response time under 15 minutes.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Emergency Hotline',    Icon: Phone },
                  { label: 'Direct Surgeon Pager', Icon: Bell  },
                ].map(({ label, Icon }) => (
                  <button
                    key={label}
                    className="rounded-[12px] flex items-center justify-between text-[13px] sm:text-[14px] font-medium text-gray-300 transition-all cursor-pointer"
                    style={{
                      background:'rgba(255,255,255,0.07)',
                      border:'1px solid rgba(255,255,255,0.12)',
                      padding:'14px 18px',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background='rgba(13,148,136,0.15)'
                      e.currentTarget.style.borderColor='rgba(13,148,136,0.4)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background='rgba(255,255,255,0.07)'
                      e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'
                    }}
                  >
                    <span>{label}</span>
                    <Icon size={18} color="#60a5fa" />
                  </button>
                ))}
              </div>

              {/* Status */}
              <div className="mt-auto">
                <span className="text-[10px] uppercase tracking-[0.12em] text-gray-500 block mb-3">
                  Live Facility Status
                </span>
                <div className="flex items-center gap-2 text-[13px] sm:text-[14px] font-medium" style={{color:'#60a5fa'}}>
                  <span
                    className="shrink-0 pulse-dot"
                    style={{
                      display:'inline-block',
                      width:'8px',
                      height:'8px',
                      borderRadius:'50%',
                      background:'#3b82f6',
                    }}
                  />
                  <span>All Systems Operational</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Info cards ── */}
      <section style={{width:'100%'}} className="pb-14 sm:pb-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon:'🏥', title:'Main Campus',    lines:['122 Harley Street, London, W1G 7JT','United Kingdom'] },
              { icon:'🚇', title:'Getting Here',   lines:["Nearest tube: Regent's Park (Bakerloo Line)",'5 min walk from station'] },
              { icon:'🕐', title:'Visiting Hours', lines:['Monday – Friday: 09:00 – 17:00','Emergency: 24/7'] },
              { icon:'🅿️', title:'Parking',        lines:['Complimentary valet parking available','for all appointment holders'] },
            ].map(({ icon, title, lines }, i) => (
              <div key={title} className={`bg-white border border-gray-200 rounded-xl px-5 py-6 hover:shadow-sm transition-shadow fade-up-${i+1}`}>
                <div className="text-[24px] mb-3">{icon}</div>
                <h3 className="text-[14px] font-semibold text-gray-900 mb-2">{title}</h3>
                {lines.map(l => (
                  <p key={l} className="text-[12.5px] text-gray-500 leading-[1.6]">{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
