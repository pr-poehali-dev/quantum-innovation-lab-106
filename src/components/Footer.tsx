export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="font-serif text-2xl tracking-wide text-foreground">Фотостудия НВ</p>

          <nav className="flex flex-col gap-3">
            <a href="#services" className="text-sm text-foreground hover:text-sage transition-colors">
              Услуги
            </a>
            <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">
              Контакты
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Фотостудия НВ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}