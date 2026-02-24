import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center text-primary font-bold">
                S
              </div>
              <span className="text-lg font-bold">Stackly</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              AI-native performance marketing for growth-stage brands.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="#" className="hover:text-primary-foreground transition">Paid Search</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition">Paid Social</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition">SEO & AIO</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition">Marketing Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="#" className="hover:text-primary-foreground transition">About</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="#" className="hover:text-primary-foreground transition">Privacy</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition">Terms</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-primary-foreground/70 text-center">
            © 2024 Stackly. All rights reserved. Part of Stellar.
          </p>
        </div>
      </div>
    </footer>
  )
}
