import * as jQuery from 'jquery';
import { fabrics, cities, clothingTypes, data } from './data';

(function ($) {

  let me = {
    vrstaTkanineID: "#vrstaTkanine",
    sadrzajTkanineID: "#sadrzajTkanine",
    vrstaOdeceID: "#vrstaOdece",
    lokacijaID: "#lokacija",
    proizvodiID: "#product-list",
    submitButtonID: "#submit",
    formID: "#laundry-form",
    errorID: "#error"
  }

  me.templateFactory = (url, name, distributor, price) => {
    return `<div class="product p-2 bg-white rounded d-flex flex-column flex-wrap align-items-center">
        <div class="image-wrapper d-flex justify-content-center pb-2">
          <img src="${url}"
                alt="${name}">
        </div>
        <p>${name}</p>
        <p>${distributor}</p>
        <p class="h4">Cena: <span>${price}</span></p>
      </div>`
  }

  me.renderProducts = (data) => {
    data.forEach(
      item => {
        // console.log('rendering product');

        $(me.proizvodiID).append(me.templateFactory(
          item.imageURL,
          item.name,
          item.distributor,
          item.price
        ))
      }
    )
  }

  me.setListeners = () => {
    $(me.submitButtonID).on('click', (event) => {
      const form = $(me.formID);
      form.submit(me.handleSubmit(form));
    });
  }

  me.handleSubmit = (form) => {
    // console.log('form submitted');
    let isError = false;
    let resultList = data;
    // clean the data so far
    $(me.proizvodiID).empty();

    const vrstaTkanine = form.find(me.vrstaTkanineID).val().toLowerCase();

    if (fabrics.includes(vrstaTkanine)) {
      // console.log(`there is vrstaTkanine: ${vrstaTkanine}`);
      resultList = resultList.filter(item => item.fabric === vrstaTkanine);
    } else {
      isError = true;
      // console.log('error with vrstaTkanine');
      me.showTimedError("Ne postoji takva vrsta tkanine u našoj bazi, pokušajte sa nekom drugom.");
      return false;
    }

    const sadržajTkanine = +form.find(me.sadrzajTkanineID).val().toLowerCase();

    if (!isError) {
      // console.log(`there is sadržajTkanine: ${sadržajTkanine}`);
      resultList = resultList.filter(item => item.fabricPercent <= sadržajTkanine);
    } else {
      isError = true;
      // console.log('error with sadržajTkanine');
      return false;
    }

    const vrstaOdece = form.find(me.vrstaOdeceID).val().toLowerCase();

    if (clothingTypes.includes(vrstaOdece) && !isError) {
      // console.log(`there is vrstaOdece: ${vrstaOdece}`);
      resultList = resultList.filter(item => item.clothingType === vrstaOdece);
    } else if (vrstaOdece === '') {

    } else {
      isError = true;
      // console.log('error with vrstaOdece');
      me.showTimedError("Ne postoji takva vrsta odeće u našoj bazi, pokušajte sa nekom drugom.");
      return false;
    }

    let lokacija = form.find(me.lokacijaID).val().toLowerCase();

    if (cities.includes(lokacija) && !isError) {
      // console.log(`there is lokacija: ${lokacija}`);
      resultList = resultList.filter(item => item.city === lokacija);
    } else {
      isError = true;
      // console.log('error with lokacija');
      me.showTimedError("Ne postoje podaci za vaš grad u našoj bazi, pokušajte sa nekim drugom gradom.");
      return false;
    }

    if (isError) {
      me.showTimedError("Došlo je do greške, pokušajte ponovo.");
      // me.clearForm(form);
    }

    if (resultList.length === 0) {
      me.showTimedError("Ne postoji prašak u našoj bazi koji odgovara datim parametrima. Pokušajte ponovo.");
      // me.clearForm(form);
    }

    me.renderProducts(resultList);

    return false;
  }

  me.clearForm = (form) => {
    form.find('input').each(
      (index, input) => {
        $(input).val('');
      }
    )
  }

  me.showTimedError = (errorMessage, time = 5000) => {
    const error = $(me.errorID)[0];
    error.textContent = errorMessage;

    setTimeout(() => {
      error.textContent = null;
    }, time);
  }

  $(document).ready(function () {
    me.setListeners();
  });

})(jQuery.noConflict());