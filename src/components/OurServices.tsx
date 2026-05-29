import { useEffect, useRef, useState } from "react"

const services = [
  "Фотосъёмка и видеосъёмка",
  "Печать фотографий с любых носителей",
  "Изготовление наружной рекламы (баннеры, штендеры, таблички, указатели)",
  "Производство сувенирной продукции",
  "Компьютерная обработка фотографий",
  "Широкоформатная печать",
  "Оперативная полиграфия",
  "Изготовление вывесок и стендов",
  "Монтажные работы",
  "Печать на холсте",
]

export function OurServices() {
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
    <section ref={sectionRef} id="services" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Наши услуги
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Что мы делаем
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {services.map((item, index) => (
            <div
              key={item}
              className={`group py-7 border-t border-border last:border-b flex items-center gap-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 80}ms` }}
            >
              <span className="font-serif text-3xl text-stone/30 group-hover:text-sage transition-colors duration-500 w-10 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-foreground text-lg leading-snug">{item}</p>
            </div>
          ))}

          <div
            className={`mt-12 pt-12 border-t border-border transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${300 + services.length * 80}ms` }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              Также в студии доступна{" "}
              <span className="text-foreground font-medium">оцифровка фотоплёнки и видео</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
