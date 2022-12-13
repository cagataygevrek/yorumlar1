import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

// Review adında arrow function ile functional component oluşturulmuş.
const Review = () => {
  // uygulama açıldığında sayfada görülmesi istenilen kişi useState kullanılarak başlangıç değeri 0 olarak atanmış.
  const [index, setIndex] = useState(0);

  //console.log(index);

  // data.js dosyasındaki veriler, people (import edilen) adı ile ifade edilip index'e aktarılmış.
  const { name, job, image, text } = people[index];

  // console.log(people);

  // checkNumber adında component oluşturulmuş. Number parametresi verilmiş.
  // number parametresi, veri dosyasındaki (data.js) kişi sayısından büyükse 1 çıkarılıp render edilmiş.
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    // number parametresi,  0'dan küçükse kişi sayısından 1 çıkarılıp render edilmiş.
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  // nextPerson adında component oluşturulmuş.
  // indexteki sağdaki butona  ">" tıklayınca aktif indexe 1 ekleyerek yeni kişi verisi setIndex ile aktarılmış.
  // Bunu setindex'in parametresini index ile belirleyip oluşturduğu newIndex değişkenine 1 ekleyerek sağlamış.
  const nextPerson = () => {
    setIndex((index) => {
      // newIndex adında değişken oluşturulup sonraki sayfadaki verileri almak için index'e "+1" eklenmiş.
      let newIndex = index + 1;

      // (checkNumber component'ına yeni sayfa(newIndex) render edilmiş.)
      return checkNumber(newIndex);
    });
  };

  // prevPerson adında component oluşturulmuş.
  // indexteki soldaki butona "<" tıklayınca indexten 1 çıkartarak sayfaya yeni veri setIndex ile aktarılmış.
  // Bunu setindex'in parametresini index ile belirleyip oluşturduğu newIndex değişkeninden 1 çıkartarak sağlamış.
  const prevPerson = () => {
    setIndex((index) => {
      // newIndex adında değişken oluşturulup önceki sayfadaki veri almak için index'ten "-1" çıkarılmış.
      let newIndex = index - 1;

      // (checkNumber component'ına yeni sayfa (newIndex) render edilmiş.)
      return checkNumber(newIndex);
    });
  };

  // randomPerson adında bir functional component oluşturulmuş.
  // randomNumber değişkeninde math.round işleviyle obje içerisindeki veri uzunluğu kadar rastgele sayı üretilip (4) setIindex'e aktarılarak ekrandaki kişi güncellenmiş.
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
