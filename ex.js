fetch("https://dummyjson.com/products/1",{
    method: "GET"
}
)

.then(function(response){
    console.log(response.status);
    return response.json();

})

.then(function(data){
    console.log(data);
    // console.log(data.reviews);

})