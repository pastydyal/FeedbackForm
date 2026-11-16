
import { useState, useRef, useEffect } from 'react';
import './FeedbackForm.css';

const services = [
  'SEO-продвижение сайта',
  'Зарубежное SEO',
  'SEO-аудит',
  'SEO-копирайтинг',
  'Контекстная / медийная реклама',
  'SMM',
  'E-mail маркетинг',
  'Управление репутацией',
  'Создание сайтов / техподдержка',
  'Веб-аналитика',
  'Другое',
];

function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);

  const successRef = useRef(null);

    useEffect(() => {
    if (submitted && successRef.current) {
        successRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        });
    }
    }, [submitted]);

  const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.currentTarget;

  const selectedServices = form.querySelectorAll(
    'input[name="services"]:checked'
  );

  if (selectedServices.length === 0) {
    alert('Пожалуйста, выберите хотя бы одну услугу!');
    return;
  }

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  form.reset();
  setSubmitted(true);
};

  return (
    <div className="form-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h1>Форма обратной связи</h1>

        <p className="form-description">
          Заполните форму, и мы свяжемся с вами в ближайшее время.
        </p>

        {submitted && (
            <div className="success-message" role="status" ref={successRef} tabIndex={-1}>
                <div className="success-icon">✓</div>
                <div>
                <strong>Заявка успешно отправлена!</strong>
                <p>
                    Спасибо за обращение. Мы свяжемся с вами
                    в ближайшее время.
                </p>
                </div>
            </div>
            )}

        <h2>Контактная информация</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Ваше имя <span>*</span></label>
            <input type="text" placeholder="Введите ваше имя" required />
          </div>

          <div className="form-group">
            <label>Адрес сайта <span>*</span></label>
            <input type="url" placeholder="https://example.com" required />
          </div>

          <div className="form-group">
            <label>Номер телефона <span>*</span></label>
            <input
            type="tel"
            placeholder="79991234567"
            inputMode="numeric"
            maxLength={11}
            pattern="[0-9]{11}"
            onInput={(event) => {
                event.currentTarget.value = event.currentTarget.value
                .replace(/\D/g, '')
                .slice(0, 11);
            }}
            title="Введите номер телефона из 11 цифр"
            required
            />
          </div>

          <div className="form-group">
            <label>E-mail <span>*</span></label>
            <input type="email" placeholder="example@mail.ru" required />
          </div>

          <div className="form-group full-width">
            <label>Ник в Telegram</label>
            <input type="text" placeholder="@username" />
          </div>
        </div>

        <div className="section-divider"></div>

        <h2>Паспортные данные</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Фамилия <span>*</span></label>
            <input type="text" placeholder="Введите фамилию" required />
          </div>

          <div className="form-group">
            <label>Имя <span>*</span></label>
            <input type="text" placeholder="Введите имя" required />
          </div>

          <div className="form-group">
            <label>Отчество</label>
            <input type="text" placeholder="Введите отчество" />
          </div>

          <div className="form-group">
            <label>Дата рождения <span>*</span></label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>Серия паспорта <span>*</span></label>
            <input
              type="text"
              placeholder="0000"
              maxLength="4"
              pattern="[0-9]{4}"
              title="Серия паспорта должна содержать 4 цифры"
              required
            />
          </div>

          <div className="form-group">
            <label>Номер паспорта <span>*</span></label>
            <input
              type="text"
              placeholder="000000"
              maxLength="6"
              pattern="[0-9]{6}"
              title="Номер паспорта должен содержать 6 цифр"
              required
            />
          </div>

          <div className="form-group full-width">
            <label>Кем выдан паспорт <span>*</span></label>
            <input
              type="text"
              placeholder="Укажите орган выдачи"
              required
            />
          </div>

          <div className="form-group">
            <label>Дата выдачи <span>*</span></label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>Код подразделения <span>*</span></label>
            <input
              type="text"
              placeholder="000-000"
              maxLength="7"
              pattern="[0-9]{3}-[0-9]{3}"
              title="Введите код в формате 000-000"
              required
            />
          </div>

          <div className="form-group full-width">
            <label>Адрес регистрации <span>*</span></label>
            <input
              type="text"
              placeholder="Введите адрес регистрации"
              required
            />
          </div>
        </div>

        <div className="section-divider"></div>

        <h2>Выберите интересующие услуги</h2>

        <div className="services-grid">
          {services.map((service) => (
            <label className="service-option" key={service}>
                <input
                type="checkbox"
                name="services"
                value={service}
                />
                <span>{service}</span>
            </label>
            ))}
        </div>

        <div className="section-divider"></div>

        <h2>Дополнительная информация</h2>

        <div className="form-group">
          <label>Комментарий</label>
          <textarea
            rows="5"
            placeholder="Расскажите подробнее о вашей задаче..."
          />
        </div>

        <label className="consent-option">
          <input type="checkbox" required />
          <span>
            Я согласен(на) на обработку персональных данных
            <span className="required">*</span>
          </span>
        </label>

        <button type="submit" className="submit-button">
          Отправить заявку
        </button>

        <p className="required-note">
          <span>*</span> — обязательные поля
        </p>
      </form>
    </div>
  );
}

export default FeedbackForm;
