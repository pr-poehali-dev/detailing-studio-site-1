import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export default function Index() {
  const services = [
    {
      icon: "Spray",
      title: "Мойка",
      description: "Профессиональная мойка с использованием премиальных средств"
    },
    {
      icon: "Gem",
      title: "Полировка",
      description: "Восстановление блеска и защита лакокрасочного покрытия"
    },
    {
      icon: "Wind",
      title: "Химчистка",
      description: "Глубокая очистка салона с устранением запахов"
    },
    {
      icon: "Eye",
      title: "Тонировка",
      description: "Качественная тонировка стёкол с гарантией"
    },
    {
      icon: "Brush",
      title: "Реставрация кожи",
      description: "Восстановление кожаных элементов салона"
    },
    {
      icon: "Shield",
      title: "Керамика",
      description: "Нанесение керамического покрытия для защиты"
    },
    {
      icon: "Sparkles",
      title: "Воск",
      description: "Профессиональная обработка воском для блеска"
    },
    {
      icon: "Star",
      title: "Предпродажная подготовка",
      description: "Комплексная подготовка автомобиля к продаже"
    }
  ]

  const portfolio = [
    { 
      image: "https://cdn.poehali.dev/files/9efaeb44-762f-4f29-9198-75f1ca3e9b52.jpg", 
      title: "BMW - Керамическое покрытие",
      description: "Нанесение защитной плёнки с керамическим покрытием"
    },
    { 
      image: "https://cdn.poehali.dev/files/7414f6ca-d100-4195-ade8-a9d1aa49b79d.jpg", 
      title: "BMW - Детейлинг кузова",
      description: "Полная обработка кузова с восстановлением блеска"
    },
    { 
      image: "https://cdn.poehali.dev/files/12fba34e-0a66-4490-9668-b4343969890a.jpg", 
      title: "Tesla - Химчистка салона",
      description: "Профессиональная химчистка и защита интерьера"
    },
    { 
      image: "https://cdn.poehali.dev/files/54032aed-4e5b-4f98-ab49-39cbe5589742.jpg", 
      title: "BMW - Детализация кузова",
      description: "Высококачественная полировка и защитное покрытие"
    },
    { 
      image: "https://cdn.poehali.dev/files/c766fed7-f648-44d9-bc56-b8d3be63f699.jpg", 
      title: "BMW X3 - Комплексная обработка",
      description: "Полный цикл детейлинга: кузов, диски, защитные покрытия"
    }
  ]

  const reviews = [
    {
      name: "Александр",
      text: "Отличная работа! Машина выглядит как новая. Очень доволен качеством услуг.",
      rating: 5
    },
    {
      name: "Мария",
      text: "Профессиональный подход, внимание к деталям. Рекомендую всем!",
      rating: 5
    },
    {
      name: "Дмитрий",
      text: "Быстро, качественно, по разумной цене. Буду обращаться ещё.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-heading font-bold">
              <span className="text-primary">ALL</span> DETAILING
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary-dark">
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/img/4a27ad7d-92ef-4060-8458-fd881c23c026.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 animate-fade-in">
            <span className="text-primary">ALL</span> DETAILING
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300 animate-fade-in">
            Премиальная детейлинг студия полного цикла. 
            Превращаем ваш автомобиль в произведение искусства.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8 py-4">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на услугу
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Наши <span className="text-primary">услуги</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Наше <span className="text-primary">портфолио</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((work, index) => (
              <Card key={index} className="bg-card border-primary/20 overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img src={work.image} alt={work.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-primary/80 px-2 py-1 rounded text-sm font-medium mb-2">
                      Результат работы
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading font-semibold text-card-foreground mb-2">{work.title}</h3>
                  <p className="text-muted-foreground text-sm">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              О <span className="text-primary">студии</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ALL DETAILING — это команда профессионалов с многолетним опытом в сфере автомобильной детализации. 
              Мы используем только премиальные материалы и современное оборудование, чтобы каждый автомобиль 
              получил максимальный уровень заботы и внимания.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Отзывы <span className="text-primary">клиентов</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="font-heading font-semibold text-card-foreground">— {review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Связаться <span className="text-primary">с нами</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="text-primary mr-4" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={24} className="text-primary mr-4" />
                  <span>info@alldetailing.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={24} className="text-primary mr-4" />
                  <span>г. Москва, ул. Автомобильная, д. 123</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={24} className="text-primary mr-4" />
                  <span>Пн-Вс: 09:00 - 21:00</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-card border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-card-foreground">Записаться на услугу</h3>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full p-3 rounded-lg bg-background border border-primary/20 text-foreground focus:border-primary outline-none"
                    />
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full p-3 rounded-lg bg-background border border-primary/20 text-foreground focus:border-primary outline-none"
                    />
                    <select className="w-full p-3 rounded-lg bg-background border border-primary/20 text-foreground focus:border-primary outline-none">
                      <option>Выберите услугу</option>
                      {services.map((service, index) => (
                        <option key={index}>{service.title}</option>
                      ))}
                    </select>
                    <textarea 
                      placeholder="Комментарий" 
                      rows={4}
                      className="w-full p-3 rounded-lg bg-background border border-primary/20 text-foreground focus:border-primary outline-none resize-none"
                    ></textarea>
                    <Button className="w-full bg-primary hover:bg-primary-dark">
                      Отправить заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-heading font-bold mb-4">
            <span className="text-primary">ALL</span> DETAILING
          </div>
          <p className="text-muted-foreground mb-4">
            Премиальная детейлинг студия полного цикла
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Instagram" size={24} className="text-muted hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="text-muted hover:text-primary cursor-pointer transition-colors" />
            <Icon name="MessageCircle" size={24} className="text-muted hover:text-primary cursor-pointer transition-colors" />
          </div>
          <div className="mt-6 pt-6 border-t border-primary/20 text-sm text-muted-foreground">
            © 2024 ALL DETAILING. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}