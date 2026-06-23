import { Bot, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'


const comfortFeatures = [
  { icon: '🛋️', title: 'Premium Lounges',         desc: 'Sleek, ergonomic waiting areas designed to reduce anxiety with soft ambient music and air purification systems.' },
  { icon: '🛏️', title: 'Private Recovery Suites', desc: 'Full-service private rooms with smart controls for lighting, temperature, and nurse-call communication.' },
]

const showcaseImages = [
  { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80', alt: 'Reception area' },
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80', alt: 'Consultation room' },
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', alt: 'Patient room' },
  { src: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=80', alt: 'Surgery prep' },
  { src: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&q=80', alt: 'Recovery suite' },
]

export default function FacilitiesPage() {
  const scrollTrack = (dir) => {
    document.querySelector('#showcase-track')?.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{width:'100%'}} className="bg-gray-50 border-b border-gray-200 pt-12 sm:pt-[64px] pb-10 sm:pb-[60px] text-center">
        <div className="section-container flex flex-col items-center">
          <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1 mb-5">
            Chamber Facilities
          </span>
          <h1 className="font-display text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.02em] text-gray-900 mb-4">
            Advanced Surgical Facilities
          </h1>
          <p className="text-[15px] text-gray-500 max-w-[540px] leading-[1.7]">
            Experience medical excellence at Dr. Amir Khan's surgical center, where cutting-edge technology meets compassionate care in a sterile, futuristic environment.
          </p>
        </div>
      </section>

      {/* ── Facility Cards ── */}
      <section style={{width:'100%'}} className="py-10 sm:py-[60px]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* High-Precision OT — col-span 2 */}
            <div className="md:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 fade-up">
              <div className="flex-1 min-w-0">
                <span className="text-[22px] block mb-[14px]">🔬</span>
                <h3 className="text-[17px] font-semibold text-gray-900 mb-[10px]">High-Precision OT</h3>
                <p className="text-[13px] text-gray-500 leading-[1.65] max-w-[300px]">
                  Equipped with robotic-assisted surgery systems and ultra-HD visualization for micro-surgical procedures with sub-millimeter accuracy.
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {['Robotic Nav','HEPA Filtered','4K Visualization'].map(t => (
                    <span key={t} className="text-[11px] text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>
              </div>
              {/* Robotic surgical arm SVG */}
              <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[100px] sm:w-[130px] shrink-0 hidden sm:block">
                <rect x="60" y="170" width="40" height="20" rx="4" fill="#e2e8f0"/>
                <rect x="70" y="155" width="20" height="20" rx="3" fill="#cbd5e1"/>
                <rect x="74" y="100" width="12" height="60" rx="6" fill="#93c5fd"/>
                <circle cx="80" cy="100" r="10" fill="#2563eb"/>
                <circle cx="80" cy="100" r="5" fill="white"/>
                <rect x="76" y="55" width="10" height="50" rx="5" fill="#bfdbfe" transform="rotate(-15 80 100)"/>
                <circle cx="72" cy="58" r="9" fill="#2563eb"/>
                <circle cx="72" cy="58" r="4" fill="white"/>
                <rect x="68" y="20" width="9" height="42" rx="4" fill="#93c5fd" transform="rotate(20 72 58)"/>
                <circle cx="85" cy="25" r="8" fill="#1d4ed8"/>
                <circle cx="85" cy="25" r="3.5" fill="white"/>
                <line x1="85" y1="17" x2="85" y2="4" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round"/>
                <polygon points="85,0 82,6 88,6" fill="#2563eb"/>
                <line x1="74" y1="120" x2="86" y2="120" stroke="#bfdbfe" strokeWidth="1"/>
                <line x1="74" y1="130" x2="86" y2="130" stroke="#bfdbfe" strokeWidth="1"/>
                <circle cx="80" cy="100" r="14" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
                <circle cx="72" cy="58" r="13" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 3" opacity="0.3"/>
              </svg>
            </div>

            {/* Digital Health Suite */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 fade-up-2">
              <span className="text-[22px] block mb-[14px]">📊</span>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-[10px]">Digital Health Suite</h3>
              <p className="text-[13px] text-gray-500 leading-[1.65]">Cloud-integrated monitoring systems providing real-time data analytics for patient vitals and recovery progress.</p>
              <span className="inline-block mt-[14px] text-[12px] font-medium text-blue-600">• Active Analytics</span>
            </div>

            {/* Intensive Cardiac Care */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 fade-up-3">
              <span className="text-[22px] block mb-[14px]">❤️</span>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-[10px]">Intensive Cardiac Care</h3>
              <p className="text-[13px] text-gray-500 leading-[1.65] mb-4">Advanced 24/7 cardiac monitoring with automated intervention protocols for high-risk patients.</p>
              <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4 opacity-[0.85] w-full">
                <polyline points="0,25 20,25 30,25 35,10 40,40 45,10 50,30 60,25 80,25 90,25 95,8 100,42 105,8 110,30 120,25 140,25 150,25 155,8 160,42 165,8 170,30 180,25 200,25"
                  stroke="#ef4444" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Non-Invasive Imaging — col-span 2 */}
            <div className="md:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 fade-up-2">
              <div className="flex-1 min-w-0">
                <span className="text-[22px] block mb-[14px]">🔭</span>
                <h3 className="text-[17px] font-semibold text-gray-900 mb-[10px]">Non-Invasive Imaging</h3>
                <p className="text-[13px] text-gray-500 leading-[1.65]">Our imaging suite features the latest in MRI and CT technology, delivering crystal-clear diagnostics with minimal radiation exposure and zero patient discomfort.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80" alt="Imaging"
                className="w-full sm:w-[200px] h-[180px] sm:h-[160px] object-cover rounded-[10px] shrink-0" style={{filter:'grayscale(30%)'}} />
            </div>

          </div>
        </div>
      </section>

      {/* ── Facility Showcase ── */}
      <section style={{width:'100%'}} className="pb-10 sm:pb-[60px]">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6">
            <div>
              <h2 className="font-display text-[26px] sm:text-[30px] font-bold tracking-[-0.02em] text-gray-900">Facility Showcase</h2>
              <p className="text-[13px] text-gray-500 mt-1">A visual journey through our state-of-the-art medical environment.</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => scrollTrack(-1)} className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => scrollTrack(1)} className="w-9 h-9 rounded-full bg-blue-600 border border-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div id="showcase-track" className="hide-scrollbar flex gap-4 overflow-x-auto pb-3" style={{scrollSnapType:'x mandatory'}}>
            {showcaseImages.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt}
                className="w-[80vw] sm:w-[380px] h-[200px] sm:h-[260px] object-cover rounded-2xl shrink-0 hover:scale-[1.02] transition-transform duration-200"
                style={{scrollSnapAlign:'start'}} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Patient Comfort ── */}
      <section style={{width:'100%'}} className="pt-10 sm:pt-[60px] pb-14 sm:pb-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-start">

            <div>
              <h2 className="font-display text-[clamp(24px,2.5vw,34px)] font-bold tracking-[-0.02em] text-gray-900 mb-8">
                Patient Comfort & Privacy
              </h2>
              <div className="flex flex-col gap-6">
                {comfortFeatures.map(f => (
                  <div key={f.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-[10px] bg-blue-50 border border-blue-200 flex items-center justify-center text-[18px] shrink-0">{f.icon}</div>
                    <div>
                      <strong className="block text-[15px] font-semibold text-gray-900 mb-[6px]">{f.title}</strong>
                      <p className="text-[13px] text-gray-500 leading-[1.6]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — image + JCI badge */}
            <div className="relative pb-10">
              <div className="relative rounded-[24px] overflow-hidden h-[280px] sm:h-[340px]">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" alt="Patient Comfort" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-b from-black/5 to-black/25" />
              </div>
              <div className="absolute bottom-6 right-2 sm:right-[-8px] bg-white border border-gray-200 rounded-[12px] px-[18px] py-3 flex items-center gap-2 shadow-xl z-10 whitespace-nowrap">
                <CheckCircle size={15} className="text-blue-600 shrink-0" />
                <span className="text-[13px] font-medium text-gray-900">JCI Accredited Safety</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAB */}
      <button className="fixed bottom-6 right-6 sm:bottom-7 sm:right-7 w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-full bg-blue-600 text-white text-[18px] sm:text-[20px] flex items-center justify-center shadow-2xl hover:scale-[1.08] hover:bg-blue-700 transition-all z-50">
        📞
      </button>

    </main>
  )
}
