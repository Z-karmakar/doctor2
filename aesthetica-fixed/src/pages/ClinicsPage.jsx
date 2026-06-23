import { Heart, Clock, Users, MapPin, Star, ChevronLeft, ChevronRight, Shield, Award, Zap } from 'lucide-react'

const reviews = [
  { name: 'James Miller',   tag: 'Bypass Patient, 2023',       initials: 'JM', text: '"Dr. Khan saved my life. His calm demeanor and the way he explained the bypass procedure gave me the confidence I needed. Three months later, I\'m back to morning runs."' },
  { name: 'Sarah Richards', tag: 'Valve Repair Patient, 2024',  initials: 'SR', text: '"The robotic heart surgery was incredible. Only three small incisions and I was out of the hospital in 4 days. Dr. Khan is truly a pioneer in his field."' },
  { name: 'Michael Lohan',  tag: 'Consultation Patient, 2023', initials: 'ML', text: '"The care I received at Aesthetica Med under Dr. Khan\'s supervision was world class. He doesn\'t just treat the illness; he treats the person."' },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-[14px]">
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />)}
    </div>
  )
}

export default function ClinicsPage() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{width:'100%'}} className="pt-[50px] pb-[60px]">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-center fade-up">
          <div className="flex flex-col items-start text-left">
            <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1 mb-5">
              Senior Cardiovascular Surgeon
            </span>
            <h1 className="font-display text-[clamp(36px,4vw,52px)] font-bold leading-[1.12] tracking-[-0.02em] text-gray-900 mb-5">
              Precision Surgery for the <span className="text-blue-600">Heart of Your Future.</span>
            </h1>
            <p className="text-[15px] text-gray-500 leading-[1.7] max-w-[500px] mb-8">
              Dr. Amir Khan brings over 20 years of clinical excellence in cardiovascular innovation, combining robotic precision with a patient-centric philosophy.
            </p>
            <div className="flex flex-wrap gap-3 mb-12 fade-up-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-[15px] font-medium transition-all hover:-translate-y-px">Book Consultation</button>
              <button className="bg-transparent text-gray-800 border border-gray-200 hover:border-blue-500 hover:text-blue-600 px-6 py-3 rounded-xl text-sm font-medium transition-all hover:-translate-y-px">View Case Studies</button>
            </div>
            <div className="flex flex-wrap gap-[40px] fade-up-3">
              {[['20+','Years Exp.'],['15k+','Hearts Healed'],['99%','Success Rate']].map(([num, label]) => (
                <div key={label} className="flex flex-col">
                  <span className="font-display text-[32px] font-bold text-gray-900 leading-none">{num}</span>
                  <span className="text-[10px] text-gray-500 mt-2 uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor card */}
          <div className="flex justify-center md:justify-end fade-up-2">
            <div className="relative bg-blue-50 rounded-[24px] overflow-hidden w-full max-w-[340px] mx-auto md:mx-0">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" alt="Dr. Amir Khan" className="w-full h-[480px] object-cover object-top" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/[0.97] backdrop-blur-sm rounded-[16px] p-4 flex items-center gap-3 shadow-lg">
                <div className="w-[42px] h-[42px] rounded-full overflow-hidden shrink-0 bg-blue-100">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <strong className="block text-[13px] font-semibold text-gray-900 truncate">Dr. Amir Khan</strong>
                  <span className="text-[11px] text-gray-500 block truncate">FACS ICTH, MCh Cardiovascular</span>
                </div>
                <span className="ml-auto text-[20px] shrink-0">🫀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Info Bar ── */}
      <section style={{width:'100%'}} className="bg-gray-50 border-t border-b border-gray-200 py-6">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: <Heart size={16} className="text-blue-600" />, label: 'Consultation Fee', value: '$250' },
            { icon: <Clock size={16} className="text-blue-600" />, label: 'Timings',           value: '09:00 – 17:00' },
            { icon: <Users size={16} className="text-blue-600" />, label: 'Active Patients',   value: '450+' },
            { icon: <MapPin size={16} className="text-blue-600" />,label: 'Location',          value: 'Central Clinic' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex items-center gap-[14px]">
              <div className="shrink-0 bg-blue-100 p-2.5 rounded-lg">{icon}</div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</span>
                <strong className="text-[14px] font-semibold text-gray-900 truncate">{value}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Clinical Specializations ── */}
      <section style={{width:'100%'}} className="pt-[70px] pb-[80px]">
        <div className="section-container">
          <div className="text-center mb-[50px]">
            <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold tracking-[-0.02em] mb-4">
              Clinical <span className="text-blue-600">Specializations</span>
            </h2>
            <p className="text-[15px] text-gray-500 max-w-[600px] mx-auto leading-[1.6]">
              Advanced cardiovascular procedures performed with cutting-edge technology and unparalleled surgical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-stretch">
            {/* LEFT featured card */}
            <div className="flex flex-col rounded-[20px] border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80" alt="Robotic Surgery" className="w-full h-[240px] object-cover shrink-0" />
              <div className="p-8 flex flex-col flex-1">
                <span className="text-[28px] mb-4 block">🤖</span>
                <h3 className="text-[18px] font-semibold text-gray-900 mb-2.5">Robotic-Assisted Surgery</h3>
                <p className="text-[14px] text-gray-500 leading-[1.65] flex-1">
                  Minimally invasive procedures utilizing the latest Da Vinci surgical systems for faster recovery and precise outcomes.
                </p>
                <a href="#" className="mt-5 text-[13px] font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5">Learn More <span>→</span></a>
              </div>
            </div>

            {/* RIGHT col */}
            <div className="flex flex-col gap-[20px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                {[
                  { icon:'🫀', title:'Heart Valve Repair',  desc:'Complex reconstruction techniques for mitral and aortic valve preservation.' },
                  { icon:'🔬', title:'Bypass Grafting',     desc:'Advanced coronary artery bypass surgery (CABG) using arterial conduits.' },
                ].map(s => (
                  <div key={s.title} className="bg-white border border-gray-200 rounded-[16px] p-6 hover:shadow-lg transition-shadow">
                    <span className="text-[24px] block mb-3">{s.icon}</span>
                    <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-[1.6]">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white border border-gray-200 rounded-[16px] p-6 flex-1 hover:shadow-lg transition-shadow">
                <span className="text-[24px] block mb-3">❤️</span>
                <h3 className="text-[15px] font-semibold text-gray-900 mb-2">Transplant Surgery</h3>
                <p className="text-[13px] text-gray-500 leading-[1.6]">A leading program for heart transplantation and VAD implantation, providing lifelong care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two Decades / About ── */}
      <section style={{width:'100%'}} className="bg-gray-50 pt-[70px] pb-[80px]">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[70px] items-center">
          {/* LEFT */}
          <div className="relative w-full max-w-[480px] mx-auto md:mx-0">
            <div className="relative rounded-[24px] overflow-hidden h-[480px]">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80" 
                alt="Dr. Amir Khan" 
                className="w-full h-full object-cover object-[center_20%]" 
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/5 to-black/60" />
              <div className="absolute bottom-0 left-0 right-0 p-[30px] z-10">
                <h2 className="font-display text-[26px] font-bold leading-[1.2] text-white mb-[10px]">
                  Two Decades of Cardiac<br />Excellence.
                </h2>
                <p className="text-[13.5px] text-white/90 leading-[1.6] mb-4">
                  A <em>narrative of resilience.</em> My mission is to ensure that every patient receives not just a procedure, but a second chance at a vibrant life.
                </p>
                <span className="block text-[13px] font-semibold text-white">— Dr. Amir Khan</span>
                <span className="text-[11px] text-white/70">Chief of Cardiac Surgery, Aesthetica Med</span>
              </div>
            </div>
            <div className="absolute -bottom-4 right-0 sm:right-[-8px] bg-white border border-gray-200 rounded-[12px] p-[16px] w-[175px] shadow-xl z-20">
              <span className="text-[9px] uppercase tracking-wider text-gray-400 block mb-1">Patient Philosophy</span>
              <p className="text-[12px] italic text-gray-800 leading-snug">"Restoring hope, one heartbeat at a time."</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-[24px]">
            {[
              { Icon: Award,  title: 'Ivy League Pedigree',  desc: 'Completed advanced fellowships at top-tier global institutions, focusing on structural heart disease and innovative surgical modalities.' },
              { Icon: Zap,    title: 'Innovation Focused',   desc: 'Dr. Khan is at the forefront of AI-integrated surgical planning, reducing operative risk and optimizing post-op recovery protocols.' },
              { Icon: Shield, title: 'Patient-First Ethics', desc: 'Transparency, empathy, and clear communication form the bedrock of our practice, ensuring families are supported at every step.' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-[16px] p-5 flex gap-4 items-start hover:shadow-sm transition-shadow">
                <div className="bg-blue-50 p-2 rounded-md shrink-0">
                  <Icon size={18} className="text-blue-600" />
                </div>
                <div>
                  <strong className="block text-[14px] font-semibold text-gray-900 mb-1">{title}</strong>
                  <p className="text-[13px] text-gray-500 leading-[1.65]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Patient Success Stories ── */}
      <section style={{width:'100%'}} className="pt-[70px] pb-[80px]">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
            <div>
              <h2 className="font-display text-[32px] font-bold tracking-[-0.02em] mb-2">
                Patient <span className="text-blue-600">Success Stories</span>
              </h2>
              <p className="text-[14px] text-gray-500">Real journeys of recovery and gratitude.</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <ChevronLeft size={16} />
              </button>
              <button className="w-9 h-9 rounded-full bg-blue-600 border border-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name}
                className="group bg-white border border-gray-200 rounded-[20px] p-7 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Stars />
                <p className="text-[13.5px] text-gray-600 leading-[1.7] mb-[22px] italic">{r.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-[38px] h-[38px] rounded-full bg-blue-600 text-white text-[12px] font-semibold flex items-center justify-center shrink-0">
                    {r.initials}
                  </div>
                  <div className="min-w-0">
                    <strong className="block text-[13px] font-semibold text-gray-900 truncate">{r.name}</strong>
                    <span className="text-[11px] text-gray-500 block truncate">{r.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{width:'100%'}} className="bg-blue-50 py-[70px]">
        <div className="section-container flex flex-col items-center">
          <div className="w-full max-w-[600px] flex flex-col items-center text-center gap-4">
            <div className="bg-blue-100 p-[14px] rounded-full mb-1">
              <Shield size={32} className="text-blue-600" />
            </div>
            <h2 className="font-display text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.02em] leading-[1.2] text-gray-900">
              Ready to prioritize your heart health?
            </h2>
            <p className="text-[14.5px] text-gray-600 leading-[1.65] mb-2">
              Schedule a comprehensive consultation with Dr. Amir Khan and take the first step towards a healthier, longer life.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl text-[15px] font-medium transition-all w-full sm:w-auto">
              Book Your Slot Now
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}
