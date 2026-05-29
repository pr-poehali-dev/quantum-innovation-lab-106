import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Контакты
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-12 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Если возникнут вопросы обращайтесь по любому из способов контактов
            </h2>

            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Почта</p>
                <a href="mailto:photo_nv@mail.ru" className="text-foreground hover:text-sage transition-colors">
                  photo_nv@mail.ru
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Локация</p>
                <p className="text-foreground">г. Сысерть, ул. Коммуны, дом 26А</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Телефон</p>
              <a href="tel:+79068055400" className="block text-foreground hover:text-sage transition-colors">
                +7 906 805-54-00
              </a>
              <a href="tel:+73437460400" className="block text-foreground hover:text-sage transition-colors mt-2">
                +7 34374 6-04-00
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">WhatsApp</p>
              <a
                href="https://wa.me/79068055400"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-sage transition-colors"
              >
                +7 906 805-54-00
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}