import React from "react";

const Preview = () => {


   return(
      <div className="preview">
            <h1>Hi 👋, I'm Alex</h1>
            <h3>Я начинающий Full-Stack разработчик из Кирова, увлеченный и непоколебимый в желании стать частью мира программирования.</h3>
            <div>
            <a href="https://www.youtube.com/channel/UCCuenrhYHXBgsnSvSIn4ouA" target="_blank">
               <img src="https://img.shields.io/static/v1?message=Youtube&logo=youtube&label=&color=FF0000&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="youtube logo"  />
            </a>
            <a href="t.me/AlexGmyzin" target="_blank">
               <img src="https://img.shields.io/static/v1?message=Telegram&logo=telegram&label=&color=2CA5E0&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="telegram logo"  />
            </a>
            <h3 >  Расскажу пару слов о себе</h3>

            <div className="content__preview anim-items anim-break">
                           <p  className="content__block  _anim-show">
                              <span>
                                 Все началось с необходимости создать и разместить в интернете сайт для поддержки личного проекта по обучению игре на гитаре. </span>
                              <span>
                                 После года погружения в верстку адаптив и джава скрипт сайт был создан, но этого было недостаточно.
                              </span> 
                              <span>
                                 Потребовалось понимание SQL, баз данных, и back-end языка для создания полноценного веб приложения, способного работать с формами авторизации, персонализировать посетителей и хранить информацию о прогрессе обучения.
                              </span> 
                              <span>
                                 Этот базис я получил пройдя обучения В РЭУ им. Плеханова и смог успешно реализовать как на своем сайте, так, в том числе и в других альтернативных проектах. Самостоятельно изучил полный курс по React на английском языке.
                              </span>	
                              <span>
                                 Программирование дисциплинирует ум, дает возможность перманентно развиваться и видеть перспективы. Все это важные для меня качества подкрепленные целеустремленностью и грамотной постановкой целей. Следующий логический шаг - найти компанию, которая сможет предложить условия, способствующие последующему моему развитию в этом направлении.
                              </span>
                           </p>
               </div>
            <h3>🛠 Технологии, которыми я владею:</h3>   
            <p  className="icon"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="50" height="50"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> <a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a> </p>
            <h2>Созданные мной сайты с использованием базовых технологий HTML, CSS, JS, SASS</h2>
            <div className="gridBlock">
               <div className="gridItem">
                  <a className="lay" href="https://alexgmyz.github.io/">
                     <img src="/img/1.jpg" alt="" />
                  </a>
                  <h2>Действующий сайт-платформа для обучения игре на гитаре. </h2>
                  <p>Адаптивный под различные устройства проект. Совокупность Frontend решений таких как табы, свайпер, форма обратной связи, яркая анимация.Так же сайт имеет форму авторизации для доступа к материалам с уроками. Код 12345 </p>
               </div>
               <div className="gridItem">
                  <a className="lay" href="https://alexgmyz.github.io/lend/1/bicycle.html">
                     <img src="/img/2.jpg" alt="" />
                  </a>
                  <h2>Лендинг с Figma "Bicycle" </h2>
                  <p>Один из первых лендингов с макета Figma/ Полностью адаптивный дизайн, работа с flex и grid контейнерами. </p>
               </div>
               <div className="gridItem">
                  <a className="lay" href="https://alexgmyz.github.io/lend/2/guitar.html">
                     <img src="/img/3.jpg" alt="" />
                  </a>
                  <h2>Сайт визитка преподавателя игры на гитаре </h2>
                  <p>Одна из первых попыток создать полноценную одностраничную сайт визитку преподавателя. Форма регистрации, флекс контейнеры, галерея. </p>
               </div>
               <div className="gridItem">
                  <a className="lay" href="https://alexgmyz.github.io/lend/3/paralax.html">
                     <img src="/img/4.jpg" alt="" />
                  </a>
                  <h2> Paralax + Bottom  </h2>
                  <p>Интересный проект приветственного фулскрин окна с паралакс эффектом. Крое этого необычная анимация кнопки @Freedom</p>
               </div>
               <div className="gridItem">
                  <a className="lay" href="https://alexgmyz.github.io/lend/4/business.html">
                     <img src="/img/5.jpg" alt="" />
                  </a>
                  <h2> Лендинг с Figma "Business" </h2>
                  <p>Еще один минималистичный лендинг с FIgma Design. Полная адаптивность. Меню бургер. Карточки товаров.</p>
               </div>
               <div className="gridItem">
                  <a className="lay" href="https://alexgmyz.github.io/lend/7/list.html">
                     <img src="/img/6.jpg" alt="" />
                  </a>
                  <h2> Способ организации + анимация многоуровневого списка </h2>
                  <p>Создание и оформление многоуровего списка с множественным использованием псевдоэлементов before и after </p>
               </div>
               <div className="gridItem">
                  <a className="lay" href="https://alexgmyz.github.io/lend/5/prime.html">
                     <img src="/img/7.jpg" alt="" />
                  </a>
                  <h2> Лендинг с Figma "Prime One" </h2>
                  <p>Лендинг с FIgma Design. Полная адаптивность. Меню бургер. Карточки товаров.</p>
               </div>
               <div className="gridItem">
                  <a className="lay" href="https://alexgmyz.github.io/lend/6/exam.html">
                     <img src="/img/8.jpg" alt="" />
                  </a>
                  <h2> Сайт First/ </h2>
                  <p>Один из первых сверстанных на обучении лендингов без использования макета </p>
               </div>             
            </div>
         </div>
      </div>
      

   )
}
export default Preview;