export default function Footer() {
  return (
    <footer style={{width:'100%',marginTop:'16px'}} className="bg-gray-900 text-gray-400 pt-[60px]">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 pb-12 border-b border-white/[0.08]">

        {/* .footer-brand */}
        <div>
          <span className="font-display text-[20px] font-semibold text-white block mb-3">
            Aesthetica Med
          </span>
          <p className="text-[13px] text-gray-500 leading-[1.7] max-w-[240px]">
            Leading the future of cardiovascular excellence with precision, care, and innovative medical technology.
          </p>
        </div>

        {/* .footer-col */}
        {[
          { heading: 'Quick Links', links: ['Patient Portal','Research Papers','Privacy Policy'] },
          { heading: 'Contact',     links: ['Emergency Contact','Support Center','+1 (800) CARDIO-CARE'] },
        ].map(({ heading, links }) => (
          <div key={heading}>
            <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-blue-400 mb-4">{heading}</h4>
            <ul className="list-none space-y-[10px]">
              {links.map(l => (
                <li key={l}>
                  <a href="#" className="text-[13px] text-gray-500 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter col */}
        <div>
          <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-blue-400 mb-4">Newsletter</h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 min-w-0 bg-white/[0.07] border border-white/[0.12] rounded-lg px-[14px] py-[10px] text-[13px] text-white placeholder-gray-600 outline-none focus:border-blue-500 transition-colors"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-[10px] rounded-lg text-sm transition-colors">→</button>
          </div>
        </div>
      </div>

      <div className="section-container py-5 text-center">
        <p className="text-[12px] text-gray-600">© 2024 Aesthetica Medical Group. All rights reserved. Precise Care, Futuristic Vision.</p>
      </div>
    </footer>
  )
}
