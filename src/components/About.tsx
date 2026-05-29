import { useEffect, useRef, useState } from "react"

const services = [
  "Фото и видеосъёмка",
  "Печать файлов с любых носителей",
  "Составление рекламы",
  "Фото и видеомонтаж",
  "Оцифровка фотоплёнки и видео",
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="philosophy" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              О нас
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Фотостудия НВ —<br />
              <span className="italic">всё в одном месте</span>
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed max-w-md transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Мы занимаемся фото и видеосъёмкой, а также предоставляем полный спектр услуг по обработке и печати материалов.
            </p>
          </div>

          {/* Right — service list */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-0">
              {services.map((item, index) => (
                <div
                  key={item}
                  className="group py-6 border-t border-border last:border-b flex items-center gap-6"
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <span className="font-serif text-2xl text-stone/40 group-hover:text-sage transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground text-lg leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
