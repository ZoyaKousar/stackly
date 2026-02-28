import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#020818] text-white py-12 sm:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#020818] font-bold">
                S
              </div>
              <span className="text-lg font-bold text-white">Stackly</span>
            </div>
            <p className="text-sm text-white/80">
              AI-native performance marketing for growth-stage brands.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#" className="hover:text-white transition">Paid Search</Link></li>
              <li><Link href="#" className="hover:text-white transition">Paid Social</Link></li>
              <li><Link href="#" className="hover:text-white transition">SEO & AIO</Link></li>
              <li><Link href="#" className="hover:text-white transition">Marketing Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#" className="hover:text-white transition">About</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#" className="hover:text-white transition">Privacy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms</Link></li>
              <li><Link href="#" className="hover:text-white transition">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-white/70 text-center">
            © 2026 Stackly. All rights reserved. Part of Stellar.
          </p>
        </div>
      </div>
    </footer>
  )
}
