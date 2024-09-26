document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");
  const sidebar = document.getElementById("sidebar");
  const labButtons = document.querySelectorAll(".lab-buttons button");

  const labData = {
    lab1: [
      {
        title: "Опис предметного середовища",
        content: `<p>Користувачі відкривають головну сторінку, де відображаються актуальні акції та популярні товари. Вони можуть переглядати різні категорії продукції, такі як миші, клавіатури або монітори. Кожен товар представлений із описом, фотографіями, характеристиками.</p>`,
      },
      {
        title: "Тема, мета, місце розташування ЛР №1",
        content: `<p>Тема:<br>
            СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.
            РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.
            <br>
            Мета:<br>
            придбати практичні навички роботи  з HTML-документом, таблицями, , зображеннями, посиланнями, списками, формами
            Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
            </p>`,
      },
      {
        title: "СТРУКТУРА ДОКУМЕНТА",
        content: '<img src="imglab1/структура.png" />',
      },
      {
        title: "HTML-код ТАБЛИЦЬ",
        content: '<img  src="imglab1/table.png" />',
      },
      {
        title: "HTML-код ФОРМ",
        content: '<img  src="imglab1/form.png" />',
      },
      {
        title: "HTML-код ЗОБРАЖЕННЯ",
        content: '<img  src="imglab1/images.png" />',
      },
      {
        title: "ВИСНОВКИ",
        content: `<p>У ході виконання роботи було придбано практичні навички створення та 
          структурування HTML-документів. Зокрема, була відпрацьована робота з основними 
          елементами веб-сторінки, такими як посилання, таблиці, зображення, списки та 
          форми. Було створено шаблон звітного HTML-документа, який відображає результати 
          виконання лабораторних робіт та може бути використаний для подальших завдань. 
          Цей шаблон слугує основою для представлення інформації у зручному та 
          структурованому вигляді, що сприяє кращому розумінню предметної галузі та 
          ефективній взаємодії з веб-технологіями.</p>`,
      },
    ],
    lab2: [
      {
        title: "Тема, мета ЛР №2 Місце розташування сайту, звіту",
        content: `<p>Тема: <br>
        КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.
        <br>
        Мета: придбати практичні навички роботи  з селекторами, ідентифікаторами, 
        списками,  різноманітними властивостями кольору і фону,  
        зовнішними та внутрішними  відступами,  плаваючими елементами, 
        оформленням текстових елементів</p>`,
      },
      {
        title: "Способи підключення стилів",
        content: `<p>
        Існує три основні способи підключення стилів (CSS) до HTML-документа:<br>
        1. Inline-стилі (вбудовані стилі)<br>
        2. Внутрішні стилі (internal)<br>
        3. Зовнішні стилі (external)<br>
        Я використов зовнішній спосіб підключення:<br>
        <img src="imglab2/style.png" />
        </p>`,
      },
      {
        title: "Селектори",
        content: `<p>
        Селектори які я використовував:<br>
        <img src="imglab2/selector1.png" />
        <img src="imglab2/selector2.png" />
        <img src="imglab2/selector3.png" />
        </p>`,
      },
      {
        title: "Селектори тегу",
        content: `<p>
        Селектори тегів які я використовував:<br>
        <img src="imglab2/teg.png" />
        </p>`,
      },
      {
        title: "Селектори класу",
        content: `<p>
        Селектори класів які я використовував:<br>
        <img src="imglab2/class1.png" />
        <img src="imglab2/class2.png" />
        </p>`,
      },
      {
        title: "Селектори ідентифікаторів",
        content: `<p>
        Селектори ідентифікаторів які я використовував:<br>
        <img src="imglab2/id.png" />
        </p>`,
      },
      {
        title: "Інші селектори",
        content: `<p>
        Універсальні селектори:<br>
        <img src="imglab2/other.png" />
        </p>`,
      },
      {
        title: "CSS: Шрифти Текст Таблиці Фон Контур Списки CSS Просунутий",
        content: `<p>
        Шрифти:<br>
        <img src="imglab2/background.png" /><br>
        Фон:<br>
        <img src="imglab2/background.png" /><br>
        Списки:<br>
        <img src="imglab2/spisok.png" />
        </p>`,
      },
      {
        title: "Висновки до ЛР №2",
        content: `<p>
        У ході вивчення теми про каскадні таблиці стилів (CSS) були отримані практичні 
        навички роботи з селекторами та ідентифікаторами, що є основою для ефективного 
        стилізування HTML-документів. За допомогою селекторів можна визначати, які 
        елементи будуть отримувати певний стиль, а ідентифікатори допомагають призначати 
        унікальні стилі для конкретних елементів. Особлива увага приділялася оформленню 
        текстових елементів, що включає роботу з кольорами, фоном, а також налаштуванням 
        відступів і плаваючих елементів. У результаті вдалося освоїти механізми впливу на 
        зовнішній вигляд списків та інших елементів веб-сторінок, що є важливими аспектами 
        для створення професійно оформлених і функціональних веб-інтерфейсів.
        </p>`,
      },
    ],
    lab3: [],
  };

  function updateSidebar(labId) {
    sidebar.innerHTML = "";
    const selectedLab = labData[labId];

    selectedLab.forEach((item) => {
      const button = document.createElement("button");
      button.textContent = item.title;
      button.addEventListener("click", () => {
        output.innerHTML = item.content;
      });
      sidebar.appendChild(button);
    });
  }

  labButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const labId = e.target.id;
      updateSidebar(labId);
      output.textContent = `Інформація про Лабораторну роботу №${labId.charAt(
        labId.length - 1
      )}`;
    });
  });
});
