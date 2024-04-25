const url = "https://jsonplaceholder.typicode.com/posts";
//create a new instace
const xhr = new XMLHttpRequest();
//configure
xhr.open("GET", url, true);
//atach an evenet listner
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === "sucess") {
    console.log(JSON.parse);
  }
  //handle error
  if (xhr.readyState === 4 && xhr.status != 200) {
    console.log(xhr.statusText);
  }
};
// xhr.send();
const fetchdata = () => {
  fetch(url).then((response) => {
    console.log(
      response.json().then((data) => {
        console.log(data);
      })
    );
    return response.json();
  });
};
fetchdata();
