/// <reference types="../@types/jquery" />


//?======================================================Global====================================================>
//Global varibales
const closeNavBtn = document.getElementById('closeNav')
const links = document.querySelectorAll('.links-container a')
const inputs = document.querySelectorAll('#validationContainer input')

//*=====================================================When Start================================================>
//main loading page
$(document).ready(()=>{
  $('.main-loader').fadeOut(500)
  $('body').removeClass('overflow-hidden')
  
})
// first section of random meals
getAllMeals()

//!=====================================================Events======================================================>

//btn of  close and open side nav bar
$('#closeNav').click(function(){
  if ($(this).hasClass('fa-bars')) {
    $(this).removeClass('fa-bars')
    $(this).addClass('fa-xmark')
    $('aside').animate({
      'left' : '0'
    } , 500)
    $('.links-container a').animate({
      'marginTop' : '0%'
    } , 750)
  }else{
    $(this).addClass('fa-bars')
    $(this).removeClass('fa-xmark')
    if ($('aside').innerWidth() == $('body').innerWidth() ) {
    $('aside').animate({
      'left' : '-75%'
      } , 500)
    }else{
      $('aside').animate({
        'left' : '-22.5%'
        } , 500)
  }
    $('.links-container a').animate({
      'marginTop' : '150%'
    } , 1000)
  }
})
// btn of open seacrh part
links[0].addEventListener('click' , (e)=>{
  e.preventDefault()
  $('main').addClass('d-none')
  $('.serach').removeClass('d-none')
  if ($('body').innerWidth() < 600) {
    $('aside').animate({
      'left' : '-75%'
      } , 500)
    }else{
      $('aside').animate({
        'left' : '-22.5%'
        } , 500)
    }
    $('#closeNav').addClass('fa-bars')
    $('#closeNav').removeClass('fa-xmark')
    $('.links-container a').animate({
      'marginTop' : '150%'
    } , 1000)
})
//evnt of search input by name 
document.getElementById('byName').addEventListener('keyup' , function(){
  console.log(this.value);
  let searchInputValue = this.value;
  serachByName(searchInputValue)
})
//event of search input by first letter
document.getElementById('byFirstLetter').addEventListener('keyup' , function(){
  let searchInputValue = this.value;
  if (searchInputValue.length == 1) {
    serachByFirstLetter(searchInputValue)
  }
})
//btn of open category section
links[1].addEventListener('click' , (e)=>{
  e.preventDefault()
  $('main').removeClass('d-none')
  $('#mealDetails').addClass('d-none')
  $('#validationContainer').addClass('d-none')
  $('#mealContainer').removeClass('d-none')
  $('.serach').addClass('d-none')
  if ($('body').innerWidth() < 600 ) {  //due  to media query 
    $('aside').animate({
      'left' : '-75%'
    } , 500)
  }else{
    $('aside').animate({
      'left' : '-22.5%'
    } , 500)
  }
  $('#closeNav').addClass('fa-bars')
  $('#closeNav').removeClass('fa-xmark')
  $('.links-container a').animate({
    'marginTop' : '150%'
  } , 1000)
  // console.log('cc');
  catrgory()
})
//btn of area open area section
links[2].addEventListener('click' , (e)=>{
  e.preventDefault()
  $('main').removeClass('d-none')
  $('#mealDetails').addClass('d-none')
  $('#validationContainer').addClass('d-none')
  $('#mealContainer').removeClass('d-none')
  $('.serach').addClass('d-none')
  if ($('body').innerWidth() < 600 ) {
    $('aside').animate({
      'left' : '-75%'
    } , 500)
  }else{
    $('aside').animate({
      'left' : '-22.5%'
    } , 500)
  }
  $('#closeNav').addClass('fa-bars')
  $('#closeNav').removeClass('fa-xmark')
  $('.links-container a').animate({
    'marginTop' : '150%'
  } , 1000)
  Area()
})
//btn of open Ingredients section
links[3].addEventListener('click' , (e)=>{
  e.preventDefault()
  $('main').removeClass('d-none')
  $('#mealDetails').addClass('d-none')
  $('#validationContainer').addClass('d-none')
  $('#mealContainer').removeClass('d-none')
  $('.serach').addClass('d-none')
  if ($('body').innerWidth() < 600) {
    $('aside').animate({
      'left' : '-75%'
    } , 500)
  }else{
    $('aside').animate({
      'left' : '-22.5%'
    } , 500)
  }
  $('#closeNav').addClass('fa-bars')
  $('#closeNav').removeClass('fa-xmark')
  $('.links-container a').animate({
    'marginTop' : '150%'
  } , 1000)
  Ingredients()    
})
//btn of open validation section
links[4].addEventListener('click' , (e)=>{
  e.preventDefault()
  $('main').removeClass('d-none')
  $('#mealDetails').addClass('d-none')
  $('#validationContainer').removeClass('d-none')
  $('#mealContainer').addClass('d-none')
  $('.serach').addClass('d-none')
  if ($('body').innerWidth() < 600 ) {
    $('aside').animate({
      'left' : '-75%'
    } , 500)
  }else{
    $('aside').animate({
      'left' : '-22.5%'
    } , 500)
  }
  $('#closeNav').addClass('fa-bars')
  $('#closeNav').removeClass('fa-xmark')
  $('.links-container a').animate({
    'marginTop' : '150%'
  } , 1000)
})
//event of stop default of form 
document.forms[0].addEventListener('submit' , (e)=>{
  e.preventDefault()
})
//event of keyup on form
document.forms[0].addEventListener('keyup' , (e)=>{
  if (validateName() && validateEmail() && validatePhone() && validateAge() && validatePasswoed() && validateRepassword() )  {
    $('#sunmitBtn').removeAttr('disabled')
    $('#sunmitBtn').addClass('btn-success')
    $('#sunmitBtn').removeClass('btn-outline-danger')
  }else{
    
    $('#sunmitBtn').attr('disabled' , 'true')
    $('#sunmitBtn').removeClass('btn-success')
    $('#sunmitBtn').addClass('btn-outline-danger')
  }
})
//event of show password
document.querySelectorAll('.pass-input i').forEach(ele => {
  ele.addEventListener('click' , function(){
    if ($(this).next().val().length > 0 && $(this).hasClass('fa-eye') ) {
      $(this).removeClass('fa-eye')
      $(this).addClass('fa-eye-slash')
      $(this).next().attr('type' , 'text')
      // console.log('text');
    } else {
      $(this).addClass('fa-eye')
      $(this).removeClass('fa-eye-slash')
      $(this).next().attr('type' , 'password')
      // console.log('pass');

    }
  })
})
//event off media query of side bar
window.addEventListener('resize' , ()=>{
  if ($('body').innerWidth() < 600) {
    $('aside').css({
      'left' : '-75%'
      })
    $('#closeNav').addClass('fa-bars')
    $('#closeNav').removeClass('fa-xmark')
  }else{
    $('aside').css({
      'left' : '-22.5%'
    })
    $('#closeNav').addClass('fa-bars')
    $('#closeNav').removeClass('fa-xmark')
  }
})

