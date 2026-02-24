import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pretty">
          See If We're the Right Team for You.
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
          No hard sell. Just an honest chat about where you want to go, how we work, and whether it feels like a match.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="text-base bg-primary-foreground text-primary hover:bg-secondary hover:text-foreground"
          >
            Book a Call
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  )
}
