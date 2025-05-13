import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы скоро с вами свяжемся.");
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#F2F5F7]">
      {/* Навигация */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Droplets" size={28} className="text-[#1E56A0]" />
            <span className="font-montserrat text-xl font-bold text-[#1E56A0]">
              АкваБур
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#services"
              className="font-roboto text-[#6D7275] hover:text-[#1E56A0] transition-colors"
            >
              Услуги
            </a>
            <a
              href="#benefits"
              className="font-roboto text-[#6D7275] hover:text-[#1E56A0] transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#contact"
              className="font-roboto text-[#6D7275] hover:text-[#1E56A0] transition-colors"
            >
              Контакты
            </a>
          </div>
          <div className="hidden md:block">
            <Button className="bg-[#1E56A0] hover:bg-[#174785]">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Позвонить нам
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="relative bg-gradient-to-r from-[#1E56A0] to-[#163A69] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581087267383-b1325dd3899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Профессиональное{" "}
                <span className="text-[#F75C03]">бурение скважин</span> на воду
              </h1>
              <p className="font-roboto text-lg mb-8 max-w-lg">
                Обеспечьте свой дом чистой артезианской водой. Мы выполняем весь
                комплекс работ по бурению и обустройству скважин.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#F75C03] hover:bg-[#D94E02] text-white"
                >
                  Получить консультацию
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E56A0] flex items-center justify-center text-white">
                    <Icon name="CheckCircle" size={28} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-montserrat text-[#1E56A0] font-semibold text-lg">
                      Специальное предложение
                    </h3>
                    <p className="text-[#6D7275] text-sm">Ограниченное время</p>
                  </div>
                </div>
                <div className="bg-[#F2F5F7] p-4 rounded-md mb-4">
                  <p className="font-roboto text-[#1E56A0] font-medium">
                    Скидка 10% на бурение скважины при заказе до конца месяца
                  </p>
                </div>
                <Button className="w-full bg-[#F75C03] hover:bg-[#D94E02]">
                  Получить скидку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция услуг */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1E56A0] mb-4">
              Наши услуги
            </h2>
            <p className="font-roboto text-[#6D7275] max-w-2xl mx-auto">
              Мы предлагаем полный спектр услуг по бурению и обустройству
              скважин для частных домов, дач и предприятий. Гарантируем высокое
              качество и долговечность.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Карточка услуги 1 */}
            <div className="bg-[#F2F5F7] rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590496793929-36417d3117de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Бурение артезианских скважин"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#1E56A0] rounded-full flex items-center justify-center mb-4">
                  <Icon name="Drill" className="text-white" size={24} />
                </div>
                <h3 className="font-montserrat text-xl font-semibold mb-3 text-[#1E56A0]">
                  Бурение артезианских скважин
                </h3>
                <p className="font-roboto text-[#6D7275] mb-4">
                  Профессиональное бурение артезианских скважин глубиной до 200м
                  с обеспечением доступа к чистым водоносным слоям.
                </p>
                <Button
                  variant="outline"
                  className="text-[#1E56A0] border-[#1E56A0]"
                >
                  Подробнее
                </Button>
              </div>
            </div>

            {/* Карточка услуги 2 */}
            <div className="bg-[#F2F5F7] rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1623979152096-2918f45344a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Обустройство скважин"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#1E56A0] rounded-full flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="text-white" size={24} />
                </div>
                <h3 className="font-montserrat text-xl font-semibold mb-3 text-[#1E56A0]">
                  Обустройство скважин
                </h3>
                <p className="font-roboto text-[#6D7275] mb-4">
                  Полный комплекс работ по обустройству скважин: установка
                  кессона, подбор и монтаж насосного оборудования.
                </p>
                <Button
                  variant="outline"
                  className="text-[#1E56A0] border-[#1E56A0]"
                >
                  Подробнее
                </Button>
              </div>
            </div>

            {/* Карточка услуги 3 */}
            <div className="bg-[#F2F5F7] rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583303585940-3e46a51e8e77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Очистка и ремонт скважин"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#1E56A0] rounded-full flex items-center justify-center mb-4">
                  <Icon name="Filter" className="text-white" size={24} />
                </div>
                <h3 className="font-montserrat text-xl font-semibold mb-3 text-[#1E56A0]">
                  Очистка и ремонт скважин
                </h3>
                <p className="font-roboto text-[#6D7275] mb-4">
                  Восстановление производительности скважин, очистка от ила и
                  отложений, замена вышедшего из строя оборудования.
                </p>
                <Button
                  variant="outline"
                  className="text-[#1E56A0] border-[#1E56A0]"
                >
                  Подробнее
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section id="benefits" className="py-20 bg-[#1E56A0] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="font-roboto max-w-2xl mx-auto">
              Мы специализируемся на бурении скважин более 15 лет и гарантируем
              высокое качество услуг, надежность оборудования и профессиональный
              подход к каждому заказу.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Преимущество 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-[#163A69] rounded-lg hover:bg-[#0F2744] transition-colors">
              <div className="w-16 h-16 bg-[#F75C03] rounded-full flex items-center justify-center mb-4">
                <Icon name="Award" className="text-white" size={32} />
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-2">
                Опыт работы 15+ лет
              </h3>
              <p className="font-roboto">
                Выполнили более 1000 проектов по бурению и обустройству скважин
                разной сложности.
              </p>
            </div>

            {/* Преимущество 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-[#163A69] rounded-lg hover:bg-[#0F2744] transition-colors">
              <div className="w-16 h-16 bg-[#F75C03] rounded-full flex items-center justify-center mb-4">
                <Icon name="Clock" className="text-white" size={32} />
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-2">
                Быстрое выполнение
              </h3>
              <p className="font-roboto">
                Выполняем стандартный проект бурения скважины за 1-2 дня с
                минимальным вмешательством в ландшафт.
              </p>
            </div>

            {/* Преимущество 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-[#163A69] rounded-lg hover:bg-[#0F2744] transition-colors">
              <div className="w-16 h-16 bg-[#F75C03] rounded-full flex items-center justify-center mb-4">
                <Icon name="Shield" className="text-white" size={32} />
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-2">
                Гарантия качества
              </h3>
              <p className="font-roboto">
                Предоставляем гарантию на все виды работ. Используем только
                сертифицированные материалы.
              </p>
            </div>

            {/* Преимущество 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-[#163A69] rounded-lg hover:bg-[#0F2744] transition-colors">
              <div className="w-16 h-16 bg-[#F75C03] rounded-full flex items-center justify-center mb-4">
                <Icon name="Wallet" className="text-white" size={32} />
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-2">
                Прозрачное ценообразование
              </h3>
              <p className="font-roboto">
                Честные фиксированные цены без скрытых платежей. Рассрочка
                платежа на выгодных условиях.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с цифрами */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-[#F75C03] font-montserrat text-4xl font-bold mb-2">
                15+
              </div>
              <p className="text-[#6D7275] font-roboto">Лет опыта</p>
            </div>
            <div>
              <div className="text-[#F75C03] font-montserrat text-4xl font-bold mb-2">
                1000+
              </div>
              <p className="text-[#6D7275] font-roboto">Выполненных проектов</p>
            </div>
            <div>
              <div className="text-[#F75C03] font-montserrat text-4xl font-bold mb-2">
                98%
              </div>
              <p className="text-[#6D7275] font-roboto">Довольных клиентов</p>
            </div>
            <div>
              <div className="text-[#F75C03] font-montserrat text-4xl font-bold mb-2">
                5 лет
              </div>
              <p className="text-[#6D7275] font-roboto">Гарантии на работы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Контактная форма */}
      <section id="contact" className="py-20 bg-[#F2F5F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1E56A0] mb-4">
              Получите бесплатную консультацию
            </h2>
            <p className="font-roboto text-[#6D7275] max-w-2xl mx-auto">
              Оставьте заявку, и наш специалист свяжется с вами в течение 30
              минут, чтобы рассчитать стоимость работ и ответить на все вопросы.
            </p>
          </div>

          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block font-roboto font-medium mb-2 text-[#6D7275]"
                >
                  Ваше имя
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  className="border-[#1E56A0]/20 focus-visible:ring-[#1E56A0]"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block font-roboto font-medium mb-2 text-[#6D7275]"
                >
                  Номер телефона
                </label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (999) 123-45-67"
                  className="border-[#1E56A0]/20 focus-visible:ring-[#1E56A0]"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block font-roboto font-medium mb-2 text-[#6D7275]"
                >
                  Сообщение (опционально)
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Опишите ваш запрос или вопрос..."
                  className="border-[#1E56A0]/20 focus-visible:ring-[#1E56A0]"
                  rows={4}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-[#F75C03] hover:bg-[#D94E02] text-white"
                >
                  Отправить заявку
                </Button>
              </div>
              <p className="text-xs text-[#6D7275] mt-4 text-center">
                Нажимая кнопку, вы соглашаетесь с нашей политикой
                конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E56A0] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Droplets" size={28} />
                <span className="font-montserrat text-xl font-bold">
                  АкваБур
                </span>
              </div>
              <p className="font-roboto mb-6">
                Профессиональное бурение и обустройство скважин на воду.
                Гарантия качества и надежности.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#F75C03] transition-colors">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="hover:text-[#F75C03] transition-colors">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="hover:text-[#F75C03] transition-colors">
                  <Icon name="Youtube" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-montserrat text-lg font-semibold mb-6">
                Контакты
              </h3>
              <div className="font-roboto space-y-4">
                <div className="flex items-center">
                  <Icon name="MapPin" className="mr-3" />
                  <span>г. Нефтекамск, ул. Строителей, 59, МФЦ</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-3" />
                  <span>+7 (903) 577-78-55</span>
                </div>
                <div className="flex items-center">
                  <Icon name="User" className="mr-3" />
                  <span>Дмитрий</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-montserrat text-lg font-semibold mb-6">
                Услуги
              </h3>
              <ul className="font-roboto space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F75C03] transition-colors flex items-center"
                  >
                    <Icon name="ChevronRight" size={16} className="mr-2" />
                    Бурение артезианских скважин
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F75C03] transition-colors flex items-center"
                  >
                    <Icon name="ChevronRight" size={16} className="mr-2" />
                    Обустройство скважин
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F75C03] transition-colors flex items-center"
                  >
                    <Icon name="ChevronRight" size={16} className="mr-2" />
                    Очистка и ремонт скважин
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F75C03] transition-colors flex items-center"
                  >
                    <Icon name="ChevronRight" size={16} className="mr-2" />
                    Водоснабжение дома
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F75C03] transition-colors flex items-center"
                  >
                    <Icon name="ChevronRight" size={16} className="mr-2" />
                    Отопление и водоподготовка
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-6 text-center">
            <p className="font-roboto text-sm">
              © 2025 АкваБур — Бурение скважин. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