//?==========================================================functions=================================================>

//function of get random meals 
async function getAllMeals() {
  $('.loader').removeClass('d-none')
  const api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  const res = await api.json()
  $('.loader').fadeOut(500)
  console.log(res.meals);
  dislplayAllMeals(res.meals)
}
//function of display meals
function dislplayAllMeals(res){
  let cartoona = '';
  for (let index = 0; index < res.length; index++) {
    cartoona+=
    `
    <div class="col-md-3">
      <div onclick='passId(${res[index].idMeal})' class=" rounded-2 meal-container position-relative overflow-hidden">
        <img src='${res[index].strMealThumb}' class='w-100 h-100'>
        <div class="layer position-absolute w-100 h-100  vstack">
          <h3 class="my-auto fw-bold text-capitalize">${res[index].strMeal}</h3>
        </div>
      </div>
    </div>
    `
  }
  $('#mealContainer').html(cartoona)
} 
//function of get data details of  meal
async function passId(id){
  $(window).scrollTop(0)
  $('.loader').fadeIn(0)
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  const res = await api.json()
  $('.loader').fadeOut(500)
  $('#mealContainer').addClass('d-none')
  $('#mealDetails').removeClass('d-none')
  let recIntIndex = []
  let recInt =[]
  for (let index = 1; index <= 20; index++) {
    recIntIndex.push('strIngredient' + `${index}`)
  }
  for (let index = 0; index < recIntIndex.length; index++) {
    // console.log(recIntIndex[index]);
    if (res.meals[0][recIntIndex[index]] != '' && res.meals[0][recIntIndex[index]] != null && res.meals[0][recIntIndex[index]] != ' ' ) {
      recInt.push(res.meals[0][recIntIndex[index]])
    }
    console.log(res.meals[0][recIntIndex[index]]);
  }
  let recMeaIndex = []
  let recMea =[]
  for (let index = 1; index <= 20; index++) {
    recMeaIndex.push('strMeasure' + `${index}`)
  }
  for (let index = 0; index < recMeaIndex.length; index++) {
    if (res.meals[0][recMeaIndex[index]] != ' ' && res.meals[0][recMeaIndex[index]] != '' && res.meals[0][recMeaIndex[index]] != null) {
      recMea.push(res.meals[0][recMeaIndex[index]])
    }
  }
  let tags = res.meals[0].strTags
  let finalTags = [];
  if (tags != null) {
    finalTags = res.meals[0].strTags.split(',')
  }else{
    finalTags = ['No Tags For This Meal']
  }
  // console.log(tags);
  dislplaySingleMeal(res.meals[0])
  displayInt(recInt , recMea )
  displayTag(finalTags)
  $('.serach').addClass('d-none')
  $('main').removeClass('d-none')
}
//function of display details of meal
function dislplaySingleMeal(res){
  let cartoona =
    `
    <div class="col-md-4">
      <div class=" rounded-2 bg-danger position-relative overflow-hidden">
        <img src="${res.strMealThumb}" class="w-100 h-100" alt="">
      </div>
      <h2 class="text-white ms-1 meal-caption">
        ${res.strMeal}
      </h2>
    </div>
    <div class="col-md-8">
      <div class="text-white Instructions-caption">
        <h1>Instructions:</h1>
        <p>
        ${res.strInstructions}
        </p>
        <h2>Area : <span class="h3">${res.strArea}</span></h2>
        <h2>Category  : <span class="h3">${res.strCategory}</span></h2>
        <h3 class="mt-1">Recipes   :</h3>
        <div class="mt-3 container">
          <div class="row gy-3 gx-1" id='recInt'>
            <!--recipes intgridents-->
          </div>
        </div>
        <h3 class="mt-3">Tags    :</h3>
        <div class="mt-3 container">
          <div class="row gy-3" id='tagContainer'>
          <!--recipes Tags-->
          </div>
        </div>
        <div class="mt-5 footer-btn">
          <a href="${res.strSource}" target='_blank' class="btn btn-success">Source</a>
          <a href="${res.strYoutube}" target='_blank' class="btn btn-danger">Youtube</a>
        </div>
      </div>
    </div>
    `
    $('#mealDetails').html(cartoona)
}
//function of display Intgreident of meal
function displayInt(arr1 , arr2){
  let cartoona= ''
  for (let index = 0; index < arr1.length; index++) {
    cartoona+=
    `
    <div class="col-md-4">
      <span class="alert alert-info p-1" role="alert">
        ${arr2[index]} ${arr1[index]}
      </span>
    </div>
    `
    
  }
  document.getElementById('recInt').innerHTML = cartoona;
}
//function display Tags of meal
function displayTag(arr){
  let cartoona = '';
  for (let index = 0; index < arr.length; index++) {
    cartoona +=
    `
    <div class="col-md-4">
      <span class="alert alert-danger p-1" role="alert">
        ${arr[index]}
      </span>
    </div>
    `
  }
  $('#tagContainer').html(cartoona)
}
//function get data when search
async function serachByName(meal){
  $('.search-loader').removeClass('d-none')
  $('.search-loader').fadeIn(500)
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
  const res = await api.json()
  console.log(res);
  displaySerachByName(res.meals)
  $('.search-loader').fadeOut(500)
}
//function of display when search 
function displaySerachByName(res){
  let cartoona = ''
  for (let index = 0; index < res.length; index++) {
    cartoona +=
    `
    <div class="col-md-3">
      <div  onclick='passId(${res[index].idMeal})' class=" rounded-2 meal-container position-relative overflow-hidden">
        <img src='${res[index].strMealThumb}' class='w-100 h-100'>
        <div class="layer position-absolute w-100 h-100  vstack " >
          <h3 class="my-auto fw-bold text-capitalize">${res[index].strMeal}</h3>
        </div>
      </div>
    </div>
    `
  }
  $('#serachContainer').html(cartoona)
}
//function get data when search with first char.
async function serachByFirstLetter(char){
  $('.loader-search').fadeIn(500)
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`)
  const res = await api.json()
  console.log(res);

  displaySerachByFirstLetter(res.meals)
  $('.loader-search').fadeOut(500)

}
//function of display when search with first char.
function displaySerachByFirstLetter(res){
  let cartoona = ''
  for (let index = 0; index < res.length; index++) {
    cartoona +=
    `
    <div class="col-md-3">
        <div onclick='passId(${res[index].idMeal})' class=" rounded-2 meal-container position-relative overflow-hidden">
          <img src='${res[index].strMealThumb}' class='w-100 h-100'>
          <div  class="layer position-absolute w-100 h-100  vstack ">
            <h3 class="my-auto fw-bold text-capitalize">${res[index].strMeal}</h3>
          </div>
        </div>
      </div>
    `
  }
  $('#serachContainer').html(cartoona)
}
//function of get data of categories 
async function catrgory(){
  $(window).scrollTop(0)
  $('.loader').fadeIn(0)
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  const res = await api.json()
  console.log(res.categories);
  displayCatrgory(res.categories)
  $('.loader').fadeOut(500)
}
//function of display data of categories 
function displayCatrgory(res){
  let cartoona = ''
  for (let index = 0; index < res.length; index++) {
    cartoona +=
    `
    <div class="col-md-3">
      <div onclick='passCategoryStr("${res[index].strCategory }")'  class=" rounded-2 meal-container position-relative overflow-hidden">
        <img src='${res[index].strCategoryThumb}' class='w-100 h-100'>
        <div class="layer position-absolute w-100 h-100  vstack ">
          <h3 class="my-auto fw-bold text-capitalize text-center">${res[index].strCategory}</h3>
          <p class="my-auto text-center text-capitalize">${res[index].strCategoryDescription.split(' ').slice(0,20).join(' ')}</p>
        </div>
      </div>
    </div>
    `
  }
  $('#mealContainer').html(cartoona)
}
//function of display meal of categories 
async function passCategoryStr(cate){
  console.log(cate);
  $(window).scrollTop(0)
  $('.loader').fadeIn(0)
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`)
  const res = await api.json()
  console.log(res.meals.slice(0,20));
  dislplayAllMeals(res.meals.slice(0,20))
  $('.loader').fadeOut(500)
}
//function of get data of area 
async function Area(){
  $(window).scrollTop(0)
  $('.loader').fadeIn(0)
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
  const res = await api.json()
  console.log(res.meals);
  displayArea(res.meals)
  $('.loader').fadeOut(500)
}
//function of display data of area 
function displayArea(res){
  let cartoona = ''
  for (let index = 0; index < res.length; index++) {
    cartoona +=
    `
    <div class="col-md-3">
        <div class=" rounded-2 meal-container d-flex flex-column align-items-center justify-content-center overflow-hidden text-white"onclick='passAreaStr("${res[index].strArea }")'>
          <i class="fa-solid fa-house-laptop fa-4x d-block"></i>
          <h3 class="mt-2 fw-bold text-capitalize text-center">${res[index].strArea}</h3>
        </div>
      </div>
    `
  }
  $('#mealContainer').html(cartoona)
}
//function of display meal of area 
async function passAreaStr(area){
  $(window).scrollTop(0)
  console.log(area);
  $('.loader').fadeIn(0)
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
  const res = await api.json()
  console.log(res.meals);
  dislplayAllMeals(res.meals)
  $('.loader').fadeOut(500)
}
//function of get data of Ingredients 
async function Ingredients(){
  $(window).scrollTop(0)
  $('.loader').fadeIn(0)
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  const res = await api.json()
  console.log(res.meals.slice(0,20));
  displayIngredients(res.meals.slice(0,20))
  $('.loader').fadeOut(500)
}
//function of display data of Ingredients
function displayIngredients(res){
  let cartoona = ''
  for (let index = 0; index < res.length; index++) {
    cartoona +=
    `
    <div class="col-md-3">
        <div class=" rounded-2 meal-container d-flex flex-column align-items-center justify-content-center overflow-hidden text-white"onclick='passIngredientsStr("${res[index].strIngredient }")'>
          <i class="fa-solid fa-drumstick-bite fa-4x"></i>
          <h3 class="mt-2 fw-bold text-capitalize text-center">${res[index].strIngredient}</h3>
          <p class="mt-2 fw-bold text-capitalize text-center">${res[index].strDescription.split(' ').slice(0,20).join(' ')}</p>
        </div>
      </div>
    `
  }
  $('#mealContainer').html(cartoona)
}
//function of display meal of area 
async function passIngredientsStr(Ingredients){
  console.log(Ingredients);
  $(window).scrollTop(0)
  $('.loader').fadeIn(0)
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredients}`)
  const res = await api.json()
  console.log(res.meals);
  dislplayAllMeals(res.meals)
  $('.loader').fadeOut(500)
}

//*<========================================================Validation=====================================================>//

function validateName(){
  const regex = /^[A-Za-z][A-z a-z]*$/

  if (regex.test(inputs[0].value)) {
    $(inputs[0]).addClass('is-valid')
    $(inputs[0]).removeClass('is-invalid')
    return true
  }else{
    $(inputs[0]).addClass('is-invalid')
    $(inputs[0]).removeClass('is-valid')
    return false
  }
}
function validateEmail(){
  const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

  if (regex.test(inputs[1].value)) {
    $(inputs[1]).addClass('is-valid')
    $(inputs[1]).removeClass('is-invalid')
    return true
  }else{
    $(inputs[1]).addClass('is-invalid')
    $(inputs[1]).removeClass('is-valid')
    return false
  }
}
function validatePhone(){
  const regex = /^(02)?(01)[0125][0-9]{8}$/

  if (regex.test(inputs[2].value)) {
    $(inputs[2]).addClass('is-valid')
    $(inputs[2]).removeClass('is-invalid')
    return true
  }else{
    $(inputs[2]).addClass('is-invalid')
    $(inputs[2]).removeClass('is-valid')
    return false
  }
}
function validateAge(){
  const regex = /^([1-7][0-9]|80)$/

  if (regex.test(inputs[3].value)) {
    $(inputs[3]).addClass('is-valid')
    $(inputs[3]).removeClass('is-invalid')
    return true
  }else{
    $(inputs[3]).addClass('is-invalid')
    $(inputs[3]).removeClass('is-valid')
    return false
  }
}
function validatePasswoed(){
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  if (regex.test(inputs[4].value)) {
    $(inputs[4]).addClass('is-valid')
    $(inputs[4]).removeClass('is-invalid')
    return true
  }else{
    $(inputs[4]).addClass('is-invalid')
    $(inputs[4]).removeClass('is-valid')
    return false
  }
}
function validateRepassword(){
  const checkPassword = (inputs[4].value == inputs[5].value) 
  if (checkPassword) {
    $(inputs[5]).addClass('is-valid')
    $(inputs[5]).removeClass('is-invalid')
    return true
  }else{
    $(inputs[5]).addClass('is-invalid')
    $(inputs[5]).removeClass('is-valid')
    return false
  }
}

